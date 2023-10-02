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
	position: fixed;
	transform: translateY(480px);
	width: 100%;
}

.show {
	transform: translateY(0);
}
</style>
