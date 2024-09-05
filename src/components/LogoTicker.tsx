import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black py-[96px]">
      <p className="text-white/60 text-xl text-center">Trusted by the world&rsquo;s most innovative teams</p>
        <div className="py-8 overflow-hidden">
          <div className="flex items-center justify-center gap-16">
            {images.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} className="h-8 flex-none w-auto"/>
            ))}
          </div>
        </div>
    </div>
  );
};
