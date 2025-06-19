'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
      <p ref={textRef} className="text-lg text-center max-w-xl">
        Elegant products just for you.
      </p>
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
        Explore Now
      </button>
    </section>
  );
}
