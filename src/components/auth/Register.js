import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Redirect, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { setAlert } from '../../actions/alert';
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
	@media(min-width: 800px){
		width: 20em;
	}
	font-size: 1em;
	margin: 2em auto 1em auto;
	letter-spacing: 2.5px;
`;

const Register = ({ register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	let history = useHistory()

	function back(){
		history.push('/login')
	}

	const { name, email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		// TODO: add password one password two verify
		register({ name, email, password });
	};

	if (isAuthenticated) {
		return <Redirect to='/search' />;
	}

	return (
		<Wrapper>
			<MainTitle>The Papers.</MainTitle>
			<DataForm onSubmit={(e) => onSubmit(e)}>
				<Title>Register</Title>
				<DataField>
					<label htmlFor='name'>full name</label>
					<input
						type='text'
						value={name}
						name='name'
            required
						onChange={(e) => onChange(e)}
					/>
				</DataField>
				<DataField>
					<label htmlFor='email'>email </label>
					<input
						type='email'
						value={email}
						name='email'
            required
						onChange={(e) => onChange(e)}
					/>
				</DataField>
				<DataField>
					<label htmlFor='Password'>password </label>
					<input
						type='password'
						value={password}
						name='password'
						minLength='6'
            required
						onChange={(e) => onChange(e)}
					/>
				</DataField>
				<StyledSubmit>Submit</StyledSubmit>
			</DataForm>
			<h4 onClick={back}>Login</h4>
		</Wrapper>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
