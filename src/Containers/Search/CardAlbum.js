import React, { Fragment, memo } from 'react';
import { withRouter } from 'react-router';
import styled from '../../../src/Style/DataHomeMusic.module.css';

let CardAlbum = memo(function CardAlbum(props) {
  return (
    <Fragment>
      <div onClick={() => props.change()} className={styled.ContainerCard}>
        <div>
          <img
            alt='pictures'
            className={styled.PictureS}
            src={props.picturesmall}
          />
          <img
            alt='picturem'
            className={styled.PictureM}
            src={props.cover_small}
          />
        </div>
      </div>
    </Fragment>
  );
});

export default withRouter(CardAlbum);
