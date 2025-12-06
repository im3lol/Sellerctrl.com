'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  
  const quickLinks = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#sales', label: 'Results' },
  { href: '#Contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' }];



  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          {/* Quick Links - Order 3 on mobile, 1 on desktop */}
          <div className="flex flex-col items-center text-center order-3 md:order-1">
            <button
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-white md:cursor-default w-full justify-center md:pointer-events-none"
              aria-expanded={isQuickLinksOpen}
              aria-controls="quick-links-list"
            >
              <span>Quick Links</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 md:hidden ${
                  isQuickLinksOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul 
              id="quick-links-list"
              className={`space-y-2.5 sm:space-y-3 overflow-hidden transition-all duration-300 ${
                isQuickLinksOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
              }`}
            >
              {quickLinks.map((link) =>
              <li key={link.href}>
                  <Link
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Logo and Badges - Order 1 on mobile, 2 on desktop */}
          <div className="flex flex-col items-center text-center order-1 md:order-2">
            <div className="mb-5 sm:mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1764948972788.png?width=8000&height=8000&resize=contain"
                alt="SellerCtrl Logo"
                width={120}
                height={32}
                className="h-5 sm:h-6 w-auto" />

            </div>
            <p className="text-xs sm:text-sm text-white/70 mb-5 sm:mb-6 max-w-sm px-4">
              Powered by 25+ years of industry experience, we blend category-specific expertise with AI and human collaboration to drive performance, helping Amazon sellers establish, scale and optimize their operations for growth.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-white rounded p-2 flex items-center justify-center !w-[100px] sm:!w-[125px] !h-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/aws1-1764963635527.png?width=8000&height=8000&resize=contain"
                  alt="AWS Partner Network"
                  width={80}
                  height={64}
                  className="object-contain" />

              </div>
              <div className="bg-white rounded p-2 flex items-center justify-center !w-[90px] sm:!w-[114px] !h-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/spn-1764963635516.png?width=8000&height=8000&resize=contain"
                  alt="Amazon SPN Certified Partner"
                  width={96}
                  height={64}
                  className="object-contain !w-full !h-[40px] sm:!h-[45px] !max-w-full" />

              </div>
            </div>
          </div>

          {/* Contact Us - Order 2 on mobile, 3 on desktop */}
          <div className="flex flex-col items-center text-center order-2 md:order-3">
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-white">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/80">+201025246324</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm flex-shrink-0">✉️</span>
                <a
                  href="mailto:info@sellerctrl.com"
                  className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors break-all">

                  info@sellerctrl.com
                </a>
              </div>
            </div>
            
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/sellerctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Facebook">

                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sellerctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="LinkedIn">

                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="X (Twitter)">

                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="YouTube">

                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-5 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-white/60 px-4">
            Copyright © 2025 SellerCtrl.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;