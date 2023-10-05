<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let coverImage: any;
	let src: any;

	function openFile() {
		if (coverImage.files[0]) {
			const reader = new FileReader();
			reader.onload = () => {
				if(typeof reader.result == "string") {
					src = reader.result;
				}
			};
			reader.readAsDataURL(coverImage.files[0]);
		}
  }

	function pushImageSrc() {
		setTimeout(() => {
			dispatch('image', {
				src: src
			});
		}, 50)
	}
</script>

<label class="image-input">
	<input
		type="file"
		accept="image/*"
		bind:this={coverImage}
		style="display: none;"
		name="cover-image"
		on:change={() => openFile()}
		on:change={pushImageSrc}
	/>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img class="photo" {src} alt="Upload image here!"/>
</label>

<style lang="scss">
.image-input {
	align-items: center;
	display: flex;
	justify-content: center;
}

.photo {
	align-items: center;
	background-color: var(--primary);
	border-radius: var(--corner-full);
	color: var(--on-primary);
	display: flex;
	font: var(--label-medium);
	height: 96px;
	justify-content: center;
	object-fit: cover;
	text-align: center;
	width: 96px;
}

input[type="file"] {
	display: none;
}
</style>
