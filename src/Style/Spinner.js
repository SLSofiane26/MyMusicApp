import React, { Fragment, memo } from 'react';
import './Spinner.css';

let Spinner = memo(function Spinner(props) {
  return (
    <Fragment>
      <div className='loader' style={{}}></div>
    </Fragment>
  );
});

export default Spinner;
