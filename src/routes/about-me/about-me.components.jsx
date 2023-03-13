import './about-me.styles.scss'

const AboutMe=()=>{
    return(
        <div className="about-me-container">
            <h1>   <span> About </span>Me</h1><br/>
            <hr/>

            <div className="about-data">

                <div className="personal-data">
                    <h3>Personal Data</h3>
                    <ul>
                        <li> Name  :  Gopika Deepak</li>
                        <li>Age : 29</li>
                        <li>Qualification : B-Tech CSE</li>
                        <li>Language : English,Malayalam</li>
                    </ul>
                                        
                </div>

                <div className=" tech-skills"> 
                        <h3>Technical skills</h3>
                        <ul>
                            <li>C,C++,Java,Java Script</li>
                            <li>HTML/HTML5,CSS/CSS3</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>SQL,Oracle,MySql</li>
                            <li>Windows XP/7/10</li>
                            <li>Firebase</li>
                            <li>Git,GitHub</li>
                            <li>Redux</li>
                            <li>SASS</li>
                        </ul>
                </div>

                 
            
            </div>
           
        </div>
    )
}

export default AboutMe;