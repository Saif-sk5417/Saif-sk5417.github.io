
import ProjectCards from "./ProjectCard"
import img from '../Image/NatureTrug.jpg'
import img1 from '../Image/one.jpg'
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
     img ={img1}
     Name = {`DreamBath.com`}
     Description={`DreamBaths is an E-Commerce website that sells personal care and beauty products`}
     Live ='https://loyal-horse-6020-a7ac.vercel.app/'
     github='https://github.com/arupadhyay25/DreamBaths-E-Commerce-App'
     des = ': With the team of 5 developer'
     TypeOfProject ='Collabrative Project'
     time='5 days'
     Stack='ReactJS | Redux | ChakraUI | CSS | JavaScript'
     />
    <ProjectCards 
     alt = 'Project1'
     img ={img}
     Name = {`NatureTrug.com`}
     Description={`The best online grocery store in India. NatureTrug is an online supermarket for all your daily needs.`}
     Live ='https://unique-heliotrope-35567e.netlify.app/'
     github='https://github.com/Saif-sk5417/NatureTrug.com'
     des = ': With the team of 4 developer'
     TypeOfProject ='Collabrative Project'
     time='5 days'
     Stack='ReactJS | Redux | ChakraUI | CSS | JavaScript'
     />
    <ProjectCards 
     alt = 'Project1'
     img ='https://thedpmane.github.io/static/media/Licious.1321972b52b3e312bcf9.png'
     Name = {`Licious.com`}
     Description={`Licious is a online Supermarket & company serves the best, fresh and clean fish, chicken, meat, and eggs online.`}
     Live ='https://clone-licious-com.vercel.app/'
     github='https://github.com/Saif-sk5417/Licious.com'
     des = ': With the team of 5 developer'
     TypeOfProject ='Collabrative Project'
     time='5 days'
     Stack='ReactJS | Redux | ChakraUI | Mongoose | MongoDB | ExpressJS | NodeJS'
     />

    <ProjectCards 
     alt = 'Project1'
     img ='https://i.postimg.cc/Bv9WVhj4/Screenshot-1034.jpg'
     Name = {`ClotheYard.com`}
     Description={`ClotheYard.com is an E-Commerce website that sells Colths of All Age group and sizes online`}
     Live ='https://clotheyard1.netlify.app/'
     github='https://github.com/PriyanshuPatil/Clotheyard.com'
     des = ': With the team of 5 developer'
     TypeOfProject ='Collabrative Project'
     time='5 days'
     Stack='ReactJS | Redux | ChakraUI | Mongoose | MongoDB | ExpressJS | NodeJS'
     />
    </div>
    </div>
   </div>
 )
}

export default Project