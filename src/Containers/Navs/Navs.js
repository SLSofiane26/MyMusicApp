import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Navs.css';

let Navs = memo(function Navs(props) {
  return (
    <Fragment>
      <li style={{ listStyle: 'none' }}>
        <NavLink
          to={props.link}
          activeStyle={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
          className='navlink'
        >
          {props.children}
        </NavLink>
      </li>
    </Fragment>
  );
});

export default Navs;
