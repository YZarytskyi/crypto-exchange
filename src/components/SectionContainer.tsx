import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionContainerProps {
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className,
  children,
}) => {
  const containerClassName = twMerge('mx-auto max-w-xl px-2', className);

  return <div className={containerClassName}>{children}</div>;
};

export default SectionContainer;
