import CubeImage from "../assets/icons/cube.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-24 container max-w-5xl">
        <div className="flex justify-center">
          <div className="max-w-[576px]">
            <h2 className="text-center tracking-tighter text-5xl font-bold">Everything you need</h2>
            <p className="text-center pt-[20px] text-xl text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
          </div>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-24">
              {features.map((feature, index) => (
                <div key={index} className="border border-white/30 rounded-lg py-[40px] px-[20px]">
                  <div className="flex justify-center">
                    <CubeImage className=""/>
                  </div>
                  <h3 className="text-md font-semibold text-center pt-4">{feature.title}</h3>
                  <p className="pt-4 text-white/70 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};
