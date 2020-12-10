import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, redTheme, blueTheme, greenTheme, GlobalStyles } from './theme/theme';
import { useState, useEffect } from 'react';
import { RedButton, BlueButton, GreenButton, LightButton } from './theme/buttons';

const Styles = styled.div`
	.card {
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
		width: 40%;
		background-color: ${(props => props.theme.cardBody)};
		border-radius: 0.3em;
		padding: 3em;
		transition: background-color 1s linear;

		position: absolute;
		top: calc(32%);
		left: calc(25%);
	}
	
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.heading{
		text-align: center;
	}

	body {
		position: relative;
	}
`;

function App() {

	/**
	 * Hooks to set theme and previous theme
	 */
	const [theme,setTheme] = useState(lightTheme);
	const [prevTheme, setPrevTheme] = useState(lightTheme);

	//Load user selected theme from local storage
	useEffect(() => {

			async function loadThemes() {

				//get theme from local storage
				const selected = localStorage.getItem("themeData")
				
				//load theme that was stared in local storage
				setThemeOnLoad(selected);
			}
			
			loadThemes();
			
		},[]	
	);

	/**
	 * 
	 * @param {*} value : the value of the selected theme
	 * 
	 * @description: set selected them to state and local storage. 
	 * aslo sets the previous theme selected
	 */
	const themeToggle = (value) => {
		
		//sets previous theme to current theme
		setPrevTheme(theme);

		//sets new theme value to local storage
		localStorage.setItem('themeData',value)
		
		//change theme to selected theme
		switch(value){
			case "red" : setTheme(redTheme); break;
			case "blue": setTheme(blueTheme); break;
			case "green": setTheme(greenTheme); break;
			case "light": setTheme(lightTheme); break;
			default: setTheme(lightTheme);break;
		}
		
	}

	/**
	 * 
	 * @param {*} e : gets the event. used to get the target value
	 * 
	 * @description: Used to change theme without setting previous theme
	 */

	const themePreview = (e) => {
		//gets the value of the event target
		const value = e.target.value;

		//sets selected theme
		switch(value){
			case "red" : setTheme(redTheme); break;
			case "blue": setTheme(blueTheme); break;
			case "green": setTheme(greenTheme); break;
			case "light": setTheme(lightTheme); break;
			default: setTheme(lightTheme);break;
		}
	}

	/**
	 * 
	 * @param {*} value : the value of the selected theme
	 * 
	 * @description: set selected them to state and set previous theme. 
	 * 
	 */
	const setThemeOnLoad = (value) => {
		//sets theme and previous theme to selected theme
		switch(value){
			case "red" : setTheme(redTheme); setPrevTheme(redTheme); break;
			case "blue": setPrevTheme(blueTheme); setTheme(blueTheme); break;
			case "green": setTheme(greenTheme); setPrevTheme(greenTheme); break;
			case "light": setTheme(lightTheme); setPrevTheme(lightTheme); break;
			default: setTheme(lightTheme); setPrevTheme(lightTheme);break;
		}
	}

	/**
	 * @description: sets theme to previous theme
	 */
	const setPreviousTheme = () => {
		setTheme(prevTheme);
	}

  return (
    <ThemeProvider theme = {theme}>
		<GlobalStyles/>
		<Styles>
			<div className="card">
				<h1 className="heading">Choose Your Theme</h1>
				
				<br/>
				<br/>
				<br/>
				
				<div style={{textAlign:"center"}}>
					<RedButton className="toggleBtn" onMouseEnter={(e) => themePreview(e)} onMouseOut={() => setPreviousTheme()} value="red" onClick={(e) => themeToggle(e.target.value)}>Red</RedButton>
					<GreenButton className="toggleBtn" onMouseEnter={(e) => themePreview(e)} onMouseOut={() => setPreviousTheme()} value="green" onClick={(e) => themeToggle(e.target.value)}>Green</GreenButton>
					<BlueButton className="toggleBtn" onMouseEnter={(e) => themePreview(e)} onMouseOut={() => setPreviousTheme()} value="blue" onClick={(e) => themeToggle(e.target.value)}>Blue</BlueButton>
					<LightButton className="toggleBtn" onMouseEnter={(e) => themePreview(e)} onMouseOut={() => setPreviousTheme()} value="light" onClick={(e) => themeToggle(e.target.value)}>Light</LightButton>
				</div>

			</div>
		</Styles>
	</ThemeProvider>
  );
}

export default App;
