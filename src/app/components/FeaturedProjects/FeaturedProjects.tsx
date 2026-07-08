import React from "react";
import classes from "./FeaturedProjects.module.css";

const featuredProjects = [
  {
    year: "Jul 2026",
    name: "Scribrrr",
    blurb:
      "Real time AI chat transcription and summarization app",
    stack: "soniox / gemini ai / next.js / fastify / postgres",
  },
  {
    year: "Aug 2025",
    name: "Pokehabits",
    blurb:
      "Gamified habit tracker app that bakes in Pokemon-themed evolution logic and levelling systems",
    stack: "postgres / react / tailwindcss",
  },
  {
    year: "dec 2024",
    name: "Pyramids",
    blurb:"Owned backend development for a society timetabling application, designing a unit tested REST API with 20+ endpoints and implementing CI/CD using GitHub Actions and Docker.",
    stack: "typescript / prisma / react / postgres / shell",
  },
];

function FeaturedProjects() {
  return (
    <div className={classes.list}>
      {featuredProjects.map((project) => (
        <article key={`${project.year}-${project.name}`} className={classes.item}>
          <p className={classes.year}>{project.year}</p>
          <div className={classes.content}>
            <h3 className={classes.name}>{project.name}</h3>
            <p className={classes.blurb}>{project.blurb}</p>
            <p className={classes.stack}>{project.stack}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default FeaturedProjects;
