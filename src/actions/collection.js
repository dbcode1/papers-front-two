import {
  ADD_COLLECTION_SUCCESS,
	ADD_COLLECTION_FAILURE,
	GET_COLLECTION_SUCCESS,
	GET_COLLECTION_FAILURE,
	DELETE_COLLECTION_SUCCESS,
	DELETE_COLLECTION_FAILURE,
} from './types';

const axios = require('axios')


// update 
export const getCollections = () => async (dispatch, req, res) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_API}/container`);
		console.log("get collections", res)
		dispatch({
			type: GET_COLLECTION_SUCCESS,
			payload: res.data,
		});

	} catch (err) {
		dispatch({
			type: GET_COLLECTION_FAILURE,
			payload: res
		});
	}
};

export const addCollection = (title) => async (dispatch, res, req) => {
	const config = { 
		headers: {'Content-Type': 'application/json'
		}
	}

	try {
		const res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API}/container`,
			data: {
				title: title
			},
			config
		} )

		if(res.data == 'Container exists'){
			 alert('Container exists')
			 dispatch({
				type: ADD_COLLECTION_FAILURE,
				payload: 'Container exists',
			});
			return
		}
		
		dispatch({
			type: ADD_COLLECTION_SUCCESS,
			payload: res.data,
		});

	} catch (err) {
		console.log(err.message)
		dispatch({
			type: ADD_COLLECTION_FAILURE,
		});
}
}

export const deleteCollection = (title) => async (dispatch, res, req) => {
	
	try{
		const res = await axios({
			method: 'delete',
			url: `${process.env.REACT_APP_API}/container`,
			data: {
				title : title
			}
		})
		if(res) {
			dispatch({
				type: DELETE_COLLECTION_SUCCESS,
				payload: title
			});
		}
	

	} catch (err){
		dispatch({
			type: DELETE_COLLECTION_FAILURE,
			payload: res.data,
		});
		console.log(err.message)
	}
}
