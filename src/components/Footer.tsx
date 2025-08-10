'use client'

import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";

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
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "Block 7, New Owerri Secretariat 460281",
            href: "/"
        },
        {
            label: "+2348037327105",
            href: "tel:+2348037327105"
        },  
         {
             label: "info.imoministryofwomenaffairs@gmail.com",
             href: "mailto:info.imoministryofwomenaffairs@gmail.com"
         },
    ]
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string): boolean => {

    // Basic email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (validateEmail(email)) {
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You’ve successfully joined our newsletter.",
        confirmButtonColor: "green"
      });
      setEmail("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#dc2626"
      });
    }
  };

  return (
    <footer className="w-full bg-white pt-10 px-4 sm:px-8 md:px-18">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-8 pb-8 max-w-5xl">
        {/* Logo and Description */}
        <div className="flex-1 flex flex-col gap-3 items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
            <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
            <span className="font-semibold text-sm text-gray-900 leading-tight">
              Imo State Ministry<br />
              of {info.ministry}
            </span>
          </div>
          <p className="text-xs text-gray-600 max-w-xs">{info.description}</p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
          <div className="flex flex-wrap flex-col sm:flex-row lg:flex-col gap-x-4 gap-y-2 text-sm text-gray-700 items-center lg:items-start justify-center lg:justify-start">
            {info.quickLinks.map((link) => (
              <a href={link.href} className="hover:underline" key={link.label}>{link.label}</a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h4 className="font-semibold text-gray-900 mb-3">{info.newsletter[0].label}</h4>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full mb-3 gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Myemail@gmail.com"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium w-full sm:w-auto"
            >
              {info.newsletter[1].label}
            </button>
          </form>
          <div className="text-xs text-gray-700 space-y-1 flex flex-col items-center lg:items-start">
            {info.contact.map((item) => (
              <Link href={item.href} key={item.label}>{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">
        Powered by Imo Digital City
      </div>
    </footer>
  );
}
