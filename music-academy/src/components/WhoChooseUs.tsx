"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Guitar Mastery",
      description:
        "Unlock the secrets of guitar playing with our comprehensive guide. Whether you're a beginner or an advanced player, learn techniques that will take your playing to the next level. Perfect your chords, scales, and solos with our step-by-step instructions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Guitar Mastery
        </div>
      ),
    },
    {
      title: "Piano Essentials",
      description:
        "Master the piano with our essential guide. From the basics to advanced techniques, our platform helps you learn at your own pace. Experience the joy of playing your favorite songs with our interactive lessons and tutorials.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Piano Essentials
        </div>
      ),
    },
    {
      title: "Violin Techniques",
      description:
        "Enhance your violin skills with our detailed guide. Learn bowing techniques, finger placements, and how to produce a rich, full sound. Whether you're preparing for a performance or just playing for fun, our platform will help you achieve your goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Violin Techniques
        </div>
      ),
    },
    {
      title: "Drumming Basics",
      description:
        "Get started with drumming with our beginner-friendly guide. Learn the fundamentals of rhythm, timing, and coordination. Perfect for aspiring drummers looking to make a beat, our lessons will have you playing confidently in no time.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Drumming Basics
        </div>
      ),
    },
  ];
  
export default function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
