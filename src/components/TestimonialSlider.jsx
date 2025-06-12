import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import test1 from "../assets/client-say-2.jpg";
import test2 from "../assets/client-say-3.jpg";
import test3 from "../assets/client-say-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Adam Smith",
    title: "CEO & Founder",
    text: "The team provided excellent service and solved our issues quickly. I highly recommend their telehealth platform for its reliability and ease of use.",
    image: test1,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Marketing Director",
    text: "Working with this company has been a game-changer for our remote consultations. The support team is always responsive and helpful.",
    image: test2,
  },
  {
    id: 3,
    name: "John Brown",
    title: "Product Manager",
    text: "Their platform saved us time and improved patient satisfaction. The user interface is intuitive and efficient for our needs.",
    image: test3,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <span className="testimonial-label">Testimonial</span>
      <h2 className="testimonial-title">What Our Client Say About Us</h2>
      <div className="slider">
        <AnimatePresence mode="wait">
          {testimonials.map(
            (testimonial, index) =>
              index === currentIndex && (
                <motion.div
                  key={testimonial.id}
                  className="slide"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="testimonial-image"
                  />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <span>{testimonial.name}</span>
                    <span className="testimonial-title-text">
                      {testimonial.title}
                    </span>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
