import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getData } from './client/actions/app';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getData());
  }

  render() {
    const { data, loading } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          {!loading &&
            data.map((item, index) => {
            return(
              <div style={{ marginTop: 15 }} key={index}>
                <b>{item.username}</b><br/>
                <label>{item.name}</label>
              </div>
              )
            }
          )}
          <p>{loading}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.app.data,
  loading: state.app.loading,
})
export default connect(mapStateToProps)(App)