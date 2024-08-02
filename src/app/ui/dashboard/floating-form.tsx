'use client';

import React, { useState } from 'react';
import AddTodoFloatingForm from '@/app/ui/dashboard/add-todo-floating';

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDateTime: string;
  priority: number;
}

interface FloatingFormProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const FloatingForm: React.FC<FloatingFormProps> = ({ todos, setTodos }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('come-in-front');

  const toggleFormVisibility = () => {
    if (formVisible) {
      setAnimationClass('go-back');
      setTimeout(() => {
        setFormVisible(false);
      }, 300); // Match the duration of the fade-out animation
    } else {
      setFormVisible(true);
      setAnimationClass('come-in-front');
    }
  };

  return (
    <div className="flex items-center h-6 space-x-1">
      <div aria-hidden="true" className="text-red-500 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75.75 0 1 1 0-1.5h4.789V6.5Z" clipRule="evenodd"></path></svg>
      </div>
      <button
        onClick={toggleFormVisibility}
        className="bg-none font-bold text-red-400 rounded-lg"
      >
        {/* {formVisible ? 'Close Form' : 'Add Task'} */}
        Add Task
      </button>

      {formVisible && (
        <div className="fixed inset-0 flex items-start justify-center z-50 mt-32">
          <div className="fixed inset-0 bg-black opacity-0 z-40"></div> {/* Background overlay */}
          <div className={`bg-[#1e1e1e] w-full max-w-lg rounded-lg shadow-2xl shadow-black relative z-50 ${animationClass}`}>
            <AddTodoFloatingForm todos={todos} setTodos={setTodos} toggleFormVisibility={toggleFormVisibility} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingForm;
