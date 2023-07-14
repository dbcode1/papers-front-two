import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

import GlobalLink from "../../styled/GlobalLink";
import styled from "styled-components";
// import { Archive } from "@styled-icons/heroicons-outline/Archive"
import { NewsPaper } from "@styled-icons/zondicons/NewsPaper";
import { Folder } from "@styled-icons/material-outlined/Folder";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";

const Container = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: auto;
  width: 80%;
  max-width: 1000px;
`;

const Icons = styled.div`
  margin: 1em auto 1.5 auto;
  text-align: center;

  label {
    display: block;
  }
`;
const StyledFolder = styled(Folder)`
	width: 11.25vw;
	padding 0.25vh 0 0 0;
	@media(min-width: 700px) {
		width: 10.75vw;
		padding: 0.75vh 0 0 0;
	}
	@media(min-width: 800px){
		width: 9.75vw;
	}
	@media(min-width: 1100px){
		width: 8.25vw;
	}
	@media(min-width: 1200px) {
		width: 7.5vw;
	}
	@media(min-width: 1300px) {
		width: 7.25vw;
	}
`;

// const StyledArchive = styled(Archive)`
// 	width: 11vw;
// 	@media(min-width: 600px){
// 		width: 9.5vw
// 	}
// 	@media(min-width: 700px) {
// 		width: 10.25vw;
// 		margin-right: -.75vw;
// 	}
// 	@media(min-width: 800px) {
// 		width: 8.75vw;
// 		margin-right: -.75vw;
// 	}
// 	@media(min-width: 1100px){
// 		width: 7.5vw;
// 	}
// 	@media(min-width: 1200px) {
// 		width: 7vw;
// 	}
// 		@media(min-width: 1300px) {

// 	}
// `;

const StyledNewsPaper = styled(NewsPaper)`
  width: 8vw;
  margin: 0.25vh 0 0 0.85vw;
  @media (min-width: 520px) {
    width: 7.5vw;
  }
  @media (min-width: 700px) {
    width: 7.6vw;
    margin: 0.5vh 0.25vw 0 0.65vw;
  }
  @media (min-width: 800px) {
    width: 6.75vw;
  }
  @media (min-width: 1100px) {
    width: 6vw;
  }
  @media (min-width: 1200px) {
    width: 5.75vw;
    margin-right: -0.75vw;
  }
`;

const StyledArrow = styled(RightArrowAlt)`
  width: 6vw;
`;

const Description = styled.div`
	margin: 1em auto 2em auto;
	max-width: 80vw;
	p {
		text-align: center;
		padding: 0 0 2.85vh 0;
		@media(min-width: 1200px){
			padding: 0 0 5vh 0;
		}
`;

const Title = styled.h1`
  font-size: 2.75em;
  font-family: "Jost", sans-serif;
  text-align: center;
  letter-spacing: 1px;
  padding: 0 0 0.5vh 0;
`;

const Styledlink = styled(GlobalLink)`
  @media (min-width: 900px) {
    font-size: 2vw;
  }
  @media (min-width: 1200px) {
    font-size: 1.75vw;
  }
`;

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/search" />;
  }

  return (
    <Container>
      <Title>The Papers.</Title>
      <Description>
        <p>
          Read news articles from a vast archive of trusted sources and create
          collections for future reading.
        </p>
        <Icons>
          {/* <StyledArchive /> */}
          <StyledArrow />
          <StyledNewsPaper />
          <StyledArrow />
          <StyledFolder />
        </Icons>
      </Description>
      <Styledlink to="/register">Register</Styledlink>
      <Styledlink to="/login">Login</Styledlink>
    </Container>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
