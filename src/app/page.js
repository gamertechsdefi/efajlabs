import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="px-8 md:px-16 py-8 flex flex-row justify-between">
      <div>
        <h1 className="font-bold text-2xl">Logo</h1>

      </div>
      <div className="flex gap-8">
        <p>About </p>
        <p>Services </p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="flex flex-col justify-center text-center">
        <div className=" min-h-screen px-16 md:px-32 pt-32 md:pt-16"
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

        <div className="mt-16 px-8"
         style={{
          backgroundImage: 'url(/images/bg-effect.png)',
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
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
      <div className="bg-[#ADF802] text-black text-left mt-16 px-8 md:px-32 py-16 grid md:grid-cols-2 gap-16">
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

          <div className="flex flex-row gap-4">
            <div className="bg-[#08090A] w-16 h-16 rounded-lg"></div>
            <div className="bg-[#08090A] w-16 h-16 rounded-lg"></div>
            <div className="bg-[#08090A] w-16 h-16 rounded-lg"></div>
            <div className="bg-[#08090A] w-16 h-16 rounded-lg"></div>
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

        <div className="text-white py-16 mx-8 md:mx-64 text-left grid grid-cols-2  md:grid-cols-3 gap-4">
          <div className="aspect-square bg-[#ADF802] text-black flex flex-col justify-center rounded-[2.5rem]">
            <h1 className="text-3xl font-bold p-4 md:p-8"
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: '800',
            }}>Our Services</h1>
          </div>
          <div className="aspect-square bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-center rounded-xl">
            <h1 className="text-xl font-bold p-4 md:p-8">Graphics Design</h1>
          </div>
          <div className="aspect-square bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-center rounded-xl">
            <h1 className="text-xl font-bold p-4 md:p-88">Web Design & Development</h1>
          </div>
          <div className="aspect-square bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-center rounded-xl">
            <h1 className="text-xl font-bold p-4 md:p-8">Product Design</h1>
          </div>
          <div className="aspect-square bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-center rounded-xl">
            <h1 className="text-xl font-bold p-4 md:p-8">Illustrations</h1>
          </div>
          <div className="aspect-square bg-[#08080A] border-2 border-neutral-700 flex flex-col justify-center rounded-xl">
            <h1 className="text-xl font-bold p-4 md:p-8">Video Editing</h1>
          </div>
        </div>

    </main>
  );
}

function Footer() {

  return (
    <footer className="flex flex-col md:flex-row justify-between md:items-center px-8 md:px-16 pt-32 pb-8 gap-4">
      <div className="flex-col">
        <h1 className="text-2xl">Logo</h1>
        <p className="text-sm">Create design agency</p>
      </div>
      <div className="flex flex-row gap-4">
        {/* <FaTwitter size={25} />
        <FaInstagram size={25} />
        <FaMailBulk size={25} /> */}
      </div>
    </footer>
  );
}
