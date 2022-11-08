import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { AppCard, CategoriesCard } from '../components';
import { getCategories, getTopApps, submitApps, submitcategories, submitCategories } from "../services";

const Home = ({categories, topApps}) => {

  const newApps = {}

  console.log();

  // useEffect(() => {
  //   newApps.app_list.forEach((category) => submitApps(category));
    
  // }, []);
  
  // console.log('newApps',newApps.app_list)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Applate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[100%] relative">
        <div className="min-w-full inline-flex justify-between ">
          <Link href={`/category/apps`} className="font-bold text-3xl px-4">
            <div
              src="https://cdn-mobile.aptoide.com/static/imgs/apps-ic.svg"
              class="bundle-header__Icon-sc-5qh14w-6 gIrIwm"
            ></div>
            Applications
          </Link>
          <Link
            href={`/category/apps`}
            className="font-bold text-2xl px-4 text-orange-600 cursor-pointer float-right"
          >
            See more{" "}
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
          <CategoriesCard
            category={categories.find((item) => item.node.name == "Games")}
          />
        </div>
      </div>
      {categories.map(
        (category) =>
          category.node.name != "Games" && (
            <div className="w-[100%] relative">
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
}

export default Home

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  const topApps = (await getTopApps()) || [];

  return {
    props: { categories, topApps },
  };
}
