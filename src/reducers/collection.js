
import {
	ADD_COLLECTION_SUCCESS,
	ADD_COLLECTION_FAILURE,
	DELETE_COLLECTION_SUCCESS,
	GET_COLLECTION_SUCCESS,
	GET_COLLECTION_FAILURE,
	UPDATE_COLLECTIONS_SUCCESS
} from '../actions/types';

const initialState = {
	loading: true,
	containers: [],

};

export default function  (state = initialState, action){
	const { type, payload } = action;
	switch (type) {
		case ADD_COLLECTION_SUCCESS:
			return {
				...state,
				containers: [...state.containers, payload],
				loading: false,
			};
		case ADD_COLLECTION_FAILURE:
			return {
				...state,
			
			};
		case GET_COLLECTION_SUCCESS:
			return {
				...state,
				containers: payload,
				loading: false,
			};
		case GET_COLLECTION_FAILURE:
			return {
				...state,
			};
		case DELETE_COLLECTION_SUCCESS:
			return {
				...state,
				containers: state.containers.filter(container => container.title !== payload ),
				loading: false,
			};
		default:
			return state;
	}		
}

