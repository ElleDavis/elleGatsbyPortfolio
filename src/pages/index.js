import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
// import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Full-Stack Developer</h2>
            <p className="text-white-50">
            I am a Software Engineer, transitioning from the Education and Non-Profit Management Sector. I am proficient in building web applications with the MERN stack, Javascript frameworks, libraries, and databases. 
            I aim to develop responsive and accessible applications that are performant, scalable, and thoughtfully designed for maintainability.
            Check out my recent projects
              <a href="https://github.com/ElleDavis"> on github !
              </a>
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>
              <a href="https://github.com/ElleDavis/FullStackAcademy_react"> 
              FullStack Academy Landing
              </a>
              </h4>
              <p className="text-black-50 mb-0">
              This Full-Stack project uses React, Bootstrap, Node, Express etc. to allow staff at FullStack Academy to Register for an account, Login be authenticated and authorized to access organization information.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">
                  <a href="https://github.com/ElleDavis/TeacherDirectory"> Teacher Directory Database
                  </a>
                  </h4>
                  <p className="mb-0 text-white-50">
                    This Back-end project provides Educational Institutions a structure to collect and store organizational information such as private staff and student data and currriculum content. This databases uses MongoDB,Postman, Json Web Tokens, SALT etc.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">
                  <a href="https://github.com/ElleDavis/Redlight_Greenlight"> Red Light, Green Light
                  </a>
                  </h4>
                  <p className="mb-0 text-white-50">
                    This Front-end project use vanilla Javascript, html and css. It provides the User with randomized color buttons. The user is only to click the green buttons. For each green button the user clicks they will recieve a point, for each red button selected the user will recieve a speeading ticket. After recieving 3 speeding tickets the user loses the game, after 3 points the user will win !
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
