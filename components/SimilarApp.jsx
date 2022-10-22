import React, { useEffect, useState } from "react";
import { getAppDetails } from "../services";
import AppCard from "./AppCard";

const SimilarApp = ({ slugs }) => {
  const [apps, setApps] = useState([])
  useEffect(() => {

    slugs.forEach(async (slug) => {
      const newSlug = slug.replaceAll(".", "").toLowerCase();
      const result = await getAppDetails(newSlug);
  
      result != null &&
        apps.indexOf(result) < 0 &&
        setApps((appsArr) => [...appsArr, result]);
      console.log(apps);
      return
    });
  },[])
  return (
    <div>
      {!(apps.length >= 1) ? (
        <p>No similar apps for now</p>
      ) : (
        <div className="overflow-hidden">
          <div>
            <div className="block my-4 mx-auto p-0">
              <div className="inline-flex h-full gap-2 mx-4 overflow-auto scrollbar-hide relative w-full mb-2 items-center ">
                {apps.map((app, index) => (
                  <AppCard key={index} app={app} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarApp;
