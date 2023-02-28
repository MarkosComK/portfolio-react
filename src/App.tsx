import { useState } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";

interface Display {
  calculator: boolean
}

function App() {
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)

  const handleChangeDisplay = () => {
    if(calculatorDisplay){
      setCalculatorDisplay(false)
    } else {
      setCalculatorDisplay(true)
    }
  }
  

  return (
    <div>
      <VideoBackground />
      <GlobalStyle />
      <header>
      </header>
      <main>
        <Calculator display={calculatorDisplay} handleChangeDisplay={handleChangeDisplay}/>
      </main>
      <TaskBar handleChangeDisplay={handleChangeDisplay}/>
    </div>
  );
}

export default App;
