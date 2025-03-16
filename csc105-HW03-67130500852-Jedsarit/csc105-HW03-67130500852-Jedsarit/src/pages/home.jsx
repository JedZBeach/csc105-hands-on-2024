import React from 'react';

function Home() {
  return (
    <div className="flex flex-row items-center justify-center p-8">
      <div className="flex flex-col items-start justify-center pr-4 gap-1">
        <h1 className="sm:text-2xl text-lg font-bold sm:mb-2 mb-1">Well, It's me?</h1>
        <h2 className="sm:text-4xl text-2xl font-bold sm:mb-2 mb-1">Jedsarit Fanpimiy</h2>
        <p className="sm:text-2xl text-lg font-bold sm:mb-4 mb-2">I'm Roblox Player</p>
        <p className="text-start sm:text-normal text-xs sm:font-bold font-normal sm:mb-6 mb-3">
          Well How I do this? I'm just a Roblox player.<br />
          RAGHHHHHHHHHHHHHHHHHHHHHHHHH
        </p>
        <div className="flex space-x-4 sm:mb-6 mb-3">
          <a
            href="https://www.facebook.com/jedsarit.fanpimai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out"
          >
            <img
              src="../src/icons/20673.png"
              className="w-10 mb-4 hover:scale-110 hover:opacity-80"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.roblox.com/users/2246172535/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out"
          >
            <img
              src="../src/icons/channels4_profile.jpg"
              className="w-10 mb-4 hover:scale-110 hover:opacity-80"
              alt="Roblox"
            />
          </a>
        </div>
        <button className="bg-gray-900 hover:bg-red-700 hover:text-black text-gray-100 font-bold py-2 px-4 rounded-3xl">
          My Portfolio
        </button>
      </div>
      <div className="sm:pl-8">
        <img
          src="../src/image/79332f5a-23f1-428b-8ef2-c6f592ee20f5.jpg"
          alt="Profile"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
}

export default Home;