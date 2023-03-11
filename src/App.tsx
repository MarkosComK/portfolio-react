import { useState, useRef } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Finder from './components/Finder'
import MoveWindow from "./components/MoveWindow";
import { SmallDevices } from "./style";
import Weather from "./components/Weather";
import TopBar from "./components/TopBar";

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min) 
}

function App() {
  // set the Apps display for true or false
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)
  const [todoDisplay, setTodoDisplay] = useState<boolean>(false)
  const [finderDisplay, setFinderDisplay] = useState<boolean>(false)
  const [weatherDisplay, setWeatherDisplay] = useState<boolean>(false)
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  // change Background
  const [background, setBackground] = useState('')
  const [videoDisplay, setVideoDisplay] = useState(true)

  const handleBgChange = (value: string) => {
    setVideoDisplay(false)
    setBackground(value)
    console.log('working')

  }

  // set the zIndex of the app 
  const [calculatorIndex, setCalculatorIndex] = useState<number>(0)
  const [todoIndex, setTodoIndex] = useState<number>(0)
  const [finderIndex, setFinderIndex] = useState<number>(0)
  const [weatherIndex, setWeatherIndex] = useState<number>(0)
  const [zIndex, setZindex] = useState<number>(1)

  const handleCalculatorFocus = () => {
    setCalculatorIndex(zIndex+1)
    setZindex(zIndex + 1)
  }
  const handleTodoFocus = () => {
    setTodoIndex(zIndex)
    setZindex(zIndex + 1)
  }
  const handleFinderFocus = () => {
    setFinderIndex(zIndex)
    setZindex(zIndex + 1)
  }
  const handleWeatherFocus = () => {
    setWeatherIndex(zIndex)
    setZindex(zIndex + 1)
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
        break
      case 4:
        weatherDisplay ? setWeatherDisplay(false) : setWeatherDisplay(true)
        break
    }
  }
  
  // generate random values to display the apps on the screen
  const percent20: number = windowSize.current[0]/100*20
  const percent50: number = windowSize.current[1]/100*50
  return (
    <div>
      <VideoBackground display={videoDisplay} background={background}/>
      <GlobalStyle />
      <header>
        <TopBar handleBgChange={handleBgChange}/>
      </header>
      <main>
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} //generate a random initialX to the window
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} //generate a random initialY to the window
        width={200} //set the width of the draggable area
        handleFocus={handleCalculatorFocus}
        zIndex={calculatorIndex}
        children={
        <Calculator display={calculatorDisplay} zIndex={calculatorIndex} handleChangeDisplay={handleChangeDisplay}/>
        }
        />
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} 
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} 
        width={230}
        handleFocus={handleTodoFocus}
        zIndex={todoIndex}
        children={
        <Todo display={todoDisplay} zIndex={todoIndex} handleChangeDisplay={handleChangeDisplay} />
        }
        />
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} 
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} 
        width={740}
        handleFocus={handleFinderFocus}
        zIndex={finderIndex}
        children={
        <Finder display={finderDisplay} zIndex={finderIndex} handleChangeDisplay={handleChangeDisplay}/>
        }
        />
        <MoveWindow 
        initialX={getRandomArbitrary(50, windowSize.current[0]- percent20)} //generate a random initialX to the window
        initialY={getRandomArbitrary(50, windowSize.current[1]- percent50)} //generate a random initialY to the window
        width={200} //set the width of the draggable area
        handleFocus={handleWeatherFocus}
        zIndex={weatherIndex}
        children={
        <Weather display={weatherDisplay} zIndex={weatherIndex} handleChangeDisplay={handleChangeDisplay}/>
        }
        />
      </main>

      <TaskBar 
      handleChangeDisplay={handleChangeDisplay}
      handleCalculatorFocus={handleCalculatorFocus}
      handleTodoFocus={handleTodoFocus}
      handleFinderFocus={handleFinderFocus}
      handleWeatherFocus={handleWeatherFocus}
      />

      <SmallDevices>THIS WEBSITE IT`S IN PROGRESS. SMALL DEVICES VERSION COMING SOON</SmallDevices>
    </div>
  );
}

export default App;
