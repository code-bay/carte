<script lang="ts">
	import Icon from "@iconify/svelte";
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
	import type { PageData } from './$types';

	export let data: PageData;

	let card: any;
	let coverImage: any;

	function saveCard() {
		toBlob(card).then(blob => {
			if (blob) {
				saveAs(blob, 'card.png')
			}		
		})
	}

	let carte = {
		company: "Higia Tech",
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
		name: "Heron Nepomuceno",
		role: "Desenvolvedor Web",
		type: "horizontal"
	}

	const customization = [
		{ itemLimit: 3, label: "Horizontal", value: "horizontal" },
		{ itemLimit: 4, label: "Vertical", value: "vertical" }
	]

	$: config = customization.find(i => i.value === carte.type) ?? "horizontal"

	const infoIcons = [
		{label: "Email", value:"mdi:email"},
		{label: "Facebook", value:"ri:facebook-fill"}, // better going for the simpler and cleaner icon
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
		>
			<SelectInput name="carte-type" bind:value={carte.type} options={customization}/>
			{#each {length: config.itemLimit} as item, i} 
				<SelectInput name="carte-info_{i+1}-icon" bind:value={carte[`info_${i+1}`].icon} options={infoIcons}/>
			{/each}

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
			<input type="color" name="color"/>
			<input
				type="file"
				accept="image/*"
				bind:this={coverImage}
				style="display: none;"
				name="cover-image"
			/>
			<SimpleButton
				onClick={() => coverImage.click()}
				props={{
					label: "Upload image",
					variant: "tonal"
				}}
			/>
		</form>

		<div class="bottom-actions" slot="footer">
			<SimpleButton
			type="submit"
			props={{
				label: "Save",
				variant: "filled",
				form: "card-builder"
			}}/>
	
			<SimpleButton
			onClick={() => saveCard()}
			props={{
				label: "Download",
				variant: "tonal"
			}}/>
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
		}}/>
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
</style>