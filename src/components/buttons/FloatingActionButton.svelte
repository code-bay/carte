<script lang="ts">
	import Icon from '@iconify/svelte';

	export let onClick: Function | any = () => {};
	export let type: 'button' | 'submit' = 'button';
	export let props: {
		variant: 'surface' | 'primary' | 'secondary' | 'tertiary' | 'primary-container'
		icon: string,
		fixed?: boolean,
		isSecondary?: boolean,
		form?: string,
		href?: string,
		label?: string,
		size?: 'small' | 'large' | 'extended'
	}

	const { variant, icon, fixed, isSecondary, form, href, label, size } = props
</script>

{#if href}
	<a 
		class={`floating-action-button ${variant} ${size} target ripple`} 
		class:fixed
		{href} 
	>
		{#if icon} <Icon {icon}/> {/if}
		{#if label} <span class="label">{label}</span> {/if}
	</a>
{:else}
	<button 
		{form} 
		{type} 
		class={`floating-action-button ${variant} ${size} target ripple`}
		class:fixed
		class:isSecondary
		on:click={onClick}
	>
		{#if icon} <Icon {icon} /> {/if}
		{#if label} <span class="label">{label}</span> {/if}
	</button>
{/if}

<style lang="scss">
.floating-action-button {
	align-items: center;
	border-radius: 16px;
	display: inline-flex;
	height: 56px;
	justify-content: center;
	width: 56px;

	:global(.iconify) {
		height: 24px;
		width: 24px;
	}
}

.label {
	font: var(--label-large);
	white-space: nowrap;
}

.extended {
	min-width: 80px;
	padding: 0 16px;
	width: auto;

	:global(.iconify) {
		margin-right: 16px;
	}
}

.small {
	border-radius: 12px;
	height: 40px;
	width: 40px;
}

.large {
	border-radius: 28px;
	height: 96px;
	width: 96px;

	:global(.iconify) {
		height: 36px;
		width: 36px;
	}
}

.fixed {
	bottom: 96px;
	box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
	right: 16px;
	position: fixed !important;
	z-index: 1;

	@media(min-width: 600px) {
		bottom: 16px;
	}
}

.isSecondary {
	bottom: 162px;

	@media(min-width: 600px) {
		bottom: 88px;
	}
}

// 🎨 Variants
.surface {
	background: var(--surface-container-high);
	color: var(--primary);
}

.primary {
	background: var(--primary);
	color: var(--on-primary);
}

.secondary {
	background: var(--secondary-container);
	color: var(--on-secondary-container);
}

.tertiary {
	background: var(--tertiary-container);
	color: var(--on-tertiary-container);
}

.primary-container {
	background: var(--primary-container);
	color: var(--on-primary-container);
}
</style>