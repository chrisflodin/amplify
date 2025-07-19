"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema for the contact form
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Kontakta oss",
  subtitle = "Boka ett möte eller skicka oss ett meddelande så återkommer vi snarast",
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Meddelande skickat!", {
          description: "Vi återkommer till dig inom kort.",
        });
        reset();
      } else {
        const errorData = await response.json();
        toast.error("Ett fel uppstod", {
          description:
            errorData.error || "Kunde inte skicka meddelandet. Försök igen.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Ett fel uppstod", {
        description: "Kunde inte skicka meddelandet. Försök igen.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <Tabs defaultValue="booking" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 border border-white/20 rounded-xl p-0 mb-8">
              <TabsTrigger
                value="booking"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-brand-black rounded-none rounded-l-xl py-[9px] font-semibold"
              >
                Boka ett möte
              </TabsTrigger>
              <TabsTrigger
                value="message"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-brand-black rounded-none rounded-r-xl py-[9px] font-semibold"
              >
                Skicka meddelande
              </TabsTrigger>
            </TabsList>

            <TabsContent value="booking" className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-40 h-40 relative">
                  <Image
                    src="/images/chris-1.png"
                    alt="Chris"
                    fill
                    className="object-cover rounded-full"
                    sizes="160px"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold ">
                    Boka möte med Chris
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Klicka för att se tillgängliga tider
                  </p>
                </div>

                <Link
                  href="https://calendly.com/christopher-flodin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-brand-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Öppna kalender
                  </Button>
                </Link>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-300">
                      <a href="tel:+46 76 145 53 98">+46 76 145 53 98</a>
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300">
                      christopher.flodin@weareamplify.se
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "christopher.flodin@weareamplify.se"
                        );
                        toast.success("Email kopierad!", {
                          description:
                            "E-postadressen har kopierats till urklipp.",
                        });
                      }}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                      title="Kopiera e-postadress"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="message" className="space-y-6">
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Namn"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="E-post"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Telefonnummer"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Skriv ditt meddelande här"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-brand-black hover:bg-gray-100 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
