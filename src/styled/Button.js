import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
	padding: 8px;
	text-align: center;
	font-size: 1em;
	text-decoration: none;
	letter-spacing: 1.5px;
	transition-property: background-color, color;
	transition: 0.5s;
	border: none;
	border: 2px solid #5dade2;
	color: white;
	background-color: #5dade2;
	flex-grow: 1;
	min-width: 0;
	cursor: pointer;
	a {
		text-decoration: none;
		:focus {
			outline: none;
		}
	}
	:focus {
		outline: none;
	}
	&:hover {
		color: RoyalBlue;
		background-color: lightcyan;
		border: 2px solid AliceBlue;
	}
`;
export default Button;
