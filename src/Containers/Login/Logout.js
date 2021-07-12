import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import * as ACT from '../../LoginActions';

let Logout = memo(function Logout(props) {
  let d = <Redirect from='/logout' to='/home' />;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACT.Logout());
  }, [dispatch]);

  return <Fragment>{d}</Fragment>;
});

export default Logout;
