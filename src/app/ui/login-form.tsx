import React from 'react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Log in to FirstTodo</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot your password?
        </Link>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?
          <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}