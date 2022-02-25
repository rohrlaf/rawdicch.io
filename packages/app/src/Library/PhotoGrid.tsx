import React, { FunctionComponent } from 'react';

export interface PhotoGridProps {
  label?: string;
}

export const PhotoGrid: FunctionComponent<PhotoGridProps> = ({ label }) => {
  return (
    <section className="flex flex-wrap">
      <img
        className="flex-auto max-w-[20%]"
        src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <img
        className="flex-auto max-w-[20%]"
        src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <img
        className="flex-auto max-w-[40%]"
        src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
      <img
        className="flex-auto max-w-[40%]"
        src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
      <img
        className="flex-auto max-w-[40%]"
        src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
      <img
        className="flex-auto max-w-[20%]"
        src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <img
        className="flex-auto max-w-[40%]"
        src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
      <img
        className="flex-auto max-w-[20%]"
        src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <img
        className="flex-auto max-w-[20%]"
        src="https://images.unsplash.com/photo-1645661319679-951871638276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </section>
  );
};

export default PhotoGrid;
