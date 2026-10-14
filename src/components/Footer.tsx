'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const info = {
    logo: "/images/womenaffairslogo.png",
    ministry: "Ministry of Women Affairs and Social Welfare",
    description: "The Imo State Ministry of Women Affairs and Social Welfare was created by the administration of His Excellency, Distinguished Senator Hope Uzodinma: the Governor of Imo State to facilitate the transformation of Imo State ",
    quickLinks: [
        {
            label: "Projects",
            href: "/projects" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Services",     
            href: "/services"
        },
        {
            label:"Departments",     
            href: "/departments"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    contact: [
        {
            label: "Visit our physical office at",
            href: "/contact-us"
        },
        {
            label: "Block 7, New Owerri Secretariat 460281",
            href: "/contact-us"
        },
    ]
}

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 px-4 sm:px-8 md:px-18">
    <div className="mx-auto flex flex-col lg:flex-row justify-between gap-8 pb-8 max-w-5xl">
      {/* Logo and Description */}
      <AnimatedSection delay={0.1} yOffset={30}>
        <div className="flex-1 flex flex-col gap-3 items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
            </motion.div>
            <motion.span 
              className="font-semibold text-sm text-gray-900 leading-tight"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Imo State Ministry<br />
              of {info.ministry}
            </motion.span>
          </div>
          <motion.p 
            className="text-xs text-gray-600 max-w-xs"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {info.description}
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Quick Links */}
      <AnimatedSection delay={0.3} yOffset={30}>
        <div className="flex-1 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <motion.div 
            className="text-xs text-gray-700 space-y-1 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          >
            {info.contact.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <Link 
                  href={item.href} 
                  className="hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
      <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">
      Copyright © {new Date().getFullYear()} Imo State Ministry of Women Affairs and Social Welfare. All rights reserved. Powered by{' '}
      <a 
        href="http://imodigitalcity.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-green-600 hover:underline"
      >
        Imo Digital City
      </a>
      </div>
    </footer> 
  );
}
