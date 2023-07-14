import React from 'react';
import {  useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../../actions/auth';
import { deleteUser } from '../../actions/auth';
import setAuthToken from '../../utils/setAuthToken';

import DataField from '../../styled/DataField';
import BackButton from '../../styled/BackButton'
import Nav from '../../styled/Nav';
import Button from '../../styled/Button';
import DataForm from '../../styled/DataForm'

const OptionsButton = styled(Button)`
	height: 4em;
	width: 15em;
	font-size: 1em;
	margin: 2em auto 1em auto;
	letter-spacing: 2.5px;
	border-radius: 6px;
`; 

const accountButtons = styled.div`
	transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
	overflow: auto;
	text-align: center;
	padding: 1.75em 1.5em 2.5em 1.5em;
`;

const AccountBack = styled(BackButton)`
	position: fixed;
	bottom: 20px;
	right: 20px;
	top: auto;
	height: 45px;
	width: 45px;
;
`
const Account = ({ logout, deleteUser}) => {
	const deleteHandler = () => {
		//setAuthToken();
		localStorage.setItem('token', '')
		deleteUser();
		
	};
	const logoutHandler = () => {
		console.log('logout')
		setAuthToken();
		logout();
		
	};

	const history = useHistory();
	const back = () => {
		history.goBack()
	}

	return (
		<div>
		<DataForm>
			<DataField>
				<OptionsButton onClick={logout}>Logout</OptionsButton>
			</DataField>
			<DataField>
				<OptionsButton onClick={deleteUser}>Delete Account</OptionsButton>
			</DataField>
		</DataForm>
		<AccountBack onClick={back}></AccountBack>
		</div>
	);
};
const mapStateToProps = (state) => ({
	logout,
	deleteUser,
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {
	logout,
	deleteUser,
})(Account);
