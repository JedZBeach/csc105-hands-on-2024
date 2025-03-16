import React from 'react';
function Gallery() {
  return (
    <div className="sm:p-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
      <div className="grid grid-cols-3 md:gap-4 gap-2">
        <img src="..\src\image\RobloxScreenShot20241221_132454832.png" alt="Gallery 1" className="rounded-lg" />
        <img src="..\src\image\RobloxScreenShot20250203_232034227.png" alt="Gallery 2" className="rounded-lg" />
        <img src="..\src\image\RobloxScreenShot20230909_232054106.png" alt="Gallery 3" className="rounded-lg" />
        <img src="..\src\image\RobloxScreenShot20241227_130349670.png" alt="Gallery 4" className="rounded-lg" />
        <img src="..\src\image\RobloxScreenShot20230930_211313065.png" alt="Gallery 5" className="rounded-lg" />
        <img src="..\src\image\RobloxScreenShot20231006_231825023.png" alt="Gallery 6" className="rounded-lg" />
      </div>
    </div>
  );
}

export default Gallery;