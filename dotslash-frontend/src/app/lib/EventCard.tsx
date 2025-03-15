"use client";

import React from "react";
import Image from "next/image";
import image1 from "../assets/Committee Call.png";
import { Unbounded, Noto_Sans } from "next/font/google";
import HoverButton from "../components/HoverButton";
import { PortableText } from "@portabletext/react";

const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });

// Define interface based on eventType schema
export interface EventData {
  _id: string;
  title: string;
  description: any; // Can be PortableText array or string
  date: string;
  poster?: {
    asset: {
      url: string;
    };
  };
  posterUrl?: string; // For already processed URLs
  link?: string;
  featured: boolean;
  large: boolean;
  isSanityData?: boolean;
}

interface EventCardProps {
  event: EventData;
  layout: "large" | "small";
}

const EventCard: React.FC<EventCardProps> = ({ event, layout }) => {
  // Get poster URL from various possible structures
  const posterUrl = event.posterUrl || event.poster?.asset?.url || "";

  // Check if description is in PortableText format
  const isPortableText = event.isSanityData && Array.isArray(event.description);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);

      // Format day
      const day = date.getDate();

      // Format month
      const month = date.toLocaleString("en-US", { month: "long" });

      // Format year
      const year = date.getFullYear();

      return { day, month, year };
    } catch (error) {
      console.error("Date formatting error:", error);
      return { day: "27", month: "March", year: "2025" }; // Default fallback
    }
  };

  const { day, month, year } = formatDate(event.date);

  // Large card layout (positions 0 and 3)
  if (layout === "large") {
    return (
      <div
        className={`w-full md:w-[800px] h-auto md:h-[380px] bg-black border ${event.featured ? "border-[#D1A83A]" : "border-gray-500"} rounded-md p-4 md:pt-5 md:pl-4 flex flex-col md:flex-row relative`}
      >
        {/* Featured tag */}
        {event.featured && (
          <div className="absolute -top-4 right-4 md:right-40">
            <div className="h-[30px] w-[120px] md:w-[150px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center">
              <span
                className={`text-black ${unbounded.className} text-xs md:text-sm`}
              >
                FEATURED
              </span>
            </div>
          </div>
        )}

        {/* Show poster if large=true */}
        {( event.featured || layout) && (
          <div className="w-full md:w-[280px] h-[220px] md:h-[330px] bg-black border border-gray-500 rounded-md mx-auto md:mx-0">
            <Image
              src={posterUrl || image1}
              alt={event.title}
              className="w-full h-full object-contain"
              width={280}
              height={330}
              priority
            />
          </div>
        )}

        <div className="flex flex-col w-full md:w-[500px] mt-4 md:mt-0 justify-between h-full">
          <div>
            <div
              className={`text-[#D1A83A] ${unbounded.className} pl-2 md:pl-6 pt-4 md:pt-8 text-xl md:text-2xl line-clamp-2`}
            >
              {event.title}
            </div>
            <div
              className={`text-white ${noto_sans.className} pl-2 md:pl-6 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
            >
              {isPortableText ? (
                <div className="h-[130px] overflow-hidden relative">
                  <div className="line-clamp-5">
                    <PortableText value={event.description} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              ) : (
                <>
                  <span>
                    {typeof event.description === "string"
                      ? event.description.slice(0, 200) + "..."
                      : ""}
                  </span>
                  <span className="md:block">
                    {typeof event.description === "string"
                      ? event.description.slice(200, 400) + "..."
                      : ""}
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            className={`text-white ${noto_sans.className} pl-2 md:pl-8 pt-3 md:pt-1 text-sm flex flex-row items-center justify-between`}
          >
            <div className="flex flex-col items-center justify-center w-[93px] h-[107px] p-0">
              <p
                className={`${unbounded.className} font-[500] text-[48px] w-[74px] h-[35px] text-[#D1A83A]`}
              >
                {day}
              </p>
              <p className="font-[400] text-[16px] leading-snug">
                {month}, {year}
              </p>
              <p className="font-[500] text-[16px] text-[#D1A83A]">CS 218</p>
            </div>
            <HoverButton url={event.link || "#"} small={true} />
          </div>
        </div>
      </div>
    );
  } else {
    // Small card layout (positions 1, 2, 4, 5, 6)
    return (
      <div className="w-full md:w-[420px] h-auto md:h-[380px] bg-black border border-gray-500 rounded-md p-4 md:p-0 relative">
        {/* Featured tag */}
        {event.featured && (
          <div className="absolute -top-4 right-4 md:right-20">
            <div className="h-[30px] w-[120px] md:w-[150px] bg-[#D1A83A] rounded-[45px] flex justify-center items-center">
              <span
                className={`text-black ${unbounded.className} text-xs md:text-sm`}
              >
                FEATURED
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-col w-full md:w-[400px] h-full justify-between md:h-[380px] md:p-4">
          <div>
            <div
              className={`text-white ${unbounded.className} pl-2 md:pl-3 pt-2 md:pt-4 text-xl md:text-2xl line-clamp-2`}
            >
              {event.title}
            </div>
            <div
              className={`text-white ${noto_sans.className} pl-2 md:pl-3 pt-2 md:pt-4 text-sm flex flex-col gap-2 md:gap-4`}
            >
              {isPortableText ? (
                <div className="h-[150px] relative">
                  <div className="line-clamp-6">
                    <PortableText value={event.description} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              ) : (
                <>
                  <span>
                    {typeof event.description === "string"
                      ? event.description.slice(0, 100) + "..."
                      : ""}
                  </span>
                  <span className="md:block">
                    {typeof event.description === "string"
                      ? event.description.slice(100, 300) + "..."
                      : ""}
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            className={`text-white ${noto_sans.className} pl-2 md:pl-3 text-sm flex flex-row items-center justify-between`}
          >
            <div className="flex flex-col items-center justify-center w-[93px] h-[107px] p-0">
              <p
                className={`${unbounded.className} font-[500] text-[48px] w-[74px] h-[35px] text-[#D1A83A]`}
              >
                {day}
              </p>
              <p className="font-[400] text-[16px] leading-snug">
                {month}, {year}
              </p>
              <p className="font-[500] text-[16px] text-[#D1A83A]">CS 218</p>
            </div>
            <HoverButton url={event.link || "#"} small={true} />
          </div>
        </div>
      </div>
    );
  }
};

export default EventCard;
