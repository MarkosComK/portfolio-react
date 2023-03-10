import { useState } from "react"
import { Nav } from "./style"
import finderIcon from "../assets/finder-icon.png"
import safariIcon from "../assets/safari-icon.png"
import calculatorIcon from "../assets/calculator-icon.png"
import cameraIcon from "../assets/camera-icon.png"
import mailIcon from "../assets/mail-icon.png"
import todoIcon from "../assets/todo-icon.png"
import weatherIcon from "../assets/weather-icon.png"

interface Props {
    handleChangeDisplay: (value: number) => void,
    handleCalculatorFocus: () => void,
    handleTodoFocus: () => void
    handleFinderFocus: () => void,
}


function TaskBar({handleChangeDisplay, handleCalculatorFocus, handleTodoFocus, handleFinderFocus}: Props){
    const [load, setLoad] = useState(false)

    // create an array with the taskbar elements
    const icons: NodeListOf<HTMLElement> = document.querySelectorAll('#navbarIcon')

    const addEventListenersToIcons = () => {
        if (icons && icons.length > 0) {
          icons.forEach((item, index) => {
            item.onmouseover = (e) => focus(e.target  as HTMLElement, index)
            item.onmouseout = () => {
              icons.forEach((item) => {
                if (item.style) {
                  item.style.transform = "scale(1) translateY(0px)"
                }
              })
            }
          })
        }
      }
      
      addEventListenersToIcons()
      
      function focus(target: HTMLElement, index: number) {
        let next: number = index + 1
        let previous: number = index - 1

        if(index === 0){
            target.style.transform = "scale(1.3) translateY(-10px)"
        } 
        else if(next === icons.length){
            icons[index].style.transform = "scale(1.3) translateY(-10px)"
        } else {
            icons[previous].style.transform = "scale(1.2) translateY(-6px)"
            icons[index].style.transform = "scale(1.5) translateY(-10px)"
            icons[next].style.transform = "scale(1.2) translateY(-6px)"
        }
      }


    return(
        <Nav>
            <ul onMouseOver={() => setLoad(true)}>
                <li><img id="navbarIcon" src={finderIcon} alt="" 
                onClick={() => {handleChangeDisplay(3); handleFinderFocus()}}
                /></li>
                <li><img id="navbarIcon" src={safariIcon} alt="" /></li>
                <li>
                    <img id="navbarIcon" src={calculatorIcon} 
                    onClick={() => {handleChangeDisplay(1); handleCalculatorFocus()}} 
                    alt="" />
                </li>
                <li>
                    <img id="navbarIcon"
                    src={todoIcon} 
                    onClick={() => {handleChangeDisplay(2); handleTodoFocus()}}
                    alt="" />
                </li>
                <li>
                  <a href=""><img id="navbarIcon" src={weatherIcon} alt="" /></a>
                </li>
                <li>
                    <img id="navbarIcon" src={mailIcon} alt="" />
                </li>
            </ul>
        </Nav>
    )
}

export default TaskBar

