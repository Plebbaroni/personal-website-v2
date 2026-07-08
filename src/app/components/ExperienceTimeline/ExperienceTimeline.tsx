import React from "react";
import classes from "./ExperienceTimeline.module.css";

const experienceItems = [
  {
    period: "2026 - present",
    role: "Incoming Software Engineer Intern",
    org: "RTOPilot",
    description:
      "Scaffold space for a short summary of the work, team, or impact you want to highlight here.",
  },
  {
    period: "2025 - present",
    role: "CHAOS @ UNSW DevSoc",
    org: "Contributor / Director track",
    description:
      "Use this entry for leadership, community work, or technical projects you have been building alongside study.",
  },
];

function ExperienceTimeline() {
  return (
    <div className={classes.timeline}>
      {experienceItems.map((item) => (
        <article key={`${item.period}-${item.role}`} className={classes.item}>
          <div className={classes.marker} aria-hidden="true" />
          <p className={classes.period}>{item.period}</p>
          <h3 className={classes.role}>{item.role}</h3>
          <p className={classes.org}>{item.org}</p>
          <p className={classes.description}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
