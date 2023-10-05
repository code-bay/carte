<script lang="ts">
	import type { PageData } from './$types';
	import SideSheet from "$components/SideSheet.svelte";
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import TextField from "$components/TextField.svelte";
	import FloatingActionButton from "$components/buttons/FloatingActionButton.svelte";
	import SelectInput from "$components/SelectInput.svelte";
	import HorizontalCard from "$components/cards/HorizontalCard.svelte";
	import VerticalCard from "$components/cards/VerticalCard.svelte";
	import ColorInput from "$components/ColorInput.svelte";
	import ImageInput from "$components/ImageInput.svelte";
	import SnackBar from '$components/SnackBar.svelte';
	import { toBlob } from 'html-to-image';
	import { saveAs } from "file-saver";
	import { innerWidth } from "$lib/stores/innerWidth";
	import { isVisible } from "$lib/stores/isVisible";
	import { enhance } from "$app/forms";
	import { generateColorPalette, setPalette } from "$lib/index";
	import { createNotification } from "$lib/stores/notifications";

	export let data: PageData;
	export let form;

	$: if(form?.ok) createNotification({text: "Card save successfully", time: 3000})

	let card: any;
	let coverImage: any;
	let carteColor = data.userColor;

	$: if(carteColor) {
		const palette = generateColorPalette(carteColor);
		setPalette(document.querySelector(':root'), palette)
	}

	function saveCard() {
		toBlob(card).then(blob => {
			if (blob) {
				saveAs(blob, 'card.png')
			}		
		})
	}

	let carte = {
		name: "John Doe",
		role: "Web Developer",
		company: "Deta Enterprise",
		image: coverImage ? coverImage.files[0] : null,
		info_1: {
			icon: "mdi:phone",
			main: "+49 1522 343333",
			alt: "+49 1522 343333"
		},
		info_2: {
			icon: "mdi:link",
			main: "https://example.com",
			alt: ""
		},
		info_3: {
			icon: "mdi:location",
			main: "New York, USA",
			alt: ""
		},
		info_4: {
			icon: "mdi:twitter",
			main: "john_twitter",
			alt: ""
		},
		type: "horizontal"
	}

	const customization = [
		{ itemLimit: 3, label: "Horizontal", value: "horizontal" },
		{ itemLimit: 4, label: "Vertical", value: "vertical" }
	]

	$: config = customization.find(i => i.value === carte.type) ?? "horizontal"

	const infoIcons = [
		{label: "Email", value:"mdi:email"},
		{label: "Facebook", value:"ri:facebook-fill"},
		{label: "Generic link", value:"mdi:link"},
		{label: "Location", value:"mdi:location"},
		{label: "Phone", value:"mdi:phone"},
		{label: "Twitter", value:"mdi:twitter"},
		{label: "X / Twitter", value:"ri:twitter-x-fill"}
	]


	function setImageSrc(event) {
		carte.image = event.detail.src;
	}
</script>

<div class="builder builder--{carte.type}">
	{#if carte.type === "horizontal"}
		<HorizontalCard {carte} />
	{:else if carte.type === "vertical"}
		<VerticalCard {carte} />
	{/if}

	<SideSheet props={{ title: "Card editor" }}>
		<form 
			id="card-builder" 
			slot="body" 
			method="POST" 
			enctype="multipart/form-data"
			use:enhance={() => {
				return async ({ update }) => {
					update({ reset: false });
				};
			}}
		>
			<ImageInput on:image={setImageSrc}/>
			
			<ColorInput 
				bind:value={carteColor}
				props={{
					label: "Color",
					name: "color"
				}}
			/>

			<SelectInput 
				name="carte-type" bind:value={carte.type} 
				options={customization}
			/>

			<TextField 
				bind:value={carte.name} 
				props={{ label: "Name", name: "name" }}
			/>

			<TextField 
				bind:value={carte.role} 
				props={{ label: "Role", name: "job-title" }}
			/>

			{#each {length: config.itemLimit} as item, i}
				<div class="info-title">Info {i+1}</div>
				<SelectInput 
					name="carte-icon{i+1}-icon" bind:value={carte[`info_${i+1}`].icon} 
					options={infoIcons}
				/>

				<TextField
				bind:value={carte[`info_${i+1}`].main} 
					props={{
						label: `Main ${i+1}`,
						name: `carte-info_${i+1}-main`
					}}
				/>

				<TextField
				bind:value={carte[`info_${i+1}`].alt} 
					props={{
						label: `Alternative ${i+1}`,
						name: `carte-info_${i+1}-alt`
					}}
				/>
			{/each}
		</form>

		<div class="bottom-actions" slot="footer">
			<SimpleButton
				type="submit"
				props={{ label: "Save", variant: "filled", form: "card-builder" }}
			/>

			<SimpleButton
				onClick={() => saveCard()}
				props={{ label: "Download", variant: "tonal" }}
			/>
		</div>
	</SideSheet>

	{#if $innerWidth < 840 && $isVisible === false}
		<FloatingActionButton 
			onClick={() => $isVisible = true}
			props={{
				icon: "mdi:application-edit",
				variant: "primary",
				label: "Open editor",
				size: "extended",
				fixed: true
			}}
		/>
	{/if}
</div>
<SnackBar />

<style lang="scss">
.builder {
	align-items: center;
	display: flex;
	gap: 8px;
	justify-content: center;
	width: 100%;

	&--horizontal {
		flex-direction: column;
	}

	@media (min-width: 840px) {
		padding-right: 400px + 32px;
	}

	@media (min-width: 1080px) {
		padding-right: 400px + 64px;
	}

	@media (min-width: 1240px) {
		padding-right: calc(400px + 96px);
	}
}

#card-builder {
	display: flex;
	flex-direction: column;
	gap: 16px 0;
}

.bottom-actions {
	align-items: center;
	display: flex;
	gap: 0 8px;
	width: 100%;
}

.info-title {
	font: var(--title-medium);
	margin: 8px 0;
}
</style>
