import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <p className={classes.eyebrow}>contact</p>
        <div className={classes.links}>
          <a
            href="https://github.com/Plebbaroni"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <p>[github]</p>
          </a>
          <p className={classes.linkdivider}> | </p>
          <a
            href="https://www.linkedin.com/in/jared-schulz-34b20b31b/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <p>[linkedin]</p>
          </a>
          <p className={classes.linkdivider}> | </p>
          <a href="mailto:jaredlucasschulz@gmail.com" className={classes.link}>
            <p>[email]</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
