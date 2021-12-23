import React, { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {open === true ? (
            <i className="fas fa-bars text-2xl text-orange-500"></i>
          ) : (
            <i className="fas fa-bars text-2xl"></i>
          )}
        </button>
      </div>
      {open === true ? (
        <div
          className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Sign In/Join free
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Orders
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Cart
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;
