import { useState } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import MoveWindow from "./components/MoveWindow";

function App() {
  // set the Apps display for true or false
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)
  const [todoDisplay, setTodoDisplay] = useState<boolean>(false)

  function handleChangeDisplay(value: number) {
    switch(value){
      case 1:
        calculatorDisplay ? setCalculatorDisplay(false) : setCalculatorDisplay(true)
        break
      case 2:
        todoDisplay ? setTodoDisplay(false) : setTodoDisplay(true)
    }
  }
  

  return (
    <div>
      <VideoBackground />
      <GlobalStyle />
      <header>
      </header>
      <main>
        <MoveWindow initialX={50} initialY={50} children={<Calculator display={calculatorDisplay} handleChangeDisplay={handleChangeDisplay}/>}/>
        <Todo display={todoDisplay} handleChangeDisplay={handleChangeDisplay} />
      </main>
      <TaskBar handleChangeDisplay={handleChangeDisplay}/>
    </div>
  );
}

export default App;
