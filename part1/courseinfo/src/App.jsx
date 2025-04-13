const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content = (props) => {
  const parts = props.parts.map((part, i) => <Part part={part} key={i}/>)
  return (
    <div>
      {parts}
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  let total = 0
  parts.forEach(part => total += part.exercises)
return (
    <div>
      <Header course={course} />
      <Content 
          parts={parts}/>
      <Total total={total} />
    </div>
  )
}

export default App