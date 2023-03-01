import * as S from './style'
import * as B from '../styles/styledButtons'

interface Props {
    display: boolean,
    handleChangeDisplay: (value: number) => void
}

function Todo({display, handleChangeDisplay}: Props) {
  return (
    <S.Todo display={display}>
        <S.Header>
            <div>
                <B.RButton/>
                <B.YButton/>
                <B.GButton/>
            </div>
        </S.Header>
        <section>
            here goes the todos
        </section>
        <main>
            <form action="">
                <input type="text" />
                <button type='submit'>kkk</button>
            </form>
        </main>
    </S.Todo>
  )
}

export default Todo
