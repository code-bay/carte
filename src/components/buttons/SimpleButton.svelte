<script lang="ts">
	import Icon from '@iconify/svelte';

	export let action: Function = () => {};
	export let preload: 'hover' | 'tap' = 'hover'
	export let type: 'submit' | 'button' = 'button'
	export let props: {
		label: string,
		variant: 'filled' | 'tonal' | 'text' | 'error',
		target?: string,
		icon?: string,
		href?: string,
		form?: string
	}

	const { label, variant, target, icon, href, form } = props
</script>

{#if href}
	<a 
		class={`simple-button ${variant} target ripple`}
		data-sveltekit-preload-data={preload} 
		{href} 
		{target} 
	>
		{#if icon} <Icon {icon} /> {/if}
		{label}
	</a>
{:else}
	<button 
		class={`simple-button ${variant} target ripple`} 
		{type} 
		{form} 
		on:click={() => action}
	>
		{#if icon} <Icon {icon} /> {/if}
		{label}
	</button>
{/if}

<style lang="scss">
.simple-button {
	align-items: center;
	border-radius: 20px;
	display: inline-flex;
	font: var(--label-large);
	height: 40px;
	justify-content: center;
	white-space: nowrap;

	:global(.iconify) {
		height: 24px;
		width: 24px;
	}
}

// 🎨 Variants
.text {
	color: var(--primary);
	padding: 0 12px;
	:global(.iconify) {
		margin-right: 8px;
	}
}

.filled {
	background: var(--primary);
	color: var(--on-primary);
}

.tonal {
	background: var(--secondary-container);
	color: var(--on-secondary-container);
}

.error {
	background: var(--error);
	color: var(--on-error);
}

.filled, .tonal, .error {
	padding: 0 24px;

	:global(.iconify) {
		margin: 0 8px 0 -8px;
	}
}
</style>
