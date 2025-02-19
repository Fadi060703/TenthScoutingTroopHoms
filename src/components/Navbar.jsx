import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="bg-scout-orange shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold hover:text-orange-100 transition-colors">
              Scout Troop #123
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/law" className="text-white hover:text-orange-100 transition-colors">Scout Law</Link>
            <Link to="/promise" className="text-white hover:text-orange-100 transition-colors">Scout Promise</Link>
            <Link to="/news" className="text-white hover:text-orange-100 transition-colors">News</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}