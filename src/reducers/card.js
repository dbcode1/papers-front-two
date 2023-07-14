import {
  ADD_CARD,
  GET_CARDS,
  CARD_ERROR, 
  RETRIEVE_CARDS_SUCCESS,
  CLEAR_CARDS_SUCCESS,
  DELETE_CARDS_SUCCESS,
  DELETE_CARDS_FAILURE

} from '../actions/types';

const initialState = {
  cards :[],
  card: null,
  loading: true,
  error: {},
  show : false

}

export default function(state= initialState, action){
  const { type, payload} = action
  switch(type){

    case ADD_CARD:
      return {
      ...state,
      cards: [...state.cards, payload],
      loading: false
    }
    
    case GET_CARDS:
      return {
      ...state,
      cards: payload,
      loading: false
    }
    case RETRIEVE_CARDS_SUCCESS:
      return {
      ...state,
      cards: payload,
      loading: false,
      show: !state.show
    }
    case CLEAR_CARDS_SUCCESS:
      return {
        ...state,
        cards: [],
        show: false
      }
    case CARD_ERROR:
    return {
      ...state,
      error: payload,
      loading: false,
    }
    case DELETE_CARDS_SUCCESS:
      return {
        ...state,
        cards: state.cards.filter(card => card.containerTitle!== payload ),
        loading: false,
      }
  default:
    return state
}
}