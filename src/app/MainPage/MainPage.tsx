import React from 'react'
import classes from './MainPage.module.css'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import LandingPageContent from '@/app/components/LandingPageContent/LandingPageContent'

function MainPage() {
  return (
    <div className={classes.wrapper}>
      <Sidebar/>
      <main className={classes.pageContent}>
        <LandingPageContent />
      </main>
    </div>
  )
}

export default MainPage