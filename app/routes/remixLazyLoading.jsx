import React, { Suspense } from 'react';
import { Link } from "@remix-run/react";

// Create a lazy-loaded card component
const LazyCard = React.lazy(() => import('./cards'));

const RemixLazyLoad = ({ data }) => {
  return (
    <div>
         <div className="flex justify-between bg-gray-200 py-4 sticky top-0 z-10">
       <Link
              to="/"
              className="m-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              back
            </Link>
       </div>
      <h1>Lazy Load Data in Cards</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((item, index) => (
          <LazyCard key={index} data={item} />
        ))}
        </div>
      </Suspense>
    </div>
  );
};

export default RemixLazyLoad;
