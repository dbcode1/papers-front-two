import styled from 'styled-components';

export default styled.ul`
	text-align: center;
	display: flex;
	margin: 0;
	padding: 0;
	flex-grow: 0;
	min-height: 5rem;
	width: 100%;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
	list-style: none;
	a { 
		color: #fff; 
		font-size: 1.25em;
		padding 0.5em 0 0 0;
		}
	li.form-input {
		width: 100%;
		line-height: 5rem;
		height: 5rem;
		input {
			padding: 0;
			height: 114%;
			width: 100%;
			border: none;
			text-align: center;
			&:focus {
				outline: none;
			}
		}
	}

	li.form-button {
		background-color: #5dade2;
		width: 100%;
		margin-top: 0px;
		line-height: 5rem;
		height: 5rem;
		button {
			border: none;
			background-color: #5dade2;
		
		}
		
	}
`;
