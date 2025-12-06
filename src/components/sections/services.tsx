'use client';

import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Amazon Product Listing",
    description: "Complete creation and management of product listings including titles, descriptions, images, and bulk uploads while ensuring Amazon policy compliance."
  },
  {
    title: "Inventory & Catalog Management",
    description: "Monitor stock levels, manage FBA replenishments, and optimize inventory health to prevent stockouts and avoid storage fees."
  },
  {
    title: "Product Photo Editing & 3D Modeling",
    description: "Professional photo editing, background removal, and 3D product renders to meet Amazon's standards and enhance product presentation."
  },
  {
    title: "Listing & Account Troubleshooting",
    description: "Handle suspended accounts and ASIN reinstatement through comprehensive Plan of Action documents and appeal submissions to Amazon."
  },
  {
    title: "Customer Support Services",
    description: "Manage all customer inquiries, order issues, and returns through Amazon's messaging system while maintaining excellent seller metrics."
  },
  {
    title: "Amazon Account Health Monitoring",
    description: "Continuous tracking of performance metrics and policy compliance to prevent account issues before they escalate."
  },
  {
    title: "Amazon PPC Management",
    description: "Create and optimize Sponsored Products, Brands, and Display campaigns with strategic targeting and bid management for maximum ROI."
  },
  {
    title: "Amazon SEO & Listing Optimization",
    description: "Keyword research and content optimization for titles, bullet points, and A+ Content to improve organic search rankings."
  },
  {
    title: "Amazon Reimbursement Services",
    description: "Identify and recover funds from FBA errors, lost inventory, and incorrect fee charges through comprehensive account audits and claims filing."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#1A1A1A] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container">
        {/* Header with Amazon Logo */}
        <div className="flex items-start gap-4 sm:gap-6 mb-10 md:mb-12 lg:mb-16">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/amazon-1765029720728.png?width=8000&height=8000&resize=contain" 
                alt="Amazon" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your Partner for End-to-End <span className="text-[#FF9900]">Amazon</span> Seller Central<br className="hidden sm:block" />Account Management Services
          </h2>
        </div>

        {/* Services Grid with Dev Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[#FF9900] hover:shadow-[0_0_30px_rgba(255,153,0,0.3)] animate-in fade-in slide-in-from-bottom-8"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/0 to-[#FF9900]/0 group-hover:from-[#FF9900]/5 group-hover:to-[#FF9900]/0 rounded-2xl transition-all duration-500 pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-[#FF9900] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF9900]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;