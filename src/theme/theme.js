import {createGlobalStyle} from "styled-components";
/**
 * Create different themes.
 */
export const lightTheme = {
	body: "#fff",
	fontColor: "#000",
	cardBody: "#ede8e8"
}

export const redTheme = {
	body: "red",
	fontColor: "#000",
	cardBody: "#fa736e"
}

export const blueTheme = {
	body: "blue",
	fontColor: "#000",
	cardBody: "#8dc6fc"
}

export const greenTheme = {
	body: "green",
	fontColor: "#000",
	cardBody: "#c1ffba"
}

/**
 * Create global styles component and use css values fron the theme selected
 */

export const GlobalStyles = createGlobalStyle `
	body {
		background-color: ${props => props.theme.body};
		color: ${props => props.theme.fontColor};

		transition: background-color 1s linear;
	}
`;
