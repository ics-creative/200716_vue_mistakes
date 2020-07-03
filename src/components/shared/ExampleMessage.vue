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
  border: 1px solid rgb(138, 157, 165);
  background-color: rgb(243, 249, 250);
  padding: 20px 10px 10px;
  color: rgb(56, 64, 66);
  position: relative;
  font-size: 12px;
  &::before {
    content: 'なにか変？？';
    position: absolute;
    background-color: rgb(138, 157, 165);
    color: rgb(245, 253, 253);
    font-size: 10px;
    font-weight: bold;
    padding: 1px 4px;
    left: 0;
    top: 0;
  }
  &_Links {
    padding-top: 10px;
    text-align: left;
  }
}
</style>
