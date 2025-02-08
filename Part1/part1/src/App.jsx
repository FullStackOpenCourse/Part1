const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name : 'Fundamentals of React',
        exercises1 : 10
    }
    const part2 = {
        name : 'Using props to pass data',
       exercises2 : 7
    }

    const part3 = {
        name : 'State of a component',
        exercises3 : 14
    }
    return(
        <div>
           <Header course={course}/>
            <Content
                part1={part1.name}
                excercises1={part1.exercises1}
                part2={part2.name}
                excercises2={part2.exercises2}
                part3={part3.name}
                excercises3={part3.exercises3}
            />
            <Total total={part1.exercises1+part2.exercises2+part3.exercises3}/>
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
            <Part part={props.part1} exercises={props.excercises1} />
            <Part part={props.part2} exercises={props.excercises2} />
            <Part part={props.part3} exercises={props.excercises3} />
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

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    );
};
export default App
