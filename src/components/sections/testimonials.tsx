"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3197dff0-3006-45e7-bb9f-e4086f828b12-flagpoleagency-com/assets/images/67a4e0bf5d827c58e6802705_New_20Project-30.png",
    imageAlt: "Farah Emara Portrait",
    quote: "For the past three years, we've worked with SellerCtrl, and it's been a great experience. With their help, NESAA has grown exponentially in the past few years. Ali and Omar have been amazing—always there to guide and support us.If you're looking to grow your E-commerce business, I highly recommend w...",
    author: "Farah Emara",
    title: "Founder of NESAA",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6425dce11f4e0d158c04359e/64286629b9ddc8021a27456a_Mostafa%20Magdy.webp",
    imageAlt: "Mostafa Magdy Portrait",
    quote: "Huge shout out to Omar & Ali at SellerCtrl. We've come leaps and bounds over a year. We can count on Omar and Ali to be consistent and we are excited to do business with them for years to come.",
    author: "Mostafa Magdy",
    title: "Founder of Palma",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6425dce11f4e0d158c04359e/6428662a271573f34d9e8d93_Seif%20Alasiouty.webp",
    imageAlt: "Saif Alassiouty Portrait",
    quote: "Omar & Ali were amazing from day one. They did a full design of our website and made it super effortless - and captured the spirit of our brand - without a ton of leg work on our end. They did all this with a turnaround of 2 weeks! So impressive. I Have already recommended SellerCtrl to others and wou...",
    author: "Saif Alassiouty",
    title: "Founder of Tempo",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6425dce11f4e0d158c04359e/64286fc4a53a591ebbb928c7_Ahmed%20Elshenawy.webp",
    imageAlt: "Ahmed Elshenawy Portrait",
    quote: "SellerCtrl has helped us reach out KPIs more than twice as fast as any other agency promised. Ali & Omar are awesome! They are incredibly knowledgeable and their communication is top-notch. If anybody is looking for a Digital Marketing agency, SellerCtrl should be your only choice!",
    author: "Ahmed Elshenawy",
    title: "Founder of Artsy Silver",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6425dce11f4e0d158c04359e/64286629d683c41f248b8a88_Hisham%20Al-Sayed.webp",
    imageAlt: "Hisham Al-Sayed Portrait",
    quote: "For the last few years, we've always struggled to consistently earn sales on Facebook. We've worked with other agencies and nobody was ever able to crack the code. Omar & Ali at SellerCtrl has been able to help us see consistent and scalable results.",
    author: "Hisham Al-Sayed",
    title: "Founder of Wasilah",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section id="Testimonials" className="bg-background py-20 lg:py-24">
      <div className="container max-w-[1080px]">
        <h2 className="text-center text-5xl font-bold text-text-dark mb-16">
          Success Stories
        </h2>
        <div className="relative">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              loop: true,
              align: "start",
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-5">
                  <Card className="h-full rounded-3xl border-none shadow-[0_4px_16px_rgba(0,0,0,0.08)] bg-card">
                    <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 sm:p-12 text-center md:text-left h-full">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.imageAlt}
                        width={128}
                        height={128}
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0 mt-4 md:mt-0"
                      />
                      <div className="flex-grow">
                        <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <footer>
                          <p className="font-semibold text-text-dark text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {testimonial.title}
                          </p>
                        </footer>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
           <button
              onClick={() => api?.scrollPrev()}
              aria-label="Previous slide"
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 rounded-full bg-transparent text-foreground/30 hover:text-foreground/70 transition-colors hidden lg:flex items-center justify-center h-12 w-12"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Next slide"
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 rounded-full bg-transparent text-foreground/30 hover:text-foreground/70 transition-colors hidden lg:flex items-center justify-center h-12 w-12"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </Carousel>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                current === index ? "bg-foreground" : "bg-border hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}