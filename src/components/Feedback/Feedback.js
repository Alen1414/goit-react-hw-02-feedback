import React from 'react';
/* import shortid from 'shortid'; */

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    hendelGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
  hendelNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
  hendelBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
  render() {
    return (
      <div>
        <h1> Please leave feedback!</h1>
        <button type="button" onClick={this.hendelGood}>
          Good
        </button>
        <button type="button" onClick={this.hendelNeutral}>
          Neutral
        </button>

        <button type="button" onClick={this.hendelBad}>
          Bad
        </button>

        <h2>Statistics</h2>

        <ul>
    <li> Good:  {this.state.good}</li>
          <li> Neutral:  {this.state.neutral}</li>
          <li> Bad:  {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
