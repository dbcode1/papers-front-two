import { SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/types';
const initialState = {
	searchResults: [],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_SUCCESS:
			return {
				...state,
				searchResults: payload,
				loading: false,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return {
				...state,
			};
	}
}
