<template>
  <div class="NotChangedPropsPage">
    <section>
      <h2>なぜか変わらないprops-1</h2>
      <label>
        <span>Color Code: #</span>
        <input v-model="colorCode" />
      </label>
      <ColorView :code="colorCode" />
    </section>

    <section>
      <h2>なぜか変わらないprops-2</h2>
      <label>
        <span>Zip Code: 〒</span>
        <input v-model="zipCode" />
      </label>
      <ZipAddress :zipcode="zipCode" />
    </section>

    <ExampleMessage
      :sources="[
        'views/NotChangedProps.vue',
        'components/ColorView.vue',
        'components/ZipAddress.vue'
      ]"
    >
      この画面では自作の「ColorView」コンポーネントと「ZipAddress」コンポーネントで入力されたコードから色や住所を表示しています。
      初期表示はうまくいきますが、入力欄のコードを変更しても色や住所が変わりません。
      どこに間違いがあるのでしょうか？
    </ExampleMessage>
  </div>
</template>

<script>
import ColorView from '@/components/ColorView'
import ZipAddress from '@/components/ZipAddress'
export default {
  components: { ColorView, ZipAddress },
  data() {
    return {
      colorCode: 'ffdd98',
      zipCode: '1050011'
    }
  }
}
</script>

<style scoped></style>
