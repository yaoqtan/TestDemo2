<template>
  <div class="helloSlot">
    <h1>Upload2</h1>
    <div class="example-btn">
     <vue-file-upload
       :url="'/get/file'"
       ref="vueFileUploader"
       class="fileupload-button"
       :events = 'cbEvents',
       :filters = "filters",
       :request-options = "reqopts",
       @onAdd = "onAddItem"
     >
       select file
     </vue-file-upload>
    </div>

  </div>
</template>
<script>
  import FileUpload from 'vue-upload-component'
  import VueFileUpload from 'vue-file-upload';

  export default {
    name:"Upload",
    components: {
      FileUpload,
      VueFileUpload
    },
    props:{

    },
    data(){
      return{
        files: []
      }
    },
    methods: {

    }
  }
</script>

