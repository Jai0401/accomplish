import { div } from "framer-motion/client";
import Insta from "../assets/icons/insta.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import X from "../assets/icons/x.svg";
import Tiktok from "../assets/icons/tiktok.svg";

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container grid grid-cols-8 py-5">
        <p className="text-white/70 sm:col-span-7 col-span-8">
        © 2024 Jaimin Godhani All rights reserved
        </p>
        <div className="text-white/60 flex gap-1">
          <a href="https://www.facebook.com/">
            <X />
          </a>
          <a href="https://www.instagram.com/">
            <Insta />
          </a>
          <a href="https://www.linkedin.com/">
            <Linkedin />
          </a>
          <a href="https://www.tiktok.com/">
            <Tiktok />
          </a>
        </div>
      </div>
    </div>
  );
};
