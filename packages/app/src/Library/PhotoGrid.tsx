import React, { FunctionComponent } from 'react';

export interface PhotoGridProps {
  label?: string;
}

const PhotoGrid: FunctionComponent<PhotoGridProps> = () => {
  const image = 'align-bottom max-h-full min-w-full object-cover';

  // photo grid: https://css-tricks.com/adaptive-photo-layout-with-flexbox/
  return (
    <>
      <h1>2022-02-22</h1>
      <ul className="flex flex-wrap">
        <img
          className="flex-auto h-[33vh] object-cover"
          src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={image}
            src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </li>
        <li className="flex-auto h-[33vh]">
          <img
            className={`${image} grow-[10]`}
            src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </li>
      </ul>
    </>
  );
};

export default PhotoGrid;
