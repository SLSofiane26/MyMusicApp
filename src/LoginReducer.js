let stateLogin = {
  token: null,
  id: null,
  loading: false,
  error: false,
  photo: null,
  name: null,
  email: null,
};

let LoginReducer = (state = stateLogin, action) => {
  switch (action.type) {
    case 'STARTLOGIN':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'SUCCESLOGIN':
      return Object.assign({}, state, {
        token: action.payload.token,
        id: action.payload.Id,
        loading: false,
      });
    case 'SUCCES':
      return Object.assign({}, state, {
        token: action.payload.email,
        id: action.payload.localId,
        loading: false,
      });
    case 'FAILEDLOGIN':
      return Object.assign({}, state, {
        token: null,
        id: null,
        loading: false,
        error: action.payload.data,
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        token: null,
        id: null,
      });
    case 'UPDATEPROFIL':
      return Object.assign({}, state, {
        photo: action.payload.photo,
        name: action.payload.name,
        email: action.payload.email,
      });
    default:
      break;
  }
  return state;
};

export default LoginReducer;
