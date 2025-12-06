import Image from "next/image";

const resultsData = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e38295c3e6f1e3138c54_Screenshot_202025-02-05_2-20.png",
    alt: "66,686,722EGP Total Sales on Shopify Dashboard",
    width: 798,
    height: 380,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e382bffd186c00ce0554_Screenshot_202025-02-05_2-21.png",
    alt: "57,594,983EGP Total Sales on Shopify Dashboard",
    width: 803,
    height: 481,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6429d04c17973b3266286236_Screenshot_202023-04-02_2-22.webp",
    alt: "Analytics chart showing growth over time",
    width: 442,
    height: 636,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e382fc252c23b63f0596_Last_20month_20Ad_20mange-23.png",
    alt: "22,727,996EGP Total Gains on Facebook Ads",
    width: 738,
    height: 262,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4de9513f717db00d79aba_Screenshot_202025-02-05_2-24.png",
    alt: "13 Million Total Sales on Shopify Dashboard",
    width: 804,
    height: 669,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a53bedac8859e0356da36b_WhatsApp_20Image_202025-0-25.jpeg",
    alt: "1,749,851EGP Total Sales on Shopify Dashboard",
    width: 410,
    height: 888,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e382bee99efdce8e66fe_Last_20year-26.png",
    alt: "22,727,996EGP Total Gains on Facebook Ads for last year",
    width: 851,
    height: 374,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e382d743266d39bd6fa0_Tiktok_20ad_20manger-27.png",
    alt: "15,849,453EGP Total Gains on Tiktok Ads",
    width: 461,
    height: 351,
  },
];

const ResultsGallery = () => {
  return (
    <section id="Results" className="bg-background py-20 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-5xl font-bold text-foreground text-center mb-12 md:mb-16 leading-tight tracking-[-0.5px]">
          Results in Action
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {resultsData.map((item, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;