<template>
  <div class="parent">
    <div><!--{{$store.state.showFooter}}--> {{isShow}}</div>
    <div><!--{{$store.state.changableNum}}-->{{num}}</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div @click="show">show</div>
    <div @click='hide'>hide</div>
    <div @click='mutations'>mutations</div>
    <div @click='addList'>collecttion</div>
    <div>{{JSON.stringify(arrLists)}}</div>
    <div v-for="(val,index) in arrLists" :key="index">
      <div>{{val.id}},{{val.name}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex';
  export default {

    data () {
      return {
        name:'yao',
        item:{
          id:'01',
          name:'xxz'
        }
      }
    },
    computed:{
      ...mapState({
        isShow:state=>state.footerStatus.showFooter,
        num:state=>state.footerStatus.changableNum
      }),
      ...mapGetters('collection',{
        arrLists:'renderCollects'
      }),

      age(){
        return 35
      }
    },
    methods:{
      ...mapActions('collection',[
        'invokePushItems'
      ]),


      showMsgFormChild(data) {
        console.log(data)
      },
      func(){
        console.log('func')
      },
      show(){
        //this.$store.commit('show') //store mutations
        //this.$store.dispatch('showFooter') // store actions
        this.$store.dispatch('footerStatus/showFooter')
      },
      hide(){
       // this.$store.commit('hide') //store mutations
       //this.$store.dispatch('hideFooter') // store actions
       this.$store.dispatch('footerStatus/hideFooter')
      },
      mutations(){
        //this.$store.commit('newNum',6) //store mutations
        //this.$store.dispatch('getNewNum',6) //store mutations
        this.$store.dispatch('footerStatus/getNewNum',5)
      },
      addList(){
        this.invokePushItems(this.item)
      }
    }
  }
</script>

