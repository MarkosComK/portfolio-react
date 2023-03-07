import { useRef, useState } from 'react';
import * as S from './style'

interface Props {
  initialX: number,
  initialY: number,
  children: JSX.Element
}

interface Position {
    x: number,
    y: number
}

function MoveWindow({ initialX, initialY, children }: Props) {
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
            const dx = e.clientX - mousePrev.current.x
            const dy = e.clientY - mousePrev.current.y
            setPosition((prevPosition) => ({
                x: prevPosition.x + dx,
                y: prevPosition.y + dy
            }))
            mousePrev.current = { x: e.clientX, y: e.clientY }
        } 
    }

    return (
        <S.MovableWindow
            top={position.y}
            left={position.x}
        >
            <S.Header 
                onMouseDown={handleDragOn}
                onMouseUp={handleDragOff}
                onMouseMove={handleMouseMove}
            >
            </S.Header>
            {children}
        </S.MovableWindow>
    )
}

export default MoveWindow