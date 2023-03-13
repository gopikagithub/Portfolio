import { Outlet } from 'react-router-dom';
import './home.styles.scss';

const Home=()=>{
    return(
        <div className='home-container'>
            
            <Outlet/>

            <h3> HI THERE !</h3><br/>

            <h1>I'M <span>GOPIKA DEEPAK</span></h1><br/>

            <p>Enthusiastic Web Developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of web developing. Motivated to learn, grow and excel in software industry.  </p>
            <br/><p>My hands-on work experience has allowed me to hone the development of my web development skills and problem solving abilities. I am eager for the opportunity to learn from and contribute to the team by applying my leadership, problem-solving and teamwork skills.</p>
            
        </div>
    )
}
export default Home;