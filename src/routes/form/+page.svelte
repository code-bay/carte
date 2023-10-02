<script lang="ts">
	import TextField from "$components/TextField.svelte";
	import SimpleButton from "$components/buttons/SimpleButton.svelte";

	let inputFile: any;

	function uploadImage() {
		console.log('clicado')
	}
</script>

<form method="POST">
	<TextField props={{
		label: "Name",
		name: "name"
	}}/>
	<TextField props={{
		label: "Job title",
		name: "job-title"
	}}/>
	<TextField
		type="tel"
		props={{
			label: "Phone",
			name: "phone"
		}}
	/>
	<TextField
		type="email"
		props={{
			label: "Email",
			name: "email"
		}}
	/>
	<TextField props={{
		label: "Website",
		name: "website"
	}}/>
	<TextField
		props={{
			label: "Adress",
			name: "adress"
		}}
	/>
	<TextField
		type="color"
		props={{
			label: "Color",
			name: "color"
		}}
	/>
	<!-- <input type="file" id="coverImage" bind:this={inputFile} style="display: none;"/>
	<button on:click|preventDefault={inputFile.click()}>Selecione um arquivo</button>
	<SimpleButton
		action={() => {inputFile.click()}}
		props={{
			label: "Upload image",
			variant: "tonal"
		}}
	/> -->

	<SimpleButton
		type="submit"
		props={{
			label: "Create card",
			variant: "filled"
		}}
	/>
</form>
