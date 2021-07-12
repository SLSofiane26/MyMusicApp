let MusicState = {
  data: [],
  dataFilter: [],
  loading: false,
  search: null,
  Artistdata: [],
  AlbumData: [],
  ArtistDataBis: [],
};

let MusicReducer = (state = MusicState, action) => {
  switch (action.type) {
    case 'START':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'SUCCES':
      return Object.assign({}, state, {
        data: action.payload.data.data,
        dataFilter: action.payload.data.data,
        loading: false,
        search: true,
      });
    case 'FAILED':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'STARTBIS':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'SUCCESBIS':
      return Object.assign({}, state, {
        Artistdata: action.payload.data,
        loading: false,
      });
    case 'FAILEDBIS':
      return Object.assign({}, state, {
        loading: false,
      });

    case 'FETCHASUCCES':
      return {
        ...state,
        AlbumData: action.payload.data,
        loading: false,
      };
    case 'FETCHAFAILED':
      return {
        ...state,
        loading: false,
      };
    case 'STARTARTIST':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'SUCCESARTIST':
      return Object.assign({}, state, {
        ArtistDataBis: action.payload.data.data,
        loading: false,
      });
    case 'FAILEDARTIST':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    default:
      break;
  }
  return state;
};

export default MusicReducer;
