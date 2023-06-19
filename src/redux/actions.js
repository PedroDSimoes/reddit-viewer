import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    axios
      .get('https://www.reddit.com/r/popular.json')
      .then((response) => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POSTS_FAILURE,
          payload: error.message,
        });
      });
  };
};

