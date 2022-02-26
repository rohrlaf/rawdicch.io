import React, { FunctionComponent } from 'react';

import PhotoGrid from '../catalog/PhotoGrid';

// Icon?
// https://thumbs.dreamstime.com/b/hand-drawn-colorful-bright-fresh-red-radicchio-cabbage-lettuce-s-salad-watercolors-white-background-116256172.jpg

const App: FunctionComponent = () => {
  return (
    <ul className="bg-gray-800 text-white">
      <h1>Photo catalog</h1>
      <hr />
      <PhotoGrid />
    </ul>
  );
};

export default App;
