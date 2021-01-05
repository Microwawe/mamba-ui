export interface TailwindColorPalette {
	[color: string]: Shades;
}

export interface TailwindColor {
	name: string;
	shades: Shades;
}

export interface Shades {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}
