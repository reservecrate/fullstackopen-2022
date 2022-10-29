const Feedback = ({ handleClick }) => {
  return (
    <div>
      <h1>Submit Your Feedback</h1>
      <button id='good' onClick={handleClick}>
        good
      </button>
      <button id='neutral' onClick={handleClick}>
        neutral
      </button>
      <button id='bad' onClick={handleClick}>
        bad
      </button>
    </div>
  );
};

export default Feedback;
