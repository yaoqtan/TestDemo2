<template>
  <div class="axios-test">
    <div @click="axiosHandle">axios</div>
     <div @click="axiosHandle1">request</div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'AxiosDemo',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    async axiosHandle() {
      try {
        const resData = await this.$Http({
          url: '/els/base/userColumnDefine/queryCurrentUserColumnDefineJson/prefabricatedInvoiceManagement',
          //method: 'post',
          params: { id: 'xxxx' },
          data:{
            name:'xxx'
          },
          commonObj:{
            hidePopup:true
          }
        })
        console.log(resData, 'resData')
      } catch (err) {
        console.log(err)
      }
    },
    async axiosHandle1() {
      try {
        const resData = await request({
          url: '/els/base/userColumnDefine/queryCurrentUserColumnDefineJson/prefabricatedInvoiceManagement',
          //method: 'post',
          params: { id: 'xxxx' },
          data:{
            name:'xxx'
          },
          commonObj:{
            hidePopup:true
          },
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
        console.log(resData, 'resData')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
