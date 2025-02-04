'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

import ImageGrid from "@/components/ImageGrid";
import Link from "next/link";

export default function Home() {

  return (
    <div className="">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="px-8 md:px-16 py-8 flex flex-row justify-between items-center">
      <div>
        <Image src="/images/logo-01.png" width={60} height={60} alt="logo" />
      </div>
      <div className="flex gap-8">
        <Link href="#about">About </Link>
        <Link href="#services">Services </Link>
      </div>
    </div>
  );
}

function Main() {

  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const handleInteraction = () => {
    if (isMobile) {
      setIsInfoVisible(!isInfoVisible);
    }
  };

  return (
    <main className="flex flex-col justify-center text-center">
      <div className=" min-h-screen px-16 md:px-32 pt-8 md:pt-16"
        style={{
          backgroundImage: 'radial-gradient(125% 125% at 50% 0%, #08080A 50%, #ADF802)',
        }}>
        <h1 className="bg-gradient-to-b from-[#ADF802] to-[#60840d] bg-clip-text text-transparent text-6xl md:text-8xl  flex flex-col">
          <span className="" style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontWeight: '800',
          }}>Turning Ideas into Impact</span>
        </h1>
        <p className="text-sm pt-8 md:px-16">We blend creativity with cutting-edge technology to craft visually stunning and results-driven solutions. From web design to video editing, we help businesses transform into digital powerhouses</p>
        <button className="bg-neutral-900 border-[1px] border-[#ADF802] px-8 py-2 mt-4 rounded-3xl">Let create</button>
      </div>
      <div style={{
        backgroundImage: 'url(/images/bg-effect2.jpg)',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="py-16 px-8"
        >
          <h1 className="text-4xl pb-4"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
            }}>Our goal is to see our client in
            <span className="font-bold text-[#ADF802]"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontWeight: '800',
              }}> top 100</span></h1>
          <p className="font-bold">WE HAVE THE SKILL SETS TO MAKE YOU ACHIEVE 10X RESULTS</p>

          <div className="py-8 mx-8 md:mx-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="aspect-square bg-neutral-900 bg-opacity-50 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">10+</span>
                <span className="">EMPLOYEES</span>
              </h1>

              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>

            <div className="aspect-square bg-neutral-900 bg-opacity-50 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">20+</span>
                <span className="">BRANDS DEVELOPED</span>
              </h1>

              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>

            <div className="aspect-square bg-neutral-900 bg-opacity-50 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">40+</span>
                <span className="">CONNECTIONS MADE</span>
              </h1>
              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#ADF802] text-black text-left px-8 md:px-32 py-16 grid md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h1 className="font-bold text-5xl pb-4"
              style={{
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontWeight: '800',
              }}>About us</h1>
            <p className="text-md font-light">We are a team of passionate designers, developers, and creative thinkers who
              believe in the power of innovation. Our mission is to provide businesses with top-tier creative solutions
              that not only look good but perform even better. Whether you are launching a new product, rebranding, or
              expanding your digital presence, we have the tools to help you succeed.</p>
          </div>

          <div className="flex flex-row gap-8">
            <ImageGrid
              src="/images/efajie.png"
              title="Efajie"
              description="Designer"
            />
            <ImageGrid
              src="/images/GAMER.png"
              title="Gamer"
              description="Developer"
            />
          </div>

        </div>

        <div className="">
          <h1 className="font-bold text-4xl pb-8"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: '800',
            }}>Why choose us</h1>
          <div className="flex flex-col gap-4">
            <div className="bg-[#08090A] text-white p-4 rounded-xl">
              <p className="font-semibold pb-2">Innovative Approach</p>
              <p className="text-sm font-light">We merge design, technology, and strategy to deliver out of the box solutions.</p>
            </div>
            <div className="bg-[#08090A] text-white p-4 rounded-xl">
              <p className="font-semibold pb-2">Collaborative Spirit</p>
              <p className="text-sm font-light">Our team works closely with you to understand your vision and goals.</p>
            </div>
            <div className="bg-[#08090A] text-white p-4 rounded-xl">
              <p className="font-semibold pb-2">Results Driven</p>
              <p className="text-sm font-light">Every project is tailored to generate maximum impact.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-16 mx-8 md:mx-32 text-left grid grid-cols-1  md:grid-cols-3 gap-4" id="services">
        <div className="aspect-square bg-[#ADF802] text-black flex flex-row items-center justify-center rounded-[2.5rem]">
          <h1 className="text-5xl font-bold p-4 md:p-8"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: '800',
            }}>Our <br /> Services</h1>
          <svg className="mb-32 md:mb-16 md:mr-4" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 8V17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>


        </div>
        <div className="aspect-square p-4 md:p-8 pb-8 bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-end rounded-xl">
          <h1 className="text-2xl font-bold pb-4">Graphics Design</h1>
          <p className="text-sm text-neutral-300">Transforming concepts into visually stunning graphics that captivate, communicate, and elevate your brand, ensuring each design speaks directly to your audience.</p>
        </div>
        <div className="aspect-square p-4 md:p-8 pb-8 bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-end rounded-xl">
          <h1 className="text-2xl font-bold pb-4">Web Design & Development</h1>
          <p className="text-sm text-neutral-300">Crafting high-performance websites that merge creativity with functionality, delivering engaging, user-friendly experiences across all devices</p>
        </div>
        <div className="aspect-square p-4 md:p-8 pb-8 bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-end rounded-xl">
          <h1 className="text-2xl font-bold pb-4">Product Design</h1>
          <p className="text-sm text-neutral-300">Innovating user-centric products that combine aesthetic appeal with practical functionality, designed to resonate in today competitive market</p>
        </div>
        <div className="aspect-square p-4 md:p-8 pb-8 bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-end rounded-xl">
          <h1 className="text-2xl font-bold pb-4">Illustrations</h1>
          <p className="text-sm text-neutral-300">Creating unique, expressive illustrations that bring your brand story to life, adding depth, personality, and a memorable touch to every project</p>
        </div>
        <div className="aspect-square p-4 md:p-8 pb-8 bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-end rounded-xl">
          <h1 className="text-2xl font-bold pb-4">Video Editing</h1>
          <p className="text-sm text-neutral-300">Turning raw footage into captivating visual stories, ensuring every scene, cut, and effect aligns perfectly with your brand vision and message</p>
        </div>
      </div>

    </main>
  );
}

function Footer() {

  return (
    <footer className="flex flex-col md:flex-row justify-between md:items-center px-8 md:px-16 pt-32 pb-8 gap-4">
      <div className="flex-col pb-4">
        <Image className="pb-2" src="/images/logo-02.png" alt="logo-txt" width={200} height={100} />
        <p className="text-sm">Creative Services Agency</p>
      </div>
      <div className="flex flex-row gap-8">
        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
      </div>
    </footer>
  );
}
