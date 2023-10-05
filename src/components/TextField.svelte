<script lang="ts">
	import Icon from '@iconify/svelte';

	export let value: string;
	export let props: {
		label: string,
		name: string,
		disabled?: boolean,
		error?: string,
		icon?: string,
		maxlength?: number,
		minlength?: number,
		readonly?: boolean,
		required?: boolean,
		text?: string,
	}

	const { label, name, disabled, error, icon, maxlength, minlength, readonly, required, text } = props
</script>

<div class="field-wrapper">
	<label class="text-field" class:hasIcon={icon} class:hasError={error} class:readonly>
		<input 
			class="input"
			type="text"
			{name}
			placeholder={label}
			{minlength}
			{maxlength}
			{disabled}
			{readonly}
			{required}
			bind:value
		>
		<span class="label">{label}</span>
		{#if icon} <Icon {icon} /> {/if}
	</label>

	{#if error || text}
		<div class="supporting-text" class:hasError={error}>
			{error ? error : text ? text : ""}
		</div>
	{/if}
</div>

<style lang="scss">
.field-wrapper {
	width: 100%;
}

.text-field {
	align-items: center;
	display: flex;
	font: var(--body-large);
	height: 56px;
	position: relative;
	width: 100%;

	&::after {
		border-radius: 4px;
		box-shadow: inset 0 0 0 1px var(--outline);
		content: "";
		left: 0;
		pointer-events: none;
		position: absolute;
		transition: box-shadow .2s ease;
		top: 0;
		user-select: none;
		height: 100%;
		width: 100%;
	}

	&:hover {
		&::after {
			box-shadow: inset 0px 0px 0px 1px var(--on-surface);
		}
	}

	&:focus-within, &:active {
		&::after {
			box-shadow: inset 0px 0px 0px 2px var(--primary);
		}

		.label {
			background: var(--surface);
			color: var(--primary);
			font: var(--body-small);
			transform: translateY(-28px);
		}
	}

	:global(.iconify) {
		color: var(--on-surface-variant);
		height: 20px;
		margin-left: 16px;
		min-width: 20px;
		pointer-events: none;
		position: absolute;
		user-select: none;
	}
}

.input {
	border-radius: 5px;
	height: 100%;
	padding: 0 16px;
	width: 100%;

	&::placeholder {
		color: transparent;
	}

	&:not(:placeholder-shown), &:-webkit-autofill {
		& + .label {
			background: var(--surface);
			transform: translateY(-28px);
			font: var(--body-small);
		}
	}
}

.label {
	color: var(--on-surface);
	margin-left: 12px;
	padding: 0 4px;
	pointer-events: none;
	position: absolute;
	transition: font 0.2s, transform 0.2s;
	user-select: none;
	z-index: 1;
}

.supporting-text {
	color: var(--on-surface-variant);
	font: var(--body-small);
	height: 24px;
	margin: 4px 2px;

	&.hasError {
		color: var(--error);
	}
}


.hasError {
	&::after {
		box-shadow: inset 0px 0px 0px 2px var(--error) !important; 
	}

	.label {
		color: var(--error) !important;
	}
}

.hasIcon {
	.input {
		padding-left: 52px;

		&:not(:placeholder-shown), &:-webkit-autofill {
			& + .label {
				transform: translate(-36px, -28px);
			}
		}
	}

	.label {
		margin-left: 48px;
	}

	&:focus-within, &:active {
		.label {
			transform: translate(-36px, -28px);
		}
	}
}

.readonly {
	pointer-events: none;
}
</style>
