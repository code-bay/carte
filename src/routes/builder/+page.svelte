<script lang="ts">
	import Icon from "@iconify/svelte";
	import SideSheet from "$components/SideSheet.svelte";
	import SimpleButton from "$components/buttons/SimpleButton.svelte";
	import TextField from "$components/TextField.svelte";
	import FloatingActionButton from "$components/buttons/FloatingActionButton.svelte";
	import { toBlob } from 'html-to-image';
	import { saveAs } from "file-saver";
	import { innerWidth } from "$lib/stores/innerWidth";
	import { isVisible } from "$lib/stores/isVisible";
	import type { PageData } from './$types';

	export let data: PageData;

	let src: string | null | undefined = "/upload.webp";
	let inputFile: any;
	let card: any;
	let coverImage: any;

	function saveCard() {
		toBlob(card).then(blob => {
			if (blob) {
				saveAs(blob, 'card.png')
			}		
		})
	}

  function openFile() {
		if (inputFile.files[0]) {
			const reader = new FileReader();
			reader.onload = () => {
				if(typeof reader.result == "string") {
					src = reader.result;
				}
			};
			reader.readAsDataURL(inputFile.files[0]);
		}
  }
</script>

<div class="builder">
	<div class="card" bind:this={card}>
		<div class="presentation">
			<label class="photo" on:change={() => openFile()}>
				<input type="file" {src} bind:this={inputFile} style="display: none;"/>
				<img {src} alt="Profile"/>
			</label>
			<h2 class="name">{data.user?.name ? data.user.name : "John Doe"}</h2>
			<h3 class="work">{data.user?.job_title ? data.user.job_title : "Web Developer"}</h3>
			<div class="underline"></div>

			<div class="infos">
				<div class="item">
					<div class="icon"><Icon icon="mdi:phone"/></div>
					<div class="description">
						<span>{data.user?.phone ? data.user.phone : "+1 (999) 999-9999"}</span>
					</div>
				</div>

				<div class="item">
					<div class="icon"><Icon icon="mdi:link"/></div>
					<div class="description">
						<span>{data.user?.website ? data.user.website : "https://mysite.com"}</span>
					</div>
				</div>

				<div class="item">
					<div class="icon"><Icon icon="mdi:map-marker-outline"/></div>
					<div class="description">
						<!-- * MAX LENGHT 48 -->
						<span>{data.user?.adress ? data.user.adress : "Runolfsson Squares"}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<SideSheet props={{ title: "Card editor" }}>
		<form 
			id="card-builder" 
			slot="body" 
			method="POST" 
			enctype="multipart/form-data"
		>
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
	flex-direction: column;
	justify-content: center;
	width: 100%;

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

.card {
	aspect-ratio: 6/4;
	background: var(--surface-variant);
	border-radius: var(--corner-medium);
	color: var(--on-surface-variant);
	display: flex;
	height: 192px;
	padding: 16px;
	position: relative;
	width: 336px;
}

.presentation {
	display: flex;
	flex-direction: column;
	justify-content: center;

	.photo {
		background: var(--primary);
		border-radius: var(--corner-full);
		height: 80px;
		margin-bottom: 32px;
		padding: 4px;
		position: absolute;
		right: 8px;
		width: 80px;

		img {
			border-radius: var(--corner-full);
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}

	.name {
		font: var(--title-small);
		margin-bottom: 2px;
	}

	.work {
		padding-bottom: 4px;
		font: var(--label-medium);
	}

	.underline {
		border: 1px solid var(--primary);
		height: 0;
		margin-bottom: 16px;
		width: 32px;
	}
}

.infos {
	display: flex;
	flex-direction: column;
	width: 168px;

	.item {
		align-items: center;
		display: flex;
		margin-bottom: 6px;
	}

	.icon {
		background: var(--on-primary);
		border-radius: var(--corner-full);
		display: grid;
		margin-right: 8px;
		padding: 2px;

		:global(.iconify) {
			height: 20px;
			width: 20px;
		}
	}

	.description {
		display: flex;
		flex-direction: column;
		font: var(--label-small);
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