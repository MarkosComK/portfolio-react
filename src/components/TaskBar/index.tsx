import { useState } from "react"
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

    const handleMouseEnter = () => {
        setHovered({calculator: true})
        console.log(hovered)
    }

    const handleMouseLeave = () => {
        setHovered({calculator: false})
        console.log(hovered)
    }

    return(
        <Nav>
            <ul>
                <li><img id="finderBtn" src={finderIcon} alt="" /></li>
                <li><img src={safariIcon} alt="" /></li>
                <li><img src={calculatorIcon} 
                onClick={() => handleChangeDisplay(1)} 
                onMouseEnter={() => {setHovered({calculator: true})}} 
                onMouseLeave={() => {setHovered({calculator: false})}} 
                alt="" /></li>
                <li><img src={todoIcon} 
                onClick={() => handleChangeDisplay(2)}
                alt="" /></li>
                <li><a href="mailto:markoscomks@gmail.com"><img src={mailIcon} alt="" /></a></li>
            </ul>
        </Nav>
    )
}

export default TaskBar

