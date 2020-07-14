<template>
  <div id="app">
    <div id="nav" :class="$route.name">
      <h1 class="AppTitle">
        <div class="sub">エラーは出ないけどなにか変？？</div>
        Vue.jsでやりがちな「サイレント・ミス」
      </h1>
      <router-link to="/">TOP</router-link>
      <router-link to="/heavy">1. なぜか重いコンポーネント</router-link>
      <router-link to="/props">2. なぜか反映されないprops</router-link>
      <router-link to="/computed">3. 微妙に再計算されないcomputed</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: auto;
}

#nav {
  padding: 30px;
  .AppTitle {
    display: none;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
      &::before {
        content: '▶︎ ';
      }
    }
    &::after {
      content: '・';
      color: gray;
    }
    &:last-child::after {
      content: '';
    }
  }

  &.Home {
    .AppTitle {
      display: block;
    }
    text-align: left;
    > a {
      display: block;
      &::after {
        content: '';
      }
    }
  }
}
* {
  box-sizing: border-box;
}
section {
  border: 1px solid #ddd;
  padding: 0 10px 10px;
  margin-bottom: 10px;
  font-size: 13x;
  h2:first-child {
    font-size: 15px;
    color: #333;
    font-weight: bold;
    padding: 2px 5px;
    position: relative;
    text-align: left;
  }
  h3:first-child {
    font-size: 13px;
    color: #333;
    font-weight: bold;
    padding: 2px 5px;
    position: relative;
    text-align: left;
  }
}

h1 {
  text-align: center;
  font-size: 20px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  background-image: url(./assets/titlebg.svg);
  background-repeat: no-repeat;
  background-position: left bottom -17px;
  background-size: 80px;
  .sub {
    font-size: 14px;
    color: #42b983;
  }
}

a {
  color: #42b983;
}

input,
button {
  font-size: 16px;
  margin: 4px;
}
</style>
