import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "./siteConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.25em] text-primary font-semibold text-xs mb-6"
            >
              {siteConfig.clinic.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-10 max-w-xl"
            >
              {siteConfig.hero.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                {siteConfig.hero.primaryCta}
                <ArrowRight size={18} />
              </a>

              <a
                href={`tel:${siteConfig.clinic.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium hover:bg-gray-100 transition"
              >
                <Phone size={18} />
                {siteConfig.hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={siteConfig.hero.image}
              alt="Clinic"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
