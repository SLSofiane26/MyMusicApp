import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import * as ACT from '../../MusicAction';
class SearchArtist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      this.props.handleSearchArtist(this.props.match.params.id);
    }
    console.log(this.props.DataArtist);
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.DataArtist !== prevProps.DataArtist) {
      let d = [];
      d.push(this.props.DataArtist);
      console.log(d);
      this.setState((prevState) => ({
        data: this.state.data.concat(d),
      }));
    }
  };
  render() {
    return (
      <Fragment>
        {this.props.DataArtist !== undefined && (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            {this.state.data.map((items, index) => {
              console.log(items);
              return (
                <div key={index}>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        height: 'auto',
                        border: '2px solid #FF007F',
                        boxSizing: 'border-box',
                        background: 'rgba(0,0,0,1)',
                        color: 'white',
                      }}
                    >
                      <h1 style={{ fontSize: '4em' }}>{items.name}</h1>
                    </div>
                  </div>
                  <div>
                    <h4>Nombre d'albums : {items.nb_album}</h4>
                    <h5> Nombre de fan (deezer) : {items.nb_fan}</h5>
                  </div>
                  <div>
                    <img src={items.picture_xl} alt='artistavatar' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <div>
                      <img
                        src={items.picture_medium}
                        alt='artistavatar'
                        width='100%'
                        height='auto'
                      />
                    </div>
                  </div>
                </div>
              );
            })}{' '}
          </div>
        )}
      </Fragment>
    );
  }
}

SearchArtist.contextType = null;
SearchArtist.defaultProps = null;
SearchArtist.propTypes = null;

let mapStateToProps = (state) => {
  return {
    DataArtist: state.music.ArtistDataBis,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSearchArtist: (data) => dispatch(ACT.FETCHARTIST(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchArtist));
