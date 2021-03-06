import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Homepage from "../components/page/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopping Platform™</title>
      </Head>
      <Homepage />
      <Footer/>
    </div>
  );
}
