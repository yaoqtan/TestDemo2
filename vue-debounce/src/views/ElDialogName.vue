<template>
  <div class="dialog-test">
    <div @click="dialogVisible = true">el-dialog</div>
    <el-dialog
        title="提示"
        :visible="dialogVisible"
        width="30%"
        v-dialogDrag
        >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

export default {
  name: 'ElDialogName',
  components: {},
  data(){
    return{
      dialogVisible:true
    }
  },
  created(){
  },
  mounted(){
    console.log('mounted1')
  },
  methods:{
  }
}
</script>
