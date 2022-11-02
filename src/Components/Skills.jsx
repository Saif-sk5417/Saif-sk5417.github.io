import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import styles from './Skills.module.css'


const Skills =()=>{
    return (
        <div className={styles.Skills_Main}>
          <div className={styles.Skills_Heading}>Skills</div>
          <div className={styles.Skills_Icons}>
           <div>
            <SiHtml5 />
              <p className={styles.Skills_P}>HTML</p>
            </div>
           <div>
            <DiCss3 />
            <p className={styles.Skills_P}>CSS3</p>
            </div>
           <div>
            <SiJavascript />
            <p className={styles.Skills_P}>JavaScript</p>
            </div>
           <div>
            <FaReact />
            <p className={styles.Skills_P}>React.js</p>
            </div>
           <div>
            <SiRedux />
            <p className={styles.Skills_P}>Redux</p>
            </div>
           <div>
            <FaNodeJs />
            <p className={styles.Skills_P}>Node.js</p>
            </div>
           <div>
            <SiExpress />
            <p className={styles.Skills_P}>Express.js</p>
            </div>
           <div>
            <DiMongodb />
            <p className={styles.Skills_P}>Mongodb</p>
            </div>
           <div>
            <VscGithub />
           <p className={styles.Skills_P}>Github</p>
           </div>
           <div>
            <SiNetlify />
            <p className={styles.Skills_P}>Netlify</p>
            </div>
          </div>
        </div>
    )
}
export  default Skills