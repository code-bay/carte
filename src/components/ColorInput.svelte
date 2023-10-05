<script lang="ts">
	export let value: string;
	export let props: {
		label: string,
		name: string
	}

	const { label, name } = props
</script>

<div class="color-input">
	<input
		name={name}
		class="input"
		type="text"
		minlength="7"
		maxlength="7"
		placeholder=" "
		{value}
		on:change={(e) => value = e.target.value}
	/>
	<span class="label">{label}</span>
	<input class="color-picker" type="color" bind:value/>
</div>

<style lang="scss">
.color-input {
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

.color-picker {
	border: none;
	margin-right: 16px;
	padding: 0;
}
</style>
