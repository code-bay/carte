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
</script>

{#if props.href}
	<a 
		class={`simple-button ${props.variant} target ripple`}
		data-sveltekit-preload-data={preload} 
		href={props.href} target={props.target} 
	>
		{#if props.icon} <Icon icon={props.icon} /> {/if}
		{props.label}
	</a>
{:else}
	<button 
		class={`simple-button ${props.variant} target ripple`} 
		{type} 
		form={props.form} 
		on:click={() => action}
	>
		{#if props.icon} <Icon icon={props.icon} /> {/if}
		{props.label}
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
