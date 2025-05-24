// icons
import { IoMailOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full p-8 relative">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:flex md:justify-between">
        {/* Portfolio Section */}
        <div className="space-y-4 font-inter">
          <h2 className="font-nasa text-4xl font-bold">PINAC</h2>
          <p className="text-gray-400">
            Thank you for visiting our website. We are a team of developers
            <br />
            passionate about creating innovative solutions for our users. Our
            <br />
            mission is to provide you with the best possible experience while
            <br /> you use our services.
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            Keep Rising 🚀.
            <br />
            Connect with us over GitHub!
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Info</h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-400">
              <IoMailOutline className="w-5 h-5" />
              office@pinacai.com
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <FiMapPin className="w-5 h-5" />
              Bhubaneswar, India
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-[#0066C8] p-2 rounded-full">
                <BiWorld className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-black p-2 rounded-full border border-zinc-700">
                <IoLogoGithub className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full">
                <IoMailOutline className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-gray-300">© 2014 PINAC AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
