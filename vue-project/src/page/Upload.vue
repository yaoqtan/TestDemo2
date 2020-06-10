<template>
  <div class="helloSlot">
  <h1>Upload</h1>
    <div class="example-btn">
      <ul>
        <li v-for="(file, index) in files" :key="file.id">
          <span>{{file.name}}</span>
          <!--<span>{{file.size | formatSize}}</span> - -->

          <span>{{file.progress}}%</span>
          <!--<span v-else-if="file.success">success</span>-->
          <!--<span v-else-if="file.active">active</span>-->
          <!--<span v-else-if="file.active">active</span>-->

        </li>
      </ul>

      <file-upload
        class="btn btn-primary"
        post-action="/upload/post"
        extensions="csv,xlsx,excel"
        accept="*/*"
        :multiple="false"
        :size="1024 * 1024 * 10"
        v-model="files"
        @input-filter="inputFilter"
        @input-file="inputFile"
        ref="upload">
        <i class="fa fa-plus"></i>
        Select files
      </file-upload>
      <button type="button" class="btn btn-success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
        Start Upload
      </button>
      <button type="button" class="btn btn-danger"  v-else @click.prevent="$refs.upload.active = false">
        <i class="fa fa-stop" aria-hidden="true"></i>
        Stop Upload
      </button>
    </div>

  </div>
</template>
<script>
  import FileUpload from 'vue-upload-component'
  export default {
    name:"Upload",
    components: {
      FileUpload,
    },
    props:{

    },
    data(){
      return{
        files: []
      }
    },
    methods: {
      inputFilter(newFile, oldFile, prevent) {
        console.log('inputFilter')
//        if (newFile && !oldFile) {
//          // Before adding a file
//          // 添加文件前
//          // Filter system files or hide files
//          // 过滤系统文件 和隐藏文件
//          if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
//            return prevent()
//          }
//          // Filter php html js file
//          // 过滤 php html js 文件
//          if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
//            return prevent()
//          }
//        }
      },
      inputFile(newFile, oldFile) {
        console.log('inputFile')
        if (newFile && !oldFile) {
          // add
          console.log('add', newFile)
        }
        if (newFile && oldFile) {
          // update
          console.log('update', newFile)
        }
        if (!newFile && oldFile) {
          // remove
          console.log('remove', oldFile)
        }
      }
    }
  }
</script>

