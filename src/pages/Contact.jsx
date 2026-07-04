export default function Contact() {
    return (
        <section id="contact">
            <div className="h-px w-full bg-neutral-800 mt-16"></div>
            <div className="flex justify-between items-center px-14 mt-16 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                <div className="flex items-center gap-4">
                    <p>[04] CONTACT</p>
                </div>
            </div>
            <div className="flex mt-8 ml-14 mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-6xl font-black leading-none tracking-tight">
                    HAVE AN IDEA?BUG?
                </h1>
            </div>
            <div className="flex mt-8 ml-14 mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-6xl font-black leading-none tracking-tight">
                    INTERNSHIP?<span className="text-orange-500">SAY HI.</span>
                </h1>
            </div>
            <div className="h-px w-full bg-neutral-800 mt-16"></div>
            <div className="flex">
                <div className="w-2/5 border-r border-neutral-800">

                    <div className="px-14 mt-16 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                        <p>// RESPONSE TIME</p>
                    </div>

                    <p
                        className="ml-14 mt-6 text-neutral-400 text-2xl leading-relaxed max-w-xl"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        Typically replies within 24 hours.
                        Faster responses on LinkedIn and Email.
                    </p>

                    <div className="mt-20"></div>

                    <div className="px-14 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                        <p>// LOCATION</p>
                    </div>

                    <p
                        className="ml-14 mt-6 text-neutral-300 text-2xl"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        Vellore, Tamil Nadu, India
                    </p>

                </div>
                <div className="w-3/5">

                    <a
                        href="https://github.com/Kallin43"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex justify-between items-center border-b border-neutral-800 px-14 py-10 hover:bg-white transition-all duration-300"
                    >
                        <h2 className="text-5xl font-black group-hover:text-black">
                            GITHUB
                        </h2>
                        <p
                            className="uppercase tracking-[0.35em] text-neutral-400 group-hover:text-black"
                            style={{ fontFamily: "'Share Tech Mono', monospace" }}
                        >
                            github.com/Kallin43 ↗
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/noel-kallingal-307a7825a/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex justify-between items-center border-b border-neutral-800 px-14 py-10 hover:bg-white transition-all duration-300"
                    >
                        <h2 className="text-5xl font-black group-hover:text-black">
                            LINKEDIN
                        </h2>
                        <p
                            className="uppercase tracking-[0.35em] text-neutral-400 group-hover:text-black"
                            style={{ fontFamily: "'Share Tech Mono', monospace" }}
                        >
                            /in/noelkallingal ↗
                        </p>

                    </a>

                    <a
                        href="mailto:kallingalnoel@gmail.com"
                        className="group flex justify-between items-center border-b border-neutral-800 px-14 py-10 hover:bg-white transition-all duration-300"
                    >
                        <h2 className="text-5xl font-black group-hover:text-black">
                            EMAIL
                        </h2>
                        <p
                            className="uppercase tracking-[0.35em] text-neutral-400 group-hover:text-black"
                            style={{ fontFamily: "'Share Tech Mono', monospace" }}
                        >
                            kallingalnoel@gmail.com ↗
                        </p>
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="group flex justify-between items-center border-b border-neutral-800 px-14 py-10 hover:bg-white transition-all duration-300"
                    >
                        <h2 className="text-5xl font-black group-hover:text-black">
                            RESUME
                        </h2>
                        <p
                            className="uppercase tracking-[0.35em] text-neutral-400 group-hover:text-black"
                            style={{ fontFamily: "'Share Tech Mono', monospace" }}
                        >
                            Download PDF ↗
                        </p>
                    </a>
                </div>
            </div>
            <div className="h-px w-full bg-neutral-800"></div>
            <div className="flex">
                <div className="w-1/2 ml-14 mb-8">
                    <div className="flex justify-between items-center px-14 mt-8 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                        <div className="flex items-center gap-4">
                            <p>© 2026 NOEL KALLINGAL</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 ml-6">
                    <div className="flex justify-between items-center px-14 mt-8 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                        <div className="flex items-center gap-4">
                            <p>BUILT WITH REACT • DEPLOYED ON VERCEL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}