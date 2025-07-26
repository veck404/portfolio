"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { cn } from "../../../lib/utils";

interface FollowPointerContentProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
}

const FollowPointerContent: React.FC<FollowPointerContentProps> = ({
  x,
  y,
  title,
}) => (
  <motion.div
    className="pointer-events-none absolute left-0 top-0 h-4 w-4 rounded-full bg-primary mix-blend-difference"
    style={{
      x,
      y,
      translateX: "-50%",
      translateY: "-50%",
    }}
    transition={{ type: "spring", damping: 50, stiffness: 400 }}
  >
    {title && (
      <div className="absolute left-5 top-5 min-w-max rounded-md bg-black/80 px-3 py-1.5 text-xs text-white">
        {title}
      </div>
    )}
  </motion.div>
);

export interface FollowerPointerCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}

export const FollowerPointerCard: React.FC<FollowerPointerCardProps> = ({
  children,
  className,
  title,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      mouseX.set(e.clientX - rect.left + scrollX);
      mouseY.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleMouseLeave = () => setIsInside(false);
  const handleMouseEnter = () => setIsInside(true);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{ cursor: "none" }}
    >
      {children}
      <AnimatePresence>
        {isInside && (
          <FollowPointerContent x={mouseX} y={mouseY} title={title} />
        )}
      </AnimatePresence>
    </div>
  );
};
