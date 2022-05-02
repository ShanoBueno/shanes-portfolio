import React from 'react';
import ResumePic from '../../img/resume.png';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <section className="resume">
        <a href="https://docs.google.com/document/d/1b2or9FbEXDczGBEAp14z5qOWrrApwJ89/edit?usp=sharing&ouid=111885417226690669503&rtpof=true&sd=true"><img src={ResumePic} alt="resume" /></a>
      </section>
    </div>


  )
}

export default Resume;
