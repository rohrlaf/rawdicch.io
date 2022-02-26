import React, { FunctionComponent, useEffect, useState } from 'react';

import type { File } from './Files/FileAccess';
import Rawdicchio from './Rawdicchio';

import PhotoGrid from './Library/PhotoGrid';

const App: FunctionComponent = () => {
  const [files, setFiles] = useState<File[]>();

  useEffect(() => {
    Rawdicchio.fileAccess.getFiles().then((files) => {
      setFiles(files as File[]);
    });

    // handle file delete event
    // appRuntime.subscribe(
    //   'app:delete-file',
    //   async (event, filename): Promise<unknown> => {
    //     // TODO: remove file from list
    //     console.log('app:delete-file', event, filename, files);
    //     return await null;
    //   },
    // );
  }, []);

  const openDialog = () =>
    Rawdicchio.fileAccess.openDialog().then(async () => {
      const files = await Rawdicchio.fileAccess.getFiles();
      setFiles(files as File[]);
      console.log('files', files);
    });

  return (
    <ul className="bg-gray-800 text-white">
      <button onClick={openDialog}>Click to add images</button>
      <div>
        {files?.map((file) => (
          <img alt={file.name} key={file.path} src={file.path} />
        ))}
      </div>
      <hr />
      <PhotoGrid />
    </ul>
  );
};

export default App;
