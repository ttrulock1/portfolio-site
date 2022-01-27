import React from 'react';
import galleryimage from '../images/Gallery.png'
import notetaker from '../images/NoteTaker.png'
import codingquiz from '../images/CodingQuiz.png'
import passwordscreenshot from '../images/password gen screenshot.jpg'
import sampleimage from '../images/sample-image.jpg'
import camping from '../images/camping.png'
import weatherpic from '../images/weatherapp.png'


const Portfolio = props => {
    let resumeData = props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData && resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div>
            
                    <div class="list-group" id="list-tab" role="tablist">
                       <a class="list-group-item list-group-item-action active" id="list-readme-list" data-toggle="list" href="#list-readme" role="tab" aria-controls="readme">Password Generator</a>
                       <a class="list-group-item list-group-item-action" id="list-portfolio-list" data-toggle="list" href="#list-portfolio" role="tab" aria-controls="portfolio">----Coding Quiz SIte----</a>
                       <a class="list-group-item list-group-item-action" id="list-Plan-list" data-toggle="list" href="#list-Plan" role="tab" aria-controls="Plan"> Daily Schedule Planner</a>
                       <a class="list-group-item list-group-item-action" id="list-pw-list" data-toggle="list" href="#list-pw" role="tab" aria-controls="pw">----- Weather Dashboard-----</a>
                       <a class="list-group-item list-group-item-action" id="list-btProject-list" data-toggle="list" href="#list-btProject" role="tab" aria-controls="btProject">Budget Tracker</a>
                       <a class="list-group-item list-group-item-action" id="list-run-list" data-toggle="list" href="#list-run" role="tab" aria-controls="run">---- Run Buddy</a>
                       <a class="list-group-item list-group-item-action" id="list-project3" data-toggle="list" href="#project-3" role="tab" aria-controls="project3">---- Project3:Photo Albulm</a>
                    </div>
               
                    <div class="tab-content" id="nav-tabContent">
                    <div className="portfolio-item-meta">
                        <div class="tab-pane fade show active" id="list-readme" role="tabpanel" aria-labelledby="list-readme-list">
                            <img id="img" src= {passwordscreenshot} className="item-img" alt="GIF of README app use" width="100%" />
                            <p><b>Password Generator</b></p>
                            <p>Deployed at: <a href="https://ttrulock1.github.io/homework-three/" target="_blank"> https://ttrulock1.github.io/homework-three/</a> </p>
                            <p>GitHub repository: <a href="https://github.com/ttrulock1/homework-three/" target="_blank">https://ttrulock1.github.io/homework-three</a></p>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-portfolio-list">
                            <img id="img" src={codingquiz} className="item-img" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Coding Quiz Site</b></p>
                            <p>Deployed at: <a href="https://ttrulock1.github.io/homework-four/" target="_blank">https://ttrulock1.github.io/homework-four/</a></p>
                            <p>GitHub repository: <a href="https://github.com/ttrulock1/homework-four/" target="_blank">https://ttrulock1.github.io/homework-four</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-Plan" role="tabpanel" aria-labelledby="list-Plan-list">
                            <img id="img" src={sampleimage} className="item-img" alt="Cardio Screenshot" width="100%" />
                            <p><b>Daily Schedule Planner</b></p>
                            <p>Deployed at: <a href="https://ttrulock1.github.io/homework-five/" target="_blank">https://ttrulock1.github.io/homework-five/</a></p>
                            <p>GitHub repository: <a href="https://github.com/ttrulock1/homework-five/" target="_blank">https://ttrulock1.github.io/homework-five</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-pw" role="tabpanel" aria-labelledby="list-pw-list">
                            <img id="img" src={weatherpic} className="item-img" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Weather Dashboard</b></p>
                            <p>Deployed at: <a href="https://ttrulock1.github.io/homework-six/" target="_blank">Weather Dashboard</a></p>
                            <p>GitHub repository: <a href="https://ttrulock1.github.io/homework-six" target="_blank">https://ttrulock1.github.io/homework-six</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-btProject" role="tabpanel" aria-labelledby="list-btProject-list">
                            <img id="img" src={camping} className="item-img" alt="Camping1" width="100%" />
                            <p><b>Camping Project 1</b></p>
                            <p>Deployed at: <a href="https://vincentmomot.github.io/Camping-in-the-SouthEast/" target="_blank">Camping</a></p>
                            <p>GitHub repository: <a href="https://github.com/VincentMomot/Camping-in-the-SouthEast" target="_blank">https://vincentmomot.github.io/Camping-in-the-SouthEast/</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-run" role="tabpanel" aria-labelledby="list-run-list">
                            <img id="img" src={galleryimage} className="item-img" alt="Gallery Screenshot" width="100%" />
                            <p><b>Gallery Project 2</b></p>
                            <p>Deployed at: <a href="https://gallerybootcampproject.herokuapp.com/"> https://gallerybootcampproject.herokuapp.com/</a> </p>
                            <p>GitHub repository: <a href="https://github.com/ttrulock1/BootcampProject2" target="_blank">https://gallerybootcampproject.herokuapp.com</a></p>
                        </div>
                        <div class="tab-pane fade" id="list-project3" role="tabpanel" aria-labelledby="list-project3">
                            <img id="img" src={notetaker} className="item-img" alt="Photoalbulm screenshot" width="100%" />
                            <p><b>NoteTaker App</b></p>
                            <p>Deployed at: <a href="https://shielded-springs-24478.herokuapp.com/" target="_blank">Note Taker</a></p>
                            <p>GitHub repository: <a href="https://github.com/ttrulock1/Homework11" target="_blank">https://shielded-springs-24478.herokuapp.com</a></p>
                        </div>
                    </div>
                   
                  </div>
                
     
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
export default Portfolio



