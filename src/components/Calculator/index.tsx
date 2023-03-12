import * as S from './style'
import * as B from '../styles/styledButtons'
import { useState } from 'react'

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}


function Calculator({display, zIndex, handleChangeDisplay, isMobile}: Props){

    // set first value
    let [firstValue,  setFirstValue] = useState('')

    // set operation
    let [operation, setOperation] = useState('')

    // set second value
    let [secondValue, setSecondValue] = useState('')

    let [result, setResult] = useState('')

    // function to push the values
    const addValue = (value: string) => {
        let maxLength = 5
        if(operation.length === 0){
            setFirstValue(firstValue += value)
            if(firstValue.length > maxLength){
                setFirstValue(firstValue = firstValue.slice(0, -1))
            }
        } else {
            setSecondValue(secondValue += value)
            if(secondValue.length > maxLength){
                setSecondValue(secondValue = secondValue.slice(0, -1))
            }
        }
    }

    // function to set the operation
    const addOperation = (value: string) => {
        if(firstValue.length > 0){
            setOperation(operation += value)
            if(operation.length > 1){
                setOperation(operation = operation.slice(0, -1))
            }
        }
    }

    // function to AC button
    const clear = () => {
        setFirstValue('')
        setSecondValue('')
        setOperation('')
        setResult('')
    }

    // set second value percent
    const percent = () => {
        let percent
        percent = Number(firstValue) / 100 * Number(secondValue)
        setSecondValue(String(percent))
    }

    // function equal
    const equal = () => {
        let value
        switch(operation){
            case '÷':
                value = Number(firstValue) / Number(secondValue)
                setResult(result += String(value))
                break
            case '×':
                value = Number(firstValue) * Number(secondValue)
                setResult(result += String(value))
                break
            case '-':
                value = Number(firstValue) - Number(secondValue)
                setResult(result += String(value))
                break
            case '+':
                value = Number(firstValue) + Number(secondValue)
                setResult(result += String(value))
                break
        }
        clear()
        setFirstValue(firstValue = result)
    }
    // function to display the values of the calculator
    const displayValue = () => {
        // variablue used to replace . to ,
        let value;
        if (operation.length === 0) {
          value = firstValue;
        } else {
          value = secondValue.length === 0 ? firstValue : secondValue;
        }
        value = value.replace('.', ',');
        return value === '' ? '0' : value;
    }

    return(
        <S.Calculator isMobile={isMobile} display={display} zIndex={zIndex}>
            <S.Header>
                <div>
                    <B.RButton onClick={() => handleChangeDisplay(1)}></B.RButton>
                </div>
            </S.Header>
            <S.Calculus>
                <div>{displayValue()}</div>
                <p>{operation}</p> 
            </S.Calculus>
            <S.Buttons isMobile={isMobile}>
                <button onClick={clear}>AC</button>
                <button onClick={percent}>％</button>
                <button onClick={() => {addOperation('÷')}}>÷</button>
                <button onClick={() => {addValue('7')}}>7</button>
                <button onClick={() => {addValue('8')}}>8</button>
                <button onClick={() => {addValue('9')}}>9</button>
                <button onClick={() => {addOperation('×')}} >×</button>
                <button onClick={() => {addValue('4')}}>4</button>
                <button onClick={() => {addValue('5')}}>5</button>
                <button onClick={() => {addValue('6')}}>6</button>
                <button onClick={() => {addOperation('-')}}>−</button>
                <button onClick={() => {addValue('1')}}>1</button>
                <button onClick={() => {addValue('2')}}>2</button>
                <button onClick={() => {addValue('3')}}>3</button>
                <button onClick={() => {addOperation('+')}}>+</button>
                <button onClick={() => {addValue('0')}}>0</button>
                <button onClick={() => {addValue('.')}}>,</button>
                <button onClick={equal}>=</button>
            </S.Buttons>
        </S.Calculator>
    )
}

export default Calculator