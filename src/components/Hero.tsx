import Arrow from '../assets/icons/arrow-w.svg';

export const Hero = () => {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="container">
        <div className="flex items-center justify-center">
          <a href="#" className="border py-1 px-2 rounded-lg border-white/30">
            <span className='gap-2 inline-flex'>
              <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">Version 2.0 is here</span>
              <span className='inline-flex items-center gap-1'>
                <span>Read More</span>
                <Arrow />
              </span>
            </span>
          </a>
        </div>
        <h1 className="text-7xl font-bold text-center pt-8 tracking-tighter sm:text-9xl">One Task<br></br>at a Time</h1>
        <div className="flex items-center justify-center">
          <p className="text-center pt-8 text-xl sm:max-w-md">Celebrate the joy of accomplishment with an app designed to 
            track your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex items-center justify-center pt-8">
          <button className="text-black bg-white p-2 px-4 font-medium rounded-lg">Get Started</button>
        </div>
        {/* <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black">

        </div> */}
      </div>
    </div>
  );
};
