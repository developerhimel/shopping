import Link from "next/link";
import React from "react";

function MegaMenu() {
  return (
    <section className="w-full shadow-md">
      <div className="container mx-auto">
        <div className="">
          <ul className="flex flex-row justify-start items-center customul">
            <li className="bg-gray-50 cursor-pointer relative homeCategory">
              <i className="fas fa-list"></i> Categories{" "}
              <i className="fas fa-caret-down"></i>
              <ul className="homeCategorySub absolute bg-white shadow-md top-10 z-50 p-3 left-0 border">
                <li className="relative hover:bg-slate-200 px-2 py-2 mb-1">
                  <i className="fas fa-female text-sm text-gray-400"></i>{" "}
                  Women's Fashion
                  <ul className="subCategoryUl shadow-md border h-20 rounded-md p-2">
                    <li className="hover:bg-slate-200 p-2 mb-1">
                      Sub Category
                    </li>
                  </ul>
                </li>
                <li className="relative hover:bg-slate-200 px-2 py-2 mb-1">
                  <i className="fas fa-tshirt text-sm text-gray-400"></i> Men's
                  Fashion
                  <ul className="subCategoryUl shadow-md border h-20 rounded-md p-2">
                    <li className="hover:bg-slate-200 p-2 mb-1">
                      Sub Category
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="hover:bg-gray-50">
              <Link href="/vendors">
                <a>
                  <i className="fas text-orange-500 fa-map-marker-alt"></i>{" "}
                  Local Marketplace
                </a>
              </Link>
            </li>
            <li className="hover:bg-gray-50">
              <Link href="/international">
                <a>
                  <i className="fas text-orange-500 fa-globe"></i> International
                  Marketplace
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MegaMenu;
