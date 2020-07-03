<template>
  <div class="OddTransitionPage">
    <section>
      <h2>トランジションがちょっと変なTodoList</h2>
      <label class="NewTodo">
        新しい項目： <input v-model="newItem" class="NewTodo_Input" />
        <button @click="addItem">追加</button>
      </label>
      <ol class="List">
        <transition-group name="item-animation">
          <li v-for="(item, index) in todoItems" :key="index" class="List_Item">
            <TodoItem :text="item" @remove="removeItem(index)" />
          </li>
        </transition-group>
      </ol>
    </section>

    <ExampleMessage>
      <p>
        簡単なTODOリストを作成し、
        <a href="https://jp.vuejs.org/v2/guide/transitions.html">
          Vue公式ガイドのTransitionのページ
        </a>
        を参考にトランジションを追加してみました。
        TODOリストそのものはうまく動作していたはずなのに、追加したトランジションがちょっと変です。とりあえず動いてはいるので、このままにしておいても良いでしょうか？
      </p>
      <p>
        コンソールにTodoItemが作成/削除された際のログも出力しているので合わせて確認してみてください。
      </p>
    </ExampleMessage>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: { TodoItem },
  data() {
    return {
      newItem: '',
      todoItems: ['かいもの', 'ねことあそぶ', 'Vue.jsのべんきょう']
    }
  },
  methods: {
    addItem() {
      this.todoItems.push(this.newItem)
      this.newItem = ''
    },
    removeItem(index) {
      this.todoItems.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-animation-enter-active {
  transition: opacity 0.5s, background-color 1.5s;
}
.item-animation-leave-active {
  transition: opacity 1.5s;
  background-color: salmon;
}
.item-animation-enter {
  background-color: wheat;
}
.item-animation-leave-to {
  opacity: 0;
}

.OddTransitionPage {
  .NewTodo_Input {
    width: 130px;
  }
  .List {
    margin: auto;
    width: 300px;
    padding: 20px;
    text-align: left;
  }
  .List_Item {
    padding: 3px 10px;
  }
}
</style>
