import React, { FunctionComponent } from 'react';

import PhotoGrid from '../catalog/PhotoGrid';

// Icon?
// https://thumbs.dreamstime.com/b/hand-drawn-colorful-bright-fresh-red-radicchio-cabbage-lettuce-s-salad-watercolors-white-background-116256172.jpg

const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-800 font-sans gap-2 grid grid-cols-6 h-screen text-white">
      <div>sidebar right</div>
      <PhotoGrid className="col-span-4" />
      <div>sidebar right</div>
    </div>
  );
};

export default App;
