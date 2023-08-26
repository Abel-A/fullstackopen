import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)

  const RandomNumber = (maxRand) => {
    return Math.floor(Math.random() * maxRand)
  }


  const HandleAnecdote = () => {
    const randTemp = RandomNumber(anecdotes.length)
    setSelected(randTemp)
  }

  const FindMax = (currVotes) => {
    const currMax = Math.max(...currVotes)
    return (currVotes.indexOf(currMax))
  }



  const HandleVote = () => {
    const copyPoints = [...vote]
    copyPoints[selected] += 1
    setVote(copyPoints)
    const tempMaxIndex = FindMax(copyPoints)
    setMaxIndex(tempMaxIndex)
  }

  return (
    <>
      <Header text="Anecdote of the Day" />
      <Para text={anecdotes[selected]} />
      <p> has {vote[selected]} votes </p>
      <Button handleClick={() => HandleVote()} text="vote" />
      <Button handleClick={() => HandleAnecdote()} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <Para text={anecdotes[maxIndex]} />
    </>
  )
}


const Header = ({ text }) => {
  return (<h1> {text} </h1>)
}

const Para = ({ text }) => {
  return (<p>{text}</p>)
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



export default App
