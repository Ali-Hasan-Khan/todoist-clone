'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import FloatingForm from './floating-form';

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDateTime: string;
  priority: number;
}

export default function SideNav() {
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

  return (
    <nav className="bg-[#262626] text-white h-screen fixed left-0 top-0 w-[280px] p-6">
      <div className="mb-6">
        <a href="/dashboard" className="text-xl font-bold">
          My App
        </a>
      </div>
      <ul className="space-y-4">
        <li>
          <FloatingForm todos={todos} setTodos={setTodos} />
        </li>
        <li>
          <a href="/dashboard" className="hover:text-gray-400">
            Search
          </a>
        </li>
        <li>
          <a href="/dashboard/inbox" className="hover:text-gray-400">
            Inbox
          </a>
        </li>
        <li>
          <a href="/dashboard/today" className="hover:text-gray-400">
            Today
          </a>
        </li>
        <li>
          <a href="/dashboard/upcoming" className="hover:text-gray-400">
            Upcoming
          </a>
        </li>
        <li>
          <a href="/dashboard/filters-labels" className="hover:text-gray-400">
            Filters & Labels
          </a>
        </li>
      </ul>
    </nav>
  );
};

// export default SideNav;