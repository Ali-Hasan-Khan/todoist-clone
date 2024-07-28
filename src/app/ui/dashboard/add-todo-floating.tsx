'use client';

import React, { useState, useRef, useEffect } from 'react';
import PriorityBtn from '@/app/ui/dashboard/priority-btn';

interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    dueDateTime: string;
    priority: number;
}

interface AddTodoFloatingProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleFormVisibility: () => void;
}

const AddTodoFloatingForm: React.FC<AddTodoFloatingProps> = ({ todos, setTodos, toggleFormVisibility }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(4);
    const titleInputRef = useRef<HTMLInputElement>(null);

    const createTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        const newTodo: Todo = {
            id: todos.length + 1,
            title,
            description,
            completed: false,
            dueDateTime: new Date().toISOString(),
            priority,
        };

        setTodos(todos => {
            const updatedTodos = [...todos, newTodo];
            setTitle('');
            setDescription('');
            setPriority(4);
            return updatedTodos;
        });
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-[798px]">
                <form className="" onSubmit={createTodo}>
                    <div className="p-2.5 flex rounded-t-md shadow-sm flex-col border-[#353535] border">
                        <div className="text_editor mb-2">
                            <div>
                                <input
                                    ref={titleInputRef}
                                    autoComplete="off"
                                    type="text"
                                    name="todo-title"
                                    id="todo-title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="focus:outline-none focus:ring-0 bg-[#1e1e1e] text-white flex-0 block w-full rounded-none sm:text-sm"
                                    placeholder="Task name"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            createTodo(e as any);
                                        }
                                    }}

                                />
                            </div>
                            <div className="flex items-center h-6">
                                <input
                                    type="text"
                                    name="todo-description"
                                    id="todo-description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="text-xs focus:outline-none focus:ring-0 bg-[#1e1e1e] text-white focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-xs border-transparent"
                                    placeholder="Description"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            // createTodo(e as any);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mx-0">
                            <PriorityBtn
                                currentPriority={priority}
                                setPriority={setPriority}
                                titleInputRef={titleInputRef}
                            />
                        </div>
                    </div>
                    <div className="flex rounded-b-md justify-end pl-2 pr-3 py-2 border-[#353535] border">
                        <button
                            type="button"
                            className="mx-2 w-full sm:w-auto sm:max-w-24 inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-md text-white bg-[#292929] hover:bg-[#393939] focus:outline-none"
                            onClick={toggleFormVisibility}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto sm:max-w-24 inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none"
                        >
                            Add task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodoFloatingForm;
