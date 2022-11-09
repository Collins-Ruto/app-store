import React, { useState } from 'react'
import { getAppDetails, getApps } from '../../services';
import moment from 'moment'
import downIcon from '../../public/1534536349.svg'
import { useRouter } from "next/router";
import {Loader} from '../../components'
import Link from 'next/link';


const App = ({app}) => {

  const router = useRouter();

  const [description, setDescription] = useState(false)

  if (router.isFallback) {
    return <Loader />;
  }

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 font-light text-sm">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  console.log('app', app)
  return (
    <div className=" max-w-[1000px] mx-auto min-h-screen pb-8">
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
            <Link className href={app?.application.url}>
              <img src={downIcon} alt="" /> Download
            </Link>
          </span>
        </div>
      </div>
      <div className='border-b py-2'>
        <div>
          <h1 className="font-medium text-2xl pb-2">Description</h1>
          <p>
            {!description ? (
              <p className='font-light text-sm'>{app.description.substr(0, 400)}{" ..."}</p>
            ) : (
              app.descriptions.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) =>
                  getContentFragment(itemIndex, item.text, item)
                );

                return getContentFragment(
                  index,
                  children,
                  typeObj,
                  typeObj.type
                );
              })
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
      </div>
    </div>
  );
}

export default App

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