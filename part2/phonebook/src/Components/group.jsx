import Single from "./single"

const Group = (props) => {
    const group = props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
    return (
      <div>
        {group.map((single) => <Single person={single} key={single.id} setPersons={props.setPersons} group={props.persons} />)}
  
      </div>
    )
  }

export default Group