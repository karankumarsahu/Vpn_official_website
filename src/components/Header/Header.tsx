import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  
  const [scrollNumber, setscrollNumber] = useState<number>(0)
  
  const navLinks = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "Download", link: "/download" },
    { name: "Support", link: "/support" },
    { name: "Blog", link: "/blog" },
  ];

  const handleScroll = () => {
    const scroll = window.scrollY;
    setscrollNumber(scroll)
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <>
      {/* Main Container */}
      <div className={`w-full h-20 bg-[#F7F5FF] px-10 ${scrollNumber >= 100 ? "fixed top-0 z-50 bg-white shadow-lg" : ""}`}>
        <div className="flex justify-between items-center h-full px-5">
          <div className="h-full flex items-center justify-normal gap-16">
            {/* Logo and Name */}
            <div className="flex items-center justify-center h-full cursor-pointer">
              <Link to='/' className="flex items-center">
              <img src={logo} alt="logo" className="w-12 h-12" />
              <h1 className="text-xl font-bold ml-2 font-montserrat">
                SecureQ VPN
              </h1>
              </Link>
            </div>

            {/* Navigation links */}
            <div>
              <ul className="flex items-center justify-center gap-4">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="inline-block mx-2 hover:text-[#636AE8] font-medium"
                  >
                    <a href={link.link} className=" font-poppins">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="flex items-center gap-8">
            <button className=" font-medium font-poppins hover:text-[#636AE8]">Sign Up</button>
            <button  className="bg-[#636AE8] py-2 px-4 text-white rounded-2xl font-medium border-2 hover:border-[#636AE8] hover:bg-transparent hover:text-[#636AE8] duration-100">Create an Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
