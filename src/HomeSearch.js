import React, { Fragment, PureComponent } from 'react';
import SearchHome from '../src/SearchHome';
import styled from '../src/Style/Login.module.css';
import { connect } from 'react-redux';
import * as ACT from '../src/MusicAction';
import { withRouter } from 'react-router';
import Spinner from '../src/Style/Spinner';

class HomeSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ' ',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmitInput = this.handleSubmitInput.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  componentDidMount = () => {};

  componentDidUpdate = () => {
    if (this.props.music) {
      this.props.history.push({ pathname: '/artist/' + this.state.data });
    }
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleData(this.state.data);
  };

  handleSubmitInput = (data) => {
    this.setState((prevState) => ({
      data: data,
    }));
    this.props.handleData(data);
  };

  handleChangeInput = (e) => {
    let d = e.target.value;
    this.setState((prevState) => ({
      data: d,
    }));
  };

  handleLink = (e) => {
    this.props.history.push({ pathname: '/home' });
  };

  render() {
    return (
      <Fragment>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div
              style={{
                width: '100vw',
                height: '100vh',
                zIndex: '-10',
                position: 'fixed',
                background: 'rgba(0,0,0,0.9)',
              }}
            ></div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <form
                style={{
                  zIndex: '400',
                  position: 'fixed',
                  margin: 'auto',
                  marginTop: '36.5vh',
                  border: 'none',
                }}
                onSubmit={(e) => this.handleSubmitForm(e)}
              >
                <input
                  className={styled.inputBis}
                  type='search'
                  placeholder='Rechercher'
                  onChange={(e) => this.handleChangeInput(e)}
                  style={{
                    width: '25vw',
                    textAlign: 'center',
                    height: '25vh',
                    fontSize: '2em',
                    background: 'rgba(0,0,0,0.9)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '20px',
                  }}
                />
              </form>
            </div>
            <SearchHome changeHandle={this.handleSubmitInput} />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    music: state.music.search,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleData: (data) => dispatch(ACT.FETCH(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeSearch));
