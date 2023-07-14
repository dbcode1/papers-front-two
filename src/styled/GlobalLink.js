import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
	display: block;
	padding: 8px 8px 12px 8px;
	margin: 1em auto;
	min: width: 16vw;
	max-width:  17vw;
	text-align: center;
	font-size: 3.5vw;
	font-weight: 500;
	text-decoration: none;
	letter-spacing: 0.8px;
	color: midnightblue;
	background-color: white;
	transition: color 0.4s;
	border-bottom: 3px solid lightcyan;
	border-radius: 4px;
	&:hover {
		text-decoration: none;
		color: orange;
	}
`;

// thanks for the demo : https://codesandbox.io/u/mjanssen/likes
