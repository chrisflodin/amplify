export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ToGo-appen utvecklades på rekordtid av amplify",
      author: "Alexander Lewerentz",
      role: "Develop Manager",
      company: "ICA",
      bgColor: "from-orange-100 to-orange-200",
      avatar: "bg-gray-300",
      initials: null,
    },
    {
      quote:
        "Vi har haft ett jättebra samarbete med amplify. Jag rekommenderar dem varmt!",
      author: "Anton Aderum",
      role: "CTO",
      company: "Bokadirekt",
      bgColor: "from-teal-100 to-teal-200",
      avatar: "bg-teal-500",
      initials: "B",
    },
    {
      quote: "Att välja amplify var ett enkelt val som jag inte ångrat!",
      author: "Hacina Reienskiöld",
      role: "IT Project Manager",
      company: "Barncancerfonden",
      bgColor: "from-purple-100 to-purple-200",
      avatar: "bg-purple-500",
      initials: "BCF",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-8`}
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
