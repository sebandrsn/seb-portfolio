import { motion, MotionValue, useTransform } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";

interface AnimatedCharProps {
  char: string;
  scrollY: MotionValue<number>;
  url?: string;
}

export default function AnimatedChar({
  char,
  scrollY,
  url,
}: Readonly<AnimatedCharProps>) {
  const randomOffset = useMemo(() => Math.random() * 200, []);
  const charOpacity = useTransform(
    scrollY,
    [randomOffset, randomOffset + 200],
    [1, 0],
  );

  return (
    <motion.span style={{ opacity: charOpacity }}>
      {url ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {char}
        </Link>
      ) : (
        char
      )}
    </motion.span>
  );
}
