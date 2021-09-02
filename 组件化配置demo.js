export const basicFields = [
  {
    type: 'input',
    name:'单行输入',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: '',
      searchApi:'',//
      param_name: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
      disabled: false,
      vifShow:'',
      adjust:false
    }
  },
  {
    type: 'textarea',
    name:'多行输入',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: '',
      vifShow:'',
      adjust:false
    }
  },
  {
    type: 'radio',
    name:'单选框组',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      inline: false,
      defaultValue: '',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      required: false,
      props: {
        value: 'value',
        label: 'label'
      },
      disabled: false,
      remote: false,
      remoteOptions: [],
      remoteApi: '',
      vifShow:'',
      adjust:false
    }
  },
  {
    type: 'checkbox',
    name:'多选框组',
    options: {
      show:true,
      inline: false,
      edit_again:true,
      is_bpm:false,
      defaultValue: [],
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      required: false,
      props: {
        value: 'value',
        label: 'label'
      },
      disabled: false,
      remote: false,
      remoteOptions: [],
      remoteApi: '',
      vifShow:'',
      adjust:false
    }
  },
  {
    type: 'select',
    name:'下拉选择框',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: '',
      multiple: false,
      disabled: false,
      placeholder: '',
      required: false,
      optionsTemp:[],
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      props: {
        value: 'value',
        label: 'label'
      },
      remote: false,
      remoteOptions: [],
      remoteApi: '',
      vifShow:'',
      adjust:false,
      optionsCtr:'',//只对静态的options关联控制
      sync_down_platform:false//选项同步给业务系统
    }
  },
  {
    type: 'time',
    name:'时间选择器',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: null,
      readonly: false,
      disabled: false,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      vifShow:''
    }
  },
  {
    type: 'date',
    name:'日期选择器',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: null,
      readonly: false,
      disabled: false,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'DatePicker',
      format: 'YYYY-MM-DD',
      required: false,
      vifShow:''
    }
  },
  {
    type: 'text',
    name:'文字描述',
    options: {
      show:true,
      defaultValue: 'This is a text',
      customStyle: '',
      vifShow:''
    }
  },
  {
    type: 'upload',
    name:'文件上传',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: [],
      type: 'File',
      disabled: false,
      multiple: false,
      vifShow:'',
      adjust:false,
      file_name_has: '',
      suffix: '.doc,.xlsx,.pdf'
    }
  },
  {
    type: 'cascader',
    name:'级联选择器',
    options: {
      show:true,
      edit_again:true,
      defaultValue: [],
      placeholder: '',
      disabled: false,
      remoteOptions:[],
      props: {
        value: 'id',
        label: 'value_name',
        children: 'children'
      },
      dictCode: '',
      vifShow:'',
      adjust:false
    }
  },
  {
    type: 'treeSelect',
    name:'树选择',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: [],
      disabled: false,
      placeholder:'',
      remoteOptions:[],
      props: {
        key:'id',
        value: 'id',
        title: 'value_name',
        children: 'children'
      },
      dictCode: '',
      vifShow:''
    }
  },
  {
    type: 'comboGrid',
    name:'下拉表格',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: '',
      disabled: false,
      required: false,
      placeholder:'',
      valueField:'value',
      textField:'name,phone',
      columns:[
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '联系电话',
          dataIndex: 'phone',
        }
      ],
      options:[
        {value:1,name:'小米',phone:'13688881111'}
      ],
      vifShow:'',
      sync_down_platform:false//选项同步给业务系统
    }
  },
  {
    type: 'table',
    name:'表格',
    options: {
      show:true,
      edit_again:true,
      is_bpm:false,
      defaultValue: [],
      adjust:false,
      columns:[
        {
          title: '姓名',
          dataIndex: 'name',
          type:'Input'
        },
        /*{
          title: '日期',
          dataIndex: 's_date',
          type:'DatePicker'
        },
        {
          title: '上传',
          dataIndex: 'update_f',
          type:'File'
        },*/
      ],
    }
  },
  {
    type: 'group',
    name:'分组',
    options: {}
  },
]

export const advanceComponents = [

]
