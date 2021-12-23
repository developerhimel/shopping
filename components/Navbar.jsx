import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import MegaMenu from "./MegaMenu";
function Navbar() {
  return (
    <nav className="bg-white">
      <section className="w-full py-3 border-b">
        <div className="container mx-auto px-2.5 sm:px-0">
          <div className="flex flex-row justify-between items-center">
            <a className="flex flex-row justify-start items-center" href="/">
              <Image
                src={require("../public/assets/logo.png")}
                alt="Shopping Platform Logo"
                width={35}
                height={45}
              />
              <h3 className="ml-1 text-xl font-bold text-orange-500">
                Shopping
              </h3>
            </a>
            <div className="flex-row justify-between items-center border px-3 w-1/2 rounded-full border-orange-500 hidden md:flex">
              <div className="py-2 w-full">
                <span className="p-2 border-r mr-2">Search</span>
                <input
                  className="outline-none max-w-89 xl:w-full"
                  type="text"
                  placeholder="What are you looking for?....."
                  autoComplete={true}
                />
              </div>
              <a href="#" className="border-l pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </div>
            <div className="flex-row justify-end items-center hidden xl:flex">
              <a
                href="/login"
                className="flex flex-row justify-start items-center p-2 px-3"
              >
                <i className="fas fa-user text-3xl text-gray-500 mr-1"></i>
                <span className="flex flex-col text-gray-500">
                  <span className="-mb-1">Sign In</span>
                  <span className="font-semibold">Join free</span>
                </span>
              </a>
              <a
                href="/orders"
                className="flex flex-col justify-center items-center p-2 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base text-gray-500 font-semibold">
                  Orders
                </span>
              </a>
              <a
                href="/cart"
                className="flex flex-col justify-center items-center p-2 px-3 pr-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-base text-gray-500 font-semibold">
                  Cart
                </span>
              </a>
            </div>
            <div className="xl:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </section>
      <MegaMenu />
    </nav>
  );
}

export default Navbar;
