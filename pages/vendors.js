import React from "react";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function vendors() {
  return (
    <div>
      <Navbar />
      <Filters />
      <Productgrid8 />
      <BestSeller6 />
      <Footer />
    </div>
  );
}

export default vendors;

const Productgrid8 = () => {
  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6"></div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <hr className=" w-full bg-gray-200 my-6" />
        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className=" font-normal text-base leading-4 text-gray-800">
              Filtered
            </p>
          </div>
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing 18 products
          </p>
        </div>

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          <div className=" relative ">
            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
              <p className="text-xs leading-3 text-gray-800">New</p>
            </div>
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png"
                alt="A girl Posing Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Wilfred Alana Dress
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1550
            </p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
              2 colours
            </p>
          </div>
          <div className=" relative">
            <div className=" bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
              <p className=" text-white fonr-normal text-base leading-4">
                XS , S , M , L
              </p>
            </div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/m6V0MzR/gs-Kd-Pc-Iye-Gg-1.png"
                alt="A girl wearing white suit and googgles"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Wilfred Alana Dress
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1800
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png"
                alt="A girl wearing dark blue suit and posing"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Wilfred Alana Dress
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1550
            </p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
              2 colours
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png"
                alt="A girl posing and wearing white suit"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Flared Cotton Tank Top
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1800
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png"
                alt="Girl posing for an Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Flared Cotton Tank Top
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1800
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png"
                alt="A blonde girl posing"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Wilfred Alana Dress
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1550
            </p>
            <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
              2 colours
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png"
                alt="A girl wearing white suit posing in desert"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Flared Cotton Tank Top
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1800
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png"
                alt="Girl wearing pink suit posing"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Flared Cotton Tank Top
            </p>
            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
              $1800
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

const BestSeller6 = () => {
  return (
      <>
    <div className="2xl:mx-auto 2xl:container px-4 md:px-6 2xl:px-0 py-16 flex justify-center">
      <div className="fle flex-col justify-center items-center">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">
            Local Best Featured items
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
          <div className="flex items-start flex-col">
            <div className="relative flex justify-center items-center bg-gray-100 py-12 px-16">
              <img
                src="https://i.ibb.co/9HKkSpP/Rectangle-49.png"
                alt="mobile"
              />
              <button className="absolute top-4 right-4 flex justify-center items-center p-3.5 bg-white rounded-full">
                <svg
                  className="fill-stroke text-gray-600 hover:text-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00002 6.59999V5.39999C6.00002 4.44521 6.37931 3.52953 7.05444 2.8544C7.72957 2.17927 8.64525 1.79999 9.60003 1.79999V1.79999C10.5548 1.79999 11.4705 2.17927 12.1456 2.8544C12.8207 3.52953 13.2 4.44521 13.2 5.39999V6.59999M3.00002 6.59999C2.84089 6.59999 2.68828 6.6632 2.57576 6.77572C2.46324 6.88825 2.40002 7.04086 2.40002 7.19999V15.3C2.40002 16.434 3.36602 17.4 4.50002 17.4H14.7C15.834 17.4 16.8 16.4809 16.8 15.3469V7.19999C16.8 7.04086 16.7368 6.88825 16.6243 6.77572C16.5118 6.6632 16.3592 6.59999 16.2 6.59999H3.00002Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8.40002V9.00002C6 9.9548 6.37928 10.8705 7.05442 11.5456C7.72955 12.2207 8.64522 12.6 9.6 12.6C10.5548 12.6 11.4705 12.2207 12.1456 11.5456C12.8207 10.8705 13.2 9.9548 13.2 9.00002V8.40002"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
              <div>
                <p className="text-lg font-medium leading-4 text-gray-800">
                  iPhone XS
                </p>
              </div>
              <div>
                <p className="text-lg leading-4 text-gray-600">$790</p>
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="relative flex justify-center items-center bg-gray-100 py-12 px-16">
              <img
                src="https://i.ibb.co/z7jvmjp/Rectangle-49-1.png"
                alt="headphones"
              />
              <button className="absolute top-4 right-4 flex justify-center items-center p-3.5 bg-white rounded-full">
                <svg
                  className="fill-stroke text-gray-600 hover:text-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00002 6.59999V5.39999C6.00002 4.44521 6.37931 3.52953 7.05444 2.8544C7.72957 2.17927 8.64525 1.79999 9.60003 1.79999V1.79999C10.5548 1.79999 11.4705 2.17927 12.1456 2.8544C12.8207 3.52953 13.2 4.44521 13.2 5.39999V6.59999M3.00002 6.59999C2.84089 6.59999 2.68828 6.6632 2.57576 6.77572C2.46324 6.88825 2.40002 7.04086 2.40002 7.19999V15.3C2.40002 16.434 3.36602 17.4 4.50002 17.4H14.7C15.834 17.4 16.8 16.4809 16.8 15.3469V7.19999C16.8 7.04086 16.7368 6.88825 16.6243 6.77572C16.5118 6.6632 16.3592 6.59999 16.2 6.59999H3.00002Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8.40002V9.00002C6 9.9548 6.37928 10.8705 7.05442 11.5456C7.72955 12.2207 8.64522 12.6 9.6 12.6C10.5548 12.6 11.4705 12.2207 12.1456 11.5456C12.8207 10.8705 13.2 9.9548 13.2 9.00002V8.40002"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
              <div>
                <p className="text-lg font-medium leading-4 text-gray-800">
                  Beats earphones
                </p>
              </div>
              <div>
                <p className="text-lg leading-4 text-gray-600">$245</p>
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="relative flex justify-center items-center bg-gray-100 py-12 px-16">
              <img
                src="https://i.ibb.co/sFWSWKz/Rectangle-49-2.png"
                alt="camera"
              />
              <button className="absolute top-4 right-4 flex justify-center items-center p-3.5 bg-white rounded-full">
                <svg
                  className="fill-stroke text-gray-600 hover:text-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00002 6.59999V5.39999C6.00002 4.44521 6.37931 3.52953 7.05444 2.8544C7.72957 2.17927 8.64525 1.79999 9.60003 1.79999V1.79999C10.5548 1.79999 11.4705 2.17927 12.1456 2.8544C12.8207 3.52953 13.2 4.44521 13.2 5.39999V6.59999M3.00002 6.59999C2.84089 6.59999 2.68828 6.6632 2.57576 6.77572C2.46324 6.88825 2.40002 7.04086 2.40002 7.19999V15.3C2.40002 16.434 3.36602 17.4 4.50002 17.4H14.7C15.834 17.4 16.8 16.4809 16.8 15.3469V7.19999C16.8 7.04086 16.7368 6.88825 16.6243 6.77572C16.5118 6.6632 16.3592 6.59999 16.2 6.59999H3.00002Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8.40002V9.00002C6 9.9548 6.37928 10.8705 7.05442 11.5456C7.72955 12.2207 8.64522 12.6 9.6 12.6C10.5548 12.6 11.4705 12.2207 12.1456 11.5456C12.8207 10.8705 13.2 9.9548 13.2 9.00002V8.40002"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
              <div>
                <p className="text-lg font-medium leading-4 text-gray-800">
                  Digital camera
                </p>
              </div>
              <div>
                <p className="text-lg leading-4 text-gray-600">$330</p>
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="relative flex justify-center items-center bg-gray-100 py-12 px-16">
              <img
                src="https://i.ibb.co/x5xbLxB/Rectangle-49-3.png"
                alt="speaker"
              />
              <button className="absolute top-4 right-4 flex justify-center items-center p-3.5 bg-white rounded-full">
                <svg
                  className="fill-stroke text-gray-600 hover:text-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00002 6.59999V5.39999C6.00002 4.44521 6.37931 3.52953 7.05444 2.8544C7.72957 2.17927 8.64525 1.79999 9.60003 1.79999V1.79999C10.5548 1.79999 11.4705 2.17927 12.1456 2.8544C12.8207 3.52953 13.2 4.44521 13.2 5.39999V6.59999M3.00002 6.59999C2.84089 6.59999 2.68828 6.6632 2.57576 6.77572C2.46324 6.88825 2.40002 7.04086 2.40002 7.19999V15.3C2.40002 16.434 3.36602 17.4 4.50002 17.4H14.7C15.834 17.4 16.8 16.4809 16.8 15.3469V7.19999C16.8 7.04086 16.7368 6.88825 16.6243 6.77572C16.5118 6.6632 16.3592 6.59999 16.2 6.59999H3.00002Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8.40002V9.00002C6 9.9548 6.37928 10.8705 7.05442 11.5456C7.72955 12.2207 8.64522 12.6 9.6 12.6C10.5548 12.6 11.4705 12.2207 12.1456 11.5456C12.8207 10.8705 13.2 9.9548 13.2 9.00002V8.40002"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
              <div>
                <p className="text-lg font-medium leading-4 text-gray-800">
                  Wireless speakers
                </p>
              </div>
              <div>
                <p className="text-lg leading-4 text-gray-600">$140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination/>
    </>
  );
};

const Pagination = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto container py-10">
        <ul className="flex justify-center items-center">
          <li>
            <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
              1
            </span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
              2
            </span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">
              ...
            </span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
              6
            </span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
              7
            </span>
          </li>
          <li>
            <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
      ;
    </div>
  );
};
