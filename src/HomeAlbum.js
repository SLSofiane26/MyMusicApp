import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ACT from '../src/MusicAction';
import styledBis from '../src/Style/Album.module.css';
import styled from '../src/Style/DataHomeMusic.module.css';
import Spinner from '../src/Style/Spinner';

class HomeAlbum extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      nameArtist: null,
      load: false,
    };
  }
  componentDidMount = () => {
    this.props.fetchAlbum(this.props.match.params.id);
  };

  componentDidUpdate = () => {};

  render() {
    if (this.state.artist) {
      setTimeout(() => {
        this.setState((prevState) => ({
          load: true,
        }));
      }, 200);
    }
    let d = [];
    d.push(this.props.album);
    let AlbumData = null;
    if (d) {
      AlbumData = d.map((value, index) => {
        return (
          <Fragment>
            {Object.entries(Object(value.contributors)).map((i, k) => {
              return (
                <Fragment>
                  <div
                    style={{
                      position: 'fixed',
                      display: 'flex',
                      width: '100vw',
                      zIndex: '0',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(0,0,0,1)',
                        width: '100vw',
                        height: '100vh',
                        zIndex: '15',
                        position: 'fixed',
                      }}
                    ></div>
                    <h3 className={styledBis.titreArtist}>{i[1].name}</h3>
                    <img
                      alt='logoimageXL'
                      className={styledBis.pictureXL}
                      src={i[1].picture_xl}
                    />
                  </div>
                </Fragment>
              );
            })}

            <div
              style={{
                position: 'fixed',
                zIndex: '100',
              }}
            >
              {Object.entries(Object(value.tracks)).map((key, value) => {
                return key[1].slice(0, 23).map((index, value) => {
                  return (
                    <Fragment>
                      <div className={styledBis.Album}>
                        <div
                          style={{
                            width: '50vw',
                            height: '100%',
                            background: 'rgba(0,0,0,1)',
                            opacity: this.state.load ? '1' : '0',
                            position: 'fixed',
                            zIndex: '40',
                            transition: 'all 2s ease-in-out',
                          }}
                        ></div>
                        <div className={styled.titreArticle}>
                          <div
                            style={{
                              width: '100vw',
                              zIndex: '50',
                              display: 'flex',
                              color: this.state.load ? 'white' : 'white',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                width: '100%',
                                height: 'auto',
                                flexDirection: 'column',
                                justifyContent: 'center',
                              }}
                            >
                              <div
                                style={{
                                  zIndex: '1000',
                                  display: 'flex',
                                  marginLeft: this.state.load ? '2vw' : '38vw',
                                  transition: 'all 2s ease-in-out',
                                }}
                              >
                                <h1
                                  onClick={() =>
                                    this.setState((prevState) => ({
                                      artist: index.preview,
                                      nameArtist: index.title,
                                    }))
                                  }
                                  style={{
                                    display: 'flex',
                                    fontSize: '1em',
                                    zIndex: '1000',
                                    padding: '0px',
                                    margin: '0px',
                                    marginTop: '0px',
                                  }}
                                >
                                  {index.title}
                                </h1>
                              </div>
                            </div>
                            <div
                              style={{
                                color: this.state.load ? '#FF007F' : 'white',
                                position: 'fixed',
                                display: 'flex',
                                width: '100vw',
                                justifyContent: 'flex-start',
                                marginLeft: this.state.load ? '44vw' : '100vw',
                                zIndex: '1000',
                                opacity: this.state.load ? '1' : '0',
                                transition: 'all 2s ease-in-out',
                              }}
                            >
                              <h1
                                onClick={() =>
                                  this.setState((prevState) => ({
                                    artist: index.preview,
                                    nameArtist: index.title,
                                  }))
                                }
                                style={{
                                  display: 'flex',
                                  fontSize: '1em',
                                  zIndex: '1000',
                                  padding: '0px',
                                  margin: '0px',
                                }}
                              >
                                {(index.duration / 60).toFixed(1)} min
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                });
              })}
            </div>
            {this.state.artist && (
              <div
                style={{
                  transition: 'all 2s ease-in-out',
                  opacity: this.state.load ? '1' : '0',
                  position: 'fixed',
                  zIndex: '5000',
                }}
                onClick={() =>
                  this.setState((prevState) => ({
                    load: false,
                    artist: null,
                  }))
                }
              >
                {d.map((val, index) => {
                  return (
                    <div
                      style={{
                        position: 'fixed',
                        display: 'flex',
                        width: '100vw',
                        justifyContent: 'flex-end',
                        textAlign: 'center',
                        zIndex: '300000',
                      }}
                    >
                      <img
                        src={val.cover_xl}
                        alt='LOGOIMAGE'
                        onClick={() =>
                          this.setState((prevState) => ({
                            load: false,
                          }))
                        }
                        style={{
                          marginTop: '0px',
                          position: 'fixed',
                          height: '93.8%',
                          width: '50vw',
                          zIndex: '100000',
                        }}
                      />
                      <h3
                        style={{
                          position: 'fixed',
                          color: 'white',
                          marginRight: '10px',
                        }}
                      >
                        {this.state.nameArtist}
                      </h3>
                      <audio
                        src={this.state.artist ? this.state.artist : null}
                        loop
                        onLoad
                        autoPlay
                      />
                    </div>
                  );
                })}
              </div>
            )}
            <div
              style={{
                position: 'fixed',
                marginTop: '15vh',
                marginLeft: '20px',
              }}
              key={index}
            >
              <div
                style={{
                  marginLeft: '10px',
                  position: 'fixed',
                  marginTop: '10PX',
                }}
              >
                <h1
                  style={{
                    position: 'fixed',
                    marginTop: '50px',
                    color: 'white',
                    background: 'rgba(0,0,0,0.9)',
                    padding: '10px',
                    border: '1px solid #FF007F',
                  }}
                >
                  {value.title}
                </h1>
                <span
                  style={{
                    position: 'fixed',
                    marginTop: '130px',
                    background: 'rgba(0,0,0,0.9)',
                    color: 'white',
                  }}
                >
                  Sortie le {new Date(value.release_date).toLocaleDateString()}
                </span>
                <span
                  style={{
                    position: 'fixed',
                    background: 'rgba(0,0,0,0.9)',
                    color: 'white',
                    padding: '10px',
                    border: '1px solid #FF007F',
                  }}
                >
                  Label : {value.label}
                </span>
                <span
                  style={{
                    position: 'fixed',
                    color: 'white',
                    marginTop: '160px',
                    background: 'rgba(0,0,0,0.9)',
                  }}
                >
                  Durée : {(value.duration / 60).toFixed(0)} min
                </span>
                <span
                  style={{
                    position: 'fixed',
                    color: 'white',
                    marginTop: '190px',
                    background: 'rgba(0,0,0,0.9)',
                  }}
                >
                  {value.nb_tracks} titres
                </span>
              </div>

              <img
                src={value.cover_xl}
                alt='imagecover'
                style={{ marginTop: '0px' }}
                width='50%'
                height='auto'
              />
            </div>
          </Fragment>
        );
      });
    }

    let e = [];
    e.push(this.props.album);
    let ca = null;
    if (e) {
      ca = e.map((value, items) => {
        return (
          <div
            key={items}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '50vh',
              display: 'flex',
              justifyContent: 'center',
              color: 'black',
              marginLeft: '35%',
              zIndex: '10',
            }}
          >
            {Object.entries(Object(value.genres)).map((index, items) => {
              return index[1].map((key, value) => {
                return (
                  <h1
                    style={{
                      color: 'white',
                      position: 'fixed',
                      background: 'rgba(0,0,0,0.9)',
                      padding: '10px',
                      border: '1px solid #FF007F',
                    }}
                  >
                    {key.name} | Music
                  </h1>
                );
              });
            })}
          </div>
        );
      });
    }

    return (
      <Fragment>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div>
              {AlbumData}
              {ca}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    album: state.music.AlbumData,
    loading: state.music.loading,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (data) => dispatch(ACT.FETCHALBUM(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeAlbum));
