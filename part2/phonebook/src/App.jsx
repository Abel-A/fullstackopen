import { useState, useEffect } from 'react'
import noteService from './services/phonebook'
import Group from './Components/group'
import Notification from './Components/notification'
import Input from './Components/input'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPersonMessage, setNewPersonMessage] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    noteService.getAll()
      .then(initalPhones => {
        setPersons(initalPhones)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()

    const NameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const namePresent = persons.map(person => person.name).includes(newName)

    if (!namePresent) {
      noteService.create(NameObject)
        .then(initalPhones => {
          console.log(initalPhones)
          setPersons(persons.concat(initalPhones))
          setNewPersonMessage(`Added ${initalPhones.name}`)
          setTimeout(() => {setNewPersonMessage(null)}, 5000)
        })
      setNewName('')
      setNewNumber('')
    }
    else if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one.`)) {
      const person = persons.find(n => n.name === newName)
      const changedPerson = {...person, number: newNumber }
      noteService
        .update(changedPerson.id, changedPerson)
        .then(returnedNote => {
          setPersons(persons.map(person => person.id !== returnedNote.id ? person : returnedNote))
        })
        .catch(error => {setNewPersonMessage(`Information of ${NameObject.name} has already been removed from the server.`)
                        setTimeout(() => {setNewPersonMessage(null)}, 5000)})
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newPersonMessage}/>
      <Input value={filterName} onChange={handleFilterName} text='filter shown with' />
      <form onSubmit={addNote}>
        <h2>add a new</h2>
        <Input value={newName} onChange={handleNameChange} text='name: ' />
        <Input value={newNumber} onChange={handlePhoneChange} text='number: ' />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <Group persons={persons} filter={filterName} setPersons={setPersons} />
    </div>
  )

}

export default App
