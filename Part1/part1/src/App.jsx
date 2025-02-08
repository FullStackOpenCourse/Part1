const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return(
        <div>
           <Header course={course}/>
            <Content part={part1} number={exercises1}/>
            <Content part={part2} number={exercises2}/>
            <Content part={part3} number={exercises3}/>
            <Total total={exercises1+exercises2+exercises3}/>
        </div>
    )

}

const Header = (props) =>{
    return(
        <div>
            <p>{props.course}</p>
        </div>
    )
}

const Content = (props) =>{
    return(
        <div>
            <p>{props.part} {props.number}</p>
        </div>
    )
}

const Total = (props) =>{
    return(
        <div>
            <p>Number of excersises {props.total}</p>
        </div>
    )
}
export default App
