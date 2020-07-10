<template>
  <div class="VueErrorPage">
    <template>
      <div class="CountViewComponent">
        カウント={{ count }} <button @click="reset">リセット</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VueError',
  components: {},
  props: {
    // 表示するカウント値
    count: { type: Number, default: 3 }
  },
  methods: {
    // カウントをリセットします
    reset() {
      this.count = 0
    }
  }
}
</script>
