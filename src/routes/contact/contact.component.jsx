import './contact.styles.scss'

const Contact=()=>{
    return(
        <div className="contact-container">
        <h1> <span>CONTACT </span>Me</h1><br/><hr/>
       
            <div className="contact-top-data">

                    <h4>  <i className="fas fa-envelope-square"></i> gopikadeepakcse@gmail.com</h4>
                    <h4> <i className="fas fa-phone-square-alt"></i> 00 971 52 951 5192</h4>
                    <h4><i className="fas fa-phone-square-alt"></i> (04) 342 8364</h4>

            </div>
            
            
            <div className="contact-bottom-data">
                
                <h4><i class="fab fa-linkedin">  </i>  Gopika Deepak</h4>
                <h4><i class="fab fa-github"> </i>   gopikagithub</h4>
            </div>
        </div>

    );
}

export default Contact;