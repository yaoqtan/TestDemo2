<template>

<img style="width:100px" :src="result && result.message" />

</template>

<script>

import axios from 'axios'
export default {
  name: 'asyncShow',
  async setup(){
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(rawData.data)
    return {
      result:rawData.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
