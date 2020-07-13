<template>
  <div class="ExampleMessage">
    <slot />
    <div class="ExampleMessage_Links">
      <SourceLink
        v-for="source in sources"
        :key="source"
        :sourcePath="source"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sources: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
.ExampleMessage {
  margin-top: 30px;
  border: 2px solid #2c3e50;
  background-color: rgb(243, 249, 250);
  padding: 20px 10px 10px;
  color: rgb(56, 64, 66);
  position: relative;
  border-radius: 3px;
  font-size: 12px;
  &::before {
    content: 'なにが変？？';
    position: absolute;
    background-color: #2c3e50;
    color: rgb(245, 253, 253);
    font-size: 10px;
    font-weight: bold;
    padding: 1px 4px;
    left: 0;
    top: 0;
    border-radius: 0 0 3px 0;
  }
  &_Links {
    padding-top: 10px;
    text-align: left;
  }
}
</style>
