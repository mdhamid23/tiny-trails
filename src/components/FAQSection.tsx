"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How to set GPS Tracker for my family's devices?",
      answer:
        "Download the TinyTrails app on your smartphone, then install the Pingo app on your child's phone or connect a GPS watch. Follow the simple setup wizard in the app to link the devices together. It takes only 5 minutes!",
    },
    {
      question: "What devices are supported by the TinyTrails app?",
      answer:
        "TinyTrails works on iOS (iPhone, iPad) and Android smartphones and tablets. You can track Android and iOS phones, as well as compatible GPS watches.",
    },
    {
      question: "Can I track my child's location without them knowing?",
      answer:
        "No, the Pingo app needs to be installed on your child's device and they will be aware of the tracking. We believe in transparent family safety where children understand they are being monitored for their protection.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - decorative element */}
          <div className="relative h-96 hidden lg:block">
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50" />
          </div>

          {/* Right side - FAQ */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
