import React from 'react'


const Home = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">

        <div className="row1">
          <ul className='rowone'>
            <a href="https://boiling-beach-80721.herokuapp.com/">
              <li className="proj1">
                <h5>HYPE MACHINE<br></br>mern</h5>

              </li>
            </a>
            <a href="https://github.com/ShanoBueno/Read.you">
              <li className="proj2">
                <h5>READ.YOU GENERATOR<br></br>js/inquirer</h5>
              </li>
            </a>
            <a href="https://shanobueno.github.io/password-parrot/">
              <li className="proj3">
                <h5>PASSWORD PARROT<br></br>node/js</h5>

              </li>
            </a>
          </ul>
        </div>
        <div className='row2'>
          <ul>

            <a href="https://shanobueno.github.io/newsies/">
              <li className="proj4">
                <h5>NYT ARCHIVE<br></br>nyt api</h5>

              </li>
            </a>
            <a href="https://shanobueno.github.io/colorful-workday/">
              <li className="proj5">
                <h5>COLORFUL WORKDAY<br></br>js/css</h5>
              </li>
            </a>
            <a href="https://wicked-goblin-53396.herokuapp.com/">
              <li className="proj6">
                <h5>CHARTRACKER<br></br>sequelize/handlebars</h5>
              </li>
            </a>
          </ul>

        </div>

      </div>
      <div className="more">
        <p>More projects to come...</p>
      </div>
     

    </section>
  )

}

export default Home
