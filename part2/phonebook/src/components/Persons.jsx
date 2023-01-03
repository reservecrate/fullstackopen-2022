const Persons = ({ persons }) => {
  return (
    <div id='Persons'>
      {persons.map(person => (
        <p key={person.id}>
          {person.name} -&gt; {person.phone}
        </p>
      ))}
    </div>
  );
};

export default Persons;
