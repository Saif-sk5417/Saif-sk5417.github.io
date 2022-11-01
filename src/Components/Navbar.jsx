


import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar =()=>{
  return (
    <div className={styles.Navbar_main}>
      <div className={styles.Navbar_one}>
        <span className={styles.logo}>iam</span>saifshaikh
        {/* <span className={styles.logo}>S</span>haikh */}
      </div>
      <div className={styles.Navbar_Two}>
     <div>Home</div>
     <div>About Me</div>
     <div>Skills</div>
     <div>Project</div>
     <div>Contact</div>
     <div>Resume</div>
    </div>
    </div>
  )
}



export default Navbar