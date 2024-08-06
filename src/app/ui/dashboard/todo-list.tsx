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
            day: 'numeric',
            month: 'short',
        });
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


    return (
        <>
            <section className="mt-6 mx-2 sm:mx-4 md:mx-8 lg:mx-12 flex-row justify-center items-center">
                <div className="px-2 sm:px-4 md:px-8 lg:px-12">
                    <header className="text-3xl font-medium text-gray-100 mb-1">Today</header>
                    <div className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true" className="siIBvPn"><path fill="currentColor" fillRule="evenodd" d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z" clipRule="evenodd"></path></svg>
                        <span className="text-sm text-gray-200">
                            {todos.length} Tasks
                        </span>
                    </div>
                </div>
                <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
                    <hr className="border-[#373737] mt-4 w-full"></hr>
                </div>
                <div className="bg-[#1e1e1e] shadow overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12">
                    <ul className="divide-y-[0.5px] divide-[#373737]">
                        {todos.map((todo, index) => (
                            <li key={todo.id}>
                                <div className="h-[58px] items-center flex">
                                    <div className="mr-2 pb-4">
                                        <ColorfulCheckbox
                                            index={todo.id}
                                            priorityColor={getPriorityColor(todo.priority)}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    </div>
                                    <div className="py-2 w-full">
                                        <div>
                                            <p className={`text-xs font-medium text-white`}>
                                                {todo.title}
                                            </p>
                                        </div>
                                        <div className="flex items-center h-4 justify-between">
                                            <div className="w-[40px]">
                                                <span className={`text-xs font-medium text-red-400`}>
                                                    {formatDate(todo.dueDateTime)}
                                                </span>
                                            </div>
                                            <div className="flex space-x-1">
                                                <span className="text-xs font-medium text-gray-400">
                                                    Inbox
                                                </span>
                                                <div className="pt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16" className="AyswQEh">
                                                        <path fill="currentColor" fillRule="evenodd" d="M5.509 2h4.982a2 2 0 0 1 1.923 1.45l1.509 5.28c.051.18.077.365.077.55V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.28a2 2 0 0 1 .077-.55l1.509-5.28A2 2 0 0 1 5.509 2Zm0 1a1 1 0 0 0-.962.726l-1.509 5.28A1 1 0 0 0 3 9.28V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.28a.997.997 0 0 0-.039-.274l-1.508-5.28A1 1 0 0 0 10.49 3H5.51Zm4.685 7a2.25 2.25 0 0 1-4.388 0H4.5a.5.5 0 1 1 0-1h1.75a.5.5 0 0 1 .5.5 1.25 1.25 0 0 0 2.5 0 .5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 0 1h-1.306Z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
                    <hr className="border-[#373737] mb-4 w-full"></hr>
                </div>
            </section>
            <section className="mx-2 sm:mx-4 md:mx-8 lg:mx-24">
                <AddTodoForm todos={todos} setTodos={setTodos} />
            </section>
        </>
    );
}
