<template>
  <div>
    <div id="left_block" >
       <div id="left_block">
          <a href="index.html" title="На главную" id="leftContact" v-show="show" style="margin-top: 100px;">Paper Project</a>
          <a href="about.html" title="Информация" id="leftContact"  v-show="show" style="margin-top: 150px;">О нас</a>
          <span id="leftContact"  v-show="show" style="margin-top: 200px;"><a href="reg.html" title="Зарегестрироваться" onclick="heyReg()">Регистрация</a></span>
          <span id="leftContact"  v-show="show" style="margin-top: 250px;"><a href="comein.html" title="Вход">Войти</a></span>
          <app-show :msg="message" @CloseBlock="show = $event"></app-show>
        </div>
    </div>
    <div v-show="!show" id="ClosedBlock"></div>
   
  </div>
</template>



<script>
import Button from'./ShowButton.vue';

export default {
  name: 'block',
  data(){
    return{
      show: true,
      message: "Сжать"
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
