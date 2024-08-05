'use client';
import React from 'react';
import Link from 'next/link';
import Button3D from './ui/home/startButton';

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage() {
  // on clicking the start for free button redirect to /app page
  function handleStartForFree() {
    window.location.href = "/app";
  }
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-red-500">todoist</h1>
          </div>
          <div className="flex divide-x-2">
            <div className="flex items-center">
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Features
              </Link>
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                For teams
              </Link>
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Resources ^
              </Link>
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Pricing
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Log In
              </Link>
            </div>
            <Link href="/app" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
              Start for Free
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <div className="intro-section flex flex-col space-y-6 mx-96 px-10 text-center">
          <div>
            <h2 className="text-6xl font-bold">Organize your work and life, finally. </h2>
          </div>
          <div className="">
            <p className="mx-8 text-xl text-gray-600">Simplify life for both you and your team. The world's #1 task manager and to-do list app.</p>
          </div>
          <div>
            <Button3D onClick={handleStartForFree} />
          </div>

        </div>
        <div className="mb-20"></div>
        <div className="flex justify-center">
          <div className="w-[1360px] h-[136px] flex items-center divide-x-2 justify-between text-center">
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div className="flex h-[72px]">
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Simple, straightforward,
                  and super powerful
                </blockquote>
              </div>
              <div className="grid place-items-center w-[271px]">
                <img width="92" height="16" src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/the-verge_gdh1dw.png"></img>
              </div>
            </div>
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div>
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Simply a joy to use
                </blockquote>
              </div>
              <div className="grid place-items-center w-[271px]">
                <img width="139" height="18" src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/wirecutter_blf8c5.png"></img>
              </div>
            </div>
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div>
                <blockquote className="blockquote text-black text-2xl font-priori">
                  The best to-do list app
                  on the market
                </blockquote>
              </div>
              <div className="grid place-items-center w-[271px]">
                <img width="30" height="40" src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/pc-mag_ak9mna.png"></img>
              </div>
            </div>
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div>
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Nothing short of stellar
                </blockquote>
              </div>
              <div className="flex justify-center w-[271px]">
                <img width="120" height="18" src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/techradar_qt0nt6.png"></img>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container my-20 mx-auto px-4 py-8 text-center">
        <p>&copy; 2023 Todoist. All rights reserved.</p>
      </footer>
    </div>
  );
}