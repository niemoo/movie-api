import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="/" className="text-white font-bold text-lg">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
