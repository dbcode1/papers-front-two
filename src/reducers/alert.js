import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];
export default function (state = initialState, action) {
	const { type, payload } = action;

	console.log(Array.isArray(state));

	switch (type) {
		case SET_ALERT:
			return { ...state, payload };

		state.alertMessage.filter((alert) => alert.id !== payload);
		default:
			return state;
	}
}
