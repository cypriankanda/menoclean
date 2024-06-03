"use client";
import {
  Navbar,
  Footer,
  About,
  Services,
  ChooseUs,
  Testimonials,
  Contact,
  Faqs,
  SideBar,
} from "../components";
import HeroImageSlider from "../components/Hero";
import { useGlobalContext } from "../context/AppContext";

export default function Home() {
  const { isSideBarOpen, showNavMenu } = useGlobalContext();

  return (
    <>
      <Navbar />
      <HeroImageSlider />
      <About />
      <Services />
      <ChooseUs />
      <Testimonials />
      {isSideBarOpen && <SideBar />}
      <Contact />
      <Faqs />
      <Footer />
    </>
  );
}
