<template>
  <div class="data-view">
    <div class="loading" v-if="!content">loading</div>
    <div class="content" v-if="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.content = ''
    // URLからデータを取得
    setTimeout(() => {
      this.content = `Data of ${this.url}`
    }, 2000)
  }
}
</script>
