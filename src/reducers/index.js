import { combineReducers } from 'redux';
import searchNews from './searchNews';
import auth from './auth';
import alert from './alert';
import collection from './collection'

import card from './card';

export default combineReducers({
	searchNews,
	auth,
	alert,
	collection,
	card
});
