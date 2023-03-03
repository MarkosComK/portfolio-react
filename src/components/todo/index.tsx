import { useState, useEffect } from 'react'
import * as S from './style'
import * as B from '../styles/styledButtons'
import trashIcon from '../assets/trash-icon.png'
import checkIcon from '../assets/check-icon.png'
interface Props {
    display: boolean,
    handleChangeDisplay: (value: number) => void
}

interface Todos {
    id: number,
    task: string | boolean,
    isDone: boolean
}



function Todo({display, handleChangeDisplay}: Props) {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState<Todos[]>([])
    const [taskDisplay, setTaskDisplay] = useState(false)
    const [taskIsDone, setTaskIsDone] = useState(false)
    
    // set todo string value
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(todo == ''){
            setTodo('You want to do nothing?')
        } else {
            setTodos([...todos, {id: Date.now(), task: todo, isDone: false}])
            setTodo('')
        }
    }
    // edit task (in progress)
    // const handleEditTask = (value: number) => {
    //     for(let c = 0; c < todos.length; c++){
    //         if(todos[c].id == value){
    //             todos[c].task = false
    //             setTodos([...todos])
    //         }
    //     }
    // }
    // set task as Done
    const handleIsDone = (value: number) => {
        for(let c = 0; c < todos.length; c++){
            if(todos[c].id == value){
                todos[c].isDone = true
                setTodos([...todos])
            }
        }
    }
    // delete task
    const handleDeleteTask = (value: number) => {
        for(let c = 0; c < todos.length; c++){
            if(todos[c].id == value){
                todos.splice(c, 1)
                setTodos([...todos])
            }
        }
    }
    // show todos array when the array state finish
    useEffect(() => {
        console.log(todos)
      }, [todos])
    return (
        <S.Todo display={display}>
            <S.Header>
                <div>
                    <B.RButton onClick={() => handleChangeDisplay(2)}/>
                    <B.YButton/>
                    <B.GButton/>
                </div>
            </S.Header>
            <section>
                {todos.map(obj => 
                <li key={obj.id}>
                <S.TaskDone done={taskIsDone}>
                    {obj.task}
                </S.TaskDone>
                <div>
                    <button onClick={() => {handleIsDone(obj.id)}} ><img src={checkIcon} alt="check-button" /></button>
                    <button onClick={() => {handleDeleteTask(obj.id)}} ><img src={trashIcon} alt="trash-button" /></button>
                </div>
                </li> )}
            </section>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a task'
                    value={todo}
                    onChange={(e) => {setTodo(e.target.value)}}
                    />
                    <button type='submit'>Go</button>
                </form>
            </main>
        </S.Todo>
    )
}

export default Todo
