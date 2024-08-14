/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLocation } from "react-router-dom";
import { OpenSliderIcon } from "../assets/icons";

const Header = ({ prop }) => {
  const location = useLocation();

  return (
    <header className="sticky rounded shadow-2xl dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30 bg-white	">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Header: Left side */}
          <div className="flex">
            <div>
              <span>&nbsp; &nbsp;</span>
              <span className="m-2">...{location.pathname}</span>
              <span className="ml-20 font-bold text-lg uppercase">
                {prop ? prop + " info" : ""}
              </span>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
