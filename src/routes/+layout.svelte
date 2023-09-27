<script lang="ts">
  import TopAppBar from "$components/TopAppBar.svelte";
	import "../styles/index.scss"
</script>

<div id="root">
	<TopAppBar props={{
		title: "Carte"
	}} />
	
	<slot />
</div>


<style lang="scss">
#root {
	background-color: var(--surface);
	color: var(--on-surface);
}
</style>