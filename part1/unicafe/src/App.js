import { useState } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral+bad

  const statisticsData = {
    good,
    neutral,
    bad,
    total,
    average: (good - bad) / total,
    positive: (good / (good + neutral + bad)) * 100 + '%'
  };

  const handleClick = e => {
    const clickedButton = e.currentTarget.id;
    clickedButton === 'good'
      ? setGood(good + 1)
      : clickedButton === 'neutral'
      ? setNeutral(neutral + 1)
      : setBad(bad + 1);
  };

  return (
    <div>
      <Feedback handleClick={handleClick} />
      <Statistics data={statisticsData} />
    </div>
  );
};

export default App;
