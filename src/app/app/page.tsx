import React from 'react';
// import TodoList from '@/app/ui/todo-list';
import SideNav from '@/app/ui/dashboard/sidenav';
import TodoList from '@/app/ui/dashboard/todo-list';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex">
            <div className="flex-col w-full px-16 pb-16">
              <div className="mt-6">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}