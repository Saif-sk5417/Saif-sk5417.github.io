import styles from './Resume.module.css'
import { GrDocumentPdf } from "react-icons/gr";
import Saif from '../Download/fw20_1170-Saif-Shaikh-Resume.pdf'
const Resume=()=>{
   const goto = ()=>{
         window.open("https://drive.google.com/file/d/1w56MA5PwaRjQDPjjjWNSYHfll2j7JwTt/view")
        }
    return(
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
    )
}
export default Resume