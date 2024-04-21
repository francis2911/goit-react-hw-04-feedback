import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import './App.css';
import Section from './section/Section';
import Notification from './notification/Notification';
import { useState } from 'react';

function App() {
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const handleGoodClick = () => {
    setGoodCounter(oldState => oldState + 1);
  };
  const handleNeutralClick = () => {
    setNeutralCounter(oldState => oldState + 1);
  };
  const handleBadClick = () => {
    setBadCounter(oldState => oldState + 1);
  };
  const countTotalFeedback = () => {
    return goodCounter + neutralCounter + badCounter;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0 || goodCounter === 0) return 0;
    return ((goodCounter / countTotalFeedback()) * 100).toFixed(2);
  };
  return (
    <div className="feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={{
            handleGood: handleGoodClick,
            handleNeutral: handleNeutralClick,
            handleBad: handleBadClick,
          }}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message="There's no feedback" />
        ) : (
          <Statistics
            good={goodCounter}
            neutral={neutralCounter}
            bad={badCounter}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toString()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
