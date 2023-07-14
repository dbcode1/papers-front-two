import React, { Fragment, useState, useEffect } from 'react';
import { login } from '../../actions/auth';
import { alert } from '../../actions/auth';

import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import Alert from './Alert';

import styled from 'styled-components';
import BackButton from '../../styled/BackButton'
import DataForm from '../../styled/DataForm';
import DataField from '../../styled/DataField';
import Button from '../../styled/Button';

const MainTitle = styled.h2`
	font-family: 'Jost', sans-serif;
	text-align: center;
	letter-spacing: 1px;
	padding-top: 6vh;
	color: gainsboro;
`;

const Title = styled.h3`
	letter-spacing: 1.25px;
	margin-bottom: 0.75em;
`;

const Wrapper = styled.div`
	h4{
		position: fixed;
		bottom: 20px;
		right: 20px;
		cursor: pointer;
	}
`;

const StyledSubmit = styled(Button)`
	height: 4em;
	width: 15em;
	font-size: 1em;
	margin: 2em auto 1em auto;
	letter-spacing: 2.5px;
	@media(min-width: 800px){
		width: 20em;
	}
`;

const Login = ({ login, isAuthenticated, alertMessage }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	let history = useHistory()

	function back(){
		history.push('/register')
	}

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to='/search' />;
	}

	return (
		<Wrapper>
			<MainTitle>The Papers.</MainTitle>
			<DataForm onSubmit={(e) => onSubmit(e)}>
				<Title>Login</Title>
				<DataField>
					<label htmlFor='email'>email</label>
					<input
						type='email'
						name='email'
						value={email}
						required
						onChange={(e) => onChange(e)}
						minLength='6'
					/>
				</DataField>
				<DataField>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						name='password'
						value={password}
						required
						onChange={(e) => onChange(e)}
						minLength='6'
					/>
				</DataField>
				<StyledSubmit>Login</StyledSubmit>
			</DataForm>
			<h4 onClick={back}>Register</h4>
			
		</Wrapper>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	alertMessage: state.alert.alertMessage,
});

export default connect(mapStateToProps, { login })(Login);
