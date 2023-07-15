import axios from "axios";
import { setAlert } from "./alert";
import store from "../store";
import "dotenv/config";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  DELETE_USER,
  SET_ALERT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://papers-back-382b4d134cec.herokuapp.com/auth"
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    console.log("register");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        "https://papers-back-382b4d134cec.herokuapp.com/user",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      alert(
        err.response.data.errors[0].param +
          ": " +
          err.response.data.errors[0].msg
      );

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const body = JSON.stringify({ email, password });

    const res = await axios.post(
      "https://papers-back-382b4d134cec.herokuapp.com/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    alert(
      // err.response.data.errors[0].param + ": " + err.response.data.errors[0].msg
      err
    );
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Delete User Account
export const deleteUser = () => async (dispatch) => {
  try {
    const body = store.getState().auth.token;
    window.confirm("Are you sure you want to delete your account");
    localStorage.clear();

    await axios.delete(
      "https://papers-back-382b4d134cec.herokuapp.com/user",
      body
    );
  } catch (err) {
    alert(err.response.data.errors[0].msg);
  }
};
