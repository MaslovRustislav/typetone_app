import type { FunctionComponent } from "react";
import React from "react";
import { NavLink } from "@remix-run/react";
const Header: FunctionComponent = () => {
  return (
    <div className="w-12/12 h-20 mx-auto p-3 my-3 flex bg-white rounded-xl w-full ">
      <NavLink to="/" className="flex items-center h-full">
        <div className="w-8 h-8 bg-cover ml-2  bg-typetone-logo"></div>
        <h1 className="text-xl font-semibold">Typetone.AI</h1>
      </NavLink>
      <NavLink to="templates" className="flex items-center mx-auto h-full ">
        <div className="flex items-center cursor-pointer rounded-lg h-full  px-4 space-x-1 text-center  transition-all duration-200 ease-in-out text-neutral-900 hover:bg-hover-on-navbar stroke-neutral-600">
          <div className="w-5 h-5 bg-cover ml-2  bg-templates-icon"></div>
          <div>Templates</div>
        </div>
      </NavLink>
      <div className="flex items-center h-full">
        <div className="w-8 h-8 bg-cover "></div>
        <h1 className="text-xl w-36 font-semibold"></h1>
      </div>
    </div>
  );
};
export default Header;
