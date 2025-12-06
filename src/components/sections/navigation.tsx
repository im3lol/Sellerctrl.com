"use client";

import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="container px-6">
        <div className="bg-navbar-background rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center md:justify-between h-[72px] px-5 relative">
          
          <div className="flex-shrink-0">
            <Link href="#Home">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1764948972788.png?width=8000&height=8000&resize=contain"
                alt="SellerCtrl Logo"
                width={120}
                height={32}
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="#Contact"
              className="btn-text bg-primary text-primary-foreground rounded-full px-[25px] py-3 transition-colors hover:bg-primary/90"
            >
              Start Scaling
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navigation;