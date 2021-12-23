import React, { useEffect } from "react";

function viewmarketplace() {
  return (
    <div>
      <iframe
        id="iframeId"
        className="h-screen w-full"
        src="https://www.alibaba.com"
        frameBorder={0}
        allowFullScreen="true"
      />
      <div className="flex flex-col justify-center items-center">
        <button className="absolute bottom-5 bg-orange-500 px-5 py-3 rounded-full text-white font-semibold shadow-lg flex flex-row justify-center items-center">
          <i className="fas fa-shopping-cart pr-1"></i>
          <h2>Add to cart</h2>
        </button>
      </div>
    </div>
  );
}

export default viewmarketplace;
