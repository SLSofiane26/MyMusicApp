import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import * as ACT from '../src/LoginActions';

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let Register = memo(function Register(props) {
  let error = useSelector((state) => state.login.error);
  let token = useSelector((state) => state.login.token);
  let dispatch = useDispatch();
  let [State] = useState(true);
  let [Error, setError] = useState(false);
  let [ErrorBis] = useState(false);
  let [form, setform] = useState({
    email: null,
    password: null,
    confirmpassword: null,
  });

  let [formErrors, setformErrors] = useState({
    email: ' ',
    password: ' ',
    confirmpassword: '',
  });

  let isValid = (form, rest) => {
    let valid = true;
    Object.values(form).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach((val) => {
      !val && (valid = false);
    });
    return valid;
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        formErrors.email =
          pattern.test(value) && value.length > 0
            ? ''
            : 'Adresse e-mail invalide';
        break;
      case 'password':
        formErrors.password =
          value.length > 0 && value.length < 5 ? 'Minimum 5 caracteres' : '';
        break;
    }
    setform({
      ...form,
      [name]: value,
    });
  };

  let handleFormC = (e) => {
    e.preventDefault();
    if (isValid(formErrors, form) && form.password === form.confirmpassword) {
      dispatch(ACT.AUTH(form.email, form.password, State));
    } else {
      setError(true);
    }
  };

  return (
    <Fragment>
      {token ? (
        <Redirect from='/register' to='/search' />
      ) : (
        <Fragment>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'black',
              position: 'fixed',
            }}
          ></div>
          {error && (
            <div
              style={{
                width: '100Vw',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                color: 'red',
              }}
            >
              <h1 style={{ fontSize: '0.8em' }}>Adresse email déjà utilisée</h1>
            </div>
          )}
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '0px',
              position: 'fixed',
              zIndex: '40',
              fontSize: '3em',
            }}
          >
            <h1
              style={{
                color: '#FF007F',
                marginTop: '4.3vh',
                textTransform: 'uppercase',
              }}
            >
              Inscription
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100vw',
              justifyContent: 'center',
            }}
          >
            <form
              style={{
                position: 'fixed',
                color: 'white',
                marginTop: '20vh',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '30px',
                }}
              >
                <label htmlFor='email'>Email</label>
                <input
                  name='email'
                  placeholder='email'
                  style={{
                    width: '25vw',
                    textAlign: 'center',
                    marginTop: '2vh',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1)',
                  }}
                  onChange={(e) => handleChange(e)}
                />
                {formErrors.email.length > 0 && (
                  <span>{formErrors.email} </span>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '30px',
                }}
              >
                <label htmlFor='password'>Password</label>
                <input
                  name='password'
                  placeholder='password'
                  type='password'
                  style={{
                    width: '25vw',
                    textAlign: 'center',
                    marginTop: '2vh',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1)',
                  }}
                  onChange={(e) => handleChange(e)}
                />
                {formErrors.password.length > 0 && (
                  <span>{formErrors.password}</span>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '30px',
                  color: 'white',
                }}
              >
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  name='confirmpassword'
                  placeholder='confirm password'
                  style={{
                    width: '25vw',
                    textAlign: 'center',
                    marginTop: '2vh',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1)',
                  }}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div style={{ marginLeft: '30%', marginTop: '5%' }}>
                <button
                  type='button'
                  onClick={(e) => handleFormC(e)}
                  style={{
                    color: 'white',
                    width: '60%',
                    height: '100px',
                    margin: 'auto',
                    borderRadius: '10%',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1)',
                    background: Error ? 'red' : 'black',
                    marginTop: '30px',
                  }}
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
          {ErrorBis && (
            <div
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                marginLeft: '42vw',
                color: 'white',
                fontSize: '8px',
                marginTop: '18vh',
              }}
            >
              <div>
                <h1>Veuillez remplir tout les champs</h1>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
});

export default withRouter(Register);
