import React, { useState } from "react";
import type { FunctionComponent } from "react";

const TemplatesMenu: FunctionComponent = () => {
  const [isOpenContent, setIsOpenContent] = useState<boolean>(false);
  return (
    <div className="shrink w-[20%] h-full ">
      <div className="bg-white flex flex-col  py-6 px-4  justify-start rounded-xl h-full">
        <div className="flex rounded-lg border my-8 border-neutral-300 focus-within:border-primary-300 h-min cursor-text shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 py-2.5  ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21.925 21.925L28 28"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <input
            placeholder="Search Templates"
            className="outline-none w-full bg-transparent"
          ></input>
        </div>
        <div className="flex h-12 rounded-lg border border-neutral-300 focus-within:border-primary-300  cursor-default relative shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 select-none py-2.5"></div>
        <div
          onClick={() => {
            setIsOpenContent(!isOpenContent);
          }}
          className="py-2 my-4 px-3 flex justify-between cursor-pointer select-none hover:bg-neutral-50 rounded-lg"
        >
          <div className=" text-base text-neutral-500 font-medium">Content</div>
          <div
            className={`stroke-[1.66667px] text-neutral-500 transition-transform  ${
              isOpenContent ? "-rotate-0" : "-rotate-90"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 12L16 22L6 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        {isOpenContent && (
          <div className="transition-all space-y-1">
            <div className="rounded-lg cursor-pointer flex items-center py-1.5 pl-5 pr-6 space-x-2 text-neutral-900  transition-all duration-200    hover:bg-primary-50">
              <div className="text-ellipsis overflow-hidden">Summary</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesMenu;
