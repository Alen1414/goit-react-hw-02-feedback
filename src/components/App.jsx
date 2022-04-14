import Feedback from 'components/Feedback/Feedback';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Feedback />
      </div>
    );
  }
}

export default App;
