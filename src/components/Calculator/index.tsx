import * as S from './style'
import { useState } from 'react'

function Calculator(){
    // set first value
    let [firstValue, setFirstValue] = useState('')
    // set operation
    let [operation, setOperation] = useState('')

    // function to push the values
    const addValue = (value: string) => {
        setFirstValue(firstValue += value)
        console.log(firstValue)
    }

    // function to set the operation
    const addOperation = (value: string) => {
        setOperation(operation += value)
        console.log(operation)
    }

    return(
        <S.Calculator>
            <S.Header>
                <div>
                    <S.Button></S.Button>
                    <S.YButton></S.YButton>
                    <S.GButton></S.GButton>
                </div>
            </S.Header>
            <S.Calculus>
                {/* displays the value 0 at the start of calculator */}
                <div>{firstValue == '' ? '0' : firstValue}</div>
                <p>{operation}</p> 
            </S.Calculus>
            <S.Buttons>
                <button id="clear" data-delete>AC</button>
                <button onClick={() => {addOperation('％')}}>％</button>
                <button onClick={() => {addOperation('÷')}}>÷</button>
                <button onClick={() => {addValue('7')}}>7</button>
                <button onClick={() => {addValue('8')}}>8</button>
                <button onClick={() => {addValue('9')}}>9</button>
                <button id="mult" data-opt="x" >×</button>
                <button onClick={() => {addValue('4')}}>4</button>
                <button onClick={() => {addValue('5')}}>5</button>
                <button onClick={() => {addValue('6')}}>6</button>
                <button onClick={() => {addOperation('-')}}>−</button>
                <button onClick={() => {addValue('1')}}>1</button>
                <button onClick={() => {addValue('2')}}>2</button>
                <button onClick={() => {addValue('3')}}>3</button>
                <button onClick={() => {addOperation('+')}}>+</button>
                <button onClick={() => {addValue('0')}}>0</button>
                <button id="decimal" data-decimal=".">,</button>
                <button id="equal" data-opt="=">=</button>
            </S.Buttons>
        </S.Calculator>
    )
}

export default Calculator