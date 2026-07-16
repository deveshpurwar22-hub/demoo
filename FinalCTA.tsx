import { motion } from 'framer-motion';
import { siteConfig } from "./siteConfig";
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={siteConfig.finalCta.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        >
          {siteConfig.finalCta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-lg text-white/80 mb-10"
        >
          {siteConfig.finalCta.subtitle}
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-medium shadow-lg"
          >
            {siteConfig.hero.primaryCta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>


          <motion.a
            href={`tel:${siteConfig.clinic.phone.replace(/[^0-9]/g, '')}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-medium hover:bg-white/20"
          >
            <Phone className="mr-2 w-4 h-4" />
            {siteConfig.hero.secondaryCta}
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
