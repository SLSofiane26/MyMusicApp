import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import '../src/Containers/App/App.css';
import Music from '../src/Music';
import Layout from '../src/Layout';
import Spinner from '../src/Style/Spinner';

let Home = lazy(() => import('../src/Home.js'));
let Login = lazy(() => import('../src/Login.js'));
let HomeSearch = lazy(() => import('../src/HomeSearch.js'));
let ArtistSearch = lazy(() => import('../src/ArtistSearch'));
let HomeAlbum = lazy(() => import('../src/HomeAlbum'));
let Logout = lazy(() => import('../src/Containers/Login/Logout'));
let Register = lazy(() => import('../src/Register'));
let SearchArtist = lazy(() => import('../src/Containers/Search/SearchArtist'));

let App = () => {
  return (
    <Fragment>
      <Layout>
        <Music>
          <Redirect from='/' to='/home' />
          <Switch>
            <Route
              path='/home'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              )}
            />
            <Route
              path='/login'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Login />
                </Suspense>
              )}
            />
            <Route
              path='/artist/:params'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <ArtistSearch />
                </Suspense>
              )}
            />
            <Route
              path='/artist/search/:id'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <SearchArtist />
                </Suspense>
              )}
            />
            <Route
              path='/album/:id'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <HomeAlbum />
                </Suspense>
              )}
            />
            <Route
              path='/search'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <HomeSearch />
                </Suspense>
              )}
            />
            <Route
              path='/logout'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Logout />
                </Suspense>
              )}
            />
            <Route
              path='/register'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              )}
            />
          </Switch>
        </Music>
      </Layout>
    </Fragment>
  );
};

export default App;
