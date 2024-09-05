import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000000,#5D2CA8)] py-24">
      <div className="container">
        <div className="justify-center flex">
          <div className="max-w-xl">
            <h2 className="text-center tracking-tighter text-5xl text-white font-bold">Intuitive interface</h2>
            <p className="text-center pt-[20px] text-xl text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
          </div>
        </div>
        <div className="pt-14 flex justify-center">
          <div className="max-w-[992px]">
            <Image src={appScreen} alt="App screen" />
          </div>
        </div>
      </div>
    </div>
  );
};
