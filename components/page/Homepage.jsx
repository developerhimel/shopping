import React from "react";
import Navbar from "../Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Amazon from "../Amazon";
import Vendors from "../Vendors";
import BestSelling from "../BestSelling";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <div className="py-3" />
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="">
            <Carousel
              swipeable={true}
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              className="rounded-lg bg-white shadow-md overflow-hidden"
            >
              <div>
                <img src="https://ae01.alicdn.com/kf/H99948d81ab0f496292325b1f6046f11fJ.jpg_Q90.jpg_.webp" />
              </div>
              <div>
                <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01pDnN7I1buUqWLkrnE_!!6000000003525-0-tps-990-400.jpg" />
              </div>
              <div>
                <img src="https://ae01.alicdn.com/kf/H7c66b1b74f814fd8b63a20ce917bb570h.jpg_Q90.jpg_.webp" />
              </div>
            </Carousel>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center w-72 shadow-md m-2 border rounded-lg p-3 mt-0 mr-0">
              <h1 className="text-center text-xl font-semibold text-orange-500 mb-4">
                Welcome to Shopping Platform
              </h1>
              <div className="flex flex-row justify-between items-center">
                <button className="bg-purple-700 shadow-md text-white p-2 mr-1 rounded-full px-3">
                  Join now
                </button>
                <button className="bg-orange-500 shadow-md text-white p-2 rounded-full px-3">
                  Sign In
                </button>
              </div>
            </div>
            <div className="ml-2 rounded-md overflow-hidden shadow-md mt-5">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1639330566/contentservice/xmas%20storeJara.jpg_BkpW7nQqt.jpg"
                alt="offer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white my-5">
        <div className="grid xl:grid-cols-7 grid-cols-1 md:grid-cols-4 justify-items-center md:justify-items-start xl:justify-items-center md:py-12 gap-y-8 xl:gap-y-0 gap-x-20 py-9 2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-28">
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg1.svg"
              alt="vogue logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg2.svg"
              alt="cosmopolitan logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg3.svg"
              alt="bazaar logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg4.svg"
              alt="heavy logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg5.svg"
              alt="esquire logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg6.svg"
              alt="grazia logo"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners6-svg7.svg"
              alt="maria clarie logo"
            />
          </div>
        </div>
      </div>
      <Heatured />
      <div className="container mx-auto">
        <Vendors />
        <Amazon />
        <BestSelling />
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Get our shopping mobile apps
              </h1>
              <p className="mb-8 leading-relaxed">
                Download and enjoy our shopping mobile apps || Make your
                shopping easier
              </p>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                Android & ios apps
              </p>
              <div className="flex lg:flex-row md:flex-col">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">
                      GET IT ON
                    </span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">
                      Download on the
                    </span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;

function Heatured() {
  return (
    <div>
      <div
        className="
      flex
      justify-center
      items-center
      flex-col
      px-4
      md:px-6
      xl:px-20
      py-9
      md:py-12
      xl:py-10
    "
      >
        <section>
          <h1
            className="
          leading-5 md:leading-6 xl:leading-9
          text-gray-800 text-xl
          md:text-2xl
          xl:text-4xl
          font-semibold
          text-center
        "
          >
            Explore Todays best Deals!
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </section>
        <section
          className="
        grid grid-cols-2
        xl:grid-cols-3
        gap-4
        md:gap-6
        xl:gap-8
        mt-8
        md:mt-10
        xl:mt-12
        mb-6 mb-8
      "
        >
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img1.png" />
          </div>
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img2.png" />
          </div>
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img3.png" />
          </div>
        </section>
        <section className="flex justify-center">
          <button
            className="
          px-6
          h-11
          text-gray-800 text-base
          font-medium
          flex
          items-center
          border border-gray-600
          hover:bg-gray-200
        "
          >
            <span> Explore </span>
            <img
              className="ml-2"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg"
            />
          </button>
        </section>
      </div>
    </div>
  );
}
