import React, { Fragment, memo, useState } from 'react';
import '../src/Containers/Navs/Navs.css';
import { Helmet } from 'react-helmet';

let Home = memo(function Home(props) {
  let [Perso, setPerso] = useState({
    loading: false,
  });

  setTimeout(() => {
    setPerso(
      (prevState) => ({
        loading: !prevState.loading,
      }),
      500
    );
  });

  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='App Musique Music' />
        <meta name='author' content='sidilarbi sofiane' />
        <title>AppMusic | Home</title>
      </Helmet>
      <div style={{ maxHeight: '100vh' }}>
        <div className='containerHome'>
          <div className='rondPr'></div>
          <div className='rondBis'></div>
        </div>
        <div className='ContainerTitre'>
          <h1 className='titre'>AppMusic</h1>
        </div>
        <div>
          <video className='videoHome' loop muted autoPlay>
            <source
              src={require('../src/Assets/AudioW.mp4')}
              style={{ width: '100vw', height: '100vh', position: 'fixed' }}
            />
          </video>
        </div>
      </div>
    </Fragment>
  );
});

export default Home;
