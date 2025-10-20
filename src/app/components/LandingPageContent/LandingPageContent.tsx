import Image from 'next/image';
import React from 'react'
import classes from './LandingPageContent.module.css';

function LandingPageContent() {
  return (
    <>
        <aside className={classes.metadata}>
            personalwebsitev2 | oct2025 | -33.8688°S 151.2093°E | UTC+11
        </aside>
        <div className={classes.me}>
            <Image src="/me.png" alt="me" className={classes.meimg} width={280} height={372} priority/>
            <p className={classes.caption}>me.png | blue mountains, nsw | aug2025</p>
        </div>
        <div className={classes.divider}/>
        <div className={classes.introtext}>
            <p className={classes.introline}>Hi! I&#39;m Jared Schulz. Nice to meet you.</p>
            <p className={classes.introline}>I&#39;m in my 2nd year of Computer Science at UNSW.</p>
            <p className={classes.introline}>I&#39;m currently [cycle through hardcoded list of things I&#39;m doing]</p>
            <p className={classes.introline}>You can view my projects and experience by clicking the icon on the top left, toggling a navbar(in the future). Alternatively, you can reach me on the platforms below:</p>
        </div>
    </>
  )
}

export default LandingPageContent