import React, { Fragment, memo, useState } from 'react';
import { useHistory, withRouter } from 'react-router';

let NavSearch = memo(function NavSearch(props) {
  let [data, setData] = useState();
  let history = useHistory();

  let handleChange = (e) => {
    setData(e.target.value);
  };

  let handleChangeBis = (e) => {
    if (e.which === 13) {
      if (!data) {
        alert('hello');
        history.push({ pathname: '/home' });
      } else {
        history.push({ pathname: '/artist/' + data });
      }
    }
  };

  return (
    <Fragment>
      <div>
        <input
          style={{
            width: '15vw',
            marginLeft: '200px',
            height: '5vh',
            display: 'flex',
            marginTop: '7.2px',
            background: 'black',
            border: 'none',
            textAlign: 'center',
            color: 'white',
          }}
          type='search'
          placeholder='RECHERCHE RAPIDE'
          name='search'
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleChangeBis(e)}
        />
      </div>
    </Fragment>
  );
});

export default withRouter(NavSearch);
