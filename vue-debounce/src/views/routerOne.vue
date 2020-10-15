<template>
  <div class="router1">
    

    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo8</b> 向右的无缝滚动, li宽度不定无法设置ul的width, 把ul的display设置为flex即可。
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 4
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3
        <br />}
      </div>
      <vue-seamless-scroll :data="listData7" :class-option="classOption7" class="warp2 random">
        <ul class="ul-item random clearfix">
          <li @click="handleLi" :style="{margin:'0 30px'}" class="li-item" v-for="(item, index) in listData7" :key="index">{{item}}</li>
        </ul>
         <ul class="ul-item random clearfix">
          <li  @click="handleLi" :style="{margin:'0 20px'}" class="li-item" v-for="(item, index) in listData7" :key="index">{{item}}</li>
        </ul>
         <ul class="ul-item random clearfix">
          <li  @click="handleLi" :style="{margin:'0 10px'}" class="li-item" v-for="(item, index) in listData7" :key="index">{{item}}</li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>


<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    data () {
      return {
        listData3: [1, 2, 3, 4, 5, 6],
        listData7: [1, 2, 3, 4, 5,6,7,8],
        listData4: [1, 2, 3],
        listData5: [1,2,3,4,5,6,7,7,8],
        listData8: [],
        listData: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        },],
        listData1: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }],
        listData2: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }],
        ulItem2Width: 0,
        classOption: {
          autoPlay: false,
          step: 0.5,
          limitMoveNum: 5,
        },
      }
    },
    props: {},
    computed: {
      classOption1 () {
        return {
          limitMoveNum: 7
        }
      },
      classOption2 () {
        return {
          limitMoveNum: 7
        }
      },
      classOption3 () {
        return {
          direction: 2,
          navigation: true
        }
      },
      classOption4 () {
        return {
          limitMoveNum: 2,
          direction: 3,
          singleWidth: 134
        }
      },
      classOption5 () {
        return {
          limitMoveNum: 50,
          direction: 2
        }
      },
      classOption7 () {
        return {
          limitMoveNum: 4,
          direction: 2
        }
      },
    },
    components: {
      vueSeamlessScroll
    },
    methods: {
      end () {
        console.log('ScrollEnd')
      },
      handleLi(e){
          console.log(e.target)
      }
    },
    created () {
      setTimeout(() => {
        this.listData5 = [...new Array(50)].map((item,index)=>index)
        this.listData4 = [1, 2, 3, 4, 5]
        this.listData8 = [...new Array(50)].map((item,index)=>index)
        this.ulItem2Width = 670
      }, 1500)
      setTimeout(() => {
        this.listData1 = this.listData2 = [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        }]
      }, 2000)
      setTimeout(() => {
        this.classOption.autoPlay = true
      }, 3400);
      setTimeout(() => {
        this.classOption.autoPlay = false
      }, 7400);
    }
  }
</script>

<style lang="scss" scoped>
  .demo4 {
    width: 402px !important;
     .ul-item {
      width: 804px;
    }
  }
  .ul-item {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 670px;
    &.random {
      display: flex;
      width: auto;
    }
    &.decimal {
      width: 670.4px;
    }
    &.ul-item2 {
      width: 0;
    }
    .li-item {
      float: left;
      width: 124px;
      height: 124px;
      margin: 10px 0 10px 10px;
      line-height: 124px;
      background-color: lightgray;
      font-family: "Amaranth", sans-serif;
      font-size: 82px;
      text-align: center;
    }
  }
  .warp2 {
    width: 400px;
    height: 150px;
    overflow: hidden;
  }
  .test {
    height: 126px;
    width: 600px;
    overflow: hidden;
    font-size: 14px;
  }
  .test .item {
    display: flex;
    margin-top: 10px;
    div {
      flex: 1;
    }
    a {
      display: block;
    }
  }
</style>
