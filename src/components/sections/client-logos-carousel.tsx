import Image from 'next/image';

const clients = [
  {
    name: 'Snuggs',
    href: 'https://www.instagram.com/snuggsegypt/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cfbde7a765c47d3900_snugl-10.webp',
    alt: 'Snuggs logo',
    width: 106,
    height: 50,
  },
  {
    name: 'Trindiva',
    href: 'https://www.instagram.com/trindivaworld/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4d9b7107e4e9a4b709205_trindiva-11.png',
    alt: 'Trindiva Logo',
    width: 181,
    height: 50,
  },
  {
    name: 'Artsy Silver',
    href: 'https://www.instagram.com/artsysilver.co/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cf5c4c4c080239f609_Artsy_20Silver-12.webp',
    alt: 'Artsy Silver jewelry logo',
    width: 139,
    height: 50,
  },
  {
    name: 'Kijaqo',
    href: 'https://www.instagram.com/kijaqo/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cf6c28f43413dd2b9d_Kajaqo-13.webp',
    alt: 'Kijaqo logo',
    width: 153,
    height: 50,
  },
  {
    name: 'Nesaa',
    href: 'https://www.instagram.com/nesaaonline',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cff9d51a1a9b7aea3b_Nesaa-14.webp',
    alt: 'Nesaa logo',
    width: 156,
    height: 50,
  },
  {
    name: 'Bazic',
    href: 'https://www.instagram.com/bazic.eg/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cff5406647f156f072_Bazic-15.webp',
    alt: 'Bazic logo',
    width: 135,
    height: 50,
  },
  {
    name: 'Echarpista',
    href: 'https://www.instagram.com/echarpista',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4d9b71260ebe7470eebf8_echarpista-16.png',
    alt: 'Echarpista logo',
    width: 178,
    height: 50,
  },
  {
    name: 'Elements',
    href: 'https://www.instagram.com/thelemnts.co/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4d9b7d5c4345389b0bac2_elements_20logo-17.png',
    alt: 'Elements Logo',
    width: 197,
    height: 50,
  },
  {
    name: 'Decked Out',
    href: 'https://www.instagram.com/_deckedout/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4d9b7472ba6909403ca1c_decked_20out-18.png',
    alt: 'Decked Out logo',
    width: 160,
    height: 50,
  },
  {
    name: 'Wasilah',
    href: 'https://www.instagram.com/wasilaah.eg/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/6427a7cef9d51af0537aea2d_wasila-19.webp',
    alt: 'Wasilah logo',
    width: 157,
    height: 50,
  },
];

const LogosList = () => (
  <div className="flex flex-shrink-0 items-center">
    {clients.map((client, index) => (
      <a
        key={index}
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 mx-8 md:mx-12"
        aria-label={`Visit ${client.name}`}
      >
        <Image
          src={client.src}
          alt={client.alt}
          width={client.width}
          height={client.height}
          className="max-h-[50px] w-auto object-contain filter grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
        />
      </a>
    ))}
  </div>
);


const ClientLogosCarousel = () => {
  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 60s linear infinite;
          }
        `}
      </style>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto">
          <div className="group overflow-hidden">
            <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused]">
              <LogosList />
              <LogosList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientLogosCarousel;