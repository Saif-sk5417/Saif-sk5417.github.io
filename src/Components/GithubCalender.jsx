import GitHubCalendar from 'react-github-calendar';
import styles from './GithubCalender.module.css'
import ReactTooltip from 'react-tooltip'


const MyGitHubCalendar=()=>{
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 10;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
      
    return (
      <div className={styles.GitHubCalendar_Main}>
        <div className={styles.GitHubCalendar_title}>My Github Calender & Stats</div>
          <div>
            <GitHubCalendar
            className={styles.GitHubCalendar}
             username="Saif-sk5417"
             blockSize={16}
             fontSize={12}
             color={'#1185b2'}
             >
             <ReactTooltip delayShow={20} html />
             </GitHubCalendar>
        </div>
      </div>
    )
}

export  default MyGitHubCalendar