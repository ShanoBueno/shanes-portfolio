import React from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiOutlineLinkedin} from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'



const Contact = () =>{
  return(
    <div classname="contactl">
  <h2>Contact Info Here</h2>
  <div className="mail">
      <HiOutlineMailOpen size="50px"/>
     
      <p>shane.messmer1@gmail.com</p>
      
      <AiOutlineLinkedin size="50px"/>
      <a href="https://www.linkedin.com/in/shane-messmer-2bbb54b8/"><p>linkedin.com/shane-messmer</p></a>
      <GoMarkGithub size="50px"></GoMarkGithub>
      <a href="https://www.github.com/shanobueno"><p>Github.com/ShaneOBueno</p></a>
      </div>
  </div>
  
  )
}

export default Contact;

