<template>
	<div id="examplesNavbar">
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<router-link class="navbar-brand" to="/">Examples</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
