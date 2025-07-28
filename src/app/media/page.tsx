"use client"

import React, { useState } from "react";
import MediaSearchBar from "./MediaSearchBar";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const mediaItems = [
  {
    image: "/images/women1.jpg",
    title: "Women's Empowerment Workshop - Imo State",
    isVideo: false,
  },
  {
    image: "/images/women7.jpg",
    title: "Girls in STEM Initiative Launch",
    isVideo: false,
  },
  {
    image: "/images/women3.jpg",
    title: "Gender Equality Advocacy Seminar",
    isVideo: true,
  },
  {
    image: "/images/women4.jpg",
    title: "Community Health Outreach for Women",
    isVideo: false,
  },
  {
    image: "/images/women5.jpg",
    title: "International Women's Day Celebration",
    isVideo: true,
  },
  {
    image: "/images/women6.jpg",
    title: "Women in Leadership Forum",
    isVideo: false,
  },
  {
    image: "/images/women7.jpg",
    title: "Entrepreneurship Training for Women",
    isVideo: false,
  },
  {
    image: "/images/women8.jpg",
    title: "Press Release: New Gender Policy Announced",
    isVideo: false,
  },
  {
    image: "/images/women9.jpg",
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
        subtitle="Explore our gallery of photos, videos, and press releases showcasing our commitment to empowering women and girls"
        backgroundImage="/images/gradient.png"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
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
