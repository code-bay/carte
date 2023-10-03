<script lang="ts">
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
</script>

<div class="presentation">
	<h1 class="title">Your Instant Professional Business Card</h1>
	<p class="description">Don't just exist online — thrive in style! Introducing Carte, your fast-track to crafting a standout professional profile card.</p>
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

	&::before {
		--mask: 
			radial-gradient(40.00px at 56.00px 50%,#000 99%,#0000 101%) 0 calc(50% - 64px)/100% 128px,
			radial-gradient(40.00px at -24px 50%,#0000 99%,#000 101%) 32px 50%/100% 128px repeat-y;
		-webkit-mask: var(--mask);
		mask: var(--mask);
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 200px;
		height: 100%;
		background: var(--primary);
	}
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
