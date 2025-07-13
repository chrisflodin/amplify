"use client";

import { Button } from "@/components/ui/button";

export default function ContactButton() {
  const handleClick = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      size="lg"
      className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
      onClick={handleClick}
    >
      Kontakta oss
    </Button>
  );
}
