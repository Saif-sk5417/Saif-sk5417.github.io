import styles from './Resume.module.css'
import { GrDocumentPdf } from "react-icons/gr";
const Resume=()=>{
    return(
      <a href="https://drive.google.com/file/d/1w56MA5PwaRjQDPjjjWNSYHfll2j7JwTt/view?usp=sharing"
         target="_blank"
         rel="noreferrer"
      >
          <div className={styles.Resume_Main}>
            Resume 
            <GrDocumentPdf className={styles.Resume_GrDocumentPdf} />
        </div>
      </a>
    )
}

export default Resume