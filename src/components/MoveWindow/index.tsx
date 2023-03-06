import { useRef, useState } from 'react';
import * as S from './style'

interface Props {
  initialX: number,
  initialY: number,
  children: JSX.Element
}

function MoveWindow({ initialX, initialY, children }: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: initialX, y: initialY })


  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleClick = () => {
    console.log('click')
  }

  return (
    <S.MovableWindow
        top={position.x}
        left={position.y}
    >
        <S.Header 
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        ></S.Header>
        {children}
    </S.MovableWindow>
  );
};

export default MoveWindow