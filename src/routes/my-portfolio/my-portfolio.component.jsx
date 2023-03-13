import './my-portfolio.styles.scss'
import MY_WORKS from '../../PORTFOLIO_DATA';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import { useState } from 'react';

const MyPortfolio=()=>{
    const [portfolios,setPortfolios]=useState(MY_WORKS);

    const buttonHandler=(event)=>{
        const value=event.currentTarget.value;
        if(value!=='all'){
        const worksCopy=MY_WORKS.filter(work=>{return (work.language===value)})
        setPortfolios(worksCopy);
        return;
        }
        setPortfolios(MY_WORKS);

    }
    return(
        <div className="portfolio-container">
            <h1>My <span>Portfolio</span></h1><br/><hr/>
            <div className='data-container'>
                <div className='button-container'>
                    <button value={'all'} onClick={buttonHandler} className='button all' >All</button>
                    <button value={"JavaScript"} onClick={buttonHandler} className='button javaScript'>Javascript</button>
                    <button value={'React'} onClick={buttonHandler}className='button react'>React</button>
                </div>
                <div className='items-container'>
                   {  portfolios.map((work)=> (<PortfolioItem key={work.id} work={work}/>))
                    }

                    
                   
                   
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio;