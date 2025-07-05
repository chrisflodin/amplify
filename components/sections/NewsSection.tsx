import { Button } from "@/components/ui/button";

export default function NewsSection() {
  const newsItems = [
    {
      title: "Sanna Lantz är Amplifys nya Fullstackutvecklare",
      date: "2025-06-03",
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      title: "Sverige ska bli bäst på AI – amplify med på resan",
      date: "2025-05-08",
      bgColor: "from-green-100 to-green-200",
    },
    {
      title: "Aladin Hindawi är Amplifys nya Fullstackutvecklare",
      date: "2025-04-29",
      bgColor: "from-purple-100 to-purple-200",
    },
    {
      title: "Joel Magnusson är Amplifys nya Fullstackutvecklare",
      date: "2025-03-12",
      bgColor: "from-red-100 to-red-200",
    },
  ];

  return (
    <section id="nyheter" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nyheter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div
                className={`aspect-video bg-gradient-to-r ${item.bgColor}`}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-brand-black text-white hover:bg-gray-800">
            Fler nyheter
          </Button>
        </div>
      </div>
    </section>
  );
}
