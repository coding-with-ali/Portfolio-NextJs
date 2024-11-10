
"use client";

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='bg-bg fixed w-[100%]'>
        <div className="flex justify-around items-center h-16 ">
            <h2 className='text-color text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer'>Muhammad <span className='text-white'>Ali.</span></h2>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="h-10 w-10  text-color cursor-pointer" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-color cursor-pointer" />
        )}
      </div>
      

      {/* Large screen horizontal menu */}
      <nav className='hidden md:block text-white'>
        <Link href="#home" className='text-xl px-3 hover:text-color'>Home</Link>
        <Link href="#about" className='text-xl px-3 hover:text-color'>About</Link>
        <Link href="#service" className='text-xl px-3 hover:text-color'>Service</Link>
        <Link href="#project" className='text-xl px-3 hover:text-color'>Projects</Link>
        <Link href="#contact" className='text-xl px-3 hover:text-color'>Contact</Link>
      </nav>
      </div>
      
      {isMenuOpen && (
        <nav className=" bg-bg text-color ">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#home" onClick={toggleMenu}>Home</Link>
            <Link href="#about" onClick={toggleMenu}>About</Link>
            <Link href="#service" onClick={toggleMenu}>Service</Link>
            <Link href="#project" onClick={toggleMenu}>Project</Link>
            <Link href="#contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
