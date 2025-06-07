'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollProps {
  children: ReactNode;
  bg: string;
}

export default function Scroll({ children, bg }: ScrollProps) {
  return (
    <motion.section
      className="min-h-[20rem] border border-[#474747] rounded-[2rem] p-[1rem] flex items-center justify-center snap-start"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="text-[var(--text)] text-[3rem] font-bold">{children}</div>
    </motion.section>
  );
}