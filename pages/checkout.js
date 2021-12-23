import Head from "next/head";
import React from "react";
import Checkoutpage from "../components/page/Checkoutpage";

function checkout() {
  return (
    <div>
      <Head>
        <title>Shopping Platform™</title>
      </Head>
      <Checkoutpage />
    </div>
  );
}

export default checkout;
