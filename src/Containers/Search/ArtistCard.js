import React, { Fragment, memo } from 'react';

let ArtistCard = memo(function ArtistCard(props) {
  return (
    <Fragment>
      <div>
        <h1
          style={{
            position: 'fixed',
            zIndex: '40',
            fontSize: '3em',
            padding: '0px',
            marginTop: '0px',
            color: 'white',
          }}
        >
          {props.name}
        </h1>
      </div>
      <div>
        <h3
          style={{
            position: 'fixed',
            zIndex: '40',
            marginTop: '65px',
            fontSize: '1.3em',
            color: 'white',
            marginLeft: '10px',
          }}
        >
          {props.album} albums
        </h3>
      </div>
      <div>
        <img src={props.image} alt='imageartist' />
      </div>
    </Fragment>
  );
});

export default ArtistCard;
