import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
  const icon =
    "https://iconarchive.com/show/windows-8-metro-icons-by-dakirby309/Folders-OS-Android-Metro-icon.html";

  return (
    <Link
      href={`/app/${app.slug}`}
      class="block min-w-[7rem] border-2 max-w-[7rem] md:min-w-[10rem] md:max-w-[10rem] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        class="p-2 rounded-t-lg"
        src={app.icon || icon}
        alt="product image"
      />

      <div class="px-2 pb-2 relative overflow-auto">
        <h5 class="h-16 md:h-14 text-sm md:text-base font-semibold tracking-tight text-gray-900 dark:text-white">
          {app.title.substr(0, 30)}
        </h5>

        <div class="flex justify-between items-center align-middle">
          <div class="flex text-xs md:text-sm items-center text-gray-900 dark:text-white">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-yellow-300 pb-0.5 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {app.rating.toFixed(2)}
          </div>
          <span class="text-xs md:text-sm text-gray-900 dark:text-white">
            {(app.size/1024000).toFixed(1)} MB
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
