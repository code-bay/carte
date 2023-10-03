<script lang="ts">
	export let props: {
		title: string,
	}

	const { title } = props
</script>

<header class="top-app-bar">
	<section class="top-app-bar__section">
		<a class="top-app-bar__logo" href="./">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262 262">
				<rect width="200" height="250" x="39.1" y="11.7" opacity=".5" rx="32"/>
				<rect width="200" height="250" x="31" y="5.6" opacity=".8" rx="32" transform="rotate(-5 131 131)"/>
			</svg>				
		</a>
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
		fill: var(--primary);
		width: 30px;
	}

	&__title {
		color: var(--on-surface);
		font: var(--title-large);
		margin-left: 16px;
	}
}
</style>
