<template>
	<div id="exampleVueAxios">
		<h1> Vue Axios</h1>
		
		
		<div class="card" v-for="(item,index) in items" :key="index">
		  <div class="card-body" @click="executeRequest(item)">
			<h5 class="card-title">{{item.method}} {{item.url}}</h5>
			<p class="card-text">{{item.response}}</p>
			<button class="btn btn-primary btn-lg">Execute</button>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'exampleVueAxios',
		data() {
			return {
				baseURL:"https://eosmainnet.medishares.net",
				items:[
					{
						url:"/v1/chain/get_info",
						method:"get",
						params:{},
						response:"",
					},
					{
						url:"/v1/chain/get_account",
						method:"post",
						params:{
							"account_name":"bigsharkfish"
							},
						response:"",
					}
				]
			};
		},
		methods: {
			executeRequest(item) {
				this.$http({
					method:item.method,
					url:this.baseURL+item.url,
					data:item.params
				}).then(function(response){
					item.response = JSON.stringify(response.data);
				})
			}
		}
	}
</script>

<style scope>
#exampleVueAxios {
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
}
</style>
