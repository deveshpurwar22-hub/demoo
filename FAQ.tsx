import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from './siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {siteConfig.faqSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteConfig.faqSection.subtitle}
          </motion.p>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {siteConfig.faqSection.faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between p-6 text-left font-medium"
              >
                <span>{faq.question}</span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 text-muted-foreground"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
