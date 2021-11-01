import React from 'react'
import ShanePic from '../../img/shane.png';


const About=()=> {
  return(
    <div>
    <h2>About Me</h2>
    <div className="img">
    <img src={ShanePic} alt="Shane" height="25%" width="25%" ></img>
    </div>
    <div className="aboutp">
      <p>Welcome to Shane's Brain, my fullstack engineering portfolio built using React. For the past two years I have 
        been learning fullstack software engineering with the goal of becoming a Jr. Software Developer. In my portfolio you'll find 
        different projects using a multitude of languages. From a fullstack social media application, to utilities for developers using Inquirer, 
        you'll find I have acquired many software engineering techniques. I am extremely excited
        to become a part of the greatest technological revolution we are currently experiencing. 
      

      </p>
    </div>
    </div>
  )

}

export default About