import Button from './Button';

const Feedback = ({ handleClick }) => {
  return (
    <div>
      <h2>submit your feedback</h2>
      <Button text='good' handleClick={handleClick} />
      <Button text='neutral' handleClick={handleClick} />
      <Button text='bad' handleClick={handleClick} />
    </div>
  );
};

export default Feedback;
