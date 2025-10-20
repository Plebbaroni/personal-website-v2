import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const activities = [
    "passionate about building cool things.",
    "probably craving chinese food.",
    "contributing to Chaos at UNSW DevSoc.",
    "learning how to play the piano.",
    "trying to expand my cap collection.",
    "in my Rust training arc. 🦀",
    "chronically addicted to monster energy drinks."
]

export default function Activity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = Math.random() * 5000 + 5000;
      setTimeout(() => {
        setIndex((i) => i + 1);
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(0);
  }, []);

  return (
    <TextTransition
      springConfig={presets.gentle}
      direction="up"
      inline
    >
      {activities[index % activities.length]}
    </TextTransition>
  );
}
