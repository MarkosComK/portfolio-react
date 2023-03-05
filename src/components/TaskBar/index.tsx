import { useState, useRef, useEffect } from "react"
import { Nav } from "./style"
import finderIcon from "../assets/finder-icon.png"
import safariIcon from "../assets/safari-icon.png"
import calculatorIcon from "../assets/calculator-icon.png"
import cameraIcon from "../assets/camera-icon.png"
import mailIcon from "../assets/mail-icon.png"
import todoIcon from "../assets/todo-icon.png"

interface Props {
    handleChangeDisplay: (value: number) => void
}


function TaskBar({handleChangeDisplay}: Props){
    const [hovered, setHovered] = useState({ calculator: false })
    const [hover, setHover] = useState(false)
    // create an array with the taskbar elements
    const icons: NodeListOf<HTMLElement> = document.querySelectorAll('#navbarIcon')
    useEffect(() => {
        // runs code below just if there`s something inside icons to avoid console errors
        if (icons && icons.length > 0) {
          icons.forEach((item, index) => {
            item.addEventListener('mouseover', (e) => focus(e.target as HTMLElement, index))
            item.addEventListener('mouseleave', () => {
              icons.forEach((item) => {
                if (item.style) {
                  item.style.transform = "scale(1) translateY(0px)"
                }
              })
            })
          })
        }
      }, [hover])
      function focus(target: HTMLElement, index: number) {
        let next: number = index + 1
        let previous: number = index - 1

        if(index === 0){
            target.style.transform = "scale(1.3) translateY(-10px)"
        } 
        else if(next == icons.length){
            icons[index].style.transform = "scale(1.3) translateY(-10px)"
        } else {
            icons[previous].style.transform = "scale(1.2) translateY(-6px)"
            icons[index].style.transform = "scale(1.5) translateY(-10px)"
            icons[next].style.transform = "scale(1.2) translateY(-6px)"
        }
      }

    return(
        <Nav>
            <ul onMouseOver={() => setHover(true)}>
                <li><img id="navbarIcon" src={finderIcon} alt="" /></li>
                <li><img id="navbarIcon" src={safariIcon} alt="" /></li>
                <li>
                    <img id="navbarIcon" src={calculatorIcon} 
                    onClick={() => handleChangeDisplay(1)} 
                    onMouseEnter={() => {setHovered({calculator: true})}} 
                    onMouseLeave={() => {setHovered({calculator: false})}} 
                    alt="" />
                </li>
                <li>
                    <img id="navbarIcon"
                    src={todoIcon} 
                    onClick={() => handleChangeDisplay(2)}
                    alt="" />
                </li>
                <li>
                    <a href="mailto:markoscomks@gmail.com"><img id="navbarIcon" src={mailIcon} alt="" /></a>
                </li>
            </ul>
        </Nav>
    )
}

export default TaskBar

