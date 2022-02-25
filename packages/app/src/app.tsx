import React, { FunctionComponent } from 'react';

import PhotoGrid from './Library/PhotoGrid';

const App: FunctionComponent = () => {
  return (
    <section className="bg-red-700 text-white">
      <h1>I am React running in Electron App!!!</h1>
      <PhotoGrid />
    </section>
  );
};

export default App;
