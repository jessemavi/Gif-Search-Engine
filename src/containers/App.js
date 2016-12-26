import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import GifList from '../components/GifList';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={ this.props.gifs } />
      </div>
    );
  }
}

// passes data to our container from our store. It makes the result of reducers available to our container as props.
function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
  };
}

// passes data from our container to the store. It provides the ability for the container to tell the store that it needs to change and enables this by adding action creators to our container as props.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

// connect is what we need to link React and Redux
// first connect(mapStateToProps, mapDispatchToProps) is called and returns a function that is then called with App
export default connect(mapStateToProps, mapDispatchToProps)(App);