
import Typewritter from 'typewriter-effect'
export const TypeWritter = () =>
{
   return(
    <>
     <Typewritter 
     onInit={(typewritter)=>{
          typewritter
          .typeString("A Full Stack Developer")
          .pause(2000)
          .deleteAll()
          .typeString("A Mern Stack Developer")
          .pause(2000)
          .deleteAll()
          .typeString("A Full Stack Developer")
          .pause(2000)
          .deleteAll()
          .typeString("A Mern Stack Developer")
          .pause(2000)
          .deleteAll()
          .typeString("A Full Stack Developer")
          .start() 
     }}
     />
    </>
   )

}