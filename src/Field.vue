<template>
	<div>
		<input type="text" :value="msg" @input="changeMess">
		<p><big>{{ mess }}</big></p>
	</div>
</template>

<script>
	export default{
		props: ['msg'],
		data(){
			return{
				mess: ''
			}
		},
		methods: {
			changeMess (event){
				this.mess = event.target.value;
				this.$emit('messChange', this.mess);
			}
		}
	}
</script>