import React, { useState } from 'react';

interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    dueDateTime: string;
    priority: number;
}

interface ColorfulCheckboxProps {
    index: number;
    priorityColor: string;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const ColorfulCheckbox: React.FC<ColorfulCheckboxProps> = ({ index, priorityColor, todos, setTodos }) => {
    const [isChecked, setIsChecked] = useState(false);

    const todo = todos[index - 1];

    const checkboxStyle: React.CSSProperties = {
        width: '20px',
        height: '20px',
        border: `2px solid ${priorityColor}`,
        borderRadius: '50%',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    };

    const checkboxCheckedStyle: React.CSSProperties = {
        ...checkboxStyle,
        backgroundColor: priorityColor,
        borderColor: priorityColor,
    };

    const checkmarkStyle: React.CSSProperties = {
        color: 'white',
        opacity: isChecked ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setIsChecked(!isChecked);
            event.preventDefault();
        }
    };

    const removeTodo = () => {
        const updatedTodos = [...todos];
        // remove from todos array
        updatedTodos.splice(index - 1, 1);
        setTodos(updatedTodos);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <button
                    type="button"
                    style={todo.completed ? checkboxCheckedStyle : checkboxStyle}
                    // onClick={() => setIsChecked(!isChecked)}
                    onClick={removeTodo}
                    onKeyDown={handleKeyDown}
                    aria-checked={isChecked}
                    role="checkbox"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        style={{ ...checkmarkStyle, width: '16px', height: '16px' }}
                    >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ColorfulCheckbox;