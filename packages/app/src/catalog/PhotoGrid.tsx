import React, { FunctionComponent, useEffect, useState } from 'react';
import Rawdicchio from '../core/Rawdicchio';

export interface PhotoGridProps {
  className?: string;
}

const PhotoGrid: FunctionComponent<PhotoGridProps> = ({ className }) => {
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
    <div className={className}>
      <button onClick={openDialog}>Click to add images</button>
      <h1>2022-02-22</h1>
      <div className="flex flex-wrap gap-1 list-none overflow-y-auto">
        {files?.map((file, index) => (
          <li className="flex-auto h-72 max-w-[50%]" key={`${index}-${file}`}>
            <img
              alt={file}
              className="align-bottom max-h-full min-h-full min-w-full object-cover"
              src={`file://${file}`}
              title={file}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
