"use client"
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,#5D2CA8,#000000)]">
      <div className="container py-24">
        <div className="flex justify-center">
          <h2 className="text-center tracking-tighter text-5xl text-white font-bold max-w-2xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {items.map((item, index) => (
              <div key={index} className="pt-12">
                <div className="flex justify-between">
                  <h3 className="text-white text-xl font-medium">
                    {item.question}
                  </h3>
                  <button
                    className="text-white text-3xl"
                    onClick={() => handleClick(index)}
                  >
                    {openIndex === index ? "-" : "+"}
                  </button>
                </div>
                {openIndex === index && (
                  <p className="pt-4 text-white/70 transition">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
