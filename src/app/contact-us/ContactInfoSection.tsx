import React from "react";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const contactInfo = {
  address: "Block 7, New Owerri Secretariat 460281",
  socials: [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/imostatemwa" },
    { icon: <FaTwitter />, href: "https://x.com/imostatemwa" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/imostatemwa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  
  ],
};

const ContactInfoSection = () => (
  <div className="mb-8 md:mb-0">
    <p className="mb-4 text-gray-700 text-base max-w-xl">Have questions, proposals, or feedback? We are here to support. </p>
    <h2 className="text-xl font-bold mb-2">Visit our physical office at</h2>
    <ul className="space-y-2 mb-4">
      <li className="flex items-start gap-2 text-gray-800"><FaMapMarkerAlt className="mt-1" /> <span>{contactInfo.address}</span></li>
    </ul>
    <div className="flex gap-4 mt-2">
      {contactInfo.socials.map((s, i) => (
        <a key={i} href={s.href} className="text-gray-700 hover:text-green-700 text-xl" target="_blank" rel="noopener noreferrer">{s.icon}</a>
      ))}
    </div>
  </div>
);

export default ContactInfoSection; 
