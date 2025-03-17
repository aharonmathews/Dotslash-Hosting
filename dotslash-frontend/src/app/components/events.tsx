"use client"

import React, { useState, useEffect, useRef } from "react";
import { Unbounded, Noto_Sans } from "next/font/google";
import Orbit from "./Orbit";
import EventCard, { EventData } from "../lib/EventCard";
import { client } from "../../sanity/client"; // Adjust the path as needed
import HoverButton from "./HoverButton";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });
const noto_sans = Noto_Sans({ weight: "400", style: "normal", preload: false });

gsap.registerPlugin(ScrollTrigger);

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
  
  // Create refs for animation containers
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Fetch events from sanity
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

  // Animation for cards
  useEffect(() => {
    if (loading) return;
    
    // Register ScrollTrigger plugin (ensure it's registered)
    gsap.registerPlugin(ScrollTrigger);
  
    // Function to create the animation
    const createAnimation = () => {
      // Get all card elements
      const cards = document.querySelectorAll('.event-card');
      const cards1 = document.querySelectorAll('.event-card1');
      const cards2 = document.querySelectorAll('.event-card2');
      
      // Set initial state
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 20
      });
      
      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.95
      });
  
      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#events',
          start: "top 80%",
          end: "bottom top", // End when the bottom of events leaves the top of viewport
          toggleActions: "play none none none", // PLAY when entering, RESET when leaving
          markers: false // Set to true for debugging
        }
      });
  
      // Animate title first
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
      
      // Then animate cards with staggered effect
      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.8, // 300ms stagger between cards
        ease: "back.out(1.4)"
      }, "-=0.2"); // Slight overlap with title animation

      tl.to(cards1, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.8, // 300ms stagger between cards
        ease: "back.out(1.4)"
      }, "-=0.2"); // Slight overlap with title animation

      tl.to(cards2, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.8, // 300ms stagger between cards
        ease: "back.out(1.4)"
      }, "-=0.2"); // Slight overlap with title animation
  
      return tl;
    };
    
    // Create the animation
    const timeline = createAnimation();
  
    // Clean up function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Kill the timeline
      if (timeline) timeline.kill();
    };
  }, [loading]);

  const getArrangedEvents = () => {
    if (events.length === 0) return defaultEvents;

    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    const featuredEvents = sortedEvents.filter(event => event.featured);
    const nonFeaturedEvents = sortedEvents.filter(event => !event.featured);

    const result: EventData[] = Array(7).fill(null);

    const orderedEvents = [...featuredEvents, ...nonFeaturedEvents];

    for (let i = 0; i < 7; i++) {
      if (i < orderedEvents.length) {
        result[i] = orderedEvents[i];
      } else {
        result[i] = defaultEvents[i];
      }
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
    <div id="events" className="bg-black w-full flex justify-center relative overflow-hidden">
      {/* Orbit image positioned absolutely in top right */}
      <div className="absolute -z-100 -top-[38%] -right-[38%] pointer-events-none z-0 opacity-30 md:opacity-100">
        <Orbit />
      </div>

      <div className="max-w-7xl w-full px-4 relative z-10">
        <div
          ref={titleRef}
          className={`${unbounded.className} md:py-[60px] font-normal text-[45px] md:text-[90px] leading-[100%] tracking-[0%] text-white`}
        >
          UPCOMING<br /> EVENTS
        </div>

        {/* Events grid */}
        <div ref={cardsContainerRef} className="flex flex-col mt-5 md:mt-10">
          {/* First row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* Position 0: Featured event (large card) */}
            <div className="event-card">
              <EventCard event={displayEvents[0]} layout="large" />
            </div>

            {/* Position 1: Small card */}
            <div className="event-card">
              <EventCard event={displayEvents[1]} layout="small" />
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-10">
            {/* Position 2: Small card */}
            <div className="event-card1">
              <EventCard event={displayEvents[2]} layout="small" />
            </div>

            {/* Position 3: Large card with poster */}
            <div className="event-card1">
              <EventCard event={displayEvents[3]} layout="large" />
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-5 mt-5 md:mt-10">
            {/* Positions 4, 5, 6: Small cards */}
            {[4, 5, 6].map((index) => (
              <div key={displayEvents[index]._id} className="event-card2">
                <EventCard 
                  event={displayEvents[index]}
                  layout="small"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mt-[36px] font-unbounded">
          <HoverButton url="/events" small={false} text="SHOW MORE" invert={true} />
        </div>
      </div>
    </div>
  );
}

export default Events;