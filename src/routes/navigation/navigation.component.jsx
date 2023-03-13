import { Link,Outlet } from 'react-router-dom'
import image from '../../assets/image.png'
import './navigation.styles.scss'


const Navigation=()=>{
    return(
        <div className="navigation-container">

            <div className="sidebar">

                <img src={image} alt='My Image'/><br/>
                <h1>Gopika Deepak</h1><br/>
                <h3>Front End Developer</h3><br/>


                

                <div className="navbar">
                    <ul>
                        <li><Link className="link" to={'/Portfolio/'} >Home</Link></li>
                        <li><Link className="link" to={'/Portfolio/aboutMe'} >About Me</Link></li>
                        <li><Link className="link" to={'/Portfolio/education'} >Education</Link></li>
                        <li><Link className="link" to={'/Portfolio/portfolio'} >My Portfolio</Link></li>
                        <li><Link className="link" to={'/Portfolio/contact'} >Contact</Link></li>
                    </ul>
                </div>
            
            </div>


            <Outlet/>
            
        </div>
    )
}
export default Navigation;