import Image from 'next/image';
import React from 'react'
import classes from './LandingPageContent.module.css';
import Activity from '../Activity/Activity';

function LandingPageContent() {
  return (
    <>
            <aside className={classes.metadata}>
                personalwebsitev2 | oct2025 | -33.8688°S 151.2093°E | UTC+11
            </aside>
            <div className={classes.me}>
                <Image src="/me.png" alt="me" className={classes.meimg} width={280} height={372} priority/>
                <p className={classes.caption}>me.png | blue mountains, nsw | 08/25</p>
            </div>
            <div className={classes.divider}/>
            <div className={classes.introtext}>
                <p className={classes.introline}>Hi! I&#39;m Jared Schulz. Nice to meet you.</p>
                <p className={classes.introline}>I&#39;m in my 2nd year of Computer Science at UNSW.</p>
                <div className={classes.introline}>I&#39;m <Activity/></div>
                <p className={classes.introline}>You can view my projects and experience by clicking the icon on the top left, toggling a navbar(in the future). Alternatively, you can reach me on the platforms below:</p>
            </div>
            <div className={classes.links}>
                <a href={"https://github.com/Plebbaroni"} target='_blank' className={classes.link}><p>[github]</p></a>
                <p className={classes.linkdivider}> | </p>
                <a href={"https://www.linkedin.com/in/jared-schulz-34b20b31b/"} target='_blank' className={classes.link}><p>[linkedin]</p></a>
                <p className={classes.linkdivider}> | </p>
                <a href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText("jaredlucasschulz@gmail.com");
                    }} className={classes.link}><p>[email]</p></a>
                {/* <p className={classes.linkdivider}> | </p>
                <p className={classes.deactivatedlink}>[resume]</p>
                <p className={classes.linkdivider}> | </p>
                <p className={classes.deactivatedlink}>[me]</p> */}
            </div>
            <div className={classes.divider}/>
            <div className={classes.thankswrapper}>
                <p className={classes.thanks}>thanks for dropping by :D</p>
            </div>
    </>
  )
}

export default LandingPageContent