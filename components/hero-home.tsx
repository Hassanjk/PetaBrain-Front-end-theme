import Image from "next/image";
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40" style={{marginTop:"0px",}}
    >
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">

            {/* <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div> */}
            <div className="cspfd cz7a3 c7d3r">
            <h1
              className="mb-8 text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
              style={{ backgroundImage:"linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)" }}
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              A powerful Multi api prompting site for you
              
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 text-white"
                style={{ color: "#64748B", }}
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                PetaBrain! a platform that makes prompting easy for you , powered by AI including different models of Gpt.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
            </div>
      
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
          <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
  <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
    <span className="text-[13px] font-medium text-white">
      PetaBrain.io
    </span>
  </div>
  <div className="font-mono text-gray-500 [&_span]:opacity-0">
    <span className="animate-[code-1_10s_infinite] text-blue-300">
      User: How can I create a new React application?
    </span>
    <br />
    <br/>
    <span className="animate-[code-2_10s_infinite] text-green-300">
      AI: Here’s how:
    </span><br/>
    <br/>
    <span className="animate-[code-3_15s_infinite] text-red-300">
      npm install -g expo-cli
    </span><br/>
    <span className="animate-[code-3_15s_infinite] text-yellow-300">
      --Creating a new React Native app in /path/to/your/project/my-app.
    </span>
    <br />
    <span className="animate-[code-3_15s_infinite] text-yellow-300">
      --downloading:.., 
    </span>{" "}
    <span className="animate-[code-4_15s_infinite] text-yellow-300">
      Successfully installed expo.
    </span>
    <br />
    <br />
    <span className="animate-[code-5_15s_infinite] text-red-300">
      expo init my-app
    </span>
    <br />
    <span className="animate-[code-6_15s_infinite] text-yellow-300">
      Downloading project files...,
    </span>{" "}
    <span className="animate-[code-6_15s_infinite] text-yellow-300">
      Extracting project files..., 
    </span>{" "}
    <span className="animate-[code-6_15s_infinite] text-yellow-300">
      --Project Built Successfully
    </span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
