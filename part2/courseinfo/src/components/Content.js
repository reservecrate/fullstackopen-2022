import Part from './Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
