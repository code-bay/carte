<script lang="ts">
	import "../styles/index.scss";
	import Icon from '@iconify/svelte';
	import Divider from '$components/Divider.svelte';
	import TopAppBar from '$components/TopAppBar.svelte';
	import { innerWidth } from "$lib/store/innerWidth";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { setPalette } from "$lib/index";

	export let data;
	let allSet: boolean;

	onMount(() => {
		const root = document.querySelector(':root');
		setPalette(root, data.palette)
		allSet = true;
	})
</script>

<svelte:window bind:innerWidth={$innerWidth}/>
{#if allSet}
	<div id="root" transition:fade={{ duration: 200 }}>
		<div class="view">
			<TopAppBar props={{ title: "Carte" }}/>
			<main>
				<slot />
			</main>
			<footer>
				<Icon icon="material-symbols:copyright-outline-rounded" />
				<span>
					Codebay {new Date().getFullYear()}
				</span>
			</footer>
		</div>
	</div>
{/if}

<style lang="scss">
#root {
	background: var(--surface);
	color: var(--on-surface);
}

.view {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 0 16px;

	@media(min-width: 600px) {
		padding: 0 32px;
	}

	@media(min-width: 1080px) {
		padding: 0 64px;
	}

	@media(min-width: 1240px) {
		padding: 0 96px;
	}
}

main {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
}

footer {
	align-items: center;
	color: var(--on-surface);
	display: flex;
	font: var(--body-small);
	height: 80px;

	> :global(.iconify) {
		height: 24px;
		margin-right: 8px;
		width: 24px;
	}
}
</style>
