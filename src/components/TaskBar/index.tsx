import { Nav } from "./style"
import finderIcon from "../assets/finder-icon.png"
import safariIcon from "../assets/safari-icon.png"
import calculatorIcon from "../assets/calculator-icon.png"
import cameraIcon from "../assets/camera-icon.png"
import mailIcon from "../assets/mail-icon.png"

function TaskBar(){
    return(
        <Nav>
            <ul>
                <li><img id="finderBtn" src={finderIcon} alt="" /></li>
                <li><img src={safariIcon} alt="" /></li>
                <li><img src={calculatorIcon} alt="" /></li>
                <li><img src={cameraIcon} alt="" /></li>
                <li><img src={mailIcon} id="calculatorBtn" alt="" /></li>
                <li><a href="mailto:markoscomks@gmail.com"><img alt="" /></a></li>
                <li><img alt="" /></li>
            </ul>
        </Nav>
    )
}

export default TaskBar

