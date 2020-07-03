<template>
  <div class="TooHeavyCompPage">
    <div class="message" :v-show="someHeavyFunc()">
      サンプルのメッセージです。このメッセージの表示ON/OFFはv-showで設定しています。
    </div>
    <input v-model="someText" />

    <ExampleMessage :sources="['views/TooHeavyComp.vue']">
      ページにメッセージ表示欄を作って:v-showで表示をON/OFFする機能を追加したところ、
      なぜかinputのテキスト入力がとても重くなってしまいました。
      追加した処理と入力欄には何も関係はないはずです。なにが起きているのでしょう？
    </ExampleMessage>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasMessage: true,
      someText: 'なぜか入力がとても重いinput'
    }
  },
  methods: {
    someHeavyFunc() {
      // メッセージのON/OFFを判断するための複雑な処理です。
      // ここでは単に300ms待ってから常にhasMessageの値を返します。
      const startTime = performance.now()
      let waitTimeMs = 0
      while (waitTimeMs < 300) {
        waitTimeMs = performance.now() - startTime
      }
      console.log('重い処理を実行しました')
      return this.hasMessage
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  background-color: rgb(255, 246, 195);
  color: rgb(65, 58, 39);
}
</style>
