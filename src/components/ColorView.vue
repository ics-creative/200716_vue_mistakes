<template>
  <div
    class="ColorView"
    :style="{
      backgroundColor: colorCode
    }"
  >
    <div class="ColorView_Code">{{ colorCode }}</div>
  </div>
</template>

<script>
export default {
  props: {
    code: { type: String }
  },
  data() {
    return {
      // 正規化（全て大文字にして先頭に'#'を追加）したカラーコードをセット
      colorCode: ('#' + this.code).toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.ColorView {
  padding: 5px 10px;
  &_Code {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-shadow: 0 0 1px white;
  }
}
</style>
