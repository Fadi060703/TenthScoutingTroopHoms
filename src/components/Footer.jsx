import React from 'react';
export default function Footer() {
    return (
      <footer className="bg-scout-orange text-white mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Scout Troop #123. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Built with ❤️ by Scout Developers
            </p>
          </div>
        </div>
      </footer>
    )
  }