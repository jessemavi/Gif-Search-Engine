import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

// allows App component to subscribe to the redux store update
// whenever the store changes, mapStateToProps is called
// linking the gifs from our GifsReducer to this.props.gifs on the App component
function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

// connect is what we need to link React and Redux
// first connect(mapStateToProps) is called and returns a function that is then called with App
export default connect(mapStateToProps)(App);