<script lang="ts">
	import { setPalette } from "$lib/index.js";
	import { onMount } from "svelte";

	export let data;
	let src: string | null | undefined = "/upload.webp";
	let inputFile: any;

	onMount(() => {
		let root = document.documentElement
		setPalette(root, data.palette)
	})

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
		<div class="head">
			<label class="photo" on:change={() => openFile()}>
				<input type="file" {src} bind:this={inputFile} style="display: none;"/>
				<img {src} alt="Profile"/>
			</label>
			<h2 class="name">Heron Nepomuceno</h2>
			<h3 class="work">Desenvolvedor Web</h3>
		</div>

		<div class="body">
			<div class="describe-section">
				<h4 class="title">Sobre mim</h4>
				<p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>

			<div class="list-section">
				<h4 class="title">Serviços</h4>
				<ul class="list">
					<li class="item">Desenvolvimento de Websites</li>
					<li class="item">Construção de Sistemas</li>
					<li class="item">Codificação de API Rest</li>
				</ul>
			</div>
		</div>
	</div>
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
	background: var(--surface-container-high);
	border-radius: var(--corner-medium);
	margin: 16px 0 32px 0;
	padding: 32px;
	width: 100%;
}

.head {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 48px;

	.photo {
		background-color: var(--on-primary);
		border-radius: var(--corner-full);
		height: 200px;
		margin-bottom: 32px;
		padding: 4px;
		width: 200px;

		img {
			border-radius: var(--corner-full);
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}

	.name {
		font: var(--title-large);
		margin-bottom: 8px;
	}

	.work {
		font: var(--headline-medium);
	}
}

.body {
	.describe-section {
		margin-bottom: 48px;
		width: 100%;
	}

	.title {
		font: var(--title-medium);
		margin-bottom: 32px;
	}

	.description, .item {
		font: var(--label-large);
	}

	.list {
		display: grid;
		gap: 4px 0;
		padding-left: 24px;
	}
}
</style>