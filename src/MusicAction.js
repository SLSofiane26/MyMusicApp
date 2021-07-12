import Axios from 'axios';

export let FETCHALBUM = (data) => async (dispatch) => {
  dispatch({ type: 'START' });
  Axios({
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/album/${data}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
  })
    .then((response) => {
      dispatch({ type: 'FETCHASUCCES', payload: { data: response.data } });
    })
    .catch((error) => {
      dispatch({ type: 'FETCHAFAILED', payload: { data: error } });
    });
};

export let FETCH = (data) => async (dispatch) => {
  dispatch({ type: 'START' });
  await Axios({
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
    params: {
      q: data,
    },
  })
    .then((response) => {
      dispatch({ type: 'SUCCES', payload: { data: response.data } });
    })
    .catch((error) => {
      dispatch({ type: 'ERROR', paylaod: { data: error } });
    });
};

export let FETCHBIS = (data) => async (dispatch) => {
  console.log(data);
  dispatch({ type: 'STARTBIS' });
  await Axios({
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${data}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
  })
    .then((response) => {
      dispatch({
        type: 'SUCCESBIS',
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: 'FAILEDBIS',
        payload: {
          data: error,
        },
      });
    });
};

export let FETCHARTIST = (data) => async (dispatch) => {
  dispatch({ type: 'STARTARTIST' });
  console.log(data);
  Axios({
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${data}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
  })
    .then((response) => {
      dispatch({
        type: 'SUCCESARTIST',
        payload: {
          data: response,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: 'FAILEDARTIST',
        payload: {
          data: error,
        },
      });
    });
};
