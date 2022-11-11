import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AppCard, CategoriesCard } from "../components";
import {
  getCategories,
  getCategoryApps,
  getTopApps,
  submitApps,
  submitcategories,
  submitCategories,
} from "../services";

const Home = ({ categories, topApps, gameApps }) => {
  
  const gameApp = gameApps[0].node.apps
  return (
    <div className="flex min-h-screen px-4 flex-col items-center justify-center py-2">
      <Head>
        <title>Applate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[100%] relative">
        <div className="min-w-full inline-flex justify-between ">
          <Link href="#" className="font-bold text-3xl px-4">
            <div
              src="https://cdn-mobile.aptoide.com/static/imgs/apps-ic.svg"
              className="bundle-header__Icon-sc-5qh14w-6 gIrIwm"
            ></div>
            Applications
          </Link>
        </div>
        <div className="overflow-hidden">
          <div>
            <div className="block my-4 mx-auto p-0">
              <div className="inline-flex h-full gap-2 mx-4 overflow-auto scrollbar-hide relative w-full mb-2 items-center ">
                {topApps.map((app, index) => (
                  <AppCard key={index} app={app.node} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative">
        <div className="min-w-full inline-flex justify-between ">
          <Link href={`/category/games`} className="font-bold text-3xl px-4">
            Games
          </Link>
          <Link
            href={`/category/games`}
            className="font-bold text-2xl px-4 text-orange-600 cursor-pointer float-right"
          >
            See more{" "}
          </Link>
        </div>
        <div className="overflow-hidden">
          <div>
            <div className="block my-4 mx-auto p-0">
              <div className="inline-flex h-full gap-2 mx-4 overflow-auto scrollbar-hide relative w-full mb-2 items-center ">
                {gameApp.slice(0, 8).map((app, index) => (
                  <AppCard key={index} app={app} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {categories.map(
        (category, index) =>
          category.node.name != "Games" && (
            <div className="w-[100%] relative" key={index}>
              <div className="min-w-full inline-flex justify-between ">
                <Link
                  href={`/category/${category.node.slug}`}
                  className="font-bold text-3xl px-4"
                >
                  {category.node.name}
                </Link>
                <Link
                  href={`/category/${category.node.slug}`}
                  className="font-bold text-2xl px-4 text-orange-600 cursor-pointer float-right"
                >
                  See more{" "}
                </Link>
              </div>
              <div className="overflow-hidden">
                <CategoriesCard category={category} />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  const topApps = (await getTopApps()) || [];
  const gameApps = (await getCategoryApps("games")) || [];

  return {
    props: { categories, topApps, gameApps },
  };
}

// code to add new apps and categories to graphcms database

// useEffect(() => {
  //   async function fetchData() {
  //     const { app_list } = await fetch(
  //       "https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?cat_key=FINANCE&limit=25&access_token=3617f3393433ee201ae4713cd41a0e941cb96587"
  //     ).then((res) => res.json());

  //     app_list.forEach((app) => {
  //       app.package_name = app.package_name.replaceAll(".", "-").toLowerCase();
  //       app.size = app.size || 30000000
  //       app.cat_slug = app.category
  //         .toLowerCase()
  //         .replace("&", "")
  //         .replace(/ /g, "");

  //     })

  //     const newCategory = {
  //       name: app_list[0].category,
  //       slug: app_list[0].category
  //         .toLowerCase()
  //         .replace(/ /g, "")
  //         .replace("&", ""),
  //     };
  //     // newApps.app_list.forEach((category) => submitApps(category));
  //     submitCategories(newCategory)
  //     console.log(newCategory)
  //     console.log(app_list)
  //     app_list.forEach((app) => submitApps(app));

  //   }
  //   fetchData();
  // }, []);
