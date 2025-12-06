"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
{
  number: "01",
  question: "Do you assist with setting up a new Amazon Seller Central account?",
  answer: "Yes, we help new sellers with the complete setup of their Amazon Seller Central account. From creating your account to optimizing your first product listings, we guide you through every step to ensure a smooth and successful launch on Amazon."
},
{
  number: "02",
  question: "Can you help me manage Amazon Seller Central during peak seasons?",
  answer: "Yes, we specialize in scaling your operations during seasonal peaks. Whether it's increasing inventory levels, optimizing listings for seasonal demand, or adjusting PPC strategies, we ensure your business is prepared to handle the increased traffic and sales volume with our dependable Amazon Seller Central management services."
},
{
  number: "03",
  question: "Can you help me expand internationally through Amazon Seller Central?",
  answer: "Yes, as a leading Amazon seller management agency, we help expand your business to Amazon's international marketplaces by setting up localized listings, managing international inventory, and navigating global selling rules. We help ensure your expansion is smooth and successful, maximizing your reach in foreign markets."
},
{
  number: "04",
  question: "Will I retain control over my Seller Central account?",
  answer: "Absolutely. You maintain full ownership and control of your Seller Central account. We work as authorized users with the specific permissions needed to manage your account effectively while keeping you informed of all activities."
},
{
  number: "05",
  question: "How do you communicate progress and results?",
  answer: "As a part of our Amazon seller management services, each client has a dedicated project manager who provides weekly strategy calls, monthly performance reports, and real-time updates on account activities. You'll have direct access to your team and transparent reporting on all metrics."
},
{
  number: "06",
  question: "What are the benefits of outsourcing Amazon Seller Central management services to your agency?",
  answer: "When you outsource Amazon Seller Central management services to our agency, you gain access to specialized expertise without the overhead of hiring and training in-house teams. Our dedicated specialists handle complex operations like PPC optimization, compliance monitoring, and listing management while you focus on core business activities. You'll benefit from reduced operational costs, faster implementation of best practices, and 24/7 account monitoring."
}];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F5F3EE] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] text-center lg:text-left !w-[99.9%] !h-full px-2">
            <span className="relative inline-block">
              Frequently Asked Questions
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path
                  d="M2 6C60 2 120 2 180 4C240 6 280 6 298 6"
                  stroke="#FF9500"
                  strokeWidth="3"
                  strokeLinecap="round" />

              </svg>
            </span>
            : Amazon Seller Account Management
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((faq, index) =>
          <div
            key={index}
            className="bg-white rounded-xl sm:rounded-2xl border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:shadow-lg">

              <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 text-left transition-colors">

                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#858585] flex-shrink-0">
                  {faq.number}
                </span>
                <span className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#1A1A1A] pr-2 sm:pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#FF9500] flex items-center justify-center transition-transform duration-300">
                  {openIndex === index ?
                <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9500]" /> :

                <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9500]" />
                }
                </div>
              </button>
              
              <div
              className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`
              }>

                <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pl-[60px] sm:pl-[72px] md:pl-[88px] lg:pl-[112px]">
                  <p className="text-[#2D2D2D] leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FAQ;