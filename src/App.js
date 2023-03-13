import { Routes,Route } from 'react-router-dom';
import './App.scss';
import AboutMe from './routes/about-me/about-me.components';
import Contact from './routes/contact/contact.component';
import Education from './routes/education/education.components';
import Home from './routes/home/home.component';
import MyPortfolio from './routes/my-portfolio/my-portfolio.component';
import Navigation from './routes/navigation/navigation.component';

const App=()=>{
  return(
    <div className='app-container'>
    <Routes>

      <Route path='/Portfolio/' element={<Navigation/>}>

        <Route index element={<Home/>}/>
        <Route path='aboutMe' element={<AboutMe/>}/>
        <Route path='education' element={<Education/>}/>
        <Route path='portfolio' element={<MyPortfolio/>}/>
        <Route path='conttact' element={<Contact/>}/>

      </Route>

    </Routes>
    </div>
  )
}

export default App;