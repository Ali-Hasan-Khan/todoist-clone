'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import FloatingForm from './floating-form';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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

  const links = [
    {
      name: 'Search', href: '/app/search', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707l-3.563-3.563ZM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clipRule="evenodd"></path>
      </svg>
    },
    {
      name: 'Inbox', href: '/app/inbox', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a.997.997 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758H8.061Zm6.643 10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-2.295Z" clipRule="evenodd"></path>
      </svg>
    },
    {
      name: 'Today', href: '/app', icon: <svg width="22" height="22" viewBox="0 0 24 24">
        <g fill="currentColor" fillRule="evenodd">
          <path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path>
          <text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize="9" transform="translate(4 2)" fontWeight="500">
            <tspan x="8" y="15" textAnchor="middle">29</tspan>
          </text>
        </g>
      </svg>
    },
    {
      name: 'Upcoming', href: '/app/upcoming', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z" clipRule="evenodd"></path>
      </svg>
    },
    {
      name: 'Filters & Labels', href: '/app/filters-labels', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M17.5 6.001h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-3-1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3Zm-8 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm9.5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm-6.5-8.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Z" clipRule="evenodd"></path>
      </svg>
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="bg-[#262626] text-white h-screen fixed left-0 top-0 w-[280px] p-4">
      <div className="mb-6">
        <Link href="/app" className="text-xl font-bold">
          My App
        </Link>
      </div>
      <ul className="">
        <li className="pl-2 h-8 flex items-center rounded-md hover:bg-[#322f2a]">
          <FloatingForm todos={todos} setTodos={setTodos} />
        </li>
        {links.map((link) => (
          <li
            key={link.name}
            className={clsx(
              "text-sm pl-2 h-8 flex items-center rounded-md hover:bg-[#322f2a]",
              {
                'bg-[#472524]': pathname === link.href,
              },
            )}
          >
            <Link href={link.href} className="flex space-x-1 items-center">
              <span aria-hidden="true" className="hRQZFMhX5N2W_D53QQAgHGqMJtAEbRXE">
                {link.icon}
              </span>
              <div>
                {link.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// export default SideNav;