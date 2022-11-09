import React from "react";
import { useRouter } from "next/router";
import { Loader, AppCard } from "../../components";
import { getAllCategories, getCategories, getCategoryApps } from "../../services";

const CategoryApps = ({ apps, name}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  console.log(apps);
  return (
    <div>
      <h1>{name}</h1>
      <div className="overflow-hidden">
          <div className="block my-4 mx-auto p-0">
            <div className=" h-full gap-2 mx-4 overflow-auto scrollbar-hide relative w-full mb-2 items-center ">
              {topApps.map((app, index) => (
                <AppCard key={index} app={app.node} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default CategoryApps;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const apps = await getCategoryApps(params.slug);

  return {
    props: { apps: apps, name: params.name },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getAllCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
