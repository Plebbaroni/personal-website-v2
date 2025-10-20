// import Image from "next/image";
// import styles from "./page.module.css";
'use client';
import MainPage from "./MainPage/MainPage";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  return (
    <motion.div
            className={classes.wrapper}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <MainPage/>
    </motion.div>
  );
}
