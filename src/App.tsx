import { useState } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";

function App() {
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)

  function handleChangeDisplay(value: number) {
    switch(value){
      case 1:
        if(calculatorDisplay){
          setCalculatorDisplay(false)
        } else {
          setCalculatorDisplay(true)
        }
        break
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
