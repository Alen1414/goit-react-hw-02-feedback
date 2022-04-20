import React from 'react';
/* import shortid from 'shortid'; */
import 'components/Feedback/feedback.css';
import Section from 'components/Feedback/Section';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Feedback/Notoficaion';



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
  
      const total = this.state.good + this.state.neutral + this.state.bad;
      const positiv = Math.round((this.state.good /total) * 100);
    
      return (
      
       
      <div className="Feedback">
            
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
          
 <Section title="Statistics">
            {total < 1 ?
              (<Notification message="There is no feedback"></Notification>
) :
              
              ( <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        positiv={positiv}
            />

            )}

         </Section>
             
      </div>
    );
  }
}
 
export default Feedback;
