import Axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";

export let AUTH = (email, password, state) => async (dispatch) => {
  dispatch({
    type: "STARTLOGIN",
    payload: {
      email: email,
      password: password,
      data: state,
    },
  });

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_KEY}`;
  if (!state) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_KEY}`;
  }

  let dataBis = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  await Axios.post(url, dataBis)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem("idToken", res.data.idToken);
      localStorage.setItem("localId", res.data.localId);
      localStorage.setItem("name", res.data.displayName);
      localStorage.setItem("photo", res.data.profilePicture);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("expDate", expDate);
      dispatch(Succes(res.data.idToken, res.data.localId));
      dispatch(authTimeOut(res.data.expiresIn));
    })
    .catch((err) => {
      dispatch(Failed(err));
    });
};

export let updateProfil = (photo, name, email) => async (dispatch) => {
  if ((photo = "undefined")) {
    photo = null;
  }
  dispatch({
    type: "UPDATEPROFIL",
    payload: {
      photo: photo,
      name: name,
      email: email,
    },
  });
};

export let authTimeOut = (expiration) => async (dispatch) => {
  setTimeout(() => {
    dispatch(Logout());
  }, expiration * 1000);
};

export let SendEmail = (email) => async (dispatch) => {
  let data = {
    requestType: "PASSWORD_RESET",
    email: email,
  };
  await Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_KEY}`,
    data
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export let Succes = (token, localId) => async (dispatch) => {
  dispatch({
    type: "SUCCESLOGIN",
    payload: {
      token: token,
      Id: localId,
    },
  });
};

export let Failed = (err) => async (dispatch) => {
  dispatch({
    type: "FAILEDLOGIN",
    payload: {
      data: err,
    },
  });
};

var firebaseConfig = {
  apiKey: "AIzaSyArqvfKvHtwmi0wcgR75Dk7Hpzy4Ob9U4o",
  authDomain: "hamburger-afe4d.firebaseapp.com",
  databaseURL: "https://hamburger-afe4d.firebaseio.com",
  projectId: "hamburger-afe4d",
  storageBucket: "hamburger-afe4d.appspot.com",
  messagingSenderId: "235822040538",
  appId: "1:235822040538:web:5db98f399d572090736ce3",
  measurementId: "G-57MXB20F63",
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = "fr_FR";

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export let GoogleAuth = () => async (dispatch) => {
  dispatch({
    type: "STARTLOGIN",
  });

  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 36000 * 10000).getTime();
      localStorage.setItem("idToken", res.credential.idToken);
      localStorage.setItem("localId", res.credential.accessToken);
      localStorage.setItem("name", res.user.displayName);
      localStorage.setItem("photo", res.user.photoURL);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("expDate", expDate);
      dispatch(Succes(res.credential.idToken, res.credential.accessToken));
      dispatch(authTimeOut(3600));
    })
    .catch((err) => dispatch(Failed(err)));
};

var providerBis = new firebase.auth.FacebookAuthProvider();

export let FacebookLong = () => async (dispatch) => {
  dispatch({
    type: "STARTLOGIN",
  });
  await firebase
    .auth()
    .signInWithPopup(providerBis)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 10000).getTime();
      localStorage.setItem("idToken", res.credential.accessToken);
      localStorage.setItem("localiD", res.additionalUserInfo.profile.id);
      localStorage.setItem("expDate", expDate);
      localStorage.setItem("photo", res.user.photoURL);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("name", res.user.displayName);
      dispatch(
        Succes(res.credential.providerId, res.additionalUserInfo.profile.id)
      );
      dispatch(authTimeOut(3600));
    })
    .catch((err) => {
      dispatch(Failed(err));
    });
};

export let CheikAuth = () => async (dispatch) => {
  let name = localStorage.getItem("name");
  let photo = localStorage.getItem("photo");
  let email = localStorage.getItem("email");
  dispatch(updateProfil(photo, name, email));
  let token = localStorage.getItem("idToken");
  if (!token) {
    dispatch(Logout());
  } else {
    let expDateBis = localStorage.getItem("expDate");
    if (expDateBis < new Date().getTime()) {
      dispatch(Logout());
    } else {
      let id = localStorage.getItem("localId");
      dispatch(
        authTimeOut((expDateBis - new Date(new Date().getTime())) / 1000)
      );
      dispatch(Succes(token, id));
    }
  }
};

export let Logout = () => async (dispatch) => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("localId");
  localStorage.removeItem("expDate");
  localStorage.removeItem("name");
  localStorage.removeItem("photo");
  localStorage.removeItem("email");
  localStorage.removeItem("localiD");
  dispatch({
    type: "LOGOUT",
  });
};
