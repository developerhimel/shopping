import React from "react";
import Image from "next/image";
import Link from "next/link";
function Products() {
  return (
    <Link href="/product">
      <div className="m-3 shadow-md bg-white border p-5 rounded-md hover:scale-105 cursor-pointer transition-all hover:border-orange-500">
        <div className="w-40 h-40">
          <img
            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/C/118566_1521725925.jpg"
            alt="Product"
          />
        </div>
        <h2 className="truncate w-36 my-2">Andre Rose - 75cl - 10% Acl</h2>
        <h2 className="text-center font-semibold">
          Price: <span className="text-orange-500">29.9$</span>
        </h2>
      </div>
    </Link>
  );
}

function BestSelling() {
  return (
    <div>
      <div className="bg-white mt-5 shadow-md border rounded-md">
        <p className="text-xl bg-gray-50 text-gray-600 font-semibold px-3 py-4 border-b pb-3">
          Best Selling products
          <span className="text-orange-500 text-base ml-5 cursor-pointer">
            See all items
          </span>
        </p>
        <div className="flex flex-row justify-center xl:justify-start items-center flex-wrap m-2">
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
