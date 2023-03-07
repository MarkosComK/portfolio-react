import { useState, useRef } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import MoveWindow from "./components/MoveWindow";

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function App() {
  // set the Apps display for true or false
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)
  const [todoDisplay, setTodoDisplay] = useState<boolean>(false)
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  function handleChangeDisplay(value: number) {
    switch(value){
      case 1:
        calculatorDisplay ? setCalculatorDisplay(false) : setCalculatorDisplay(true)
        break
      case 2:
        todoDisplay ? setTodoDisplay(false) : setTodoDisplay(true)
    }
  }
  
  // generate random values to display the apps on the screen
  const width = getRandomArbitrary(50, windowSize.current[0]-400)
  const height = getRandomArbitrary(50, windowSize.current[1]-400)

  return (
    <div>
      <VideoBackground />
      <GlobalStyle />
      <header>
      </header>
      <main>
        <MoveWindow initialX={width} initialY={height} children={<Calculator display={calculatorDisplay} handleChangeDisplay={handleChangeDisplay}/>}/>
        <MoveWindow initialX={100} initialY={100} children={<Todo display={todoDisplay} handleChangeDisplay={handleChangeDisplay} />}/>
      </main>
      <TaskBar handleChangeDisplay={handleChangeDisplay}/>
    </div>
  );
}

export default App;
