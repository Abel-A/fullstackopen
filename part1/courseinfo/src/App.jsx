const App = () => {

  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  


  return (
    <div>
      <Header name = {course} />
      <Content parts={course} />
      <Total total={course} />
    </div>
  )
}


const Header = (props) => {

  return (
    <h1> {props.name.name} </h1>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part1 name={props.parts.parts[0]['name']} exercises={props.parts.parts[0]['exercises']} />
      <Part2 name={props.parts.parts[1]['name']} exercises={props.parts.parts[1]['exercises']} />
      <Part3 name={props.parts.parts[2]['name']} exercises={props.parts.parts[2]['exercises']} />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.total.parts[0]['exercises'] + props.total.parts[1]['exercises'] + props.total.parts[2]['exercises']}</p>
    </div>
  )
}

const Part1 = (props) => {

  return (
    <p> {props.name} {props.exercises} </p>
  )
}

const Part2 = (props) => {

  return (
    <p> {props.name} {props.exercises} </p>
  )
}

const Part3 = (props) => {

  return (
    <p> {props.name} {props.exercises} </p>
  )

}


export default App