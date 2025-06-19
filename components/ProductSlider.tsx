'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { name: 'Luxury Watch', price: '$299' },
  { name: 'Elegant Bag', price: '$199' },
  { name: 'Stylish Glasses', price: '$149' },
  { name: 'Minimalist Shoes', price: '$249' },
];

export default function ProductSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < products.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold mb-6">Best Selling Products</h2>

      <div className="relative flex items-center justify-center md:justify-around">
        <button
          onClick={prev}
          className="md:hidden p-2 disabled:opacity-20"
          disabled={index === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-56 mx-4 text-center">
          <p className="font-bold">{products[index].name}</p>
          <p>{products[index].price}</p>
        </div>

        <button
          onClick={next}
          className="md:hidden p-2 disabled:opacity-20"
          disabled={index === products.length - 1}
        >
          <ChevronRight size={24} />
        </button>

        {/* Show all on desktop */}
        <div className="hidden md:flex space-x-8">
          {products.map((p, i) => (
            <div key={i} className="text-center">
              <p className="font-bold">{p.name}</p>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
