"use client"

import React, { useState } from "react";
import MediaSearchBar from "./MediaSearchBar";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const mediaItems = [
  {
    image: "/images/women1.png",
    title: "Girl's Guild Visit",
    isVideo: false,
  },
  {
    image: "/images/women2.png",
    title: "Girls in STEM Initiative Launch",
    isVideo: false,
  },
  {
    image: "/images/wom1.png",
    title: "Gender Equality Advocacy Seminar",
    isVideo: false,
  },
  {
    image: "/images/women4.png",
    title: "Community Health Outreach for Women",
    isVideo: false,
  },
  {
    image: "/images/women3.png",
    title: "International Women's Day Celebration",
    isVideo: false,
  },
 
  {
    image: "/images/depart1.png",
    title: "Entrepreneurship Training for Women",
    isVideo: false,
  },
  {
    image: "/images/depart2.png",
    title: "Press Release: New Gender Policy Announced",
    isVideo: false,
  },
  {
    image: "/images/ini2.png",
    title: "Empowering Rural Women Initiative",
    isVideo: false,
  },
];


export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Media"
        subtitle="Explore our gallery"
        backgroundImage="/images/gradient.png"
        // searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
      <CTASection
        heading="Join Us in Empowering Women and Promoting Social Justice"
        subtext="Be part of our mission to create an inclusive, equitable, and supportive Imo State for all women, children, and vulnerable groups."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
