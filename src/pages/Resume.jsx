export default function Resume() {
    return (
        <section id="resume">
            <div className="flex justify-between items-center px-14 mt-16 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                <div className="flex items-center gap-4">
                    <p>[03] RESUME</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex mt-8 ml-14 mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-6xl font-black leading-none tracking-tight">
                            INITIATE RESUME
                        </h1>
                    </div>
                    <div className="flex mt-8 ml-14 mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-6xl font-black leading-none tracking-tight">
                            DOWNLOAD <span className="text-orange-500">_</span>
                        </h1>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="group flex items-center gap-8
                   border border-neutral-700
                   px-10 py-8
                   w-[480px]
                   hover:bg-white
                   transition-all duration-300"
                    >
                        <div className="text-4xl group-hover:text-black">
                            ⭳
                        </div>
                        <div>

                            <p
                                className="uppercase tracking-[0.35em] text-xl text-neutral-300 group-hover:text-black"
                                style={{ fontFamily: "'Share Tech Mono', monospace" }}
                            >
                                ./NOEL-KALLINGAL-RESUME.PDF
                            </p>

                            <p
                                className="mt-2 text-neutral-500 group-hover:text-neutral-700"
                                style={{ fontFamily: "'Share Tech Mono', monospace" }}
                            >
                                ~245 KB • PDF
                            </p>

                        </div>

                    </a>
                </div>
            </div>
        </section>
    )
}