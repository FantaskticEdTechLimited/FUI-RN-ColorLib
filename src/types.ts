// Merge Enum to single Enum
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

enum Default_Theme_Colors {
	DEFAULT_MAIN_THEME = "#3246FF",
	DEFAULT_SUB_THEME = "#F1F3FF",
}

enum Primary_Colors { 
	PRIMARY_BLACK = "#202020",
	PRIMARY_DARK = "#3C3D62",
	PRIMARY_GREY = "#A8A9B7",
	PRIMARY_LIGHT = "#F4F5F6",
	PRIMARY_WHITE = "#FFFFFF",
}

enum Secondary_Colors {
	SECONDARY_RED = "#F95141",
	SECONDARY_ORANGE = "#FFB131",
	SECONDARY_YELLOW = "#FFCD33",
	SECONDARY_GREEN = "#2ED47A",
	SECONDARY_BLUE = "#109CF1",
	SECONDARY_PURPLE = "#885AF8",
}

enum Special_Colors {
	STROKE = "#00000014",
	WHITE_GLASS_BG = "#FFFFFFCC",
} 

export const FColorTypes = {
	...Default_Theme_Colors,
	...Primary_Colors,
	...Secondary_Colors,
	...Special_Colors, 
};

export type FColorTypes = typeof FColorTypes;
