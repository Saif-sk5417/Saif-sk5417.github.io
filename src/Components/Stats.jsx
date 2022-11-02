const Stats = () => {
    return (
      // streak 
      <div>
        <div style={{ width: "97%", margin: "auto" ,marginTop:'50px' ,display:'grid'
       ,gridTemplateColumns:'repeat(3,1fr)'
     }}>
          <a href="https://github.com/Saif-sk5417">
            <img
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Saif-sk5417"
            />
          </a>
          <a href="https://github.com/Saif-sk5417">  
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saif-sk5417"  //launguages
            />
          </a>
          <a href="https://github.com/Saif-sk5417">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Saif-sk5417&count_private=true&show_icons=true" //stats
            />
          </a>
        </div>
      </div>
    );
  };
  
  export default Stats;