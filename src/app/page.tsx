'use client';
import React from 'react';
import Link from 'next/link';
import Button3D from './ui/home/startButton';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HorizontalScroll from './ui/home/horizontalScroll';

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

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);



  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 750) {
  //       setIsOpen(false);
  //     } else {
  //       setIsOpen(true);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Call initially to set the correct state based on initial window size

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <header className="bg-white">
        <nav className="container mx-auto sm:px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-red-500">todoist</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/features" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Features
              </Link>
              <Link href="/teams" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                For teams
              </Link>
              <Link href="/resources" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Resources ^
              </Link>
              <Link href="/pricing" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                Pricing
              </Link>
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                Log In
              </Link>
              <Link href="/app" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
                Start for Free
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-2">
                <Link href="/features" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                  Features
                </Link>
                <Link href="/teams" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                  For teams
                </Link>
                <Link href="/resources" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                  Resources ^
                </Link>
                <Link href="/pricing" className="bg-white px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
                  Pricing
                </Link>
                <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                  Log In
                </Link>
                <Link href="/app" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300 text-center">
                  Start for Free
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="">
        <div className="intro-section mt-8 flex flex-col space-y-6 mx-4 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 px-4 md:px-10 text-center">
          <div className="">
            <h2 className="mx-0 md:mx-0 text-2xl md:text-4xl xl:text-6xl font-bold">Organize your work and life, finally.</h2>
          </div>
          <div>
            <p className="mx-0 sm:mx-8 text-xs md:text-sm xl:text-xl text-gray-600">Simplify life for both you and your team. The world&apos;s #1 task manager and to-do list app.</p>
          </div>
          <div>
            <Button3D onClick={handleStartForFree} />
          </div>
        </div>
        <div className="hidden md:flex justify-center my-16">
          <div className="relative w-[1312px] h-[738px]">
            <Image
              className="hidden md:block rounded-2xl object-cover"
              alt="home-teams-bg"
              src="/images/static_home-teams_intro_background.avif"
              fill
            ></Image>
            <Image
              className="hidden md:block absolute top-0 left-0 object-cover"
              alt="home-teams-bg"
              src="/images/static_home-teams_intro_wide_headerui.avif"
              fill
            ></Image>
          </div>
        </div>
        <div className="mb-20"></div>
        <div className="hidden md:flex justify-center">
          <div className="w-[1360px] h-[136px] flex items-center divide-x-2 justify-between text-center">
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div className="flex h-[72px]">
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Simple, straightforward,
                  and super powerful
                </blockquote>
              </div>
              <div className="grid place-items-center w-[271px]">
                <Image
                  className="hidden md:block"
                  alt="the verge logo"
                  width={92}
                  height={16}
                  src="/images/the-verge.png">
                </Image>
              </div>
            </div>
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div>
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Simply a joy to use
                </blockquote>
              </div>
              <div className="grid place-items-center w-[271px]">
                <Image
                  className="hidden md:block"
                  alt="wirecutter logo"
                  width={138}
                  height={18}
                  src="/images/wirecutter.png">
                </Image>
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
                <Image
                  className="hidden md:block"
                  alt="PC mag logo"
                  width={30}
                  height={40}
                  src="/images/pc-mag.png">
                </Image>
              </div>
            </div>
            <div className="px-6 flex flex-col justify-between items-center w-[319px] h-[136px]">
              <div>
                <blockquote className="blockquote text-black text-2xl font-priori">
                  Nothing short of stellar
                </blockquote>
              </div>
              <div className="flex justify-center w-[271px]">
                <Image
                  className="hidden md:block"
                  alt="techradar logo"
                  width={120}
                  height={18}
                  src="/images/techradar.png">
                </Image>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HorizontalScroll />

      <footer className="bg-[#ffefe5] mt-10 mb-2 w-full px-4 py-8 text-center">
        <p>&copy; 2023 Todoist. All rights reserved.</p>
      </footer>
    </div>
  );
}
