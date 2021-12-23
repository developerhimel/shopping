import React from "react";
import Navbar from "../Navbar";

function Productpage() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white my-5 border">
        <div className="container mx-auto">
          <h1 className="py-5">
            <a className="hover:underline cursor-pointer">Home</a>/{" "}
            <a className="hover:underline cursor-pointer">Categories</a>/{" "}
            <a className="hover:underline cursor-pointer">Subcategories</a>
          </h1>
        </div>
      </div>
      <div className="container mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/A/118566_1620207578.jpg"
              alt="product img"
              className="hover:scale-105 transition-all cursor-pointer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-600 mt-5 pb-2">
              Pepsi 50cl Pack X 12
            </h1>
            <h2 className="border-b pb-3">
              Product Code: <span>5234132</span>
            </h2>
            <h2 className="text-xl font-semibold text-gray-400 py-5 border-b">
              Price: <span>36.9$</span>
            </h2>
            <div className="flex justify-start w-full py-5 border-b">
              <h2 className="mr-2">Quantity: </h2>
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border text-center w-8"
                type="text"
                placeholder="1"
              />

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <div className="flex flex-row justify-around items-center">
              <a href="/checkout" className="cursor-pointer text-center bg-green-600 w-1/2 m-2 py-3 px-2 text-white rounded-md shadow-md font-semibold">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </a>
              <button className="cursor-pointer bg-white border w-1/2 m-2 py-3 px-2 text-gray-600 rounded-md shadow-md font-semibold">
                <i className="fas fa-heart text-orange-500"></i> Save for Later
              </button>
            </div>
            <div className="mt-5">
              <h1>Share with friends</h1>
              <div className="flex flex-row justify-start items-center">
                <i className="fab fa-facebook mr-3 text-xl cursor-pointer"></i>
                <i className="fab fa-twitter mr-3 text-xl cursor-pointer"></i>
                <i className="fab fa-instagram mr-3 text-xl cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white mt-5 shadow-md border rounded-md">
        <h1 className="bg-gray-100 border-b px-2 py-3 font-semibold text-2xl text-gray-500">
          Product Description
        </h1>
        <p className="px-2 mt-5">
          Corsair vengeance RGB PRO series DDR4 memory lights up your PC with
          mesmerizing dynamic multi zone RGB lighting, while delivering the best
          in DDR4 performance and stability. Every module boasts ten
          individually controlled RGB LEDs, while wire free design makes
          installation simple. Take control with CORSAIR iCUE software and
          completely customize every module's lighting to match your system, or
          easily synchronize lighting across all your CORSAIR products with
          Light LINK. A custom designed PCB provides the highest signal quality
          for the best level of performance and stability on the latest AMD and
          Intel DDR4 motherboards, while specially screened ICs unlock superior
          Overclocking. Heat Spreader Anodized Aluminum. SPD Speed - 2133MHz.
          <br />
          <br />
          <div
            aria-expanded="true"
            class="a-expander-content a-expander-section-content a-section-expander-inner"
          >
            {" "}
            <table
              id="productDetails_techSpec_section_2"
              class="a-keyvalue prodDetTable"
              role="presentation"
            >
              {" "}
              <tbody>
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Brand{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;Corsair{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Item model number{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;CMW16GX4M2C3200C16{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Item Weight{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;4.3 ounces{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Product Dimensions{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;5.44 x 0.3 x 2 inches{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Item Dimensions LxWxH{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;5.44 x 0.3 x 2 inches{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Color
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">&lrm;Black </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Processor Count{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">&lrm;1 </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Computer Memory Type{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;DDR4 SDRAM{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Voltage{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;1.35 Volts{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Manufacturer{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;Corsair{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    ASIN{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;B07D1XCKWW{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Country of Origin{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;Taiwan{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Is Discontinued By Manufacturer{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">&lrm;No </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th class="a-color-secondary a-size-base prodDetSectionEntry">
                    {" "}
                    Date First Available{" "}
                  </th>{" "}
                  <td class="a-size-base prodDetAttrValue">
                    &lrm;May 31, 2018{" "}
                  </td>{" "}
                </tr>{" "}
              </tbody>
            </table>{" "}
          </div>
        </p>
      </div>
      <div className="container mx-auto bg-white mt-5 shadow-md border rounded-md">
        <h1 className="bg-gray-100 border-b px-2 py-3 font-semibold text-2xl text-gray-500">
          Product Reviews (0)
        </h1>
        <p className="px-2 mt-5">No reviews!</p>
      </div>

      <div class="2xl:container 2xl:mx-auto md:py-12 py-9">
        <div class="bg-gray-50 dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
          <div class="">
            <img
              class="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1.svg"
              alt="delivery"
            />
            <img
              class="dark:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1dark.svg"
              alt="delivery"
            />
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
              Delivery
            </h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Free worldwide delivery over orders above $100
            </p>
          </div>
          <div class="">
            <img
              class="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2.svg"
              alt="Customer Care"
            />
            <img
              class="dark:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2dark.svg"
              alt="Customer Care"
            />
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
              Customer Care
            </h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Our customer care is available 24/7 at{" "}
              <span class="font-semibold cursor-pointer">+495-589-509</span> and{" "}
              <span class="font-semibold cursor-pointer">
                customercare@gmail.com
              </span>
            </p>
          </div>
          <div class="">
            <img
              class="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3.svg"
              alt="Recycle"
            />
            <img
              class="dark:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3dark.svg"
              alt="Recycle"
            />
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
              Recycle
            </h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              All out products are 100 percent recycable
            </p>
          </div>
          <div class="">
            <img
              class="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4.svg"
              alt="Secure Payment"
            />
            <img
              class="dark:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4dark.svg"
              alt="Secure Payment"
            />
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
              Secure Payment
            </h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Transaction process has end to end encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
