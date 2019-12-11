<template>
  <div>
    <div id="left_block" v-show='show'>
          <a href="/index.html" title="На главную" id="leftContact" v-show="show">Paper Project</a>
          <a href="/about.html" title="Информация" id="leftContact"  v-show="show" >О нас</a>
          <span id="leftContact"  v-show="show"><a href="/reg.html" title="Зарегестрироваться" onclick="heyReg()">Регистрация</a></span>
          <span id="leftContact"  v-show="show"><a href="/comein.html" title="Вход">Войти</a></span>
    </div>
    <div v-show="!show" id="ClosedBlock"></div>
    <button style="color: red; background-color: #151a23; border-color: black; z-index: 1000; position: fixed; margin-left: 7px;"
    @click="show = !show"><big> скрыть </big></button>
  </div>
</template>



<script>
import Button from'./ShowButton.vue';

export default {
  data(){
    return{
      show: true
    }
  },
  components: {
    'app-show' : Button
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
