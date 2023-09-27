<script lang="ts">
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import FloatingActionButton from "$components/buttons/FloatingActionButton.svelte";
</script>

<div class="grid">
	<div class="item">
		<SimpleButton props={{
			label: "Click me 1",
			variant: "text"
		}}/>

		<SimpleButton props={{
			label: "Click me 2",
			variant: "text",
			icon: "mdi:person-outline"
		}}/>
	</div>

	<div class="item">
		<FloatingActionButton props={{
			icon: "mdi:heart-outline",
			variant: "primary",
			label: "Send",
			size: "extended"
		}}/>

		<FloatingActionButton props={{
			icon: "mdi:person-outline",
			variant: "primary"
		}}/>

		<FloatingActionButton props={{
			icon: "mdi:arrow-right",
			variant: "primary",
			size: "large"
		}}/>
	</div>
</div>

<style lang="scss">
.grid {
	align-self: center;
	display: grid;
	gap: 32px;
	padding: 32px;
	width: 100%;
}

.item {
	display: flex;
	gap: 16px;
}
</style>