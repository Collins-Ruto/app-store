import React from "react";
import { useRouter } from "next/router";
import { Loader, AppCard } from "../../components";
import { getAllCategories, getCategories, getCategoryApps } from "../../services";

const CategoryApps = ({ apps }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  console.log(apps);
  return <div>CategoryApps</div>;
};

export default CategoryApps;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryApps(params.slug);

  return {
    props: { posts },
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
