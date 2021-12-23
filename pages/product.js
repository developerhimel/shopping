import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Productpage from "../components/page/Productpage";

function product() {
  return (
    <div>
      <Head>
        <title>Shopping Platform™</title>
      </Head>
      <Productpage/>
      <Footer/>
    </div>
  );
}

export default product;
