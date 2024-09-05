export const CallToAction = () => {
  return (
    <div className="bg-black">
      <div className="container py-24">
        <div className="flex justify-center">
            <div className="max-w-xl">
              <h2 className="text-center tracking-tighter text-5xl text-white font-bold">Get instant access</h2>
              <p className="text-center pt-[20px] text-xl text-white/70">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-96 flex gap-2">
              <input type="text" className="h-12 px-3 text-[#9CA3AF] rounded-lg bg-zinc-800" placeholder="your@email.com"/>
              <button className='bg-white text-black px-4 py-2 rounded-lg font-medium'>Get started</button>
            </div>
          </div>
        </div>
    </div>
  );
};
