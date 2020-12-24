<template>
  {{name}}
</template>

    <script lang="ts">
      import { defineComponent, reactive } from 'vue';
      export default defineComponent({
        setup(props, context) {
          console.log(props)
          console.log(context)
          let state = reactive({
            name: 'vue3 坑'
          });

          return state
        }
      });
    </script>