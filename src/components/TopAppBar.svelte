<script lang="ts">
	export let props: {
		title: string,
		logo?: string
	}

	const { title, logo } = props
</script>

<header class="top-app-bar">
	<section class="top-app-bar__section">
		{#if logo}
			<a class="logo" href="./">
				<img class="top-app-bar__logo" src={logo} alt="app logo"/>
			</a>
		{/if}
		<span class="top-app-bar__title">{title}</span>
	</section>
	{#if $$slots}
		<slot/>
	{/if}
</header>


<style lang="scss">
.top-app-bar {
	align-items: center;
	display: flex;
	height: 64px;
	justify-content: space-between;
	padding: 0 4px;

	&__section {
		align-items: center;
		display: flex;
	}

	&__logo {
		width: 30px;
	}

	&__title {
		color: var(--on-surface);
		font: var(--title-large);
		margin-left: 16px;
	}
}
</style>
