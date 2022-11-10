import React, { useState } from "react";
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
    <div className=" max-w-[1000px] mx-auto pb-8">
      <div className="flex items-center py-5 border-b">
        <div className="flex w-[80%]">
          <img src={app.icon} alt={app.title} className="pr-4" />
          <div className="leading-7">
            <h1 className="font-semibold text-2xl">{app.title}</h1>
            <div class="flex justify-between w-40 items-center align-middle">
              <div class="flex text-orange-500 text-xs md:text-sm items-center">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 0 pb-0.5 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {app.rating && app.rating.toFixed(2)}
              </div>
              <span class="text-xs md:text-sm text-gray-900 dark:text-white">
                {(app.size / 1024000).toFixed(1)} MB
              </span>
            </div>
            <span>{app.downloads} Downloads</span>
            <br />
            <span>Version: {app.version}</span> <br />
            <a href={app.website} className="text-blue-500">
              {app.website}
            </a>{" "}
            <br />
            <span className="whitespace-pre-line text-gray-400 w-full">
              {moment(app.created).format("DD MMM, YYYY")}
            </span>
          </div>
        </div>
        <div className="text-center">
          <span className="w-60 transition duration-500 transform hover:translate-y-1 inline-block bg-green-500 text-2xl font-medium text-white px-8 py-2 cursor-pointer rounded-lg">
            <Link className='' href={app.application ? app.application.url : "#"}>
              <img src={downIcon} alt="" /> Download
            </Link>
          </span>
        </div>
      </div>
      <div className="border-b py-2">
        <div>
          <h1 className="font-medium text-2xl pb-2">Description</h1>
          <p>
            {!description ? (
              <p className="font-light text-sm">
                {app.description.substr(0, 400)}
                {" ..."}
              </p>
            ) : (
              <Description description={app.descriptions} />
            )}
          </p>
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
        <h1 className="font-medium text-2xl pb-2">Aditional Information</h1>
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
                class=" bg-white p-2 rounded-md"
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
        <h1 className="font-medium text-2xl pb-2">You might like</h1>
        <div className="relative w-[100%]">
          <SimilarApp slugs={app.similar} />
        </div>
      </div>
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
