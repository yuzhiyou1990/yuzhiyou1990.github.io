<template>
	<div id="home">
		<ul class="list-group" v-for="(item,index) in items" :key="index">
		  <li :class="(item==activeItem)?itemActiveClassName:itemClassName" @click="itemOnClick(item)"> {{ item.title }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemClassName:"list-group-item",
				itemActiveClassName:"list-group-item active",
				activeItem:null,
				items:[
					{"title":"VueAxios"}
				]
			};
		},
		methods: {
			itemOnClick(selectedItem) {
				if(selectedItem == this.activeItem){
					return;
				}
				this.activeItem = selectedItem;
				this.$router.push('exampleVueAxios');
			}
		},
	}
</script>

<style scope>

#home {
	padding: 24px 16px;
}
</style>
