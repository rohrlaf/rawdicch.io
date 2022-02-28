import React, { FunctionComponent, useEffect, useState } from 'react';
import Rawdicchio from '../core/Rawdicchio';

export interface PhotoGridProps {
  label?: string;
}

const PhotoGrid: FunctionComponent<PhotoGridProps> = () => {
  const [files, setFiles] = useState<string[]>();

  useEffect(() => {
    Rawdicchio.catalog.getFiles().then((files) => setFiles(files));
  }, []);

  const openDialog = () =>
    Rawdicchio.catalog.openDialog().then(async () => {
      const files = await Rawdicchio.catalog.getFiles();
      setFiles(files);
    });

  // photo grid: https://css-tricks.com/adaptive-photo-layout-with-flexbox/
  return (
    <>
      <button onClick={openDialog}>Click to add images</button>
      <h1>2022-02-22</h1>
      <ul className="flex flex-wrap gap-0.5 list-none">
        {files?.map((file, index) => (
          <li className="flex-auto h-[33vh]" key={`${index}-${file}`}>
            <img
              alt={file}
              className="align-bottom max-h-full min-w-full object-cover"
              src={`file://${file}`}
              title={file}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhotoGrid;
