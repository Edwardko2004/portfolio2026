"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 25,
  onComplete,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        onComplete?.(); // 👈 notify parent we're done
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayed}</>;
}
