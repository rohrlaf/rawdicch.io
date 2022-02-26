import React, { FunctionComponent, useEffect, useState } from 'react';
import Rawdicchio from '../core/Rawdicchio';

import type { File } from '../core/FileAccess/FileAccess';

export interface PhotoGridProps {
  label?: string;
}

const PhotoGrid: FunctionComponent<PhotoGridProps> = () => {
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

  const image = 'align-bottom max-h-full min-w-full object-cover';

  // photo grid: https://css-tricks.com/adaptive-photo-layout-with-flexbox/
  return (
    <>
      <button onClick={openDialog}>Click to add images</button>
      <h1>2022-02-22</h1>
      <ul className="flex flex-wrap gap-0.5 list-none">
        {files?.map((file) => (
          <li className="flex-auto h-[33vh]" key={file.path}>
            <img
              alt={file.name}
              className={image}
              src={`file://${file.path}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhotoGrid;
