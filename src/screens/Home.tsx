import shield from "../assets/svg/shield.svg";
import lock from "../assets/svg/lock.svg";
import send from "../assets/svg/send.svg";
import logo from "../assets/logo.png"

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyUseVPN />
      <Section3 />
      <MultiPlatformSupport />
      <Section4 />
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative bg-[#F7F5FF]">
        <div className="z-10 w-full h-full flex flex-col items-center mt-24">
          <h1 className="text-5xl font-bold font-montserrat text-[#372580]">
            Powerful VPN Built for the Future
          </h1>
          <p className="text-xl font-poppins text-[#372580] mt-4 w-full text-center">
            Quantum encryption for the highest level of protection.
          </p>
          <button className="bg-[#636AE8] text-white mt-8 px-8 py-3 rounded-full text-xl font-poppins font-semibold border-2 border-[#636AE8] hover:bg-transparent hover:text-[#636AE8] duration-100">
            Get SecureQ VPN
          </button>
        </div>
        <img
          src="https://images.prismic.io/gatsby-landing-pages/ZwUtSoF3NbkBXArs_VPNHome_TestHero-Desktop_v2-x3-.png?auto=compress%2Cformat&fit=max&w=1505&h=690"
          alt="hero"
          className="absolute top-64 left-35 w-[70%] h-[70%]"
        />
      </div>
    </>
  );
};

const WhyUseVPN = () => {
  const cards = [
    {
      title: "Secure your internet connection",
      description:
        "Our secure VPN sends your internet traffic through an encrypted VPN tunnel to keep your browsing data safe, even over public or untrusted internet connections.",
      image: shield,
    },
    {
      title: "Keep your data private",
      description:
        "As a Swiss VPN provider, we do not log user activity or share data with third parties. Our anonymous VPN service keeps your browsing history private and enables an internet without surveillance.",
      image: lock,
    },
    {
      title: "Access to all the internet",
      description:
        "We created SecureQ VPN to provide a secure and anonymous internet connection for everyone. We have integrated the world's most advanced encryption technology to ensure your privacy and security.",
      image: send,
    },
  ];

  return (
    <>
      <div className="w-full h-auto px-20">
        <div className="w-full h-full flex flex-col items-center mt-24">
          <h1 className="text-4xl font-semibold font-montserrat text-[#372580]">
            Why Use VPN
          </h1>
          <div className="grid grid-cols-3 gap-12">
            {cards.map((card, index) => (
              <div key={index} className="w-full h-auto flex  mt-12">
                <div className="w-full h-full flex flex-col item ">
                  <div className="w flex items-center gap-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-10 h-10"
                    />
                    <h1 className="text-xl font-semibold font-montserrat text-[#372580] mt-4">
                      {card.title}
                    </h1>
                  </div>
                  <p className="text-base font-poppins text-[#372580] mt-4 w-full text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="w-full h-auto px-20 mt-36">
        <div className="w-full h-full flex flex-col items-center mt-24">
          <h1 className="text-4xl font-semibold font-montserrat text-[#372580]">
            Internet security for everyone
          </h1>
          <p className="text-lg w-1/2 font-poppins text-[#372580] mt-4 text-center">
            Our goal is to make online privacy accessible to all. We have
            focused on making the advanced security technology in SecureQ VPN
            easy to use and freely available.
          </p>
          <button className="bg-[#636AE8] text-white mt-8 px-6 py-2 rounded-full text-lg font-poppins font-semibold border-2 border-[#636AE8] hover:bg-transparent hover:text-[#636AE8] duration-100">
            Get SecureQ VPN
          </button>
        </div>
      </div>
    </>
  );
};

const MultiPlatformSupport = () => {
  return (
    <>
      <div className="w-full h-auto px-20 mt-36">
        <div className="w-full h-full flex items-center justify-center">
          {/* Left Side */}
          <div className="w-1/2 h-full">
            <img
              src="https://images.prismic.io/gatsby-landing-pages/ZuGt0RoQrfVKl-qJ_multi-platform-support-desktop-media.png?auto=compress%2Cformat&fit=max&w=1000&h=671"
              alt="multi platform support"
            />
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full flex flex-col  pl-20">
            <div className="w-full h-full flex flex-col pr-52 justify-center">
              <h1 className="text-4xl font-semibold font-montserrat text-[#372580]">
                Multi-platform support
              </h1>
              <p className="text-lg font-poppins text-[#372580] mt-4">
                SecureQ VPN is available on all your devices, including PCs,
                Macs, smartphones.
              </p>
              <p className="text-lg font-poppins text-[#372580] mt-4">
                A secure internet connection you can trust is essential to
                maintaining your privacy on your laptop at home, your mobile
                device on the road, or your workstation at the office.
              </p>
              <p className="text-lg font-poppins text-[#372580] mt-4">
                SecureQ VPN has native apps for Windows, macOS, Linux, Android
                and iOS/iPadOS.
              </p>
              <p className="text-lg font-poppins text-[#4A2DC5] mt-4 font-medium cursor-pointer hover:underline w-60">
                Download SecureQ VPN {">"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section4 = () => {
  
  const features = [
    {
      title: "Split Tunneling",
      description:
        "Use split tunneling on Windows and Android to route some apps or IP addresses through the VPN tunnel while excluding others.",
      image: "https://images.prismic.io/gatsby-landing-pages/c006a63a-bc13-4c78-8224-11d89d743bfe_split-tunneling.png?auto=compress%2Cformat&fit=max&w=439&h=294",
    },
    {
      title: "Wireguard",
      description:
        "A cutting-edge VPN protocol that is both fast and secure. Uses state-of-the art cryptographic primitives such as ChaCha20, and Diffie-Hellman elliptic curves.",
      image: "https://images.prismic.io/gatsby-landing-pages/ab868696-285e-449d-9e55-1b9aad9bcf05_wireguard.png?auto=compress%2Cformat&fit=max&w=439&h=294",
    },
    {
      title: "Mask your IP",
      description:
        "Proton VPN hides your real IP address, preventing the easiest and most accurate way for websites to track you online.",
      image: "https://images.prismic.io/gatsby-landing-pages/6886b930-04aa-4cf8-b341-43c527858985_mask-your-ip.png?auto=compress%2Cformat&fit=max&w=439&h=294",
    },
    {
      title: "Encryption",
      description:
      "Our VPN protocols use proven open source encryption standards such as AES-256 and ChaCha20 at their strongest settings.",
      image:"https://images.prismic.io/gatsby-landing-pages/aaec73f8-e314-4fa8-9c41-d910323205bb_encryption.png?auto=compress%2Cformat&fit=max&w=439&h=294"
    },
    {
      title: "Two-factor authentication",
      description:
      "Secure your Proton Account. Defeat hackers by proving your identity with two-factor authentication.",
      image: "https://images.prismic.io/gatsby-landing-pages/65bf5058-addd-4671-87a9-f914afcfa028_2-factor-authentication.png?auto=compress%2Cformat&fit=max&w=439&h=294"
    },
    {
      title: "Kill switch",
      description: 
      "A kill switch in all our apps ensures your IP address is never exposed if the VPN connection is interrupted.",
      image: "https://images.prismic.io/gatsby-landing-pages/e0bd8069-ffd0-48ff-b654-c126c79c0fe6_kill-switch-and-always-on-vpn.png?auto=compress%2Cformat&fit=max&w=439&h=294"
    }

    ]
  
  
  return (
    <>
      <div className="w-full h-auto bg-[#FCFBFF] mt-24 px-20 pb-20">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-3xl font-medium font-montserrat text-[#372580] mt-24">
            Unique features for a more secure VPN
          </h1>
          <p className="text-lg font-poppins text-[#372580] mt-4 w-1/2 text-center">
            Unlike other VPN services, Proton VPN is designed with security as
            the main focus, drawing upon the lessons we have learned from
            working with journalists and activists in the field.
          </p>
          <button className="bg-[#636AE8] text-white mt-8 px-6 py-2 rounded-full text-lg font-poppins font-semibold border-2 border-[#636AE8] hover:bg-transparent hover:text-[#636AE8] duration-100">
            Get SecureQ VPN
          </button>
        </div>

        {/* Features */}
        <div className="w-full h-full flex flex-col items-center mt-24 px-20">
        <div className="w-full grid grid-cols-3 gap-12">
          {
            features.map((feature, index) => (
              <div key={index} className="w-full h-full flex flex-col bg-white p-8 rounded-3xl shadow-xl">
            <img src={feature.image} alt={feature.title} />
            <h1 className="text-2xl font-semibold font-montserrat text-[#372580] mt-4">
              {feature.title}
            </h1>
              <div className=" font-poppins text-[#372580] mt-4">
              {feature.description}
                <br />
                <div className="text-[#4A2DC5] mt-4 font-medium cursor-pointer hover:underline w-60">
                  Learn more {">"}
                </div>
              </div>
          </div>
            ))
          }
        </div>
        </div>

          <div className="w-full h-[30rem] mt-20 px-20 overflow-hidden">
          <div className="w-full h-full bg-[#1B1340] rounded-2xl pl-20 flex justify-center items-center">
          {/* Left side */}
          <div className="w-[40%] h-full">
            <img src={logo} alt="logo" className="w-14 mt-24" />
          <h1 className="text-3xl font-medium font-montserrat text-white mt-5">SecureQ VPN is built with privacy in mind and is completely free.</h1>
          <button  className="bg-[#636AE8] py-2 px-4 text-white rounded-2xl font-medium border-2 border-[#636AE8] hover:bg-transparent duration-100 mt-5">Create an Account</button>
          <div className="flex gap-4 mt-10 w-full">
            <img src="https://res.cloudinary.com/dbulfrlrz/image/upload/static/store-badges/google-play-store_en.svg" alt="play store" className="w-36 cursor-pointer"/>
            <img src="https://res.cloudinary.com/dbulfrlrz/image/upload/static/store-badges/apple-app-store_en.svg" alt="apple atore" className="w-32 cursor-pointer" />
          </div>
          </div>
          {/* Right side */}
          <div className="w-[60%] h-full">
            <img src="https://images.prismic.io/gatsby-landing-pages/a35a5415-902d-47f7-b3a3-b864c19cfb03_cta-product.png?auto=compress%2Cformat&fit=max&w=1505&h=1146" alt="app" />
          
          </div>
          </div>
          </div>
        
      </div>
    </>
  );
};

export default Home;
