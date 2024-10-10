import { FaEnvelope } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Want to see how well I <span className="text-purple">fit</span> into your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Grab a copy of my Resume!
        </p>
        <a href="https://tapscv.tiiny.site/" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Download CV"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Thomas Pham
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
             <Link key={info.id} href={info.link}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
             </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
