<script lang="ts">
	import { notifications, dismissNotification } from '$lib/stores/notifications';
	import { grow } from '$lib/transitions/grow';
	import { fade } from 'svelte/transition';
	import Icon from "@iconify/svelte";

	let visibleSnackbar: ReturnType<typeof setTimeout>
	let isSnackbarVisible: boolean = false
	let nextSnackbar: object = {}
	
	function closeSnackbar() {
		clearTimeout(visibleSnackbar);
		dismissNotification()
		isSnackbarVisible = false
	}

	$: {
		if ($notifications.length > 0 && !isSnackbarVisible) {
			isSnackbarVisible = true
			nextSnackbar = {}

			visibleSnackbar = setTimeout(() => {
				dismissNotification()
				isSnackbarVisible = false
			}, $notifications[0].time);
		}
	}
	

</script>
<div class="snackbar-area">
	{#if $notifications.length}
		{#key nextSnackbar}
			<div class="snackbar" in:grow|global={{ delay: 1000, duration: 300}} out:fade|global={{ duration: 150 }}>
				<div class="supporting-text">{$notifications[0].text}</div>
				<div class="actions">
						<!-- TODO: Snackbar Actions-->
						<!-- {#if $notifications[0].action}
							
						{/if} -->
						{#if $notifications[0].close}
							<button class="close-button" on:click={() => closeSnackbar()}>
								<Icon icon="material-symbols:close-rounded"/>
							</button>
						{/if}
				</div>
			</div>
		{/key}
	{/if}
</div>

<style lang="scss">
.snackbar-area {
	bottom: 16px;
	display: grid;
	justify-items: center;
	left: 0;
	padding: 0 16px;
	position: fixed;
	z-index: 2;
	width: 100%;
	pointer-events: none;
}

.snackbar {
	align-items: center;
	background: var(--inverse-surface);
	border-radius: 4px; // change to shape in d. tokens (future)
	display: flex;
	grid-row: 1;
	grid-column: 1;
	height: 48px;
	justify-content: space-between;
	min-width: 328px;
	pointer-events: auto;
	width: auto;
}

.supporting-text {
	color: var(--inverse-on-surface);
	font: var(--body-medium);
	padding: 0 16px;
}

.actions {
	align-items: center;
	display: flex;

	:global(.iconify) {
		color: var(--inverse-on-surface);
		height: 24px;
		width: 24px;
	}
}

.close-button {
	display: flex;
	padding-right: 12px;
}
</style>
