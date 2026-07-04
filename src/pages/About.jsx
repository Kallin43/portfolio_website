import profile from "../assets/profile.png";

export default function About() {
    return (
        <section id="about">
            <div className="h-px w-full bg-neutral-800"></div>
            <div className="flex justify-between items-center px-14 mt-16 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                <div className="flex items-center gap-4">
                    <p>[01] ABOUT</p>
                </div>
            </div>
            <div className="flex mt-8 ml-14 mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-black leading-none tracking-tight">
                    WHO IS {" "}
                    <span className="text-orange-500">
                        /DEV/NOEL
                    </span>

                </h1>
            </div>
            <div className="h-px w-full bg-neutral-800"></div>
            <div className="flex">
                <div className="w-2/5 border-r border-neutral-800 min-h-[650px]">
                    <img
                        src={profile}
                        alt="Noel"
                        className="w-full h-[650px] object-cover"
                    />
                </div>
                <div className="w-3/5 p-16">
                    <p
                        className="uppercase tracking-[0.4em] text-neutral-500 mb-10"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        $ CAT ABOUT.MD

                    </p>
                    <p
                        className="text-2xl leading-relaxed text-neutral-200 max-w-4xl mb-12"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >

                        Hi, I'm Noel, a Computer Science student who loves turning ideas into real products. 
                        Whether it's developing AI applications, building responsive web interfaces, or creating mobile apps, I enjoy solving problems through technology and continuously expanding my skills.
                        <span className="animate-blink text-orange-500">|</span>
                    </p>
                    <div className="flex">
                        <div className="flex-1 border-r border-neutral-800 p-8">
                            <p
                                className="text-neutral-500 uppercase tracking-[0.4em] text-sm"
                            >
                                FIELD
                            </p>
                            <h3 className="text-xl font-black mt-6">

                                Computer Science

                            </h3>
                        </div>
                        <div className="flex-1 border-r border-neutral-800 p-8">
                            <p
                                className="text-neutral-500 uppercase tracking-[0.4em] text-sm"
                            >
                                GRAD
                            </p>
                            <h3 className="text-xl font-black mt-6">

                                2027

                            </h3>
                        </div>
                        <div className="flex-1 p-8">
                            <p
                                className="text-neutral-500 uppercase tracking-[0.4em] text-sm"
                            >
                                FOCUS
                            </p>
                            <h3 className="text-xl font-black mt-6">

                                AI · Full Stack

                            </h3>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-px w-full bg-neutral-800"></div>
            <div className="flex justify-between items-center px-14 mt-16 text-neutral-500 uppercase tracking-[0.35em] text-sm">
                <div className="flex items-center gap-4">
                    <p>// STACK.TREE</p>
                </div>
            </div>
            <div className="flex py-5 ml-14">
                <div className="w-1/4">
                    <p
                        className="text-orange-500 uppercase tracking-[0.45em]"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        LANGUAGES
                    </p>
                </div>
                <div className="w-3/4">
                    <p
                        className="text-2xl text-neutral-300"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        Java{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Python{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        C{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        C++{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        JavaScript{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Dart{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        C#{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        SQL
                    </p>
                </div>
            </div>
            <div className="flex py-5 ml-14">
                <div className="w-1/4">
                    <p
                        className="text-orange-500 uppercase tracking-[0.45em]"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        FRAMEWORKS
                    </p>
                </div>
                <div className="w-3/4">
                    <p
                        className="text-2xl text-neutral-300"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        React{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Flutter{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        FastAPI{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        TensorFlow{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        MediaPipe{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Tailwind CSS
                    </p>
                </div>
            </div>
            <div className="flex py-5 ml-14">
                <div className="w-1/4">
                    <p
                        className="text-orange-500 uppercase tracking-[0.45em]"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        TOOLS
                    </p>
                </div>
                <div className="w-3/4">
                    <p
                        className="text-2xl text-neutral-300"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                        Git{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        GitHub{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Vite{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Ollama{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Vercel{" "}
                        <span className="text-neutral-600">/</span>{" "}
                        Firebase
                    </p>
                </div>
            </div>
        </section>
    );
}