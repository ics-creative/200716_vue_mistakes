<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.message {
  border: 1px solid salmon;
  background-color: rgb(255, 227, 227);
  padding: 20px 10px 10px;
  /* ！！メッセージは赤文字にしています！！ */
  color: rgb(145, 59, 59);
  position: relative;
  &::before {
    content: 'ERROR';
    position: absolute;
    background-color: salmon;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 1px 4px;
    left: 0;
    top: 0;
  }
}
</style>
