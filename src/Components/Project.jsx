
import ProjectCards from "./ProjectCard"
import styles from './Project.module.css'
import { SiJavascript } from "react-icons/si";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di"
const Project = () =>{
 return (
   <div>
    <div className={styles.Project_title}>
       Projects
    </div>
    <div>
    <div className={styles.ProjectCards_Main}>
  <ProjectCards 
     alt = 'Project1'
     img ='https://vaibhav-sultane-portfolio.vercel.app/assets/img/jpg/Perpetual-Crusades.jpg'
     Name = {`BigBasket Clone`}
     Description={`The best online grocery store in India. bigbasket is an online supermarket for all your daily needs. Online shopping now made easy with a wide range of varity`}
     Live ='https://unrivaled-madeleine-7dd0ad.netlify.app/'
     github='https://github.com/Saif-sk5417/BigBasket-Clone'
     techStack={
      <div className={styles.Project_icons}>
        <div>
          <SiHtml5 />
        </div>
        <div>
          <DiCss3 />
        </div>
        <div>
         <SiJavascript />
        </div>
      </div>
    }
     TypeOfProject ='Individual Project'
     time='5 days'
     />
     <ProjectCards 
     alt = 'Project2'
     img ='https://vaibhav-sultane-portfolio.vercel.app/assets/img/jpg/Perpetual-Crusades.jpg'
     Name = {`EngageBay Clone`}
     Live ='https://lucent-lebkuchen-30e817.netlify.app/'
     github='https://github.com/Saif-sk5417/Engagebay-Clone'
     Description={`EngageBay is an affordable all-in-one CRM
                   with marketing, sales & support solution for
                   growing businesses`}
    techStack={
      <div className={styles.Project_icons}>
        <div>
          <SiHtml5 />
        </div>
        <div>
          <DiCss3 />
        </div>
        <div>
         <SiJavascript />
        </div>
      </div>
    }
     TypeOfProject ='Collaborative Project'
     des={` : accomplished with a team of 3 developers`}
     time='5 days'
     />
    </div>
    </div>
   </div>
 )
}

export default Project