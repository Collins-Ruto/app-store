import React, { useState } from "react";
import Head from "next/head";
import { getAppDetails, getApps } from "../../services";
import moment from "moment";
import downIcon from "../../public/1534536349.svg";
import { useRouter } from "next/router";
import { Description, Loader, SimilarApp } from "../../components";
import Link from "next/link";

const App = ({ app }) => {
  const router = useRouter();

  const [description, setDescription] = useState(false);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div>
      <div className=" max-w-[1000px] mx-auto pb-8 px-4 md:px-6">
        <Head>
          <title data-react-helmet="itemprop,lang" itemProp="title" lang="en">
            {app.title}
          </title>
          <meta
            data-react-helmet="true"
            name="description"
            content={app.description.substr(0, 60)}
          />
        </Head>
        <div className="flex items-center flex-wrap md:flex-nowrap pb-5 md:py-5 border-b">
          <div className="flex md:w-[80%] mb-4 md:mb-0">
            <img
              src={app.icon}
              alt={app.title}
              className="pr-4 w-36 h-32 md:h-auto md:w-auto"
            />
            <div className="leading-7">
              <h1 className="font-semibold text-xl md:text-2xl">{app.title}</h1>
              <div className="flex justify-between w-40 items-center align-middle">
                <div className="flex text-orange-500 text-xs md:text-sm items-center">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 0 pb-0.5 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {app.rating && app.rating.toFixed(2)}
                </div>
                <span className="text-xs md:text-sm text-gray-900 dark:text-white">
                  {(app.size / 1024000).toFixed(1)} MB
                </span>
              </div>
              <span>{app.downloads} Downloads</span>
              <br />
              <span>Version: {app.version}</span>{" "}
              <br className="hidden md:block" />
              <a href={app.website} className="text-blue-500 hidden md:block">
                {app.website}
              </a>{" "}
              <span className="whitespace-pre-line text-gray-400 w-full block">
                {moment(app.created).format("DD MMM, YYYY")}
              </span>
            </div>
          </div>
          <div className="text-center mx-auto">
            <span className=" md:w-60 transition duration-500 transform hover:translate-y-1 inline-block bg-green-500 text-2xl font-medium text-white px-8 py-2 cursor-pointer rounded-lg">
              <Link
                className=""
                href={app.application ? app.application.url : app.market_url}
              >
                <img src={downIcon} alt="" /> Download
              </Link>
            </span>
          </div>
        </div>
        <div className="border-b py-2 overflow-hidden">
          <div>
            <h1 className="font-medium text-xl md:text-2xl pb-2">
              Description
            </h1>
            <div>
              {!description ? (
                <p className="font-light text-sm">
                  {app.description.substr(0, 400)}
                  {" ..."}
                </p>
              ) : (
                <div>
                  {app.descriptions ? (
                    <Description description={app.descriptions} />
                  ) : (
                    app.description
                  )}
                </div>
              )}
            </div>
            <button
              className=" py-2 px-5 mt-4 rounded-md font-semibold text-orange-500 bg-gray-700 text-lg"
              onClick={() => {
                setDescription((desc) => !desc);
              }}
            >
              {description ? "Show less" : "Read More"}
            </button>
          </div>
          <br />
          <h1 className="font-medium text-xl md:text-2xl pb-2">
            Aditional Information
          </h1>
          <div className="flex justify-between max-w-md">
            <div>
              <h3 className="mt-2">Category</h3>
              <span className="font-light text-sm text-gray-300">
                {app.category}
              </span>
              <h3 className="mt-5">Content Rating</h3>
              <span className="font-light text-sm text-gray-300">
                {app.content_rating}
              </span>
            </div>
            <div>
              <h3 className="mt-2">Available on</h3>
              <a
                rel="nofollow"
                target="_blank"
                title="Get Yahoo Mail on Google Play"
                href={app.market_url}
              >
                <img
                  width="84.46"
                  height="18"
                  className=" bg-white p-2 rounded-md"
                  alt="Get on Google Play"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg"
                />
              </a>
              <h3 className="mt-5">Updated on</h3>
              <span className="font-light text-sm text-gray-300">
                {moment(app.updateAt).format("DD MMM, YYYY")}
              </span>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h1 className="font-medium text-xl md:text-2xl pb-2">
            You might like
          </h1>
          <div className="relative w-[100%]">
            <SimilarApp slugs={app.similar} />
          </div>
        </div>
      </div>
      <footer className="w-full border-t border-gray-300 bg-gray-800 py-4">
        <div className="container mx-auto text-center text-gray-200">
          © 2023 Applate. All rights reserved. by{" "}
          <a
            className="text-blue-400 font-semibold"
            href="https://collinsruto.netlify.app"
          >
            Collins Ruto
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;

export async function getStaticProps({ params }) {
  const data = await getAppDetails(params.slug);
  return {
    props: { app: data },
  };
}

export async function getStaticPaths() {
  const apps = await getApps();

  return {
    paths: apps.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
