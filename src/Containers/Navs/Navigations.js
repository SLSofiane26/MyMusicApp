import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import * as Act from './Link';
import Navs from './Navs';

let Navigations = memo(function Navigations(props) {
  let token = useSelector((state) => state.login.token !== null);
  return (
    <Fragment>
      <ul
        style={{
          width: '100%',
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {token ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Navs link={Act.Home}>Accueil</Navs>
            <Navs link={Act.Search}>Rechercher</Navs>
            <Navs link={Act.Logout}>Se déconnecter</Navs>
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Navs link={Act.Login}>Connexion</Navs>
            <Navs link={Act.Home}>Accueil</Navs>
            <Navs link={Act.Register}>Inscription</Navs>
          </div>
        )}
      </ul>
    </Fragment>
  );
});

export default Navigations;
