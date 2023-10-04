<script lang="ts">
	import { innerWidth } from "$lib/stores/innerWidth";
	import { isVisible } from "$lib/stores/isVisible";
	import IconButton from "./buttons/IconButton.svelte";
	import Divider from "./Divider.svelte";

	export let props: { title: string }
	const { title } = props
</script>

{#if $innerWidth < 840}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="overlay" 
		class:hiddenOverlay={$innerWidth < 840 && $isVisible === false}
		on:click={() => $isVisible = false}
	></div>
{/if}

<div 
	class="side-sheet" 
	class:isDesktop={$innerWidth >= 840} 
	class:hiddenSheet={ $innerWidth < 840 && $isVisible === false}
>
	<div class="head">
		<div class="title">{title}</div>

		{#if $innerWidth < 840}
			<IconButton 
			onClick={() => $isVisible = false}
			props={{
				icon: "mdi:close",
				variant: "standard"
			}}/>
		{/if}
	</div>

	<div class="body">
		<slot name="body"/>
	</div>

	<Divider/>
	<div class="footer">
		<slot name="footer"/>
	</div>
</div>

<style lang="scss">
.side-sheet {
	background: var(--surface);
	border-radius: 16px 0 0 16px;
	display: flex;
	flex-direction: column;
	height: 100%;
	max-width: 400px;
	min-width: 292px;
	width: clamp(292px, 70%, 400px);
	overflow-y: auto;
	padding: 24px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 3;
	transition: transform .3s;
}

.head {
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	.title {
		font: var(--title-medium);
		margin-right: 12px;
	}
}

.body {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 16px 0;
	overflow-y: auto;
}

.footer {
	align-items: center;
	display: flex;
	height: 72px;
	padding-top: 16px;
}

.overlay {
	background: rgba(0,0,0,0.5);
	display: grid;
	height: 100vh;
	left: 0;
	width: 100vw;
	position: fixed;
	top: 0;
	z-index: 2;
}

.isDesktop {
	border-radius: 0;
	border-left: 1px solid var(--outline-variant);
	width: 100%;
}

.hiddenOverlay {
	display: none;
}

.hiddenSheet {
	transform: translateX(400px);
}
</style>
