"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`w-full p-4 flex-col lg:flex-row flex gap-4 lg:items-center justify-between border-b-1 transition-all duration-200 overflow-hidden ${
        expand ? "max-h-126 ease-in" : "max-h-20 ease-out"
      }  border-b-gray-200`}
    >
      <div className="w-full flex-col  lg:flex-row flex lg:items-center gap-6 text-black relative">
        <div className="flex items-center gap-2">
          <Image src="/hexa.svg" width={45} height={45} alt="hexagonLogo" />
          <b>Frameblox</b>
        </div>
        {!expand && <svg
          onClick={() => setExpand(true)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#4a4c4e"
          className="w-7 h-7 lg:hidden absolute right-0 top-4 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>}
        {expand && <svg
          onClick={() => setExpand(false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#4a4c4e"
          className="w-7 h-7 lg:hidden absolute right-0 top-4 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>}
        <ul className="flex-col lg:flex-row flex gap-2 lg:items-center text-black">
          <li className="w-fit py-1 px-2 flex items-center gap-1">
            <p>Products</p>
            <div>
              <p className="border-[1px] border-gray-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </li>
          <li className="w-fit py-1 px-2 flex items-center gap-1">
            <p>Library</p>
            <div>
              <p className="border-[1px] border-gray-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </li>
          <li className="w-fit py-1 px-2">
            <p>Plugin</p>
          </li>
          <li className="w-fit py-1 px-2 flex items-center gap-1">
            <p>Resources</p>
            <p className="border-[1px] border-gray-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>
          <li className="w-fit py-1 px-2 flex items-center gap-1">
            <p>Blog</p>
            <p className="border-[1px] border-gray-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>
          <li className="w-fit py-1 px-2">
            <p>Pricing</p>
          </li>
        </ul>
      </div>
      <div className="flex-col lg:flex-row flex items-center gap-2">
        <button className="lg:w-fit w-full hover:shadow-lg transition duration-150 border-[0.5px] grid place-items-center text-black py-3 lg:py-1 lg:px-2 cursor-pointer  rounded-lg border-gray-200 whitespace-nowrap">
          Sign in
        </button>
        <button className="lg:w-fit w-full border-[0.5px]  transition duration-150 grid place-items-center bg-blue-600 hover:bg-blue-500 hover:shadow-lg text-white py-3 cursor-pointer lg:py-1 lg:px-2 rounded-lg border-blue-600 whitespace-nowrap">
          Get all access
        </button>
      </div>
    </div>
  );
}
