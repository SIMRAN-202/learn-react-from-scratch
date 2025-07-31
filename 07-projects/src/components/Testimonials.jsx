import React from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const testimonials = [
    {
      author: "John Doe",
      quote: "This is the best service I've ever used!",
    },
    {
      author: "Jane Smith",
      quote: "Absolutely fantastic experience, highly recommend!",
    },
    {
      author: "Alice Johnson",
      quote: "A game changer in the industry, very satisfied!",
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-sky-200   flex items-center justify-center p-7">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <p className="text-lg italic text-gray-700 mb-4">
          "{testimonials[currentIndex].quote}"
        </p>
        <h4 className="text-md font-semibold text-gray-800 mb-6">
          - {testimonials[currentIndex].author}
        </h4>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
