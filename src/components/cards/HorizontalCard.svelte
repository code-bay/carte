<script lang="ts">
	import Icon from "@iconify/svelte";

	export let carte: any;

	let defaultImage: string = "/avatar.png";
</script>

<div class="card">
	<div class="card__head">
		<img class="photo" src={carte.image ?? defaultImage} alt="Profile"/>
	</div>
	<div class="card__body">
		<h2 class="carte-name">{carte.name}</h2>
		<h3 class="carte-role">{carte.role}</h3>
		<span class="separator"></span>

		<div class="infos">
			{#if carte.info_1.main || carte.info_1.alt}
				<div class="item">
					<div class="symbol"><Icon icon={carte.info_1.icon}/></div>
					<div class="description">
						{#if carte.info_1.main} <div>{carte.info_1.main}</div> {/if}
						{#if carte.info_1.alt} <div>{carte.info_1.alt}</div> {/if}
					</div>
				</div>
			{/if}
			{#if carte.info_2.main || carte.info_2.alt}
				<div class="item">
					<div class="symbol"><Icon icon={carte.info_2.icon}/></div>
					<div class="description">
						{#if carte.info_2.main} <div>{carte.info_2.main}</div> {/if}
						{#if carte.info_2.alt} <div>{carte.info_2.alt}</div> {/if}
					</div>
				</div>
			{/if}
			{#if carte.info_3.main || carte.info_3.alt}
				<div class="item">
					<div class="symbol"><Icon icon={carte.info_3.icon}/></div>
					<div class="description">
						{#if carte.info_3.main} <div>{carte.info_3.main}</div> {/if}
						{#if carte.info_3.alt} <div>{carte.info_3.alt}</div> {/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="back-card">
	<div class="back-card__content">
		<img class="photo" src={carte.image ?? defaultImage} alt="company"/>
		<div class="carte-company carte-company--back">{carte.company}</div>
	</div>
	<svg class="pattern" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
		<path d="m468.8 266.7 11.2-11.3V287c-6.9 2.1-14.7-2.8-15.4-10-.6-4 1.5-7.6 4.1-10.3ZM258.9 276.9c2.2-2.3 4.8-4.4 8-5 6.9-1.4 14.3 5 13.7 12 0 5-3.9 8.5-7.1 11.6C211.9 357 150.7 418.6 89 480H55.8c17.8-17.2 35-35.2 52.7-52.6l150.4-150.5ZM316.1 272.1c7.6-2.2 15.7 5 14.4 12.8-.5 2.6-1.4 5.3-3.5 7.1-5.9 5.9-11.6 11.8-17.6 17.5-5.2 5.2-15.3 3.4-18-3.6-3.1-4.6-.9-10.4 2.6-14l16-16c1.6-1.8 3.8-3.1 6.1-3.8ZM354.4 282.6c3.5-1 7.5-.8 10.4 1.5 4 2.8 6.1 8.3 4.4 12.9-.7 3.5-3.6 5.8-6 8.2-15.2 15.5-30.3 31-45.7 46.4a12.8 12.8 0 0 1-8.4 4c-5.3.2-10.3-3.6-11.5-8.7-1.5-4.2.3-9 3.4-12 15-15 29.8-30.1 44.6-45.3 2.7-2.6 5.1-5.9 8.8-7ZM442.2 293.2c4.1-4.8 12.2-5.6 16.8-1.2a12 12 0 0 1 .3 17.3L288.8 480h-33.3c8.7-8.4 17.2-17.2 25.8-25.7 53.6-53.8 107.3-107.4 161-161ZM472.6 316c.2-4.8 4.3-7.9 7.4-11.1v23.5c-4.6-2.3-8.2-7-7.4-12.3ZM274 313.9c7.2-2.6 15.4 3.6 15.2 11.1.2 3.3-1.5 6.2-3.6 8.5L192 427.1c-3.4 3.2-6.2 7.4-10.9 8.8-5.5 1.6-12-1.6-14-7-2-4.1-.4-9 2.4-12.3l97-97.1c2.2-2.2 4.3-4.8 7.6-5.6ZM364.5 322.6c6-2 13.4 1.5 15 7.8 1.6 4.5-.4 9.3-3.7 12.3-43.5 43-86.8 86-130.3 128.8-5.5 5.7-16.4 3.3-18.8-4.3-2.1-4.5-.3-10 3.2-13.2l129.2-127.8c1.6-1.5 3.3-3 5.4-3.6ZM156.4 331.8c7-3.8 16.1 1.4 17 9 .6 4.5-2 8.5-5.1 11.4-10.9 10.5-21.6 21.2-32.5 31.6-5.6 5.6-16.7 3.1-18.8-4.7-2-3.7-.5-8.1 1.8-11.3l33.4-32.8c1.3-1.2 2.6-2.4 4.2-3.3ZM450.3 335.3c2.5-2.7 5.9-4.9 9.7-4.7 7.1-.2 13.2 7.4 11.4 14.3-1 4.2-4.6 7-7.5 10-41.8 41.6-83.4 83.5-125.3 125.1h-33.2l145-144.7ZM426.5 408.5l53.5-53.6V388c-11.8 12-23.7 23.6-35.4 35.5a14.3 14.3 0 0 1-6.6 4.5 11.6 11.6 0 0 1-14.2-7.6c-1.9-4-.1-8.8 2.7-12ZM278.5 357.7c6.8-3.8 16.5 1.4 16.7 9.3.9 5.3-3 9.4-6.3 13-3 3-5.5 7-9.9 8.1-7 2-15-3.8-14.8-11.1-.4-4.5 2.8-8.1 5.7-11 2.8-2.9 5-6.4 8.6-8.3ZM93.8 392.8c2-2.1 4.4-3.8 7.3-4.1a12 12 0 0 1 13.5 12.2c-.3 4.8-4 8.3-7.2 11.4L40.2 480H7.1C36 451 65 422 93.8 392.8ZM243.5 392.5c3.3-3.4 8.5-5 13-3.2 6 2 9.5 9.7 6.7 15.5-1.8 3.8-5.2 6.4-8 9.4-22 22-44 43.8-65.8 65.8h-33.3l87.4-87.5ZM465.7 418.7c3.3-4.3 8.8-7.1 14.3-5.4v24.2c-11.4 11.5-22.9 23-34.4 34.3-5.6 5.5-16.5 2.8-18.6-4.8-1.9-3.7-.5-8 1.7-11.3 12.2-12.4 24.7-24.6 37-37ZM406.1 429c5.7-3.1 13.5 0 16 5.7 1.6 4.6 1 10.2-3 13.5-10.5 10.6-21 21.3-31.6 31.8h-33.2c14-13.6 27.5-27.5 41.3-41.3 3.4-3.3 6.4-7.3 10.5-9.7ZM145.1 441c5.2-5.3 15.3-3.4 18.3 3.5 2.6 4.4 1.2 10.1-2.3 13.6L139.4 480H106c13.1-12.8 25.9-26 39-39ZM454.3 480c8.8-8.3 17.1-17 25.7-25.6V480h-25.8Z"/>
	</svg>
</div>

<style lang="scss">	
.card {
	transform: scale(1);
	background: var(--surface-variant); 
	border-radius: var(--corner-medium);
	color: var(--on-surface-variant);
	display: flex;
	flex-flow: row-reverse;
	height: 5.1cm;
	overflow: hidden;
	width: 8.9cm;

	&__head {
		align-items: center;
		background: var(--primary); 
		display: flex;
		flex-direction: column;
		width: 64px;

		.photo {
			background: var(--surface-variant);
			border-radius: var(--corner-full);
			height: 96px;
			right: 32px;
			padding: 4px;
			position: relative;
			top: 32px;
			width: 96px;
			z-index: 1;
		}

		img {
			border-radius: var(--corner-full);
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}

	&__body {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 12px;
	}
}

.back-card {
	background: var(--surface-variant); 
	border-radius: var(--corner-medium);
	color: var(--on-surface-variant);
	display: grid;
	height: 5.1cm;
	overflow: hidden;
	place-items: center;
	position: relative;
	width: 8.9cm;

	&__content {
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 64px;
	}

	.photo {
		background: var(--surface-variant);
		border-radius: var(--corner-full);
		height: 80px;
		right: 32px;
		padding: 4px;
		width: 80px;
		z-index: 1;
	}

	img {
		border-radius: var(--corner-full);
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
}

.pattern {
	bottom: 0;
	fill: var(--primary);
	position: absolute;
	right: 0;
	width: 120px;
}

.separator {
	border: 1px solid var(--primary);
	height: 0;
	margin-bottom: 20px;
	width: 32px;
}

.infos {
	display: grid;
	flex-direction: column;
	flex: 1;
	gap: 6px;

	.item {
		align-items: center;
		display: flex;
	}

	.symbol {
		background: var(--on-primary);
		border-radius: var(--corner-full);
		display: grid;
		height: 28px;
		margin-right: 8px;
		min-height: 30px;
		min-width: 30px;
		place-items: center;
		width: 28px;

		:global(.iconify) {
			height: 18px;
			width: 18px;
		}
	}

	.description {
		font: var(--label-small);
	}
}

// Carte info

.carte-company {
	color: var(--on-primary);
	font: var(--title-medium);
	padding: 12px 0 4px;

	&--back {
		color: var(--primary);
		padding: 4px 0;
		white-space: nowrap;
	}
}

.carte-name {
	color: var(--primary);
	font: var(--title-small);
}

.carte-role {
	padding-bottom: 4px;
	font: var(--label-small);
}
</style>