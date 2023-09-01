import Button from "./button" 
import noteService from '../services/phonebook'
const Single = (props) => {

    const handleClick = () => {
      if (window.confirm(`Delete ${props.person.name}?`))
        noteService.remove(props.person.id)
          .then(removedPerson => { props.setPersons(props.group.filter((single) => single != props.person)) })
    }
  
    return (<div>
      {props.person.name} {props.person.number} <Button onClick={handleClick} text='Delete' />
    </div>)
  
  }

export default Single