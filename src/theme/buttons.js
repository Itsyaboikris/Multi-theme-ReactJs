import styled from "styled-components";

/**
 * Create button Styles for each button.
 */

export const RedButton = styled.button`
	background: red;
	border-radius: 3px;
	border: 2px solid red;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1.2em;

	&:hover{
		color:red;
		background: transparent;
	}
`;

export const GreenButton = styled.button`
	background: green;
	border-radius: 3px;
	border: 2px solid green;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1.2em;

	&:hover{
		color:green;
		background: transparent;
	}
`;

export const BlueButton = styled.button`
	background: blue;
	border-radius: 3px;
	border: 2px solid blue;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1.2em;

	&:hover{
		color:blue;
		background: transparent;
	}
`;

export const LightButton = styled.button`
	background: white;
	border-radius: 3px;
	border: 2px solid white;
	color: black;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 1.2em;

	&:hover{
		color:white;
		background: transparent;
	}
`;