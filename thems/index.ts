export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
    primaryFontColor: "#000",
    secondaryFontColor: "#7f808fff",
    background: "#fff",
};

export const dark: ThemeType = {
    primaryFontColor: "#fff",
    secondaryFontColor: "#fff",
    background: "#000",
};

const theme = light; // set the light theme as the default.
export default theme;
