import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import Navigations from './Containers/Navs/Navigations';
import NavSearch from '../src/NavSearch';
import styled from './Style/DataHomeMusic.module.css';

let Layout = memo(function Layout(props) {
  let token = useSelector((state) => state.login.token !== null);
  let ProfilPhoto = useSelector((state) => state.login.photo !== null);

  return (
    <Fragment>
      <header>
        <nav
          style={{
            width: '100vw',
            maxWidth: '100vw',
            background: 'black',
            borderBottom: '1px solid #FF007F',
            display: 'flex',
          }}
        >
          <div>
            {token ? (
              <img
                style={{
                  width: '40px',
                  height: '40px',
                  marginLeft: '28px',
                  marginTop: '6px',
                  position: 'fixed',
                }}
                alt='PHOTOPROFIL'
                src={
                  ProfilPhoto
                    ? ProfilPhoto
                    : 'https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png'
                }
              />
            ) : null}
            {token ? <NavSearch /> : null}
          </div>{' '}
          <Navigations />
        </nav>{' '}
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
});

export default Layout;
