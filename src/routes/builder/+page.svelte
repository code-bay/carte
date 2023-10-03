<script lang="ts">
	import Icon from "@iconify/svelte";
	import BottomSheet from "$components/sheets/BottomSheet.svelte";
	import SideSheet from "$components/sheets/SideSheet.svelte";

	let src: string | null | undefined = "/upload.webp";
	let inputFile: any;

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
	<div class="card">
		<div class="presentation">
			<label class="photo" on:change={() => openFile()}>
				<input type="file" {src} bind:this={inputFile} style="display: none;"/>
				<img {src} alt="Profile"/>
			</label>
			<h2 class="name">Heron Nepomuceno</h2>
			<h3 class="work">Desenvolvedor Web</h3>
			<div class="underline"></div>

			<div class="infos">
				<div class="item">
					<div class="icon"><Icon icon="mdi:phone"/></div>
					<div class="description">
						<span>+55 (86) 99594-1993</span>
						<span>+55 (86) 99594-1993</span>
					</div>
				</div>

				<div class="item">
					<div class="icon"><Icon icon="mdi:link"/></div>
					<div class="description">
						<span>https://heron.pages.dev/</span>
					</div>
				</div>

				<div class="item">
					<div class="icon"><Icon icon="mdi:map-marker-outline"/></div>
					<div class="description">
						<!-- * MAX LENGHT 48 -->
						<span>Parnaíba, Piauí - Bairro Dirceu Arcoverde</span>
					</div>
				</div>
			</div>
		</div>
		<!-- <FloatingActionButton props={{
			variant: "primary",
			icon: "mdi:application-edit-outline",
			label: "Edit card",
			fixed: true,
			size: "extended"
		}}/> -->
	</div>
	<SideSheet props={{ title: "Card builder"}}>
		<!-- * DESKTOP FORM FIELDS HERE -->
	</SideSheet>
	<BottomSheet>
		<!-- * MOBILE FORM FIELDS HERE -->
	</BottomSheet>
</div>

<style lang="scss">
.builder {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
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
</style>