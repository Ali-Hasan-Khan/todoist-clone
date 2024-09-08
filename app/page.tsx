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
    window.location.href = "/login";
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
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="127" height="32" fill="none" viewBox="0 0 127 32"><g clipPath="url(#todoist-extended-logo_svg__a)"><path fill="#E44232" fillRule="evenodd" d="M3.92 0h23.947c2.195 0 3.99 1.8 3.99 4v24c0 2.2-1.795 4-3.99 4H3.919c-2.195 0-3.99-1.8-3.99-4v-5.374l.056.033a944.36 944.36 0 0 0 5.37 3.12c.477.27.934.264 1.394-.002l6.224-3.59.116-.067.003-.002.018-.01.065-.038a64473.2 64473.2 0 0 0 6.496-3.746c.276-.16.29-.651-.02-.829l-.217-.123v-.001h-.001c-.316-.18-.724-.413-.898-.516a1.016 1.016 0 0 0-.995.012c-.155.09-10.479 6.039-10.824 6.235a1.343 1.343 0 0 1-1.336 0l-5.452-3.175v-2.693l.057.033c1.362.795 4.581 2.674 5.37 3.12.477.27.934.264 1.394-.002l6.353-3.664.024-.014.004-.002c3.188-1.84 6.4-3.691 6.54-3.773.277-.16.291-.651-.019-.828l-.217-.124c-.315-.18-.725-.414-.9-.517a1.016 1.016 0 0 0-.994.012c-.155.09-10.479 6.039-10.824 6.235a1.343 1.343 0 0 1-1.336 0l-5.452-3.175v-2.693l.056.033c1.361.795 4.582 2.674 5.37 3.12.478.27.935.264 1.395-.002l6.36-3.668.008-.005h.002l.08-.047L19.67 7.54c.276-.16.29-.65-.02-.828l-.217-.124c-.316-.18-.725-.414-.9-.516a1.016 1.016 0 0 0-.994.012c-.155.089-10.479 6.038-10.824 6.235a1.343 1.343 0 0 1-1.336 0L-.072 9.143V4c0-2.2 1.796-4 3.991-4Z" clipRule="evenodd"></path><path fill="#fff" d="m6.749 14.993 6.36-3.668.008-.005c3.192-1.84 6.412-3.698 6.553-3.78.277-.16.29-.65-.019-.828l-.217-.124c-.316-.18-.725-.414-.9-.516a1.016 1.016 0 0 0-.995.012c-.154.089-10.478 6.038-10.823 6.235a1.343 1.343 0 0 1-1.336 0L-.072 9.143v2.698l.056.033c1.361.795 4.582 2.674 5.37 3.12.478.27.935.264 1.395-.002Z"></path><path fill="#fff" d="m6.749 20.385 6.352-3.664.024-.014 6.545-3.775c.277-.16.29-.651-.019-.828l-.217-.124c-.316-.18-.725-.414-.9-.517a1.016 1.016 0 0 0-.995.012c-.154.09-10.478 6.039-10.823 6.235a1.343 1.343 0 0 1-1.336 0l-5.452-3.175v2.699l.057.033c1.362.795 4.581 2.674 5.37 3.12.477.27.934.264 1.394-.002Z"></path><path fill="#fff" d="m13.11 22.108-6.361 3.669c-.46.265-.917.272-1.394.002a944.524 944.524 0 0 1-5.37-3.12l-.057-.033v-2.699l5.452 3.175c.412.239.923.235 1.336 0 .345-.196 10.669-6.146 10.823-6.235.372-.214.773-.142.995-.012.175.103.584.336.9.517l.217.123c.31.178.296.669.02.829l-6.561 3.784Z"></path><path fill="#E44232" fillRule="evenodd" d="M55.528 19.082c0 .515.088 1.015.263 1.492.175.481.431.904.773 1.273.34.369.75.664 1.228.884.478.22 1.021.331 1.627.331.607 0 1.15-.11 1.628-.33a3.85 3.85 0 0 0 1.228-.885 3.77 3.77 0 0 0 .772-1.273c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.78 3.78 0 0 0-.772-1.271 3.855 3.855 0 0 0-1.228-.885 3.85 3.85 0 0 0-1.628-.333c-.606 0-1.15.113-1.627.333a3.85 3.85 0 0 0-1.229.885 3.74 3.74 0 0 0-.772 1.27c-.175.48-.263.98-.263 1.495Zm-3.309 0c0-1.051.189-2.005.566-2.862a6.665 6.665 0 0 1 1.531-2.198 6.762 6.762 0 0 1 2.288-1.411 7.967 7.967 0 0 1 2.815-.498c.992 0 1.931.167 2.813.498a6.793 6.793 0 0 1 2.29 1.41 6.69 6.69 0 0 1 1.531 2.199c.377.857.566 1.81.566 2.862 0 1.05-.189 2.005-.566 2.862a6.69 6.69 0 0 1-1.53 2.198 6.749 6.749 0 0 1-2.29 1.409 7.9 7.9 0 0 1-2.814.497c-.994 0-1.93-.164-2.815-.497a6.718 6.718 0 0 1-2.288-1.409 6.664 6.664 0 0 1-1.53-2.198c-.378-.857-.567-1.811-.567-2.862ZM71.472 19.085c0 .516.087 1.015.263 1.492.175.482.43.905.772 1.274.34.369.75.663 1.228.884.478.22 1.021.33 1.627.33.607 0 1.15-.11 1.628-.33a3.763 3.763 0 0 0 2-2.158c.173-.477.26-.976.26-1.491 0-.516-.087-1.015-.26-1.495a3.775 3.775 0 0 0-2-2.155 3.849 3.849 0 0 0-1.627-.333 3.85 3.85 0 0 0-1.628.333 3.85 3.85 0 0 0-1.228.884c-.341.37-.597.792-.773 1.271-.175.48-.262.98-.262 1.494Zm7.835 4.644h-.056c-.479.813-1.12 1.402-1.93 1.771a6.266 6.266 0 0 1-2.62.552c-1.031 0-1.945-.178-2.747-.538a6.15 6.15 0 0 1-2.054-1.48 6.312 6.312 0 0 1-1.297-2.213 8.278 8.278 0 0 1-.44-2.736c0-.976.154-1.89.469-2.738a6.815 6.815 0 0 1 1.309-2.212 6.065 6.065 0 0 1 2.027-1.478 6.194 6.194 0 0 1 2.593-.54c.626 0 1.178.065 1.657.193.478.13.9.295 1.268.5a4.81 4.81 0 0 1 1.572 1.325h.083v-7.31c0-.332.262-.722.722-.722h1.87c.432 0 .72.364.72.721v18.174c0 .461-.391.723-.72.723H80.03a.731.731 0 0 1-.723-.722v-1.27ZM87.963 19.082c0 .515.088 1.015.263 1.492.175.481.431.904.773 1.273.34.369.75.664 1.228.884.478.22 1.021.331 1.627.331.606 0 1.15-.11 1.628-.33a3.765 3.765 0 0 0 2-2.158c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.776 3.776 0 0 0-.772-1.271 3.851 3.851 0 0 0-1.228-.885 3.85 3.85 0 0 0-1.628-.333c-.606 0-1.15.113-1.627.333-.478.221-.887.516-1.228.885-.342.369-.598.791-.773 1.27-.175.48-.263.98-.263 1.495Zm-3.309 0c0-1.051.189-2.005.566-2.862a6.663 6.663 0 0 1 1.531-2.198 6.763 6.763 0 0 1 2.288-1.411 7.966 7.966 0 0 1 2.815-.498c.993 0 1.931.167 2.813.498a6.794 6.794 0 0 1 2.29 1.41 6.69 6.69 0 0 1 1.532 2.199c.376.857.566 1.81.566 2.862 0 1.05-.19 2.005-.567 2.862a6.689 6.689 0 0 1-1.53 2.198 6.75 6.75 0 0 1-2.29 1.409 7.901 7.901 0 0 1-2.814.497c-.994 0-1.93-.164-2.815-.497a6.719 6.719 0 0 1-2.288-1.409 6.663 6.663 0 0 1-1.53-2.198c-.378-.857-.567-1.811-.567-2.862ZM100.723 7.94c0-.536.197-1 .592-1.398.398-.396.899-.594 1.505-.594.606 0 1.118.19 1.531.568.413.377.622.852.622 1.424 0 .571-.209 1.046-.622 1.424-.413.378-.925.567-1.531.567-.606 0-1.107-.198-1.505-.596-.395-.396-.592-.86-.592-1.395ZM114.388 16.123c-.33 0-.573-.25-.615-.36-.275-.723-1.152-.994-1.86-.994-1.117 0-1.993.518-1.993 1.41 0 .863.848 1.04 1.372 1.198.575.175 1.673.415 2.278.557a7.379 7.379 0 0 1 1.725.637c1.757.915 2.008 2.353 2.008 3.22 0 3.196-3.161 4.257-5.355 4.257-1.691 0-4.868-.257-5.566-3.488-.068-.315.21-.798.72-.798h1.828c.36 0 .602.263.672.47.235.649.982 1.139 2.24 1.139 1.351 0 2.149-.537 2.149-1.25 0-.462-.261-.872-.602-1.104-1.024-.696-3.556-.775-4.931-1.508-.526-.28-1.848-.922-1.848-3.11 0-3.014 2.735-4.286 5.137-4.286 3.544 0 4.844 2.244 4.991 3.076.081.459-.176.934-.691.934h-1.659ZM117.573 14.48v-1.372c0-.328.258-.721.716-.721h1.765v-3.37c0-.36.244-.58.429-.66.109-.049 1.097-.48 1.885-.825.551-.227.997.228.997.666v4.189h2.922c.451 0 .72.395.72.721v1.374a.744.744 0 0 1-.72.724h-2.922v5.807c0 .664-.018 1.182.235 1.566.232.351.572.481 1.254.481.196 0 .37-.032.518-.083a.703.703 0 0 1 .865.318c.216.418.463.877.635 1.206.19.361.038.824-.31.993-.56.273-1.336.494-2.4.494-.883 0-1.383-.097-1.941-.29a3.346 3.346 0 0 1-1.415-1c-.323-.396-.483-.926-.602-1.516-.121-.59-.15-1.305-.15-2.08v-5.896h-1.761c-.462 0-.72-.4-.72-.726ZM41.836 14.48v-1.372c0-.328.258-.721.715-.721h2.017v-3.37c0-.36.244-.58.429-.66l1.885-.825c.551-.227.997.228.997.666v4.189h2.922c.451 0 .72.395.72.721v1.374a.745.745 0 0 1-.72.724H47.88v5.807c0 .664-.018 1.182.235 1.566.232.351.572.481 1.254.481.196 0 .37-.032.518-.083a.704.704 0 0 1 .865.318c.216.418.463.877.636 1.206.19.361.037.824-.31.993-.561.273-1.337.494-2.401.494-.883 0-1.382-.097-1.941-.29a3.343 3.343 0 0 1-1.414-1c-.324-.396-.484-.926-.603-1.516-.121-.59-.15-1.305-.15-2.08v-5.896h-2.012c-.462 0-.72-.4-.72-.726ZM101.891 25.72h1.871c.396 0 .72-.324.72-.72V13.107a.723.723 0 0 0-.72-.722h-1.871a.723.723 0 0 0-.72.722V25c0 .397.324.722.72.722Z" clipRule="evenodd"></path></g><defs><clipPath id="todoist-extended-logo_svg__a"><path fill="#fff" d="M0 0h127v32H0z"></path></clipPath></defs></svg>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/features" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                Features
              </Link>
              <Link href="/teams" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                For teams
              </Link>
              <Link href="/resources" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                Resources
              </Link>
              <Link href="/pricing" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                Pricing
              </Link>
              <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                Log In
              </Link>
              <Link href="/dashboard" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
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
            <h2 className="mx-0 md:mx-0 text-5xl md:text-6xl font-bold">Organize your work and life, finally.</h2>
          </div>
          <div>
            <p className="mx-0 sm:mx-8 text-xl md:text-2xl text-gray-600">Simplify life for both you and your team. The world&apos;s #1 task manager and to-do list app.</p>
          </div>
          <div>
            <Button3D onClick={handleStartForFree} />
          </div>
        </div>
        <div className="hidden md:flex justify-center my-16">
          <div className="relative w-[1312px] h-[738px]">
            <Image
              className="block rounded-2xl object-cover"
              alt="home-teams-bg"
              src="/images/static_home-teams_intro_background.avif"
              fill
            ></Image>
            <Image
              className="block absolute top-0 left-0 object-cover"
              alt="home-teams-bg"
              src="/images/static_home-teams_intro_wide_headerui.avif"
              fill
            ></Image>
          </div>
        </div>
        <div className="flex md:hidden justify-center my-16">
          <div className="relative w-[220px] h-[221px]">
            <Image
              className="block rounded-2xl object-cover"
              alt="home-teams-bg"
              src="/images/static_product-ui_backgrounds_wave-one-red.avif"
              fill
            ></Image>
            <Image
              className="block absolute top-0 left-0 object-cover"
              alt="home-teams-bg"
              src="/images/static_home-teams_intro_narrow_headerui.en.avif"
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
