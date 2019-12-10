<template>
  <div id="block" v-on:click="show = !show">
    <div v-if="!show" id="left_block">
        <a href="index.html" title="На главную" id="leftContact">Paper Project</a>
        <a href="about.html" title="Информация" id="leftContact">О нас</a>
        <span id="leftContact"><a href="reg.html" title="Зарегестрироваться" onclick="heyReg()">Регистрация</a></span>
        <span id="leftContact"><a href="comein.html" title="Вход">Войти</a></span>
    </div>
    <div v-else="show" id = "ClosedBlock"></div>
  </div>
</template>

<script>
export default {
  name: 'block',
  show: true,
  methods: {
    CloseBlock(event) {
      return !show
    }
  }
}
</script>

<style scoped="Block.vue">
#ClosedBlock {
    background: #151a23;
    color: #fff;
    position: fixed;
    width: 70px;
    top: 0;
    bottom: 0;
    z-index: 1000;
    left: 0;
}
</style>
