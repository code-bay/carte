import { hexFromArgb, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

type Map = {
	[key: string]: string | undefined
}

type Theme = "dark" | "light"

export function generateColorPalette(color: string, variant: Theme = "dark") {
	const theme = themeFromSourceColor(argbFromHex(color), []); 
	const hexColors: Map = {};

	for (const [key, value] of Object.entries(theme.schemes[variant].toJSON())) {
		hexColors[key] = hexFromArgb(value);
	}

	return hexColors;
}
