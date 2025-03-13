"use client"

import React, { useState, useEffect } from "react";
import { Unbounded, Noto_Sans } from "next/font/google";
import Orbit from "./Orbit";
import EventCard, { EventData } from "../lib/EventCard";
import { client } from "../../sanity/client"; // Adjust the path as needed

const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });

// Default events as fallback data
const defaultEvents: EventData[] = [
  {
    _id: "default-1",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime! Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Nulla dui volutpat in a non faucibus arcu in. Ullamcorper lectus duis sed in amet.",
    date: "2025-03-27",
    link: "#",
    featured: true,
    large: true
  },
  {
    _id: "default-2",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-3",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-4",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime! Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Nulla dui volutpat in a non faucibus arcu in. Ullamcorper lectus duis sed in amet.",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: true
  },
  {
    _id: "default-5",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-6",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-7",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2025-03-27",
    link: "#",
    featured: false,
    large: false
  }
];

function Events() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        // Query to fetch events sorted by date
        const query = `*[_type == "Events"] | order(date desc) {
          _id,
          title,
          description,
          date,
          "posterUrl": poster.asset->url,
          link,
          featured,
          large
        }`;
        
        const data = await client.fetch<EventData[]>(query);
        
        if (data && data.length > 0) {
          // Add isSanityData flag to differentiate from fallback data
          const processedData = data.map(event => ({
            ...event,
            isSanityData: true
          }));
          setEvents(processedData);
        } else {
          setEvents(defaultEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents(defaultEvents);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Function to arrange events according to the required positions
  const getArrangedEvents = () => {
    // If no events from Sanity, use defaults
    if (events.length === 0) return defaultEvents;

    // Make a copy of events to avoid mutation
    const eventsClone = [...events];
    const result: EventData[] = Array(7).fill(null);
    
    // Position 0: Featured event (or first event if no featured)
    const featuredEvent = eventsClone.find(event => event.featured);
    if (featuredEvent) {
      result[0] = featuredEvent;
      // Remove the featured event from the array
      const index = eventsClone.findIndex(e => e._id === featuredEvent._id);
      if (index > -1) eventsClone.splice(index, 1);
    } else {
      result[0] = eventsClone.shift() || defaultEvents[0];
    }
    
    // Position 3: Event with poster
    const largeEvent = eventsClone.find(event => event.large);
    if (largeEvent) {
      result[3] = largeEvent;
      // Remove the large event from the array
      const index = eventsClone.findIndex(e => e._id === largeEvent._id);
      if (index > -1) eventsClone.splice(index, 1);
    } else {
      // If no large event found, use the next available event or default
      result[3] = eventsClone.shift() || defaultEvents[3];
    }
    
    // Fill positions 1, 2, 4, 5, 6 with remaining events
    const positions = [1, 2, 4, 5, 6];
    positions.forEach((pos, i) => {
      if (i < eventsClone.length) {
        result[pos] = eventsClone[i];
      } else {
        result[pos] = defaultEvents[pos];
      }
    });
    
    // Fill any remaining empty slots with defaults
    for (let i = 0; i < result.length; i++) {
      if (!result[i]) result[i] = defaultEvents[i];
    }
    
    return result;
  };

  const displayEvents = getArrangedEvents();

  if (loading) {
    return (
      <div className="bg-black w-full h-96 flex justify-center items-center">
        <div className="text-white">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="bg-black w-full flex justify-center relative overflow-hidden">
      {/* Orbit image positioned absolutely in top right */}
      <div className="absolute -z-100 -top-[38%] -right-[38%] pointer-events-none z-0 opacity-30 md:opacity-100">
        <Orbit />
      </div>

      <div className="max-w-7xl w-full px-4 relative z-10">
        <div
          className={`${unbounded.className} md:py-[60px] font-normal text-[45px] md:text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          UPCOMING<br /> EVENTS
        </div>

        <div className="flex flex-col mt-5 md:mt-10">
          {/* First row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* Position 0: Featured event (large card) */}
            <EventCard event={displayEvents[0]} layout="large" />
            
            {/* Position 1: Small card */}
            <EventCard event={displayEvents[1]} layout="small" />
          </div>

          {/* Second row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* Position 2: Small card */}
            <EventCard event={displayEvents[2]} layout="small" />
            
            {/* Position 3: Large card with poster */}
            <EventCard event={displayEvents[3]} layout="large" />
          </div>

          {/* Third row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-5 mt-5 md:mt-10">
            {/* Positions 4, 5, 6: Small cards */}
            {[4, 5, 6].map((index) => (
              <EventCard 
                key={displayEvents[index]._id} 
                event={displayEvents[index]} 
                layout="small" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;