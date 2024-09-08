'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import FloatingForm from './floating-form';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { PowerIcon } from '@heroicons/react/24/outline';
import { handleSignOut } from '@/app/lib/sign-out';

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDateTime: string;
  priority: number;
}

interface SidenavProps {
  isOpen: boolean;
  toggleSidenav: () => void;
}

const SideNav: React.FC<SidenavProps> = ({ isOpen, toggleSidenav }) => {
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
    <nav className={`bg-[#262626] text-white h-screen fixed z-50 left-0 top-0 w-[280px] p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-6 flex flex-row justify-between">
        <div>
          <Link href="/app" className="text-xl font-bold">
            Todoist App
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <div>
            <Link href="">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m6.585 15.388-.101.113c-.286.322-.484.584-.484 1h12c0-.416-.198-.678-.484-1l-.101-.113c-.21-.233-.455-.505-.7-.887-.213-.33-.355-.551-.458-.79-.209-.482-.256-1.035-.4-2.71-.214-3.5-1.357-5.5-3.857-5.5s-3.643 2-3.857 5.5c-.144 1.675-.191 2.227-.4 2.71-.103.239-.245.46-.457.79-.246.382-.491.654-.701.887Zm10.511-2.312c-.083-.341-.131-.862-.241-2.148-.113-1.811-.469-3.392-1.237-4.544C14.8 5.157 13.57 4.5 12 4.5c-1.571 0-2.8.656-3.618 1.883-.768 1.152-1.124 2.733-1.237 4.544-.11 1.286-.158 1.807-.241 2.148-.062.253-.13.373-.46.884-.198.308-.373.504-.57.723-.074.081-.15.166-.232.261-.293.342-.642.822-.642 1.557a1 1 0 0 0 1 1h3a3 3 0 0 0 6 0h3a1 1 0 0 0 1-1c0-.735-.35-1.215-.642-1.557-.082-.095-.158-.18-.232-.261-.197-.22-.372-.415-.57-.723-.33-.511-.398-.63-.46-.884ZM14 17.5h-4a2 2 0 1 0 4 0Z" clipRule="evenodd"></path></svg>
              </div>
            </Link>
          </div>
          <div>
            <button onClick={toggleSidenav}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z" clipRule="evenodd"></path></svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex grow h-[680px] flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-10">
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
        <form
          action={handleSignOut}
          className="flex"
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <PowerIcon className="w-5" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SideNav;
// export default SideNav;