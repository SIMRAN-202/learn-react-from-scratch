import React, { useState } from 'react';
import accordionData from '../utils/content';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {accordionData.map(({ title, content }, index) => (
        <section
          key={title}
          className="border-b border-gray-200 p-4 hover:bg-gray-100 transition"
        >
          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{activeIndex === index ? '-' : '+'}</p>
          </div>

          {activeIndex === index && (
            <div className="mt-2 text-gray-700">
              <p>{content}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Accordion;
