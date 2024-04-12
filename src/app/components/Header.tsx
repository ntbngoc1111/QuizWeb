import React from 'react';
import Link from 'next/link';
// import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">DC14 Quiz</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-gray-300">
                Quiz
              </Link>
            </li>            
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}


function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      <a
        href="https://twitter.com/Jordan_Thirkle"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <FaTwitter className="text-white hover:text-gray-300" /> */}
      </a>
      <a
        href="https://github.com/jordan-thirkle"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
}
