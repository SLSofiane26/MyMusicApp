import React, { Fragment, memo } from 'react';

let HomeData = memo(function HomeData(props) {
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
        }}
      ></div>
    </Fragment>
  );
});

export default HomeData;
