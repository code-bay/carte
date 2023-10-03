<script lang="ts">
	import { innerWidth } from "$lib/stores/innerWidth";
</script>

<div class="bottom-sheet" class:isOpen={$innerWidth < 1080}>
	<slot />
</div>

<style lang="scss">
.bottom-sheet {
	background: var(--outline-variant);
	border-radius: var(--corner-extra-large-top);
	max-width: 528px;
	min-width: 360px;
	overflow-y: auto;
	padding: 32px 16px 16px 16px;
	position: fixed;
	transform: translateY(480px);
	width: 100%;
	z-index: 3;
}

.isOpen {
	bottom: 0;
	transform: translateY(0);
}
</style>
