<template>
  <div>


    <div>AttrListeners</div>

    <Child1 data-id="12" :col="{test:123}" :id="{id:12}" :item="item" @onClick="onClick"/>

  </div>
</template>

<script>
// @ is an alias to /src

import Child1 from "@/components/Child1"
export default {
  name: 'AttrListeners',
  inheritAttrs:false,
  data(){
    return{
      item:{name:'yao'}
    }
  },
  components: {
    Child1
  },
  methods:{
    onClick(value){
        console.log(value)
        this.item={
          ...this.item,
          name:'tman'
        }
        console.log('触发了onClick事件')
    }
  }
}
</script>
