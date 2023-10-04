<script lang="ts">
	import TextField from "$components/TextField.svelte";
	import SimpleButton from "$components/buttons/SimpleButton.svelte";

	let inputFile: any;
</script>

<form method="POST" enctype="multipart/form-data">
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
	<input
		type="file"
		accept="image/*"
		bind:this={inputFile}
		style="display: none;"
		name="cover-image"
	/>
	<SimpleButton
		onClick={() => inputFile.click()}
		props={{
			label: "Upload image",
			variant: "tonal"
		}}
	/>

	<SimpleButton
		type="submit"
		props={{
			label: "Create card",
			variant: "filled"
		}}
	/>
</form>
