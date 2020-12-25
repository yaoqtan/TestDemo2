<template>
  <div class="about">
    {{nowTime}}
    <div>
      <button @click="getNowTime">
        显示时间
      </button>
    </div>
  </div>
</template>
<script>
import {nowTime,getNowTime} from './../hooks/useNowTime'

export  default {
  name:'demo6',
  setup(){

    return{
      nowTime,
      getNowTime
    }
  }
}
</script>
