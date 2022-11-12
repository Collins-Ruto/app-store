import React from 'react'
import { AppCard } from '../../components';

const SearchPage = () => {
  return (
    <div className="max-w-[97%] mx-auto">
      <h1 className="font-bold text-3xl px-4">{category[0].node.name}</h1>
      <div className="overflow-hidden">
        <div className="block my-4 mx-auto p-0">
          <div className="flex h-full gap-2 flex-wrap pl-2 justify-center relative w-full mb-2 items-center ">
            {category[0].node.apps.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage