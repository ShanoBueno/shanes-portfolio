import React from 'react';
import ResumePic from '../../img/resume.png';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <section className="resume">
        <a href="https://drive.google.com/file/d/1rWEOocCZQxrzE4_0Vii_mhXaD_I_nwS6/view?usp=sharing"><img src={ResumePic} alt="resume" /></a>
      </section>
    </div>


  )
}

export default Resume;
