import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Main />
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
      <div className="">

        <div className=" h-screen px-16 md:px-32 pt-32"
        style={{
          backgroundImage:'radial-gradient(125% 125% at 50% 0%, #08080A 50%, #ADF802)',
        }}>
          <h1 className="bg-gradient-to-b from-[#ADF802] to-[#60840d] bg-clip-text text-transparent text-5xl md:text-7xl font-black  flex flex-col">
            <span className="" style={{
              fontFamily:'BricolageGrotesque, sans-serif',
            }}>Turning Ideas into Impact</span>
          </h1>
          <p className="text-sm pt-8 md:px-16">We blend creativity with cutting-edge technology to craft visually stunning and results-driven solutions. From web design to video editing, we help businesses transform into digital powerhouses</p>
          <button className="border-2 border-[#ADF802] px-8 py-2 mt-4 rounded-3xl">Let's create</button>
        </div>

        <div className="mt-16 px-8">
          <h1 className="text-4xl pb-4">Our goal is to see our client in 
          <span className="font-bold text-[#ADF802]"> top 100</span></h1>
          <p className="font-bold">WE HAVE THE SKILL SETS TO MAKE YOU ACHIEVE 10X RESULTS</p>

          <div className="py-8 mx-8 md:mx-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="aspect-square bg-neutral-900 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">1000+</span>
                <span className="">CUSTOMERS</span>
              </h1>

              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>

            <div className="aspect-square bg-neutral-900 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">1000+</span>
                <span className="">CUSTOMERS</span>
              </h1>

              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>

            <div className="aspect-square bg-neutral-900 border-2 border-[#ADF802] rounded-xl p-8">
              <h1 className="font-bold flex flex-col pb-4">
                <span className="text-3xl">1000+</span>
                <span className="">CUSTOMERS</span>
              </h1>
              <p className="text-sm">Loprem ipsum etc ectera and so on it goes and did not want to end</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#ADF802] text-black text-left mt-16 px-8 md:px-32 py-16 grid md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-between gap-8">
          <div>
        <h1 className="font-bold text-4xl pb-4">About us</h1>
        <p className="text-md font-light">We are a team of passionate designers, developers, and creative thinkers who 
        believe in the power of innovation. Our mission is to provide businesses with top-tier creative solutions 
        that not only look good but perform even better. Whether you're launching a new product, rebranding, or 
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
          <h1 className="font-bold text-4xl pb-8">Why choose us</h1>
          <div className="flex flex-col gap-4">
          <div className="bg-[#08090A] text-white p-4">
            <p className="font-semibold pb-2">Innovative Approach</p>
            <p className="text-sm font-light">We merge design, technology, and strategy to deliver out of the box solutions.</p>
          </div>
          <div className="bg-[#08090A] text-white p-4">
            <p className="font-semibold pb-2">Collaborative Spirit</p>
            <p className="text-sm font-light">Our team works closely with you to understand your vision and goals.</p>
          </div>
                   <div className="bg-[#08090A] text-white p-4">
            <p className="font-semibold pb-2">Results Driven</p>
            <p className="text-sm font-light">Every project is tailored to generate maximum impact.</p>
          </div>
          </div>
        </div>
      </div>

      <div>
      <h1 className="font-bold text-3xl pt-32">Our Services</h1>
      <div className="text-black pt-8 mx-16 md:mx-64 text-left grid grid-cols-1 grid-rows-2 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-[#ADF802] p-4 rounded-xl">
          <h1>Our Services</h1>
        </div>
        <div className="aspect-square bg-[#ADF802] p-4 rounded-xl">
          <h1>Our Services</h1>
        </div>
        <div className="aspect-square bg-[#ADF802] p-4 rounded-xl">
          <h1>Our Services</h1>
        </div>
        <div className="aspect-square bg-[#ADF802] p-4 rounded-xl">
          <h1>Our Services</h1>
        </div>
        <div className="aspect-square bg-[#ADF802] p-4 rounded-xl">
          <h1>Our Services</h1>
        </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {

  return (
    <footer>
      <div>

      </div>
    </footer>
  );
}
