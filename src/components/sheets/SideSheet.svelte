<script lang="ts">
	export let props: {
		title: string
	}

	const { title } = props
</script>

<div class="side-sheet">
	<div class="head">
		<div class="title">{title}</div>
	</div>
	<slot/>
</div>

<style lang="scss">
.side-sheet {
	background: var(--outline-variant);
	border-radius: 16px 0 0 16px;
	height: 100%;
	width: 292px;
	overflow-y: auto;
	padding: 16px 12px;
	position: fixed;
	top: 0;
	right: -292px;
	// transform: translateX(292px);
	z-index: 3;
	transition: transform .3s;

	@media (min-width: 1080px) {
		right: 0;
	}

	&.isOpen {
		transform: translateX(-292px);

		@media (min-width: 1080px) {
			transform: translateX(0);
		}
	}
}

.head {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.title {
	font: var(--title-medium);
}
</style>
