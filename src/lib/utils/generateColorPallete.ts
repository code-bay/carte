import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";

export function generateColorPallete(color: string) {
  const theme = themeFromSourceColor(argbFromHex(color), [
    {
      name: "custom-1",
      value: argbFromHex(color),
      blend: true,
    },
  ]);

  applyTheme(theme, {target: document.body, dark: true});
}
