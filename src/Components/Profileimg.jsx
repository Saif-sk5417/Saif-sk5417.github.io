
import img2 from '../Image/My_img2.jpeg'
import styles from './Profileimg.module.css'
export default function Profileimg(){
    return (
        <div className={styles.profile_main}>
            <img src={img2} alt="ProfileImage"/>
        </div>
    )
}