<template>
  <a class="SourceLink" :href="fullUrl" target="_blank"
    >ソースを確認する：{{ sourcePath }}</a
  >
</template>

<script>
export default {
  props: {
    sourcePath: { type: String }
  },
  computed: {
    fullUrl() {
      return `https://github.com/ics-creative/200703_vue_mistakes/tree/master/src/${this.sourcePath}`
    }
  }
}
</script>

<style lang="scss" scoped>
.SourceLink {
  display: block;
  font-weight: bold;
  color: rgb(38, 70, 92);
  &::before {
    content: '↗︎';
  }
}
</style>
