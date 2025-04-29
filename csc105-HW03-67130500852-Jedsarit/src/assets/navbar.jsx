import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-cyan-950">
      <div className="text-gray-300 font-extrabold sm:text-2xl text-xl">Jedsarit Fanpimiy</div>
      <div className="flex sm:space-x-20 space-x-8 items-center justify-center">
        <a href="/" className="text-gray-200 font-bold hover:text-gray-500">Home</a>
        <a href="/aboutme" className="text-gray-300 font-bold hover:text-gray-500">About me</a>
        <a href="/gallery" className="text-gray-300 font-bold hover:text-gray-500">Gallery</a>
        </div>
        <div className="">
        <button className="bg-gray-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl">
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;