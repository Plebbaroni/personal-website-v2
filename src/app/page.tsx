// import Image from "next/image";
// import styles from "./page.module.css";
'use client';
import MainPage from "./MainPage/MainPage";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [height, setHeight] = useState<number | null>(null);
   useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  if (height === null) return null;

  return (
    <motion.div
            className={classes.wrapper}
            style={{height}}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={classes.fullheight}>
        <MainPage/>
      </div>
    </motion.div>
  );
}
