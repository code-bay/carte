<script lang="ts">
	import "../styles/index.scss"
</script>

<div id="root">
	<slot />
</div>


<style lang="scss">
#root {
	background-color: var(--surface);
	color: var(--on-surface);
}
</style>