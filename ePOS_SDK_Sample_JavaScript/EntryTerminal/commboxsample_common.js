function sortHistoryList(historyList, desc){
	historyList.sort(
		function(a, b){
			var ret = 0;
			if(a.message.date < b.message.date)	ret = -1;
			if(a.message.date > b.message.date)	ret = 1;
			// Invert the data when descending sort.
			if(desc == true)	ret *= (-1);
			return ret;
		}
	);
}

function nowdate(){
	var date = new Date();
	return date.getTime();
}

function strdate(millisec){
	var str = '';
	var date = new Date(millisec);
	str += ('0' + (date.getMonth() + 1)).slice(-2) + '/';
	str += ('0' + date.getDate()).slice(-2)        + '/';
	str += date.getFullYear()                      + ' ';
	str += ('0' + date.getHours()).slice(-2)       + ':';
	str += ('0' + date.getMinutes()).slice(-2)     + ':';
	str += ('0' + date.getSeconds()).slice(-2);
	return str;
}
