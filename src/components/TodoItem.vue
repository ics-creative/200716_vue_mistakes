<template>
  <div class="TodoItem">
    {{ text }}
    <button @click="$emit('remove')">削除</button>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: 'new item' }
  },
  mounted() {
    console.log(`TodoItem.mounted: "${this.text}"が作成されました`)
  },
  beforeDestroy() {
    console.log(`TodoItem.beforeDestroy: "${this.text}"が削除されました`)
  }
}
</script>
