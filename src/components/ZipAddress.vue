<template>
  <div class="ZipAddress">
    <span class="ZipAddress_Zip">〒{{ zipcode }}</span>
    <span class="ZipAddress_Address">{{ this.address || '取得中...' }}</span>
  </div>
</template>

<script>
import jsonp from 'jsonp'
// AIBISU社の郵便番号検索APIを使用しています：
// http://zipcloud.ibsnet.co.jp/doc/api
const API = 'https://zipcloud.ibsnet.co.jp/api/search'

export default {
  props: {
    zipcode: { type: String }
  },
  data() {
    return {
      address: '' // ここに検索された住所が入ります
    }
  },
  mounted() {
    if (!this.zipcode) {
      return
    }
    // propsで指定された郵便番号を検索
    const url = `${API}?zipcode=${this.zipcode}`
    jsonp(url, {}, (err, data) => {
      if (err) {
        return
      }
      // 結果から住所部分を抜き出してaddressにセット
      const addrObj = data.results[0]
      this.address = addrObj.address1 + addrObj.address2 + addrObj.address3
    })
  }
}
</script>

<style lang="scss" scoped>
.ZipAddress {
  &_Zip {
    color: rgb(161, 54, 54);
    font-weight: bold;
    padding-right: 5px;
  }
}
</style>
