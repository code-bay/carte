import { hexFromArgb, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

type Map = {
  [key: string]: string | undefined
}

export function generateColorPalette(color: string) {
  const theme = themeFromSourceColor(argbFromHex(color), []); 
  const hexColors: Map = {};

  for (const [key, value] of Object.entries(theme.schemes.dark.toJSON())) {
    hexColors[key] = hexFromArgb(value);
  }

  return hexColors;
}
