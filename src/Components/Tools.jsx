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
import { SiJavascript ,SiTypescript,SiChakraui,SiPostman,SiVercel} from "react-icons/si";
import { VscGithub,VscRunAll } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import styles from './Skills.module.css'


const Tools =()=>{
    return (
        <div className={styles.Skills_Main}>
          <div className={styles.Skills_Heading}>Tech Tools</div>
          <div className={styles.Skills_Icons}>
           <div>
            <VscRunAll />
              <p className={styles.Skills_P}>VScode</p>
            </div>
           <div>
            <VscGithub />
            <p className={styles.Skills_P}>Github</p>
            </div>
           <div>
            <SiPostman />
            <p className={styles.Skills_P}>PostMan</p>
            </div>
           <div>
            <SiNetlify  />
            <p className={styles.Skills_P}>Netlify</p>
            </div>
           <div>
            <SiVercel />
            <p className={styles.Skills_P}>Vercel</p>
            </div>
          </div>
        </div>
    )
}
export  default Tools