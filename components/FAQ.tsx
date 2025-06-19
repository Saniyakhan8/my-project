'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, all our products come with a 1-year warranty covering manufacturing defects.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide with standard and express options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border rounded-md p-4">
            <button
              onClick={() => toggle(i)}
              className="flex justify-between w-full items-center text-left font-medium"
            >
              {item.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? 'max-h-40 mt-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
