import * as S from './style'

function Calculator(){
    return(

        <S.Calculator>
            <div>
                <header>
                    <button></button>
                    <button></button>
                    <button></button>
                </header>
            </div>
            <section>
                <p>0</p>
                <p></p>
            </section>
            <section>
                <div>
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
                    <button id="number" data-number="1">1</button>
                    <button id="number" data-number="2">2</button>
                    <button id="number" data-number="3">3</button>
                    <button id="sum" data-opt="+">+</button>
                    <button id="number" data-number="0">0</button>
                    <button id="decimal" data-decimal=".">,</button>
                    <button id="equal" data-opt="=">=</button>
                </div>
            </section>
        </S.Calculator>
    )
}

export default Calculator