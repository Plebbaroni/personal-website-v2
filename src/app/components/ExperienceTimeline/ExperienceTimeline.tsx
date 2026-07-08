import React from "react";
import classes from "./ExperienceTimeline.module.css";

const experienceItems = [
  {
    period: "Dec 2025 - May 2026",
    role: "Software Engineer Intern",
    org: "RTOPilot",
    description:
      "Developing full-stack features for a learning management system used by 3000+ users to keep track of 100,000+ enrolments, building customer-facing functionalities related to enrolment management, payment, emails, and onboarding using the T3 stack."
  },
  {
    period: "Dec 2025 - present",
    role: "Project Director - C.H.A.O.S. (CHAOS Hiring And Offer System)",
    org: "UNSW Software Development Society",
    description:
      "Leading the development of C.H.A.O.S (Chaos Hiring And Offer System), an in-house hiring platform designed to support society recruitment campaigns through critical periods including a beta test supporting 15+ applications."
  },
  {
    period: "Jun 2025 - Nov 2025",
    role: "Training Lead",
    org: "UNSW Software Development Society",
    description:
      "Led the development of web development side projects, leading teams of 3 trainees by providing guidance and advising technical direction, with around 30% of trainees continuing as subcommittee members."
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
