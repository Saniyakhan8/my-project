'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollText() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const paragraph = textRef.current;
    const words = paragraph.innerText.split(' ');

    paragraph.innerHTML = words.map(word => `<span class="inline-block opacity-0">${word}&nbsp;</span>`).join('');

    const spans = paragraph.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      stagger: 0.05,
      duration: 0.3,
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <p ref={textRef} className="text-lg font-medium leading-relaxed">
        This premium selection of products reflects our commitment to elegant design, comfort, and innovation — made for people who appreciate true luxury.
      </p>
    </section>
  );
}
