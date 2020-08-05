function CustomerDisplayDevice(eposdevice)
{
	this.commbox = null;
	this.commBoxManager = eposdevice.getCommBoxManager();
	if ( this.commBoxManager == null ){
		throw new Error('The eposdev connection is not completed.');
	}
	
	this.currencyMark = "";
	this.currencyMarkPosition = "front";
	this.isUseSeparator = false;
	this.separator = "";
	
	this.signage = null;
	this.greeting = null;
	this.upper_string_column = null;
	this.middle_string_column = null;
	this.lower_string_column = null;
	this.upper_money_column = null;
	this.middle_money_column = null;
	this.lower_money_column = null;
	
	this.signageList = null;
	this.isSignageMaximaized = false;
	this.signageShowTimer = null;
	this.curSignageIndex = 0;
}

CustomerDisplayDevice.prototype = {
	sendActionReply : function(value)
	{
		var message = {response : "actionReply", params : {value : value}};
		this.commbox.send(message, null, null);
	},
	
	registerArea : function(area)
	{
		if ( 'signage' in area )				this.signage				= document.getElementById(area.signage);
		if ( 'greeting' in area )				this.greeting				= document.getElementById(area.greeting);
		if ( 'upper_string_column' in area )	this.upper_string_column	= document.getElementById(area.upper_string_column);
		if ( 'middle_string_column' in area )	this.middle_string_column	= document.getElementById(area.middle_string_column);
		if ( 'lower_string_column' in area )	this.lower_string_column	= document.getElementById(area.lower_string_column);
		if ( 'upper_money_column' in area )		this.upper_money_column		= document.getElementById(area.upper_money_column);
		if ( 'middle_money_column' in area )	this.middle_money_column	= document.getElementById(area.middle_money_column);
		if ( 'lower_money_column' in area )		this.lower_money_column		= document.getElementById(area.lower_money_column);
		this.open();
	},
	
	open : function()
	{
		var self = this;
		this.commBoxManager.openCommBox("CustomerDisplay", null,
			function(commbox, code){
				if ( code == "OK" ){
					self.commbox = commbox;
					self.commbox.onreceive = function(data){
						var message = data.message;
						if ( !('request' in message) || !('params' in message) ){
							return;
						}
						switch( message.request ){
							case "showPrice" :
							case "showAmount" :
							case "showTotal" :
							case "showCash" :
							case "showChange" :
							case "showGreeting" :
								self.normalizeSignage();		// not to break
							case "hideNoticeWindow" :
							case "displayNoticeWindow" :
							case "showSignage" :
							case "registerSignage" :
							case "showRegisteredSignage" :
							case "maximaizeSignage" :
								eval("self." + message.request + "(message.params)");
								break;
							default :
								break;
						}
					};
				} else {
					setTimeout(self.open, 5000);
				}
			});
	},
	
	showPrice : function(params)
	{
		this.upper_string_column.innerHTML = params.description;
		this.upper_money_column.innerHTML = this.format(params.price);
	},
	
	showAmount : function(params)
	{
		this.middle_string_column.innerHTML = params.caption;
		this.middle_money_column.innerHTML = this.format(params.amount);
	},
	
	showTotal : function(params)
	{
		this.upper_string_column.innerHTML = params.caption;
		this.upper_money_column.innerHTML = this.format(params.total);
	},
	
	showCash : function(params)
	{
		this.middle_string_column.innerHTML = params.caption;
		this.middle_money_column.innerHTML = this.format(params.cash);
	},
	
	showChange : function(params)
	{
		this.lower_string_column.innerHTML = params.caption;
		if ( params.caption == "" ){
			this.lower_money_column.innerHTML = "";
		} else {
			this.lower_money_column.innerHTML = this.format(params.change);
		}
	},
	
	showGreeting : function(params)
	{
		this.greeting.innerHTML = params.caption;
	},
	
	hideNoticeWindow : function(params)
	{
		var element = document.getElementById(params.id);
		if ( element != null ){
			element.style.visibility = "hidden";
			element.style.zIndex = "auto";
		}
	},
	
	displayNoticeWindow : function(params)
	{
		var element = document.getElementById(params.id);
		if ( element != null ){
			element.style.visibility = "visible";
			element.style.zIndex = 2000;
		}
	},
	
	showSignage : function(params)
	{
		var style = null;
		if ( params.layout == "BASED_ON_HEIGHT"){
			style = " height=100% border=0";
		} else {
			style = " width=100% border=0";
		}
		if ( params.type == "video" ){
			this.signage.innerHTML = '<' + params.type + style + ' src="' + params.uri + '" autoplay loop/>';
		} else {
			this.signage.innerHTML = '<' + params.type + ' src="' + params.uri + '" ' + style + '/>';
		}
	},
	
	registerSignage : function(params)
	{
		this.signageList = params;
		this.curSignageIndex = 0;
		clearTimeout(this.signageShowTimer);
		this.signageShowTimer = null;
	},
	
	showRegisteredSignage : function()
	{
		if ( (this.signageList == null) || (this.signageList.length == 0) ||
			 (this.signageShowTimer != null) ){
			return;
		}
		
		var self = this;
		function innerShowSignage(){
			self.showSignage(self.signageList[self.curSignageIndex]);
			self.signageShowTimer = setTimeout(
				innerShowSignage,
				1000 * self.signageList[self.curSignageIndex].displaytime);
			self.curSignageIndex++;
			if ( self.signageList.length == self.curSignageIndex ){
				self.curSignageIndex = 0;
			}
		}
		innerShowSignage();
	},
	
	maximaizeSignage : function()
	{
		if ( this.signage != null ){
			this.signage.style.width = "100%";
			this.signage.style.height = "100%";
			this.signage.style.zIndex = 1000;
			this.isSignageMaximaized = true;
		}
	},
	
	normalizeSignage : function()
	{
		if ( this.isSignageMaximaized ){
			this.signage.style.width = "";
			this.signage.style.height = "";
			this.signage.style.zIndex = "auto";
			this.isSignageMaximaized = false;
		}
	},
	
	format : function(amount)
	{
		var fmtdAmount = String(amount);
		if ( this.isUseSeparator ){
			while(fmtdAmount != (fmtdAmount = fmtdAmount.replace(/^(-?\d+)(\d{3})/, "$1" + this.separator + "$2")));
		}
		
		if ( this.currencyMarkPosition == "front" ){
			fmtdAmount = this.currencyMark + fmtdAmount;
		} else if ( this.currencyMarkPosition == "tail" ){
			fmtdAmount = fmtdAmount + this.currencyMark;
		}
		return fmtdAmount;
	}
};
