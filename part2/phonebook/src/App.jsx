import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const hook = () => {
    personsService.getAllPersons().then(personsData => {
      setPersons(personsData);
      setFilteredPersons(personsData);
    });
  };

  useEffect(hook, []);

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
        setFilteredPersons(
          persons.filter(person =>
            person.name.toLowerCase().includes(value.trim().toLowerCase())
          )
        );
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
      id: persons.length + Math.floor(Math.random() * 9999)
    };
    if (alreadyExists(newName)) {
      if (
        window.confirm(
          `${newName} has already been added to the phonebook. Would you like to replace the old phone number with a new one?`
        )
      )
        updatePerson();
    } else {
      personsService.createPerson(newPerson).then(newPersonObj => {
        setPersons([...filteredPersons, newPersonObj]);
        setFilteredPersons([...filteredPersons, newPersonObj]);
      });
      setNewName('');
      setNewPhone('');
    }
  };

  const deletePerson = id => {
    const matchedPerson = filteredPersons.find(person => person.id === id);
    if (window.confirm(`Delete ${matchedPerson.name}?`)) {
      personsService.deletePerson(id);
      setPersons(filteredPersons.filter(person => person.id !== id));
      setFilteredPersons(filteredPersons.filter(person => person.id !== id));
    }
  };

  const updatePerson = () => {
    const matchedPersonIndex = persons.findIndex(
      person => person.name === newName
    );
    const matchedPerson = JSON.parse(
      JSON.stringify(persons.find(person => person.name === newName))
    );
    const matchedPersonId = matchedPerson.id;
    matchedPerson.phone = newPhone;
    personsService
      .updatePerson(matchedPersonId, matchedPerson)
      .then(updatedPersonObj => {
        const filteredPersonsCopy = JSON.parse(JSON.stringify(filteredPersons));
        filteredPersonsCopy.splice(matchedPersonIndex, 1, updatedPersonObj);
        setPersons(filteredPersonsCopy);
        setFilteredPersons(filteredPersonsCopy);
        setNewName('');
        setNewPhone('');
      });
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
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
