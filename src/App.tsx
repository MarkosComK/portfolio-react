import { useState, useRef } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Finder from './components/Finder'
import MoveWindow from "./components/MoveWindow";
import { SmallDevices } from "./style";

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min) 
}

function App() {
  // set the Apps display for true or false
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)
  const [todoDisplay, setTodoDisplay] = useState<boolean>(false)
  const [finderDisplay, setFinderDisplay] = useState<boolean>(false)
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  // set the zIndex of the app 
  const [calculatorIndex, setCalculatorIndex] = useState<number>(0)
  const [todoIndex, setTodoIndex] = useState<number>(0)
  const [finderIndex, setFinderIndex] = useState<number>(0)

  const handleCalculatorFocus = () => {
    setCalculatorIndex(10)
    setTodoIndex(0)
    setFinderIndex(0)
  }
  const handleTodoFocus = () => {
    setCalculatorIndex(0)
    setTodoIndex(10)
    setFinderIndex(0)
  }
  const handleFinderFocus = () => {
    setCalculatorIndex(0)
    setTodoIndex(0)
    setFinderIndex(10)
  }


  function handleChangeDisplay(value: number) {
    switch(value){
      case 1:
        calculatorDisplay ? setCalculatorDisplay(false) : setCalculatorDisplay(true)
        break
      case 2:
        todoDisplay ? setTodoDisplay(false) : setTodoDisplay(true)
        break
      case 3:
        finderDisplay ? setFinderDisplay(false) : setFinderDisplay(true)
    }
  }
  
  // generate random values to display the apps on the screen
  const percent20: number = windowSize.current[0]/100*20
  const percent50: number = windowSize.current[1]/100*50
  return (
    <div>
      <VideoBackground />
      <GlobalStyle />
      <header>
      </header>
      <main>
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} //generate a random initialX to the window
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} //generate a random initialY to the window
        width={200} //set the width of the draggable area
        handleCalculatorFocus={handleCalculatorFocus}
        zIndex={calculatorIndex}
        children={
        <Calculator display={calculatorDisplay} zIndex={calculatorIndex} handleChangeDisplay={handleChangeDisplay}/>
        }
        />
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} 
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} 
        width={230}
        handleCalculatorFocus={handleTodoFocus}
        zIndex={todoIndex}
        children={
        <Todo display={todoDisplay} zIndex={todoIndex} handleChangeDisplay={handleChangeDisplay} />
        }
        />
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} 
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} 
        width={740}
        handleCalculatorFocus={handleFinderFocus}
        zIndex={finderIndex}
        children={
        <Finder display={finderDisplay} zIndex={finderIndex} handleChangeDisplay={handleChangeDisplay}/>
        }
        />
      </main>
      <TaskBar handleChangeDisplay={handleChangeDisplay}/>
      <SmallDevices>THIS WEBSITE IT`S IN PROGRESS. SMALL DEVICES VERSION COMING SOON</SmallDevices>
    </div>
  );
}

export default App;
