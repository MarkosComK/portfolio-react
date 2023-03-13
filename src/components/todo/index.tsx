import { useState } from 'react'
import * as S from './style'
import * as B from '../styles/styledButtons'
import trashIcon from '../assets/trash-icon.png'
import checkIcon from '../assets/check-icon.png'

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}

interface Todos {
    id: number,
    task: string | boolean,
    isDone: boolean,
}



function Todo({display, zIndex, handleChangeDisplay, isMobile}: Props) {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState<Todos[]>([])
    
    // set todo string value
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(todo === ''){
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
            if(todos[c].id === value){
                    todos[c].isDone = !todos[c].isDone
                setTodos([...todos])
            }
        }
    }
    // delete task
    const handleDeleteTask = (value: number) => {
        for(let c = 0; c < todos.length; c++){
            if(todos[c].id === value){
                todos.splice(c, 1)
                setTodos([...todos])
            }
        }
    }
    return (
        <S.Todo isMobile={isMobile} display={display} zIndex={zIndex}>
            <S.Header isMobile={isMobile}>
                <div>
                    <B.RButton onClick={() => handleChangeDisplay(2)}/>
                </div>
            </S.Header>
            <section>
                {todos.map(obj => {
                    if(obj.isDone){
                        return (
                            <li key={obj.id}> 
                            <span>{obj.task}</span>
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
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a task' maxLength={27}
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
