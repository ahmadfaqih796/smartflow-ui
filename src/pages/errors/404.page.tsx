import CubeFrame from "@/components/frame/CubeFrame";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <CubeFrame>
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-200">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page Not Found
          {/* Halaman Tidak Ditemukan */}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-200">
          Sorry, we couldn’t find the page you’re looking for.
          {/* Maaf, kami tidak dapat menemukan halaman yang Anda cari. */}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => window.history.back()}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </button>
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Contact Faqih <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </CubeFrame>
  );
};

export default NotFoundPage;
