<template>
	<div>
		<button style="color: red; background-color: black; border-color: black;" :value="show" @click="$emit('!show')">{{ mess }}</button>
	</div>
</template>

<script>
	export default{
		props: ['show'],
		data(){
			return{
				mess: 'Сжать',
				show: '!show'
			}
		},
		methods: {
			CloseBlock (event){
				this.show = !event.target.value;
				this.$emit('messChange', this.show);
			}
		}
	}
</script>

<style>
	*{
		position: fixed;
		z-index: 1000;
	}
</style>