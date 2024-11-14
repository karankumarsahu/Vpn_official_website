import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <>
     <div className="w-full h-[50vh] px-36 pt-20 mb-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-14" />
            <h1 className="text-2xl font-montserrat font-medium">SecureQ VPN</h1>
            </div>
            <p className="font-montserrat text-[#372580]">5th Floor, Plot No, YS Viveka Enclave, 21-23, Khajaguda - Nanakramguda Rd, Hyderabad, Telangana 500075</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-montserrat font-medium">Product</h1>
            <p className="font-montserrat text-[#372580]">Features</p>
            <p className="font-montserrat text-[#372580]">Pricing</p>
            <p className="font-montserrat text-[#372580]">Download</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-montserrat font-medium">Platforms</h1>
            <p className="font-montserrat text-[#372580]">Windows</p>
            <p className="font-montserrat text-[#372580]">Mac</p>
            <p className="font-montserrat text-[#372580]">Linux</p>
            <p className="font-montserrat text-[#372580]">Android</p>
            <p className="font-montserrat text-[#372580]">iOS</p>
            <p className="font-montserrat text-[#372580]">Browser Extension</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-montserrat font-medium">Company</h1>
            <p className="font-montserrat text-[#372580]">About</p>
            <p className="font-montserrat text-[#372580]">Blog</p>
            <p className="font-montserrat text-[#372580]">Careers</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-montserrat font-medium">Support</h1>
            <p className="font-montserrat text-[#372580]">Help Center</p>
            <p className="font-montserrat text-[#372580]">Privacy Policy</p>
            <p className="font-montserrat text-[#372580]">Terms of Service</p>
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <p className="font-montserrat text-[#372580] text-center">Copyright © 2023 SecureQ VPN</p>
        </div>   
    </>
  )
}

export default Footer