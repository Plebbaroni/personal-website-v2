import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const activities = [
    "passionate about building cool things. 🤖",
    "starting an internship position at RTOPilot. ✈️",
    "probably craving chinese food. 🥡",
    "contributing to(soon directing) CHAOS at UNSW DevSoc. ⚙️",
    "learning how to play the piano. 🎶",
    "trying to expand my cap collection. 🧢",
    "in my Rust training arc. 🦀",
    "chronically addicted to monster energy drinks. 🧌",
]

export default function Activity() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    const scheduleNext = () => {
      clearTimer();
      const delay = Math.random() * 3000 + 3000; // 3–6s delay
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => i + 1);
        scheduleNext();
      }, delay);
    };
   
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        clearTimer();
      }else {
        scheduleNext();
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    scheduleNext();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      timeoutRef.current = null;
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
    <motion.span
        key={index}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ display: "inline-block" }}
      >
        {activities[index % activities.length]}
        </motion.span>
      </AnimatePresence>
  );
}
