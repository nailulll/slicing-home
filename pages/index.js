import Head from "next/head";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/hero.jpg')] h-[1250px] lg:h-[880px] bg-cover relative z-10">
        <div className="bg-primary/60 h-[1250px] lg:h-[880px]">
          <NavBar />
          <Hero />
          <Cta />
          <Team />
          <Footer />
        </div>
      </div>
      <div className="absolute bg-primary bg-opacity-5 w-[874px] h-[874px] rounded-full top-[700px] -left-[436px] lg:top-[600px] z-0" />
    </>
  );
}
