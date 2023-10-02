<script lang="ts">
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import { setPalette } from "$lib/index";
	import { onMount } from "svelte";

	export let data;

	onMount(() => {
		let root = document.documentElement
		setPalette(root, data.palette)
	})
</script>

<div class="presentation">
	<h1 class="title">Your Instant Professional Business Card</h1>
	<p class="description">Don't just exist online—thrive in style! Introducing Carte, your fast-track to crafting a standout professional profile card.</p>
	<SimpleButton props={{
		label: "Get started",
		variant: "filled",
		icon: "mdi:arrow-right",
		href: "./builder"
	}}/>
</div>

<style lang="scss">
.presentation {
	max-width: 600px;
}

.title {
	font: var(--display-small);
	margin-bottom: 16px;
}

.description {
	font: var(--body-large);
	margin-bottom: 32px;
}
</style>
