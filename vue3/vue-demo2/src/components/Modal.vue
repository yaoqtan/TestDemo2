<template>

  <teleport to="#modalView">
    <div class="modal" id="modal">
      <h2>Modal</h2>
      <span>Teleport 的使用</span>
    </div>
  </teleport>

</template>

<script>
export default {
  name: 'model',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
