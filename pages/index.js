import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { CategoriesCard } from '../components';
import { getCategories, submitcategories, submitCategories } from "../services";

const Home = ({categories}) => {

  const newCategories = [
    
  ]

  console.log(categories?.find((item) => item.node.name == "Games"));

  // useEffect(() => {
  //   categories.forEach(category => submitCategories(category))
    
  // }, []);
  
  console.log(categories)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Applate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Applications &rarr;</h1>
        <div></div>
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
    </div>
  );
}

export default Home

export async function getStaticProps() {
  const categories = (await getCategories()) || [];

  return {
    props: { categories },
  };
}
