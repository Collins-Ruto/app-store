import React from 'react'
import AppCard from './AppCard'

const CategoriesCard = ({category}) => {
  return (
    <div className="block my-4 mx-auto p-0">
      <div className="inline-flex h-full gap-2 mx-4 overflow-auto scrollbar-hide relative w-full mb-2 items-center ">
        {category?.node?.apps.slice(0, 8).map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesCard