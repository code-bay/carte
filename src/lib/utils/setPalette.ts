export function setPalette(root: any, palette: any) {
	root.style.setProperty('--primary', palette.primary);
	root.style.setProperty('--on-primary', palette.onPrimary);
	root.style.setProperty('--primary-container', palette.primaryContainer);
	root.style.setProperty('--on-primary-container', palette.onPrimaryContainer);
	root.style.setProperty('--secondary-container', palette.secondaryContainer);
	root.style.setProperty('--on-secondary-container', palette.onSecondaryContainer);
	root.style.setProperty('--tertiary-container', palette.tertiaryContainer);
	root.style.setProperty('--on-tertiary-container', palette.onTertiaryContainer);
	root.style.setProperty('--surface', palette.surface);
	root.style.setProperty('--on-surface', palette.onSurface);
	root.style.setProperty('--surface-variant', palette.surfaceVariant);
	root.style.setProperty('--on-surface-variant', palette.onSurfaceVariant);
	root.style.setProperty('--outline', palette.outline);
	root.style.setProperty('--outline-variant', palette.outlineVariant);
	root.style.setProperty('--error', palette.error);
	root.style.setProperty('--on-error', palette.onError);
	root.style.setProperty('--inverse-surface', palette.inverseSurface);
	root.style.setProperty('--inverse-on-surface', palette.inverseOnSurface);
}
