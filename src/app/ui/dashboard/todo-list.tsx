'use client';
import React, { useState, useRef, useEffect } from 'react';
import AddTodoForm from '@/app/ui/dashboard/add-todo';
import ColorfulCheckbox from '@/app/ui/dashboard/completed-btn';
// import PriorityBtn from './priority-btn';
// import DueDateBtn from './due-date-btn';
// import TodoList from '@/app/ui/todo-list';

interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    dueDateTime: string;
    priority: number;
}

export default function TodoList() {

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: "Grab some Pizza",
            description: "Pizza with extra cheese",
            completed: false,
            dueDateTime: "2024-07-19T18:00:00",
            priority: 1
        },
        {
            id: 2,
            title: "Do your workout",
            completed: false,
            dueDateTime: "2024-07-19T14:00:00",
            priority: 2
        }
    ]);

    const formatDate = (dateTimeString: any) => {
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-US', {
            // weekday: 'short',
            // year: 'numeric',
            day: 'numeric',
            month: 'short',
            // hour: '2-digit',
            // minute: '2-digit'
        });
    };



    function handleCheckboxChange(index: number) {
        const updatedTodos = [...todos];
        // remove from todos array
        updatedTodos.splice(index, 1);
        // updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const getPriorityLabel = (priority: number) => {
        switch (priority) {
            case 1: return "Urgent";
            case 2: return "High";
            case 3: return "Medium";
            case 4: return "Low";
            default: return "Not set";
        }
    };

    const getPriorityColor = (priority: number) => {
        switch (priority) {
            case 1: return "#f87171";
            case 2: return "#d99033";
            case 3: return "#6d90dc";
            case 4: return "gray";
            default: return "gray";
        }
    };


    // console.log(getColorClass(getPriorityColor(1)));

    return (
        <>
            <section className="mt-6 mx-24 flex-row justify-center items-center">
                <div className="px-16">
                    <header className="text-3xl font-medium text-gray-100 mb-1">Today</header>
                    <div className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true" className="siIBvPn"><path fill="currentColor" fillRule="evenodd" d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z" clipRule="evenodd"></path></svg>
                        <span className="text-sm text-gray-200">
                            {todos.length} Tasks
                        </span>
                    </div>
                </div>
                <div className="w-[768px] mx-auto">
                    <hr className="border-[#373737] mt-4 w-full"></hr>
                </div>
                <div className="bg-[#1e1e1e] shadow overflow-hidden sm:rounded-md px-16">
                    <ul className="divide-y-[0.5px] divide-[#373737]">
                        {todos.map((todo, index) => (
                            <li key={todo.id}>
                                <div className="w-[800px] h-[58px] items-center flex">
                                    <div className="mr-2 pb-6">
                                        <ColorfulCheckbox
                                            index={todo.id}
                                            priorityColor={getPriorityColor(todo.priority)}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    </div>
                                    <div className="mr-2 py-2">
                                        <p className={`text-xs font-medium ${todo.completed ? 'text-gray-900 line-through' : 'text-white'}`}>
                                            {todo.title}
                                        </p>
                                        <div className="">
                                            <span className={`text-xs font-medium ${todo.completed ? 'text-gray-900 line-through' : 'text-red-400'}`}>
                                                {formatDate(todo.dueDateTime)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[768px] mx-auto">
                    <hr className="border-[#373737] mb-4 w-full"></hr>
                </div>
            </section>
            <section className="mx-24">
                <AddTodoForm todos={todos} setTodos={setTodos} />
            </section>
        </>
    );
}
