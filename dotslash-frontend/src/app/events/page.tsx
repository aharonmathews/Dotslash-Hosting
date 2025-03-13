"use client"

import React, { useState, useEffect } from 'react';
import EventCard, { EventData } from '../lib/EventCard';
import { client } from '../../sanity/client'; // Adjust path as needed
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ weight: "400", style: "normal", preload: false });

const EventsPage = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        // Query to fetch all events sorted by date
        const query = `*[_type == "Events"] {
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
          // Add isSanityData flag to all events
          const processedData = data.map(event => ({
            ...event,
            isSanityData: true
          }));
          
          // Sort events: featured first, then by date (newest first)
          const sortedEvents = processedData.sort((a, b) => {
            // First sort by featured status
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            
            // Then sort by date (newest first)
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          });
          
          setEvents(sortedEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="bg-black w-full min-h-screen flex justify-center items-center">
        <div className="text-white text-xl">Loading events...</div>
      </div>
    );
  }

  // If no events found
  if (events.length === 0) {
    return (
      <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center px-4 py-20">
        <h1 className={`${unbounded.className} text-4xl md:text-6xl text-[#D1A83A] mb-6`}>
          EVENTS
        </h1>
        <div className="text-white text-xl text-center">
          No events found. Check back later for upcoming events.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen px-4 py-20">
        <div className='flex flex-col items-center justify-center'>
            <div className={`${unbounded.className} text-4xl md:text-6xl text-[#D1A83A] mb-12`}>
            EVENTS
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
            {events.map((event) => (
                <EventCard 
                key={event._id} 
                event={event} 
                layout="large" 
                />
                ))}
            </div>
        </div>
      </div>
  );
};

export default EventsPage;