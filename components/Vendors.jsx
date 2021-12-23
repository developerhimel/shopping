import React from "react";
import Image from "next/image";
import Link from "next/link";
function Products({ image }) {
  return (
    <Link href="/product">
      <div className="m-3 shadow-md bg-white border p-5 rounded-md hover:scale-105 cursor-pointer transition-all hover:border-orange-500">
        <div className="w-40 h-40">
          <img src={image} alt="Product" />
        </div>
        <h2 className="truncate w-36 my-2">
          Caution Toy Zone Graphic T-Shirt - Orange
        </h2>
        <h2 className="text-center font-semibold">
          Price: <span className="text-orange-500">36.9$</span>
        </h2>
      </div>
    </Link>
  );
}

function Vendors() {
  return (
    <div>
      <div className="bg-white mt-5 shadow-md border rounded-md">
        <p className="text-xl bg-gray-50 text-gray-600 font-semibold px-3 py-4 border-b pb-3">
          Local Best products
          <span className="text-orange-500 text-base ml-5 cursor-pointer">
            See all items
          </span>
        </p>
        <div className="flex flex-row justify-center xl:justify-start items-center flex-wrap m-2">
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/X/5981_1598025608.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/r/Graphic-Print-T-Shirt-7927771.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/N/140595_1564079843.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/P/_1637857380.png" />
          <Products image="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/W/118566_1622194414.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/Y/53250_1610459299.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/R/153015_1635143907.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/r/Graphic-Print-T-Shirt-7927771.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/r/Graphic-Print-T-Shirt-7927771.jpg" />
          <Products image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/r/Graphic-Print-T-Shirt-7927771.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Vendors;
