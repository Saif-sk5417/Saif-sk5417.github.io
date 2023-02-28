
import img from '../Image/My_img4.jpeg'
import styles from './About.module.css'
import { GrDocumentPdf } from "react-icons/gr";
import Saif from '../Download/fw20_1170-Saif-Shaikh-Resume.pdf'
const AboutMe =()=>{
  const goto = ()=>{
    window.open("https://drive.google.com/file/d/1w56MA5PwaRjQDPjjjWNSYHfll2j7JwTt/view")
   }
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
        <a href={Saif} 
         target="_blank"
         rel="noreferrer"
         download
      >
          <div className={styles.Resume_Main} onClick={goto}>
            Resume 
            <GrDocumentPdf className={styles.Resume_GrDocumentPdf} />
        </div>
      </a>
        </div>
      </div>
    )
}
export default AboutMe