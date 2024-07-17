import React from "react";
import { Helmet } from "react-helmet";

// import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog,
//      Education, Experience, Contacts,
//       Projects, Services, Achievement } from '../../components'
// When i will add my own  blog and testomonial then i will use above import
import {
  About,
  Contacts,
  Experience,
  Footer,
  Landing,
  Navbar,
  Projects,
  Skills
} from "../../components";
import Achievements from "../../components/Achievements/Achievements";
import { headerData } from "../../data/headerData";
function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      
      <About/>
      <Skills />
      {/* <Education /> */}
      <Achievements/>
      
      <Experience />
      <Projects />
      
      
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
