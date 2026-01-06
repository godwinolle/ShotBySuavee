"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import { cormorantInfant } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`${cormorantInfant.className} flex-1 flex items-center justify-center w-full px-4 sm:px-6 md:px-8 pt-10 sm:pt-24 pb-8`}>
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center w-full"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
              shotbysuavee
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 font-normal px-4">
              Digital & Film Photography
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row gap-8 sm:gap-12 md:gap-16 items-center justify-center w-full"
          >
            <Link href="/film" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.98 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-black border-b border-black/20 pb-2 sm:pb-3 transition-opacity cursor-pointer text-center sm:text-left min-w-[120px] sm:min-w-0"
              >
                Film
              </motion.div>
            </Link>
            <Link href="/digital" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.98 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-black border-b border-black/20 pb-2 sm:pb-3 transition-opacity cursor-pointer text-center sm:text-left min-w-[120px] sm:min-w-0"
              >
                Digital
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
