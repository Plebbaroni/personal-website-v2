import React from 'react'
import classes from './MainPage.module.css'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import LandingPageContent from '@/app/components/LandingPageContent/LandingPageContent'
import ExperienceTimeline from '@/app/components/ExperienceTimeline/ExperienceTimeline'

function MainPage() {
  return (
    <div className={classes.wrapper}>
      <Sidebar/>
      <main className={classes.pageContent}>
        <section className={classes.heroSection}>
          <LandingPageContent />
        </section>
        <section className={classes.experienceSection}>
          <div className={classes.sectionInner}>
            <p className={classes.sectionEyebrow}>experience</p>
            <h2 className={classes.sectionTitle}>Experience</h2>
            <p className={classes.sectionCopy}>
              A minimalist timeline scaffold for roles, leadership, and project work.
            </p>
            <ExperienceTimeline />
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainPage