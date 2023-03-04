import trashIcon from '../assets/trash-icon.png'
import checkIcon from '../assets/check-icon.png'

interface Todos {
    id: number,
    task: string | boolean,
    isDone: boolean
}

interface Props {
    todos: Todos[],
    handleDeleteTask: (value: number) => void,
    handleIsDone: (value: number) => void
}

function SingleTodo({todos, handleDeleteTask, handleIsDone}: Props) {
  return (
    <section>
        {todos.map(obj => {
            if(obj.isDone){
                return (
                    <li key={obj.id}> 
                    <u>{obj.task}</u>
                    <div>
                        <button onClick={() => {handleIsDone(obj.id)}} ><img src={checkIcon} alt="check-button" /></button>
                        <button onClick={() => {handleDeleteTask(obj.id)}} ><img src={trashIcon} alt="trash-button" /></button>
                    </div>
                    </li> 
                )
            } else {
                return (
                    <li key={obj.id}> 
                    {obj.task}
                    <div>
                        <button onClick={() => {handleIsDone(obj.id)}} ><img src={checkIcon} alt="check-button" /></button>
                        <button onClick={() => {handleDeleteTask(obj.id)}} ><img src={trashIcon} alt="trash-button" /></button>
                    </div>
                    </li> 
                )
        }
        
        } )}
    </section>
  )
}

export default SingleTodo

{/* <>
    {todos.map(obj => {
        if(obj.isDone){
            return <u>{obj.task}</u>
        } else {
            return obj.task
        }
    })}
</> */}