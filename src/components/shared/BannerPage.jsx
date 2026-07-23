"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BannerPage({
  image,
  title,
  highlight,
  description,
  currentPage,
}) {
  return (
    <section
      className="relative h-[85vh] min-h-125 flex items-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950/80 via-neutral-950/60 to-neutral-950/75" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-24">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-sm text-neutral-300 mb-4"
          >
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Início
            </Link>

            <i className="fa-solid fa-angle-right text-xs text-orange-500"></i>

            <span className="text-white">{currentPage}</span>
          </motion.div>

          {/* Título Reduzido */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            {title}{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
              {highlight}
            </span>
          </motion.h1>

          {/* Texto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-300"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Linha inferior animada */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 w-full border-b border-white/10 origin-left"
      />
    </section>
  );
}
