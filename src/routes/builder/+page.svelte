<script lang="ts">
	import SideSheet from "$components/SideSheet.svelte";
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import TextField from "$components/TextField.svelte";
	import FloatingActionButton from "$components/buttons/FloatingActionButton.svelte";
	import SelectInput from "$components/SelectInput.svelte";
	import HorizontalCard from "$components/cards/HorizontalCard.svelte";
	import VerticalCard from "$components/cards/VerticalCard.svelte";
	import { toBlob } from 'html-to-image';
	import { saveAs } from "file-saver";
	import { innerWidth } from "$lib/stores/innerWidth";
	import { isVisible } from "$lib/stores/isVisible";
	import { enhance } from "$app/forms";
	import { generateColorPalette, setPalette } from "$lib/index";
	import type { PageData } from './$types';
	import ColorInput from "$components/ColorInput.svelte";

	export let data: PageData;

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
		name: "Dario Brito Calcinhas",
		role: "CTO Higia",
		company: "Higia Tech",
		image: coverImage ? coverImage.files[0] : null,
		info_1: {
			icon: "mdi:phone",
			main: "+55 (86) 99594-199",
			alt: "+55 (86) 99594-199"
		},
		info_2: {
			icon: "link",
			main: "https://heron.pages.dev",
			alt: "https://heron.pages.dev"
		},
		info_3: {
			icon: "location",
			main: "Parnaíba, Piauí - Bairro Dirceu Arcoverde",
			alt: ""
		},
		info_4: {
			icon: "twitter",
			main: "r",
			alt: ""
		},
		type: "horizontal"
	}

  function openFile() {
		if (coverImage.files[0]) {
			const reader = new FileReader();
			reader.onload = () => {
				if(typeof reader.result == "string") {
					carte.image = reader.result;
				}
			};
			reader.readAsDataURL(coverImage.files[0]);
		}
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

			<SimpleButton
				onClick={() => coverImage.click()}
				props={{
					label: "Upload image",
					variant: "tonal"
				}}
			/>
			
			<input
				type="file"
				accept="image/*"
				bind:this={coverImage}
				style="display: none;"
				name="cover-image"
				on:change={() => openFile()}
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
