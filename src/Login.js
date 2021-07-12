import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from '../src/LoginActions';
import style from '../src/Style/Login.module.css';
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import Spinner from '../src/Style/Spinner';

let pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

let Login = memo(function Login(props) {
  let dispatch = useDispatch();
  let login = useSelector((state) => state.login.token);
  let loading = useSelector((state) => state.login.loading);
  let ErrorBis = useSelector((state) => state.login.error);
  let [Reset, setReset] = useState(false);
  let [url, setUrl] = useState(null);
  let [email, setEmail] = useState(null);
  let [Error, setError] = useState(null);
  let [state, setstate] = useState({
    email: null,
    password: null,
    confirmpassword: null,
    state: null,
    formErrors: {
      email: ' ',
      password: ' ',
    },
  });

  let isValid = (form) => {
    let valid = true;
    Object.values(form).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      console.log('hello');
      dispatch(ACT.SendEmail(email));
    }
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        state.formErrors.email =
          pattern.test(value) && value.length > 0 ? '' : 'Email invalide';
        break;
      case 'password':
        state.formErrors.password =
          value.length < 3 && value.length > 0 ? 'Minimum 3 caractéres' : '';
        break;
      default:
        break;
    }

    setstate({
      ...state,
      [name]: value,
    });
  };

  let handleFormChange = async (e) => {
    e.preventDefault();
    if (isValid(state.formErrors) && state.confirmpassword === state.password) {
      dispatch(ACT.AUTH(state.email, state.password, url));
    } else {
      setError(true);
    }
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='author' content='sidilarbi_sofiane' />
        <meta name='description' content='musique app music' />
        <title>Connexion | Inscription</title>
      </Helmet>
      {loading ? (
        <Spinner />
      ) : login ? (
        <Redirect from='/login' to='/search' />
      ) : (
        <Fragment>
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
                margin: '35px',
              }}
            >
              CONNEXION
            </h1>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '25vh',
              position: 'fixed',
              zIndex: '40',
            }}
          >
            <form
              style={{
                width: '50vw',
                justifyContent: 'space-around',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                textAlign: 'center',
                color: Error ? 'red' : 'rgba(181, 255, 225, 1)',
              }}
              onSubmit={(e) => handleFormChange(e)}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexBasis: '45%',
                }}
              >
                <label htmlFor='email'>Email</label>
                <input
                  name='email'
                  type='text'
                  placeholder='Email'
                  onChange={(e) => handleChange(e)}
                  style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1) ',
                  }}
                />
                {state.formErrors.email.length > 0 && (
                  <span style={{ color: 'red', fontSize: '0.8em' }}>
                    {state.formErrors.email}{' '}
                  </span>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexBasis: '45%',
                }}
              >
                <label htmlFor='password'>Mot de passe</label>
                <input
                  name='password'
                  onChange={(e) => handleChange(e)}
                  type='password'
                  placeholder='Mot de passe'
                  style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1) ',
                    background: Error ? 'white' : 'white',
                  }}
                />
                {state.formErrors.password.length > 0 && (
                  <span style={{ color: 'red', fontSize: '0.8em' }}>
                    {state.formErrors.password}{' '}
                  </span>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexBasis: '45%',
                  marginTop: '20px',
                }}
              >
                <label htmlFor='passwordconfirm'>Confirmez mot de passe</label>
                <input
                  name='confirmpassword'
                  type='password'
                  placeholder='Confirmation mot de passe'
                  style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1) ',
                    background: Error ? 'white' : 'white',
                  }}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexBasis: '45%',
                  marginTop: '20px',
                }}
              >
                <button
                  type='submit'
                  onClick={() => setUrl(false)}
                  style={{
                    background: Error ? 'red' : 'black',
                    color: 'white',
                    width: '60%',
                    height: '100px',
                    margin: 'auto',
                    borderRadius: '10%',
                    border: Error
                      ? '3px solid red'
                      : '3px solid rgba(181, 255, 225, 1)) ',
                  }}
                >
                  Connexion
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexBasis: '45%',
                  marginTop: '32px',
                }}
              >
                <button
                  onClick={() => setUrl(true)}
                  type='submit'
                  style={{
                    color: 'white',
                    width: '60%',
                    height: '100px',
                    margin: 'auto',
                    borderRadius: '10%',
                    border: '3px solid rgba(181, 255, 225, 1)',
                    background: Error ? 'green' : 'black',
                  }}
                >
                  Inscription
                </button>
              </div>
              {Error && (
                <span style={{ width: '100%', marginTop: '10px' }}>
                  Veuillez vérifier tout les champs
                </span>
              )}{' '}
              {!Reset ? (
                <button
                  style={{
                    width: '150px',
                    height: '30px',
                    marginTop: '65px',
                    background: 'black',
                    border: 'none',
                    color: 'white',
                    fontSize: '15px',
                  }}
                  onClick={() => {
                    setReset(true);
                  }}
                >
                  Mot de passe oublié
                </button>
              ) : (
                <div
                  style={{
                    position: 'fixed',
                    marginLeft: '370px',
                    marginTop: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <label htmlFor='Email'>Email</label>
                  <input
                    type='text'
                    name='email'
                    onKeyUp={(e) => handleSubmit(e)}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              )}
            </form>
          </div>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'black',
              position: 'fixed',
              display: 'flex',
            }}
          ></div>{' '}
          <div
            style={{
              width: '100Vw',
              justifyContent: 'center',
              display: 'flex',
              marginTop: '68vh',
              position: 'fixed',
            }}
          >
            <img
              alt='imagelogo'
              src='https://www.madagascar-internet.mg/cs/images/Pages/facebook%20connexion.png'
              style={{ position: 'fixed', width: '20%', height: 'auto' }}
              onClick={() => dispatch(ACT.FacebookLong())}
            />

            <img
              alt='imagelogobis'
              src='https://going-google.axxun-evalua.com/wp-content/uploads/sites/9/2017/07/ico-account.png'
              style={{
                position: 'fixed',
                width: '4%',
                height: 'auto',
                marginTop: '9vh',
              }}
              onClick={() => dispatch(ACT.GoogleAuth())}
            />
          </div>
        </Fragment>
      )}
      {ErrorBis ? (
        <div
          style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
        >
          {' '}
          <h1
            style={{
              color: 'red',
              position: 'fixed',
              display: 'flex',
              fontSize: '1em',
              marginTop: '2.7vh',
            }}
          >
            Veuillez choisir le même fournisseur de connexion
          </h1>
        </div>
      ) : null}
    </Fragment>
  );
});

export default Login;
