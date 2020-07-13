<template>
  <div class="VueErrorPage">
    <template>
      <section>
        <h2>不適切なコードをVueが実行時エラーで教えてくれる例</h2>
        <div class="CountViewComponent">
          カウント={{ count }} <button @click="reset">リセット</button>
        </div>
      </section>

      <h2>うまく動かないcomputedの例</h2>
      <section>
        <h3>①画面サイズで分岐するcomputed</h3>
        <p>
          PCサイズの画面で表示している場合、pcSizeを変更するとComputed
          Sizeも変わります。 その状態でウインドウを小さくしていくとComputed
          SizeがmobileSizeの値に切り替わりますが、
          mobileSizeの値は変更してもComputed Sizeに反映されません。
        </p>
        <label
          >pcMsg:
          <input type="text" v-model="pcMsg" />
        </label>
        <label
          >mobileMsg:
          <input type="text" v-model="mobileMsg" />
        </label>
        <p>Computed sizeMessage: {{ sizeMessage }}</p>
      </section>

      <section>
        <h3>②Vue管理外の変数で分岐するcomputed</h3>
        <p>
          初回実行時にsomeAPI.dataが未取得だと、サーバへのデータ取得要求は実行されますが
          結果がsomeAPI.dataにセットされてもcomputedは'取得中...'のまま変わりません。
          dataIndexの値を変更しても再計算は実行されません。
        </p>
        <label
          >data index:
          <input v-model.number="dataIndex" />
        </label>
        serverData: {{ serverData }}
      </section>

      <section>
        <h3>③乱数で分岐するcomputed</h3>
        <p>
          スライダーをランダムに動かしているとある時点から Computed
          valueが変化しなくなります
        </p>
        <label
          >currentValue:
          <input type="range" min="1" max="200" v-model="currentValue" />
        </label>
        Computed value: {{ randomValue }}
      </section>
    </template>
  </div>
</template>

<script>
const someAPI = {
  data: '',
  requestServerData: () => {
    setTimeout(() => {
      someAPI.data = ['data1', 'data2', 'data3']
    }, 1000)
  }
}
export default {
  name: 'VueError',
  components: {},
  props: {
    // 表示するカウント値
    count: { type: Number, default: 3 }
  },
  data() {
    return {
      pcMsg: 'Message for PC',
      mobileMsg: 'Message for Mobile',
      breakPoint: 600,
      dataIndex: 0,
      currentValue: 123
    }
  },
  computed: {
    // ①画面サイズで分岐するcomputed
    // 画面をPCサイズからモバイルサイズに小さくしてもメッセージは切り替わりません。
    // その状態でmobileMsgを変更しても再計算は行われません。
    // 一度pcMsgを変更するとmobileMsgの依存が検出され、mobileMsgの変更で再計算が行われるようになります。
    sizeMessage() {
      return window.innerWidth < 768 ? this.mobileMsg : this.pcMsg
    },

    // ②Vue管理外の変数で分岐するcomputed
    // 初回実行時にsomeAPI.dataが未取得だと、サーバへのデータ取得要求は実行されますが
    // 結果がsomeAPI.dataにセットされてもcomputedは'取得中...'のまま変わりません。
    // dataIndexの値を変更しても再計算は実行されません。
    serverData() {
      // 取得済みのデータがなければサーバにリクエスト
      if (!someAPI.data) {
        someAPI.requestServerData()
        return '取得中...'
      }
      // データ配列からdataIndex番目のデータを返す
      return someAPI.data[this.dataIndex] || 'データが見つかりません'
    },

    // ③乱数で分岐するcomputed
    // currentValueが変わるたびに概ね再計算されるが、
    // 1%の確率で0を返すとそれ以降はcurrentValueが変わっても再計算されなくなる
    randomValue() {
      if (Math.random() < 0.01) return 0
      return this.currentValue
    }
  },
  methods: {
    // カウントをリセットします
    reset() {
      this.count = 0
    }
  }
}
</script>
