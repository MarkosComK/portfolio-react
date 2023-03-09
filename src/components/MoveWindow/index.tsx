import { useRef, useState } from 'react';
import * as S from './style'

interface Props {
  initialX: number,
  initialY: number,
  width: number,
  handleFocus: () => void,
  zIndex: number,
  children: JSX.Element
}

interface Position {
    x: number,
    y: number
}

function MoveWindow({ initialX, initialY, width, handleFocus, zIndex, children }: Props) {
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({ x: initialX, y: initialY })
    const mouseStart = useRef<Position>({ x: 0, y: 0 });
    const mousePrev = useRef<Position>({ x: 0, y: 0 });

    // activate the dragging
    const handleDragOn = (e: React.MouseEvent) => {
        setIsDragging(true)
        mouseStart.current = { x: e.clientX, y: e.clientY }
        mousePrev.current = mouseStart.current
    }
    // desactivate the dragging
    const handleDragOff = (e: React.MouseEvent) => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if(isDragging){
            const divx = e.clientX - mousePrev.current.x
            const divy = e.clientY - mousePrev.current.y
            setPosition((prevPosition) => ({
                x: prevPosition.x + divx,
                y: prevPosition.y + divy
            }))
            mousePrev.current = { x: e.clientX, y: e.clientY }
        } 
    }

    return (
        <S.MovableWindow
            top={position.y}
            left={position.x}
            onMouseDown={handleFocus}
            >
            <S.Header 
                onMouseDown={handleDragOn}
                onMouseUp={handleDragOff}
                onMouseMove={handleMouseMove}
                width={width}
                zIndex={zIndex}
            >
            </S.Header>
            {children}
        </S.MovableWindow>
    )
}

export default MoveWindow