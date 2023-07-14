import styled from 'styled-components';

export default styled.div`
	border: none;
	color: black;
	letter-spacing: 0.7px;
	label {
		color: #5d6d7e;
		display: block;
		padding: 0.25em;
	}
	input {
		cursor: pointer;
		border: none;
		height: 2.5em;
		width: 15em;
		@media(min-width: 800px){
			font-size: 125%;
		}
		padding: 0.4em;
		margin-bottom: 0.75em;
		text-align: center;
		border: 1px solid #85c1e9;
		border-radius: 6px;
		:focus {
			outline: none;
		}
	}

`;
