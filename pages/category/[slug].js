import React from "react";
import { useRouter } from "next/router";
import { Loader, AppCard } from "../../components";
import { getAllCategories, getCategories, getCategoryApps } from "../../services";

const CategoryApps = ({apps, data}) => {
  const router = useRouter();
  const name = "j"

  if (router.isFallback) {
    return <Loader />;
  }

  console.log(data);
  return (
    <div className="max-w-[97%] mx-auto">
      <h1>{name}</h1>
      <div className="overflow-hidden">
          <div className="block my-4 mx-auto p-0">
            <div className="flex h-full gap-2 flex-wrap pl-2 justify-center relative w-full mb-2 items-center ">
              {apps.map((app, index) => (
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
    props: {apps},
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
