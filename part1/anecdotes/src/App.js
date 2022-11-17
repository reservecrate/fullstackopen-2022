import { useState } from 'react';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { anecdote: 'If it hurts, do it more often.', score: 0 },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      score: 0
    },
    {
      anecdote:
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      score: 0
    },
    {
      anecdote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      score: 0
    },
    { anecdote: 'Premature optimization is the root of all evil.', score: 0 },
    {
      anecdote:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      score: 0
    },
    {
      anecdote:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      score: 0
    }
  ]);

  const [selected, setSelected] = useState(0);

  const handleVote = () => {
    const updatedAnecdotes = JSON.parse(JSON.stringify(anecdotes));
    updatedAnecdotes[selected].score += 1;
    setAnecdotes(updatedAnecdotes);
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const bestAnecdote = anecdotes.reduce((best, current) =>
    best.score >= current.score ? best : current
  );

  return (
    <div id='app'>
      <h2>anecdote of the day</h2>
      <p>{anecdotes[selected].anecdote}</p>
      <p>this anecdote has {anecdotes[selected].score} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h2>best anecdote (most votes)</h2>
      <p>{bestAnecdote.anecdote}</p>
      <p>this anecdote has {bestAnecdote.score} votes</p>
    </div>
  );
};

export default App;
