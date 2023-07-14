import React from 'react'
import {  Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../styled/Button';
import BackButton from '../../styled/BackButton'
import Nav from '../../styled/Nav'

export const NavBar = () => {

  const history = useHistory();
	const back = () => {
		history.goBack()
  }

  const Wrapper = styled(Nav) `
    width: 100%;
    top:auto;
    bottom: 0;
    box-shadow: none;
  `
  const NavButton = styled.li`
    margin-top: 0;
    :nth-child(4){ 
      color: #fff; 
      padding-bottom: 10px;
      &:hover {
        color: RoyalBlue;
       }
      }
    list-style: none;
    border: none;
    background-color: #5dade2;
    width: 30%;
    transition: 0.75s;
    padding: 24px 0 0 0;
    transition-property: color, background-color, border;
    &:hover { background-color: #fff; }
    .link {
      color: #fff
      text-decoration: none;
      overflow: hidden;
      padding: 20px;
      &:hover {
        color: RoyalBlue;
        text-decoration: none;
      }
    }
    BackButton { color: RoyalBlue;}
  `
  return(
    <Wrapper>
      <NavButton>
      <Link className="link" to='/search'>Search</Link>
      </NavButton>
      <NavButton>
        <Link className="link" to='/collection'>Collections</Link>
      </NavButton>
      <NavButton>
        <Link className="link" to='/account' >Account</Link>
      </NavButton>
      <NavButton onClick={back}>
        <BackButton></BackButton>
      </NavButton>
    </Wrapper>
  )

}