
import styles from  './ProjectCards.module.css'
import { FiGithub  } from 'react-icons/fi'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
const ProjectCards=({Name , Description ,img , alt ,techStack ,time,des,TypeOfProject,Live,github})=>{
    return(
        <div className={styles.ProjectCards_Main}>
           <div className={styles.ProjectCards_Img}>
            <img src={img} alt={alt}/>
           </div>
           <div>
            <div className={styles.ProjectCards_Name}>{Name}</div>
            <div className={styles.ProjectCards_Des}>{Description}</div>
            <div className={styles.ProjectCards_Des2}>
              <li><span className={styles.ProjectCards_highlight}>{TypeOfProject}</span>{des}</li>
              <li><span className={styles.ProjectCards_highlight}>Duration </span>:{time}</li>
            </div>
            <div >
              {techStack}
            </div>
            <div className={styles.ProjectCards_Buttons}>
                <a
                href={Live}
                target="_blank"
                rel="noreferrer"
                ><button>Live<BsFillArrowUpRightCircleFill className={styles.ProjectCards_Buttons_icons} /> </button></a>
                <a
                 href={github}
                 target="_blank"
                 rel="noreferrer"
                ><button>Github <FiGithub className={styles.ProjectCards_Buttons_icons} /></button></a>
            </div>
           </div>
        </div>
    )
}


export default ProjectCards