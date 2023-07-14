import { SEARCH_SUCCESS, SEARCH_FAILURE } from "./types";
import axios from "axios";

export const searchNews = (searchTerm) => async (dispatch) => {
  console.log("search action");
  try {
    const callSearchNews = await axios.get(
      "https://papers-back-382b4d134cec.herokuapp.com/search-news",
      {
        params: {
          q: searchTerm,
        },
      }
    );
    console.log("CALSEARCNEWS", callSearchNews);
    // formatted results

    dispatch({
      type: SEARCH_SUCCESS,
      payload: callSearchNews,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_FAILURE,
      payload: {
        msg: err,
        status: err,
      },
    });
  }
};

export default searchNews;
