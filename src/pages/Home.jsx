
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="scanlines min-h-screen bg-black text-white border border-neutral-800 overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50
                flex justify-between items-start
                border-b border-neutral-800
                bg-black/90 backdrop-blur
                px-12 py-6
                text-sm tracking-[0.3em] uppercase">

        <div className="flex items-center">
          <span className="text-orange-500">{">_"}</span>
          <span className="ml-3">SYS.ADMIN/NOEL.KALLINGAL</span>
        </div>

        <div className="flex gap-16 text-neutral-400">
          <a href="#about" className="hover:text-white transition">
            [01] ABOUT
          </a>
          <a href="#projects" className="hover:text-white transition">
            [02] PROJECTS
          </a>
          <a href="#resume" className="hover:text-white transition">
            [03] RESUME
          </a>
          <a href="#contact" className="hover:text-white transition">
            [04] CONTACT
          </a>
        </div>

      </nav>

      {/* STATUS BAR */}
      <div className="flex justify-between items-center px-12 mt-20 text-neutral-500 uppercase tracking-[0.35em] text-sm">

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-orange-500"></div>
          <p>Available and interested for work</p>
        </div>

        <div>PORTFOLIO/V.2026.1</div>

      </div>

      {/* HERO SECTION */}
      <section className="px-12 pt-20 pb-24">

        {/* TERMINAL LOGS */}
        <div
          className="space-y-4 text-neutral-500 text-xl md:text-2xl mb-24"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >

          <p>
            <span className="text-orange-500">$</span> initiating profile...
          </p>

          <p>
            <span className="text-orange-500">$</span> parsing identity.json ...
            <span className="text-white ml-6">[OK]</span>
          </p>

          <p>
            <span className="text-orange-500">$</span> compiling skills.tree ...
            <span className="text-white ml-6">[OK]</span>
          </p>

          <p>
            <span className="text-orange-500">$</span> rendering portfolio ...
            <span className="text-white ml-6">[OK]</span>
          </p>

        </div>

        {/* HUGE NAME */}
        <div className="mt-24 mb-20 pointer-events-none select-none opacity-40 leading-none">

          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tight text-white">

            NOEL

          </h1>

          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tight text-neutral-700">

            KALLINGAL<span className="text-orange-500">.</span>

          </h1>

        </div>

        <h1 className="font-sans font-black leading-[0.92] tracking-tight text-5xl md:text-7xl lg:text-[4rem] max-w-6xl">

          Building software at the edge of curiosity.

        </h1>

        <p
          className="mt-16 text-neutral-500 uppercase tracking-[0.45em] text-lg md:text-2xl leading-relaxed"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
          CSE Core Final Year @ VIT Vellore <br />
          Vellore, India
        </p>

        <div className="mb-20"></div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-8">

          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-white px-12 py-6 uppercase tracking-[0.35em] text-lg hover:bg-white hover:text-black transition-all duration-300">

            View Projects ↓

          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-neutral-700 px-12 py-6 uppercase tracking-[0.35em] text-lg hover:border-white transition-all duration-300">

            Get In Touch

          </button>

        </div>

      </section>

      <About />

      <Projects />

      <Resume />

      <Contact />

    </div>
  );
}