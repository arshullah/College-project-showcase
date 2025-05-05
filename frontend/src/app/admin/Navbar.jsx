'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Correct import for Next.js 13+

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const pathname = usePathname(); // Replaces useRouter

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  const isActive = (path) => (pathname === path ? 'text-teal-600' : 'text-gray-800');

  return (
    <div className="h-auto bg-gradient-to-r from-indigo-600 to-purple-800">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-800">AdminPanel</div>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/admin/manage-project" className={`text-lg hover:text-teal-600 transition duration-300 ${isActive('/admin/manage-project')}`}>
             Manage-project
            </Link>
            <Link href="/admin/manage-users" className={`text-lg hover:text-teal-600 transition duration-300 ${isActive('/admin/manage-users')}`}>
              Manage-User
            </Link>
            <Link href="/admin/profile" className={`text-lg hover:text-teal-600 transition duration-300 ${isActive('/admin/profile')}`}>
              Profile
            </Link>
            <Link href="/admin/settings" className={`text-lg hover:text-teal-600 transition duration-300 ${isActive('/admin/settings')}`}>
              Setting
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button onClick={toggleProfileMenu} className="text-lg text-gray-800 hover:text-teal-600 transition duration-300">
                <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <Link href="/admin/profile" className="block px-4 py-2 text-gray-800 hover:bg-teal-100">My Profile</Link>
                  <Link href="/admin/settings" className="block px-4 py-2 text-gray-800 hover:bg-teal-100">Settings</Link>
                  <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-teal-100">Logout</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-4 bg-white py-4 px-6 shadow-lg">
            <Link href="/admin/dashboard" className={`text-lg ${isActive('/admin/dashboard')}`}>
              Dashboard
            </Link>
            <Link href="/admin/manage-users" className={`text-lg ${isActive('/admin/manage-users')}`}>
              Manage Users
            </Link>
            <Link href="/admin/profile" className={`text-lg ${isActive('/admin/profile')}`}>
              Profile
            </Link>
            <Link href="/admin/settings" className={`text-lg ${isActive('/admin/settings')}`}>
              Settings
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
