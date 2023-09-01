const Course = (props) => {

    return (
        <>
            <Header name={props.course.name} />
            <>
                {props.course.parts.map(part =>
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )
                }
            </>
            <Total course={props.course.parts} />
        </>

    )
}

const Total = (props) => {

    const initalValue = 0

    const sumWithInital = props.course.reduce((accumlator, currentValue) => accumlator + currentValue.exercises, initalValue)

    return (
        <>
            <p><b>total of {sumWithInital} exercises </b></p>
        </>
    )
}


const Header = (props) => {

    return (
        <h1> {props.name} </h1>
    )
}

export default Course
