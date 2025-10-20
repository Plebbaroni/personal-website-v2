import React from 'react'
import Image from 'next/image';
import classes from './Sidebar.module.css'
function Sidebar() {
  return (
    <div className={classes.wrapper}>
        <Image src="/icons/sitelogo.png" alt="icon" className={classes.icon} width={75} height={75}/>
    </div>
  )
}

export default Sidebar