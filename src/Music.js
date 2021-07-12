import React, { createContext, Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ACT from './LoginActions';
import PropTypes from 'prop-types';

let MusicContext = createContext();
class Music extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.cheikUser();
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <Fragment>
        <MusicContext.Provider>{this.props.children}</MusicContext.Provider>
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    cheikUser: () => dispatch(ACT.CheikAuth()),
  };
};

Music.defaultProps = {};
Music.contextType = {};
Music.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Music);
