"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "CRDBAG-appen utvecklades på rekordtid av amplify",
      author: "Andreas Näslund",
      role: "Co-founder",
      company: "CRDBAG",
      bgColor: "from-orange-100 to-orange-200",
      avatar: "bg-gray-300",
      initials: "MT",
    },
    {
      quote:
        "Vi har haft ett jättebra samarbete med amplify. Jag rekommenderar dem varmt!",
      author: "Martin Brolin",
      role: "Utvecklare",
      company: "Futurice",
      bgColor: "from-teal-100 to-teal-200",
      avatar: "bg-teal-500",
      initials: "M",
    },
    {
      quote: "Att välja amplify var ett enkelt val som jag inte ångrat!",
      author: "Marie Forseni",
      role: "VD",
      company: "Stockholm Plastikkirurgi",
      bgColor: "from-purple-100 to-purple-200",
      avatar: "bg-purple-500",
      initials: "MF",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                testimonial.bgColor
              } rounded-3xl p-8 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <div className="space-y-6">
                <div className="text-2xl font-bold text-brand-black">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center`}
                  >
                    {testimonial.initials && (
                      <span className="text-white font-bold">
                        {testimonial.initials}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
