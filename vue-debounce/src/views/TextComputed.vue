<template>
  <div class="router1">

    <input v-model="textDemo" />
    {{text}}
    {{priceSubstrText}}

  </div>
</template>


<script>
export default {
  data () {
    return({
      text:'',
    })
  },
  computed: {
    textDemo: {
      get() {
        // let text = this.text
        // if (this.text) {
        //   text = this.text
        // }
        return this.priceSubstr(this.text,2,',')
      },
      set(value) {
        console.log(value)

        this.text = value
      }
    },
    priceSubstrText(){
      return this.priceSubstr(this.text,2,',')
    }
  },
  methods: {
    priceSubstr(num = '0', n = 0, symbol = ','){
      if(parseInt(num) != num && n !== 0) {
        if (symbol === '.') console.log('symbol can not same as .')
      }
      num = (+num).toFixed(n === 0 ? 1 : n)
      num = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, `$1${symbol}`)
      if (n) {
        return num
      } else {
        return num.substring(0, num.lastIndexOf('.'))
      }
    }
  },
  created () {

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
