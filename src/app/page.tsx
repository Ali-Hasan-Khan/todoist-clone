import React from 'react';
import Link from 'next/link';

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">FirstTodo</h1>
          <div>
            <Link href="/login" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
              Log In
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Organize Your Life with FirstTodo</h2>
          <p className="text-xl mb-8">Simple, fast, and intuitive task management for everyone.</p>
          <Link href="/app" className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
            Get Started for Free
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureItem 
            title="Easy Task Creation" 
            description="Add tasks quickly and easily with our intuitive interface."
          />
          <FeatureItem 
            title="Smart Organization" 
            description="Categorize and prioritize your tasks effortlessly."
          />
          <FeatureItem 
            title="Sync Across Devices" 
            description="Access your todos anywhere, anytime, on any device."
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p>&copy; 2023 FirstTodo. All rights reserved.</p>
      </footer>
    </div>
  );
}