import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const allStats = [good, neutral, bad, all, average, positive]

  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    const updateAll = updateGood + neutral + bad
    setAll(updateAll)
    const updateAverage = (updateGood - bad) / updateAll
    setAverage(updateAverage)
    const updatePositive = updateGood / updateAll
    setPositive(updatePositive)
  }

  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    const updateAll = good + updateNeutral + bad
    setAll(updateAll)
    const updateAverage = (good - bad) / updateAll
    setAverage(updateAverage)
    const updatePositive = good / updateAll
    setPositive(updatePositive)
  }

  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    const updateAll = good + neutral + updateBad
    setAll(updateAll)
    const updateAverage = (good - updateBad) / updateAll
    setAverage(updateAverage)
    const updatePositive = good / updateAll
    setPositive(updatePositive)
  }


  return (
    <div>
      <Header text='give feedback' />

      <Button handleClick={handleGood} text='Good' />

      <Button handleClick={handleNeutral} text='Neutral' />

      <Button handleClick={handleBad} text='Bad' />

      <Header text='statistics' />

      <Statistics allStats={allStats} />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = ({ text }) => {
  return (
    <div>
      <h1> {text} </h1>
    </div>
  )
}

const Statistics = (props) => {
  if ((props.allStats[0] === 0) && (props.allStats[1] === 0) && (props.allStats[2] === 0)) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.allStats[0]} />
          <StatisticLine text="neutral" value={props.allStats[1]} />
          <StatisticLine text="bad" value={props.allStats[2]} />
          <StatisticLine text="all" value={props.allStats[3]} />
          <StatisticLine text="average" value={props.allStats[4]} />
          <StatisticLine text="positive" value={props.allStats[5]} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
    </tr>)
}

export default App