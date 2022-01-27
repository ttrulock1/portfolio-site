import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Header from "./components/Header"
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import './App.css'
import Main from './components/Main';
import resumeData from './resumeData';

function App (){
  const { pathname } = useLocation()

  return(
    <div className='app'>
    <Header  resumeData={resumeData} pathname={pathname}/>

    
    <Routes>
      <Route path='resume' element={<Resume resumeData={resumeData} />}/>
      <Route path='contact' element={<ContactUs resumeData={resumeData}/>}/>
      <Route path='portfolio' element={<Portfolio resumeData={resumeData}/>}/>
      <Route path='*' element={<About resumeData={resumeData}/>}/>
    </Routes>
    <Footer  resumeData={resumeData}/>
    </div>
  )
}


// import React, { Component } from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import resumeData from './resumeData';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header resumeData={resumeData}/>
//         <About resumeData={resumeData}/>
//         <Resume resumeData={resumeData}/>
//         <Portfolio resumeData={resumeData}/>
//         <Testimonials resumeData={resumeData}/>
//         <ContactUs resumeData={resumeData}/>
//         <Footer resumeData={resumeData}/>
//       </div>
//     );
//   }
// }




export default App;

