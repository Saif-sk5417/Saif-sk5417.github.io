import { FaLinkedinIn   } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import styles from './Home.module.css'
const Home =()=>{
    return(
        <div className={styles.Home_Main}>
         <div className={styles.Home_Name}>
            <span className={styles.Home_hi}>Hi</span>, I am Saif Shaikh
         </div>
         <div className={styles.Home_title}>
            A <span className={styles.Home_title1}>Full Stack</span> Developer
         </div>
         <div className={styles.Home_des}>
         A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
         </div>
         <div className={styles.Home_icons}>
            <div> 
                <a href="https://github.com/Saif-sk5417"
                target="_blank" rel="noopener noreferrer"
                >
                <FiGithub />
                </a>
             </div>
             <div> 
             <a href="mailto:saifshaikh230304@gmail.com">
              <AiOutlineMail />
             </a>
             </div>
             <div> 
             <a href="https://www.linkedin.com/in/saif-shaikh-76888624a/"
             target="_blank" rel="noopener noreferrer"
             >
             <FaLinkedinIn />
             </a>
             </div>
         </div>
        </div>
    )
}

export default Home