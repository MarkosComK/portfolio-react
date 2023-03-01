import { useState, useEffect } from 'react'
import * as S from './style'
import * as B from '../styles/styledButtons'

interface Props {
    display: boolean,
    handleChangeDisplay: (value: number) => void
}

interface Todos {
    id: number,
    task: string,
    isDone: boolean
}

function Todo({display, handleChangeDisplay}: Props) {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] =useState<string[]>([])

    // set todo string value
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo('')
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
                here goes the todos
            </section>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a task'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type='submit'>Go</button>
                </form>
            </main>
        </S.Todo>
    )
}

export default Todo
