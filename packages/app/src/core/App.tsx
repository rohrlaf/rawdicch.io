import React, { FunctionComponent } from 'react';

import PhotoGrid from '../catalog/PhotoGrid';

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
