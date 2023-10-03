<script lang="ts">
	import Icon from '@iconify/svelte';

	export let onClick: Function | any = () => {};
	export let type: 'submit' | 'button' = 'button';
	export let props: {
		icon: string,
		variant: 'filled' | 'tonal' | 'standard' | 'error',
		href?: string,
		target?: string
	}

	const { icon, variant, href, target } = props
</script>

{#if href}
	<a class="target" href={href} {target}>
		<span class={`icon-button ${variant} ripple`}>
			<Icon {icon} />
		</span>
	</a>
{:else}
	<button class="target" on:click={onClick} {type}>
		<span class={`icon-button ${variant} ripple`}>
			<Icon {icon} />
		</span>
	</button>
{/if}

<style lang="scss">
.target {
	place-content: center;
	display: grid;
	height: 48px;
	width: 48px;
}

.icon-button {
	place-content: center;
	border-radius: 50%;
	display: grid;
	height: 40px;
	width: 40px;

	:global(.iconify) {
		height: 24px;
		width: 24px;
	}
}

// 🎨 Variants
.filled {
	background: var(--primary);
	color: var(--on-primary);
}

.tonal {
	background: var(--secondary-container);
	color: var(--on-secondary-container);
}

.standard {
	color: var(--on-surface-variant);
}

.error {
	background: var(--error);
	color: var(--on-error);
}
</style>
