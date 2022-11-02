
import img from '../Image/My_img.jpeg'
import styles from './About.module.css'
import { GrDocumentPdf } from "react-icons/gr";
const AboutMe =()=>{
    return (
      <div className={styles.About_Main}>
        <div className={styles.About_title}>About Me</div>
          <div className={styles.About_img}>
            <img src={img} alt="img" srcset="" />
        </div>
        <div className={styles.About_Des}>
            Hi,Everyone My name is Saif Shaikh from Mumbai,Maharashtra,I am A full-stack React Js developer trained by Masai School, Bengaluru. I have a passion to create useful projects and systems which can contribute in everyone's wellbeing. I go to full extent in execution.
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1w56MA5PwaRjQDPjjjWNSYHfll2j7JwTt/view?usp=sharing"
         target="_blank"
         rel="noreferrer"
      >
          <div className={styles.Resume_Main}>
            Resume 
            <GrDocumentPdf className={styles.Resume_GrDocumentPdf} />
        </div>
      </a>
        </div>
      </div>
    )
}
export default AboutMe