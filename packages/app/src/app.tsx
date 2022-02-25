import React, { FunctionComponent } from 'react';

import PhotoGrid from './Library/PhotoGrid';

const App: FunctionComponent = () => {
  return (
    <ul className="bg-gray-800 text-white">
      <h1>2022-02-22</h1>
      <PhotoGrid />
    </ul>
  );
};

export default App;
