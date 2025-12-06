import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 !w-[90%] sm:!w-[87%] !h-full !max-w-[90%] sm:!max-w-[87%]">
        <div className="grid lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] tracking-[-1px] text-text-dark">
              <span className="relative inline-block">
                Amazon Seller
              </span>{' '}
              Account Management Services
            </h1>
            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-[1.6] max-w-xl mx-auto lg:mx-0">
              Eliminate Amazon Operational Stress with Dependable Seller Central Account Management Services
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 md:gap-x-8 gap-y-4 md:gap-y-6">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/spn-1764962751194.png?width=8000&height=8000&resize=contain"
                alt="Amazon SPN Verified Service Provider"
                className="h-10 sm:h-12 object-contain !w-[110px] sm:!w-[136px] md:!h-full !max-w-[136px]" />

              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/aws1-1764962751185.png?width=8000&height=8000&resize=contain"
                alt="AWS Partner Network"
                className="h-10 sm:h-12 object-contain !w-[130px] sm:!w-[163px] md:!h-14 !max-w-[163px]" />

            </div>
          </div>
          <div className="flex justify-center items-center lg:justify-end row-start-1 lg:row-start-auto !w-full">
            <div className="relative w-full max-w-lg aspect-[6/5] rounded-3xl overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/amz_seller_central_bnr-1764016882218.png?width=8000&height=8000&resize=contain"
                alt="Amazon Seller Central dashboard with shopping bags"
                layout="intrinsic"
                width={900}
                height={600}
                className="object-contain !w-full !h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" />


            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;