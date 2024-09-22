import React from "react";
// import Link from "next/link";
import Nav from "../_components/Nav";
import Carousel from "../_components/Silckslider";
import Motiondiv from "../_components/Motiondiv";
import Chat from "../_components/Chat";
import Productscart from "../_components/Productscart";
import Footer from "../_components/Footer";
import Dataprivacy from "../_components/Dataprivacy";
import Contact_us from "../_components/Contact_us";
import Team_members from "../_components/Team_members";
// import Cart from '../_components/Cart';
const Home = () => {
  return (
    <div suppressHydrationWarning={true}>
      <Nav />
      <Carousel />
      <Motiondiv />
      <Chat />
      <Productscart />
      <Dataprivacy />
      <Team_members />
      <Contact_us />
      <Footer />
      {/* <Cart /> */}
      {/* <Link href={"/landing"}>    <button>click to redirect</button></Link> */}
    </div>
  );
};

export default Home;
