import React from 'react';
import { Link } from 'react-router-dom'

const Header = props => {
    let resumeData = props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">


    <nav>
      <Link to='/'>About Me</Link>
      <Link to='/contact'>Contact Me</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/portfolio'>Portfolio</Link>
    </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Meet {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               
            </div>
         </div>


      </header>
      </React.Fragment>
    );
  }
export default Header