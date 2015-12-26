import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    router: state.router,
  };
}

function mapDispatchToProps() {
  return {
  };
}

const App = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
