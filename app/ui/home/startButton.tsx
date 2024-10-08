'use client';
import React, { useState, MouseEvent } from 'react';

interface Button3DProps {
  onClick: () => void;
  text?: string;
}

const Button3D: React.FC<Button3DProps> = ({ onClick, text = "Start for free" }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleMouseDown = (): void => setIsPressed(true);
  const handleMouseUp = (): void => setIsPressed(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick();
    handleMouseUp();
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`px-2 py-1.5 w-[170px] h-16 md:w-auto md:h-auto relative md:px-6 md:py-3 font-bold text-white group transition-all duration-150 ease-out transform hover:-translate-y-1 ${
        isPressed ? 'translate-y-1 transition-none' : ''
      }`}
    >
      <span 
        className={`absolute inset-0 w-full h-full transition duration-150 ease-out transform translate-y-1 bg-red-700 rounded-lg group-hover:translate-y-0 ${
          isPressed ? 'translate-y-0' : ''
        }`}
      ></span>
      <span 
        className={`absolute inset-0 w-full h-full bg-red-500 border-2 border-red-700 rounded-lg group-hover:bg-red-600 ${
          isPressed ? 'bg-red-600' : ''
        }`}
      ></span>
      <span className="relative text-lg md:text-xl">{text}</span>
    </button>
  );
};

export default Button3D;