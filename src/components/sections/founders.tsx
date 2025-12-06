import Image from 'next/image';

const Founders = () => {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-text-dark mb-16 tracking-[-0.5px]">
          Meet the Founders: Ali & Omar
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Column */}
          <div className="max-w-lg mx-auto lg:mx-0 lg:justify-self-end">
             <p className="text-foreground/90 text-xl leading-relaxed text-center lg:text-left">
               Omar and Ali, two brothers and business partners, founded SellerCtrl three years ago. With over six years of combined experience in e-commerce and paid advertising, they envisioned helping brands unlock their full potential and achieve greater success.
             </p>
          </div>
          
          {/* Image Column */}
          <div className="flex justify-center lg:justify-start items-center gap-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e6279a0b288a324e9789_WhatsApp_20Image_202025-0-28.jpeg"
              alt="Ali Hesham Portrait"
              width={237}
              height={316} 
              className="rounded-[24px] object-cover shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e6276dc2480514077c53_WhatsApp_20Image_202025-0-29.jpeg"
              alt="Omar Hesham Portrait"
              width={214}
              height={285}
              className="rounded-[24px] object-cover shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;