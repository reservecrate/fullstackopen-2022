import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  const { name, parts } = course;
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <div id='course'>
      <Header name={name}/>
      <Content parts={parts} />
      <Total total={total }/>
    </div>
  );
};

export default Course;
