import './portfolio-item.styles.scss'

const PortfolioItem=({work})=>{
    const {name,language,details,link}=work;
    return(
          
         <div className="portfolio-item-container">
            <h2>{name}</h2>
            <h3>{language}</h3>
            <p>{details}</p>
            <button><a href={link} target="_blank" >See the Work</a></button>

         </div>
        
        

    )
}
export default PortfolioItem;