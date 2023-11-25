import { FaLinkedin } from "react-icons/fa";
import { FaGithub,FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black-100 shrink-0 py-5 text-white relative bottom-0 w-full max-w-[1200px] mx-auto px-5 rounded-t-2xl">

      <ul className="flex justify-center gap-[15px] mb-[15px] md:my-2 md:gap-12 font-semibold">
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#FE2106] cursor-pointer">
          <a
            href="https://www.linkedin.com/in/thesourabh/"
            target="_blank"
          >
            <FaLinkedin className="w-[20px] h-[20px]" />
          </a>
        </li>
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#FE2106] cursor-pointer">
          <a
            href="https://github.com/srb1998/"
            target="_blank"
          >
            <FaGithub className="w-[20px] h-[20px]"/>
          </a>
        </li>
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#FE2106] cursor-pointer">
          <a
            href="https://twitter.com/soug9999"
            target="_blank"
          >
            <FaXTwitter className="w-[20px] h-[20px]"/>
          </a>
        </li>
      </ul>
      <div className="flex md:text-[15px] text-xs text-md justify-center opacity-80 font-semibold mt-[30px] md:mt-8 md:gap-4">
        © 2023 Sourabh. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer