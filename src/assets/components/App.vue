<template>
	<div>
		<MenuHeader />
		<GridWrapper />
	</div>
</template>
<script>
	import MenuHeader from "_components/menu/MenuHeader.vue"
	import GridWrapper from "_components/grid-wrapper/GridWrapper.vue"

	export default {
		components: {
			MenuHeader,
			GridWrapper
		}	
	}
</script>