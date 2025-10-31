import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-6 text-center font-heading text-3xl font-semibold tracking-[-0.015em] text-slate-900 text-balance dark:text-white md:text-[2.75rem]">
      {children}
    </h2>
  );
}
