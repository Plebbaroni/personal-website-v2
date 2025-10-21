import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const activities = [
    "passionate about building cool things. 🤖",
    "probably craving chinese food. 🥡",
    "contributing to CHAOS at UNSW DevSoc. ⚙️",
    "learning how to play the piano. 🎶",
    "trying to expand my cap collection. 🧢",
    "in my Rust training arc. 🦀",
    "chronically addicted to monster energy drinks. 🧌"
]

export default function Activity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const delay = Math.random() * 5000 + 5000; // 5–10s delay
      timeoutId = setTimeout(() => {
        setIndex((i) => i + 1);
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => clearTimeout(timeoutId);
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
