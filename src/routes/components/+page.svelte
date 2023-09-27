<script lang="ts">
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import FloatingActionButton from "$components/buttons/FloatingActionButton.svelte";
	import IconButton from "$components/buttons/IconButton.svelte"
  import TextField from "$components/TextField.svelte";
	import Divider from "$components/Divider.svelte"
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

	<Divider />

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

	<Divider />

	<div class="item">
		<IconButton props={{
			icon: "mdi:heart-outline",
			variant: "standard"
		}}/>

		<IconButton props={{
			icon: "mdi:heart",
			variant: "filled",
			href: "https://www.youtube.com/watch?v=0Q8az-0xnVA",
			target: "_blank"
		}}/>
	</div>

	<Divider />

	<div class="item">
		<TextField props={{
			label: "Escreva aqui!",
			name: "test"
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