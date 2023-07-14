import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { NavBar } from "../layout/Nav";

import Input from "../../styled/Input";
import Nav from "../../styled/Nav";
import Button from "../../styled/Button";
// import BackButton from '../../styled/BackButton'
import DataCard from "../../styled/DataCard";
import { Add } from "@styled-icons/material/Add";
import { DeleteOutline } from "@styled-icons/typicons/DeleteOutline";
import { Expand } from "@styled-icons/boxicons-regular/Expand";

import { getCollections } from "../../actions/collection";
import { addCollection } from "../../actions/collection";
import { deleteCollection } from "../../actions/collection";
import { deleteCards } from "../../actions/card";
import { retrieveCards } from "../../actions/card";
import { clearCards } from "../../actions/card";
import { GET_CARDS } from "../../actions/types";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 9vh 0 0 0;
  @media (min-width: 600px) {
  }
  .collection-wrapper {
    margin: 0 0 20vh 0;
  }
  padding: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  form {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.25em;
  }
`;
const CollectionInput = styled(Input)`
  border: grey;
  width: 50vw;
  text-align: center;
  input {
    font-size: 100%;
    background-color: #fff;
    @media (min-width: 750px) {
      font-size: 1.25em;
    }
  }
`;

const DeleteButton = styled(DeleteOutline)`
  width: 25px;
  text-align: right;
`;
const ExpandCard = styled(Expand)`
  width: 25px;
  text-align: right;
`;

const Card = styled(DataCard)`
  width: 50vw;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  text-align: center;
  .collection-header {
    list-style-type: none;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flew-wrap: no-wrap;
    align-items: stretch;
    justify-content: flex-end;
  }
  li {
    display: inline-flex;
  }
  li.title {
    margin-right: auto;
    h6 {
      @media (min-width: 900px) {
        font-size: 1.5em;
      }
    }
  }
  li.expand {
    padding-right: 1.25vw;
  }
  li.expand svg,
  li.delete svg {
    @media (min-width: 750px) {
      width: 35px;
    }
  }
  ul li.card-title {
    padding-bottom: 1em;
    @media (min-width: 600px) {
      font-size: 1.25em;
    }
    @media (min-width: 900px) {
      font-size: 1.5em;
    }
    font-size: 1em;
  }
`;
const CollectionCard = styled(DataCard)`
	 width: 40vw;
	 max-width: 300px;
	 padding: 10px;
	 max-width: 370px;
	 margin: 6vh auto;
	 a{ 
		 max-width: 100%;
	 }
	}
`;

const AddButton = styled(Add)`
  width: 3em;
`;

const Collection = (props) => {
  useEffect(() => {
    getCollections();
  }, []);

  let {
    cards,
    collections,
    show,
    getCollections,
    deleteCollection,
    deleteCards,
    retrieveCards,
    clearCards,
    addCollection,
  } = props;

  const [formData, setFormData] = useState({
    title: "",
  });

  const { title } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("add collection");
    e.preventDefault();
    addCollection(title);
  };

  const deleteButton = (e, title, id) => {
    e.preventDefault();
    deleteCollection(title);
    deleteCards(title);
    clearCards();
    getCollections();
  };

  const openCollection = (title) => {
    props.show ? clearCards() : retrieveCards(title);
  };

  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  console.log(props.show);
  return (
    <Wrapper>
      <Nav>
        <li className="form-input">
          <CollectionInput>
            <input
              type="title"
              name="title"
              placeholder="Collection Title"
              required
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </CollectionInput>
        </li>
        <li className="form-button">
          <Button onClick={onSubmit}>
            <AddButton />
          </Button>
        </li>
      </Nav>

      <div className="collection-wrapper">
        {collections != undefined &&
          collections.length > 0 &&
          collections != "Container exists" &&
          collections.map((collection) => {
            return (
              <Card>
                <ul className="collection-header">
                  <li class="title" key={Math.random()}>
                    <h6>{collection.title}</h6>
                  </li>
                  <li
                    class="expand"
                    onClick={() => openCollection(collection.title)}
                  >
                    <ExpandCard></ExpandCard>
                  </li>
                  <li class="delete" key={Math.random()}>
                    <DeleteButton
                      id={collection._id}
                      onClick={(e) => {
                        deleteButton(e, `${collection.title}`);
                      }}
                    />
                  </li>
                </ul>
                {cards.map((card) => {
                  if (collection.title == card.containerTitle && show) {
                    return (
                      <CollectionCard>
                        <a href={card.url} target="_blank">
                          <ul className="card">
                            <li className="card-title">{card.title}</li>
                            <li>
                              <img src={card.img}></img>
                            </li>
                          </ul>
                        </a>
                      </CollectionCard>
                    );
                  } else {
                    return;
                  }
                })}
              </Card>
            );
          })}
      </div>
      <NavBar></NavBar>
    </Wrapper>
  );
};

// export default Collection;

const mapStateToProps = (state) => ({
  collections: state.collection.containers,
  cards: state.card.cards,
  show: state.card.show,
});

export default connect(mapStateToProps, {
  addCollection,
  getCollections,
  deleteCollection,
  deleteCards,
  retrieveCards,
  clearCards,
})(Collection);
