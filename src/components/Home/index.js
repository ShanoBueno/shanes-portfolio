import React from "react";

const Home = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <ul className = "projects">
      <div className="portfolio">
       
      <div class="desc">
              <a href="https://www.getedify.co">
                <li className="proj0">
                
                </li>
              </a>

              <p>
                Edify: A developer tool that allows users to create slack learning paths for onboarding Software Engineer. I was responsible for rebuilding front-end components based off wireframes as well as creating unit tests for the back-end API. 
                <br></br>
                <br></br>
                Tech-Stack: ReactJS, TypeScript, MySQL, AWS, NodeJS
                <br></br>
                <br></br>
             
                <br></br>
              </p>
            </div>
            <div class="desc">
              <a href="https://boiling-beach-80721.herokuapp.com/">
                <li className="proj1">
                
                </li>
              </a>

              <p>
                Hype-Machine: A social media website created for users to share
                what events they are most excited for, with a countdown timer to
                the event attached to each post.
                <br></br>
                <br></br>
                Tech-Stack: MongoDB, ExpressJS, ReactJS, Node.js, GraphQL
                <br></br>
                <br></br>
                <a href="https://github.com/ShanoBueno/shanes-portfolio">
                  Github Repo Link
                </a>
                <br></br>
              </p>
            </div>
            <div class="desc">
              <a href="https://github.com/ShanoBueno/Read.you">
                <li className="proj2">
                
                </li>
              </a>

              <p>
                Read.You Generator: An easy-to-use tool for software engineers
                to create clear, concise, and organized readme.md files for
                projects.
                <br></br>
                <br></br>
                Tech-Stack: Inquirer, JavaScript
                <br></br>
                <br></br>
                <a href="https://github.com/ShanoBueno/Read.you.git">
                  Github Repo Link
                </a>
              </p>
            </div>
            <div className="desc">
              <a href="https://shanobueno.github.io/password-parrot/">
                <li className="proj3">
                  
                </li>
              </a>
              <p>
                Password Parrot: A password generator allowing users to
                customize the password properties, like the use of uppercase
                characters, special characters, and numbers.
                <br></br>
                <br></br>
                Tech-Stack: JavaScript, Node.js
                <br></br>
                <br></br>
                <a href="https://github.com/ShanoBueno/password-parrot.git">
                  Github Repo Link
                </a>
              </p>
            </div>
          
        
       
          
            <div className="desc">
              <a href="https://shanobueno.github.io/newsies/">
                <li className="proj4">
                  
                </li>
              </a>

              <p>
                NYTIMES Archive: Utilizes the NYTimes Archive API to generate a
                list of headlines and article links from user selected months
                and years.
                <br></br>
                <br></br>
                Tech-Stack: NYTimes Archive API, JavaScript, AJAX
                <br></br>
                <br></br>
                <a href="https://github.com/ShanoBueno/newsies.git">
                  Github Repo Link
                </a>
              </p>
            </div>
            <div className="desc">
              <a href="https://shanobueno.github.io/colorful-workday/">
                <li className="proj5">
                  
                </li>
              </a>
              <p>
                Colorful Workday: A weekly organizer allowing users to add
                appointments. Dynamically color coded by the time of the day.
                <br></br>
                <br></br>
                Tech-Stack: JavaScript, CSS, Node.js
                <br></br>
                <br></br>
                <a href="https://github.com/ShanoBueno/newsies.git">
                  Github Repo Link
                </a>
              </p>
            </div>
            <div className ="desc">
            <a href="https://wicked-goblin-53396.herokuapp.com/">
              <li className="proj6">
              
              </li>
            </a>
            </div>
          
  
        
      </div>
       </ul>
      <div className="more">
        <p>More projects to come...</p>
      </div>
    </section>
  );
};

export default Home;
