import * as S from './style'
import { useState } from 'react'

function Calculator(){
    let [firstValue, setFirstValue] = useState('')

    const addValue = (value: string) => {
        setFirstValue(firstValue += value)
        console.log(firstValue)
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
                <div>0</div>
                <p></p>
            </S.Calculus>
            <S.Buttons>
                <button id="clear" data-delete>AC</button>
                <button id="percent" data-percent="％">％</button>
                <button id="divide" data-opt="÷">÷</button>
                <button id="number" data-number="7">7</button>
                <button id="number" data-number="8">8</button>
                <button id="number" data-number="9">9</button>
                <button id="mult" data-opt="x" >×</button>
                <button id="number" data-number="4">4</button>
                <button id="number" data-number="5">5</button>
                <button id="number" data-number="6">6</button>
                <button id="sub" data-opt="-">−</button>
                <button onClick={()=> {addValue('1')}}  value="1">1</button>
                <button id="number" data-number="2">2</button>
                <button id="number" data-number="3">3</button>
                <button id="sum" data-opt="+">+</button>
                <button id="number" data-number="0">0</button>
                <button id="decimal" data-decimal=".">,</button>
                <button id="equal" data-opt="=">=</button>
            </S.Buttons>
        </S.Calculator>
    )
}

export default Calculator