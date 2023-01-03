import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsData from './data/personsData.json';

const App = () => {
  const [persons, setPersons] = useState(personsData);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const alreadyExists = name => {
    const names = persons.map(person => person.name);
    return names.includes(name.trim());
  };

  const handleInputChange = e => {
    const { value, id } = e.target;
    switch (id) {
      case 'nameInput':
        setNewName(value);
        break;
      case 'phoneInput':
        setNewPhone(value);
        break;
      case 'searchQueryInput':
        setSearchQuery(value);
        const filteredPersons = personsData.filter(person =>
          person.name.toLowerCase().includes(value.toLowerCase())
        );
        setPersons(filteredPersons);
        break;
      default:
        console.log(
          'An error has occurred - no matching input element has been found.'
        );
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    };
    if (alreadyExists(newName))
      window.alert(`${newName.trim()} already exists in the phonebook!`);
    else {
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
    }
  };

  return (
    <div id='App'>
      <h1>Phonebook</h1>
      <Filter props={{ searchQuery, handleInputChange }} />
      <h2>Add new person</h2>
      <PersonForm
        props={{
          handleSubmit,
          newName,
          newPhone,
          handleInputChange
        }}
      />
      <h2>Phone numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
