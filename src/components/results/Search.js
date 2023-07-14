import React, { Fragment, useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { NavBar } from "../layout/Nav";

import { searchNews } from "../../actions/searchNews";
import { addCard, getCards, retrieveCards } from "../../actions/card";
import { getCollections, addCollection } from "../../actions/collection";

import styled from "styled-components";
import Input from "../../styled/Input";
import NavInput from "../../styled/NavInput";
import Button from "../../styled/Button";
import DataForm from "../../styled/DataForm";
import DataField from "../../styled/DataField";
import DataCard from "../../styled/DataCard";
import Nav from "../../styled/Nav";

const StyledForm = styled.form``;
const Header = styled.div`
  display: inline-block;
  width: 100%;
`;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	margin: 9vh 0 0 0;
	@media(min-width: 740px){
		margin 11vh 0 0 0;
	}
	padding: 0;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
	form {
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
	}
	button{
		font-size: 1.25em;
	}
`;
const SearchInput = styled("input")`
  border: grey;
  width: 50vw;
  text-align: center;
  input {
    font-size: 100%;
    letter-spacing: 1.5px;
    background-color: #fff;
    @media (min-width: );
  }
  border: none;
    height: 5em;
    font-size: 100%;
    width: 100%;
    text-align: center;
    color: grey;
  	&:focus {
      outline: none;
`;

const SearchButton = styled(Button)`
  font-size: 1.75vw;
`;

const SearchTitle = styled.h5`
  text-align: center;
  padding: 4px 0 15px 0;
  @media (min-width: 750px) {
    padding: 18px 0 26px 0;
    font-size: 1.75em;
  }
`;

const Search = (props) => {
  useEffect(() => {
    props.getCollections();
  }, []);

  const [searchWord, setSearchTerm] = useState({
    searchTerm: "",
  });

  const { searchTerm } = searchWord;

  const onChange = (e) => {
    setSearchTerm({ ...searchWord, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.searchNews(searchTerm);
  };

  const selectClick = (e) => {
    const selectCollections = props.getCollections();
    return selectCollections;
  };

  const history = useHistory();
  const back = () => {
    const path = "/dashboard";
    history.push(path);
  };

  function addToCollection(e, title, img, url) {
    const searchTitle = e.target.value;
    props.addCard(title, img, url, searchTitle);
  }

  console.log("path", props.searchResults.data);
  const path = props.searchResults.data;
  return (
    <Wrapper>
      <Nav>
        <form className="form-input">
          <SearchInput
            type="text"
            name="searchTerm"
            value={searchTerm}
            placeholder="Enter Term"
            required
            onChange={(e) => onChange(e)}
            minLength="3"
          ></SearchInput>

          <li className="form-button">
            <SearchButton onClick={(e) => onSubmit(e)}>Search</SearchButton>{" "}
          </li>
        </form>
      </Nav>
      <div>
        {path &&
          path.map((article) => {
            // grab data
            const title = article.title;
            const img = article.img;
            const url = article.url;
            // const containerTitle = collection.title

            return (
              <DataCard id="card">
                <ul>
                  <li>
                    <select
                      id="add"
                      key={Math.random()}
                      name="collections"
                      onChange={(e) => addToCollection(e, title, img, url)}
                    >
                      <option>Add to Collection</option>
                      {props.collectionResults.map((collection) => {
                        return (
                          <option id={Math.random()} value={collection.title}>
                            {collection.title}
                          </option>
                        );
                      })}
                    </select>
                  </li>
                </ul>
                <a
                  href={article.url}
                  key={article.pub_date}
                  id={article.pub_date}
                  target="_blank"
                >
                  <SearchTitle id="title">{article.title}</SearchTitle>
                  <img id="img" src={article.img} />
                </a>
              </DataCard>
            );
          })}
      </div>
      <NavBar></NavBar>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  searchResults: state.searchNews.searchResults,
  collectionResults: state.collection.containers,
  alertMessage: state.alert.alertMessage,
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, {
  searchNews,
  getCollections,
  addCard,
  retrieveCards,
})(Search);
