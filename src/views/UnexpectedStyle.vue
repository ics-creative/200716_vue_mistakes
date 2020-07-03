<template>
  <div class="UnexpectedStylePage">
    <ErrorMessage
      message="これはErrorMessageコンポーネントによるメッセージです"
    />
    <div class="body">
      この部分は本文です。本文の一部分は<span class="message">青色</span
      >で表示しています
    </div>

    <ExampleMessage
      :sources="['views/UnexpectedStyle.vue', 'components/ErrorMessage.vue']"
    >
      この画面では自作の「ErrorMessage」コンポーネントにエラーメッセージを表示しています。
      ErrorMessageコンポーネントはエラーを赤文字で表示するはずが、なぜかこの画面では青くなってしまいました。
      どこに間違いがあるのでしょうか？
    </ExampleMessage>
  </div>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage'
export default {
  components: { ErrorMessage }
}
</script>

<style lang="scss" scoped>
.UnexpectedStylePage {
  .body {
    padding-top: 30px;
  }
  .message {
    color: rgb(89, 157, 212);
  }
}
</style>
