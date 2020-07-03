<template>
  <div class="NotChangedComputedPage">
    <section>
      <h2>なぜか変わらないcomputed</h2>
      <label
        >ブロックの数：
        <input type="range" min="1" max="6" v-model.number="blockCount"
      /></label>
      <div ref="row">
        <div
          class="block"
          v-for="no in blockCount"
          :key="no"
          :style="{ width: blockWidth }"
        >
          width = {{ blockWidth }}
        </div>
      </div>
    </section>

    <section>
      <h2>なぜか変わるcomputed</h2>
      <label
        >ブロックの数：
        <input type="range" min="1" max="6" v-model.number="blockCount"
      /></label>
      <div ref="row">
        <div
          class="block"
          v-for="no in blockCount"
          :key="no"
          :style="{ width: blockWidth2 }"
        >
          width = {{ blockWidth2 }}
        </div>
      </div>
    </section>

    <ExampleMessage>
      この例ではスライダーを動かすことでブロックの数を変更し、数に合わせて1ブロックの幅も調整しています。
      なぜか上の例は幅が正しく計算されていません。
      下の例は上と同じcomputedに「console.log()」を足しただけですが、なぜか動いてしまいました。何が起きているのでしょうか？
    </ExampleMessage>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 1,
      blockCount: 1
    }
  },
  computed: {
    /**
     * ブロックを横一列に並べるために、1ブロックの適切な幅を返すcomputedです
     */
    blockWidth() {
      // 行の幅を取得するために$refsで親の要素を取得
      const rowElement = this.$refs['row']
      // 一番最初はまたDOMにアクセスできないので0pxを返す
      if (!rowElement) {
        return '0px'
      }
      // 全体の幅 / 要素の数で1ブロックの幅を決める
      const w = rowElement.offsetWidth / this.blockCount
      return Math.floor(w) + 'px'
    },

    /**
     * blockWidthと同じですが「なぜか動いてしまう」例です
     */
    blockWidth2() {
      // ↓このconsole.logを出力するると「なぜか」動くようになります
      console.log(this.blockCount)

      // 以下はblockWidthと同じです
      // 行の幅を取得するために$refsで親の要素を取得
      const rowElement = this.$refs['row']
      // 一番最初はまだDOMにアクセスできないので0pxを返す
      if (!rowElement) {
        return '0px'
      }
      // 全体の幅 / 要素の数で1ブロックの幅を決める
      const w = rowElement.offsetWidth / this.blockCount
      return Math.floor(w) + 'px'
    }
  },
  mounted() {
    // マウントのタイミングで初期値をセット
    // computedを再計算させる
    this.blockCount = 3
  }
}
</script>

<style lang="scss" scoped>
.NotChangedComputedPage {
  .block {
    display: inline-flex;
    border: 1px solid white;
    background-color: rgb(221, 244, 247);
    color: rgb(85, 99, 102);
    font-size: 11px;
    height: 80px;
    min-width: 50px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
  }
}
</style>
