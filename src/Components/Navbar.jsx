

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
     <a 
     href="https://drive.google.com/file/d/1w56MA5PwaRjQDPjjjWNSYHfll2j7JwTt/view?usp=sharing"
     target="_blank"
     rel="noreferrer"
     ><div>Resume</div></a>
    </div>
    </div>
  )
}



export default Navbar