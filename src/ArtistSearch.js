import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CardAlbum from '../src/Containers/Search/CardAlbum';
import * as ACT from '../src/MusicAction';
import styled from '../src/Style/DataHomeMusic.module.css';
import { Helmet } from 'react-helmet';
import Spinner from '../src/Style/Spinner';

class ArtistSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      artistData: [],
      name: '',
      show: false,
      dataShow: null,
      load: false,
    };
  }

  componentDidMount = () => {
    let art = this.props.match.params.params;
    this.props.handleDataArtistLoad(art);
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.params !== prevProps.match.params.params) {
      this.props.handleDataArtistLoad(this.props.match.params.params);
    }
    if (this.props.data) {
      this.setState((prevState) => ({
        data: this.props.data,
      }));
    }
  };

  render() {
    let d = this.state.data.reverse();
    let perso = d.map((val, index) => {
      return (
        <CardAlbum
          change={() => {
            this.setState((prevState) => ({
              dataShow: val,
            }));
            setTimeout(() => {
              this.setState((prevState) => ({
                load: true,
              }));
            }, 200);
          }}
          show={this.state.show}
          cover_small={val.album.cover_medium}
          picturesmall={val.artist.picture_medium}
        />
      );
    });

    return (
      <Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='author' content='sidilarbi_sofiane' />
          <title>Recherche | MusicApp</title>
        </Helmet>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div style={{ position: 'absolute' }}>
              <div className={styled.containerMusic}>{perso}</div>
            </div>
            <div
              style={{
                width: '100vw',
                display: 'flex',
                position: '-webkit-sticky',
                position: 'sticky',
                justifyContent: 'center',
                marginLeft: '30vw',
                top: '0px',
                position: 'fixed',
                zIndex: '0',
              }}
            >
              {this.state.dataShow && (
                <div
                  style={{
                    zIndex: '40000',
                    display: 'flex',
                    position: 'absolute',
                    transform: this.state.load
                      ? 'translate(0px,0px)'
                      : 'translate(700px,0px)',
                    transition: 'all 2s cubic-bezier(.17,-0.00,.15,.17)',
                  }}
                  onClick={() =>
                    this.setState((prevState) => ({
                      load: false,
                    }))
                  }
                >
                  <h1
                    className={styled.titreSearch}
                    style={{
                      opacity: this.state.load ? '1' : '0',
                    }}
                  >
                    {this.state.dataShow.artist.name}
                  </h1>
                  <h3
                    style={{
                      position: 'fixed',
                      zIndex: '4500',
                      color: 'white',
                      marginLeft: '40px',
                      marginTop: '200px',
                      fontSize: '1.5em',
                      background: 'rgba(0,0,0,0.8)',
                      padding: '10px',
                      borderRadius: '5%',
                      border: '1px solid #FF007F',
                    }}
                  >
                    {this.state.dataShow.album.title}
                  </h3>
                  <div
                    style={{
                      borderLeft: '2px solid #FF007F',
                      borderBottom: '2px solid #FF007F',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        margin: '0px',
                        display: 'flex',
                      }}
                    >
                      <img
                        alt='pictureXL'
                        style={{
                          zIndex: '4000',
                          width: '50vw',
                          height: '50vh',
                          margin: '0px',
                          padding: '0px',
                        }}
                        src={this.state.dataShow.artist.picture_xl}
                      />
                    </div>
                    <div
                      style={{
                        margin: '0px',
                        display: 'flex',
                      }}
                    >
                      <img
                        alt='cover_xl'
                        style={{
                          width: '50vw',
                          height: '50vh',
                          padding: '0px',
                          margin: 'auto 0px',
                        }}
                        src={this.state.dataShow.album.cover_xl}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        color: 'white',
                        zIndex: '10000',
                        flexDirection: 'column',
                        textAlign: 'center',
                        position: 'fixed',
                        marginTop: '70vh',
                        marginLeft: '15VW',
                      }}
                    >
                      <div
                        style={{
                          padding: '10px',
                          textAlign: 'center',
                          marginLeft: '13px',
                          background: 'rgba(0,0,0,0.8)',
                          position: 'fixed',
                          borderRadius: '5%',
                          border: '2px solid #FF007F',
                        }}
                        onClick={() =>
                          this.props.history.push(
                            '/album/' + this.state.dataShow.album.id
                          )
                        }
                      >
                        <p>Voir album</p>
                      </div>
                      <div
                        style={{
                          padding: '10px',
                          marginLeft: '150px',
                          background: 'rgba(0,0,0,0.8)',
                          borderRadius: '5%',
                          border: '2px solid #FF007F',
                          textAlign: 'center',
                          position: 'fixed',
                        }}
                        onClick={() =>
                          this.props.history.push(
                            '/artist/search/' + this.state.dataShow.artist.id
                          )
                        }
                      >
                        <p>Voir artiste</p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'fixed',
                        display: 'flex',
                        zIndex: '6000',
                        visibility: 'hidden',
                      }}
                    >
                      <audio
                        src={this.state.dataShow.preview}
                        autoPlay
                        controls
                        loop
                        onLoad
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.music.data,
    dataBis: state.music.dataFilter,
    loading: state.music.loading,
    artist: state.music.Artistdata,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDataArtistLoad: (data) => dispatch(ACT.FETCH(data)),
    handleDataBis: (dataB) => dispatch(ACT.FETCHBIS(dataB)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistSearch));
