<div class="bottom-sheet">
	<slot />
</div>

<style lang="scss">
.bottom-sheet {
	background: var(--outline-variant);
	border-radius: var(--corner-extra-large-top);
	bottom: 0;
	max-height: 480px;
	overflow-y: auto;
	padding: 32px 16px 16px 16px;
	position: absolute;
	width: 100%;
}
</style>
