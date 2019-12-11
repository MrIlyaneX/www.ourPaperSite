Vue.component('app-left-block',{
	data: function  (argument) {
		return 1
	},
	template: '<div id = "main_left_block"><div id="left_block" v-show = "show"><a href="../index.html" title="На главную" id="leftContact" style="margin-top: 80px;">Paper Project</a><a href="../about.html" title="Информация" id="leftContact">О нас</a><span id="../leftContact"><a href="reg.html" title="Зарегестрироваться" onclick="heyReg()">Регистрация</a></span><span id="leftContact"><a href="../comein.html" title="Вход">Войти</a></span></div></div>'
})

new Vue({
    el: '#main_left_block',
    data: {
    	show: true
    },
    components:{

    }
});