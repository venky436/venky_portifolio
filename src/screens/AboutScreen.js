import React from 'react'
import '../styles/About.css'
import '../styles/Home.css'
import ReactTypingEffect from "react-typing-effect";
import my from '../my.jpg'

export default function AboutScreen() {
  return (
    <div>
      <div className="container-fluid bg-light">
        {/* <div className='row'>
          <div className='col-md-3'>
             <h3 id='about'>About me</h3>
          </div>
        </div> */}
        {/* <div className="container-fluid bg-light shadow-lg"> */}
        <div className="row home-r">
          <div className="col-md-7 home-c mt-2 py-3">
            <h2>Hello there,</h2>
            <h3 className="ty fw-bold">
              I am
              <span className="text-danger   py-1 px-3 fw-bold">
                <ReactTypingEffect
                  text={[
                    "Venkatesh",
                    "A Front-End developer!",
                    "A Back-End Developer",
                    "A Freelancer,",
                  ]}
                  eraseDelay="2000ms"
                  typingDelay="2000ms"
                  // speed='600ms'
                />
              </span>
            </h3>
            {/* <p>Serching for new job right now</p> */}
          </div>
          {/* "http://purepng.com/public/uploads/large/purepng.com-men-pointing-thumbs-uppeoplepersonsgesturesmanmalepointing-thumbs-up-1121525088552izp1f.png" */}
          <div className="col-md-5  mt-2 d-flex align-items-center justify-content-center c-img">
            <div id="main-img" className="shadow-lg">
              <img src={my} id="pro-img" />
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="row skill-r">
          <div className="row mt-5 qq-r">
            <div className="col-md-3 col-2 col-sm-2 l bg-danger"></div>
            <div className="col-md-4 col-4 col-sm-4  h-c bg-white ">
              <h2 className="qu-head bg-white">Skills</h2>
            </div>
            <div className="col-md-3 col-2 col-sm-2 l bg-danger"></div>
          </div>

          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Javascript</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Html</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Css</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">React.js</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Python</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Django</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">Bootstrap</h3>
          </div>
          <div className="col-md-2 s-c bg-success">
            <h3 id="lan">PostgreSQL</h3>
          </div>
        </div>

        <div className="row about-row ">
          {/* <div className="col-md-4 mx-1">
            
          </div> */}
          <div className="col-md-6  shadow-sm bg-white mx-1 my-2 rate-c">
            <div className="top">
              <h3>Css</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar"></div>
                </div>
                <span id="rate">84%</span>
              </div>
            </div>
            <div className="top">
              <h3>Html</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-2"></div>
                </div>
                <span id="rate">87%</span>
              </div>
            </div>
            <div className="top">
              <h3>JavaScript</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-3"></div>
                </div>
                <span id="rate">90%</span>
              </div>
            </div>
            <div className="top">
              <h3>React</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-4"></div>
                </div>
                <span id="rate">86%</span>
              </div>
            </div>
            <div className="top">
              <h3>Python</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-5"></div>
                </div>
                <span id="rate">75%</span>
              </div>
            </div>{" "}
            <div className="top">
              <h3>Django</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-6"></div>
                </div>
                <span id="rate">78%</span>
              </div>
            </div>
            <div className="top">
              <h3>DSA</h3>

              <div className="d-flex align-items-center">
                <div className="bar-main shadow-lg">
                  <div className="bar-7"></div>
                </div>
                <span id="rate">60%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 qq-r">
          <div className="col-md-3 col-2 col-sm-2 l bg-danger"></div>
          <div className="col-md-4 col-4 col-sm-4  h-c bg-white ">
            <h2 className="qu-head bg-white">About me</h2>
          </div>
          <div className="col-md-3 col-2 col-sm-2 l bg-danger"></div>
        </div>
        <div className="row ab-r">
          <div className="col-md-5">
            <span className="text-dark fw-bold fs-2">Name :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">Venkatesh</span>
          </div>

          <div className="col-md-5">
            <span className="text-dark fw-bold fs-2">Github :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">
              https://github.com/venky436
            </span>
          </div>
          {/* <div className="col-md-12 mx-1 my-4 bg-white p-3 detail-c shadow-lg  h-100 text-white"> */}
          <div className=" col-md-5">
            <span className="text-dark fw-bold fs-2">Birthday :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">05 aug 1999</span>
          </div>

          <div className="col-md-5 ">
            <span className="text-dark fw-bold fs-2">City :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">Sattenpalli</span>
          </div>

          {/* <div className="col-md-5 ">
            <span className="text-dark fw-bold fs-2">Website :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">http//:venky.com</span>
          </div> */}

          <div className="col-md-5">
            <span className="text-dark fw-bold fs-2">Age :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">22</span>
          </div>

          <div className="col-md-5">
            <span className="text-dark fw-bold fs-2">Email :</span>&nbsp;
            <span className="text-dark fs-2 fw-bold ">
              venkateshpannuri436@gmail.com
            </span>
          </div>

          <div className="col-md-5">
            <span className="text-dark fw-bold fs-2">Phone :</span>&nbsp;
            <span className="text-dark fs-3 fw-bold ">7997290161</span>
          </div>
        </div>
        {/* </div> */}

        {/* Qulification */}
        <div className="row mt-5 qq-r">
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
          <div className="col-md-4 col-4 col-sm-4  h-c bg-white ">
            <h2 className="qu-head bg-white">Qulification</h2>
          </div>
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
        </div>

        <div className="row d-flex align-items-center justify-content-center my-4">
          <div className="col-md-4 col-sm-4 shadow-lg bg-dark text-white q-c ">
            <h3 id="course">B tech</h3>
            <div id="coll">
              <span id="c-head">College : </span>
              <span>V R Siddhartha Engineering college</span>
            </div>
            <div id="coll">
              <span id="c-head">Branch : </span>
              <span>Mechanical</span>
            </div>
            <div id="coll">
              <span id="c-head">CGPA : </span>
              <span>5.8</span>
            </div>
            <div id="coll">
              <span id="c-head">Studied At : </span>
              <span>Vijayawada</span>
            </div>
            <div id="coll">
              <span id="c-head">Start : </span>
              <span>july 072016</span>&nbsp;&nbsp;&nbsp;
              <span id="c-head">End : </span>
              <span>march 05 2022</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 shadow-lg bg-dark text-white q-c">
            <h3 id="course">Intermediate</h3>
            <div id="coll">
              <span id="c-head">College : </span>
              <span>Vasavi junior college</span>
            </div>
            <div id="coll">
              <span id="c-head">Group : </span>
              <span>MPC</span>
            </div>
            <div id="coll">
              <span id="c-head">CGPA : </span>
              <span>8.3</span>
            </div>
            <div id="coll">
              <span id="c-head">Studied At : </span>
              <span>Narasaraopet</span>
            </div>
            <div id="coll">
              <span id="c-head">Start : </span>
              <span>july 07 2014</span>&nbsp;&nbsp;&nbsp;
              <span id="c-head">End : </span>
              <span>march 10 2016</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 shadow-lg bg-dark text-white q-c">
            <h3 id="course">School</h3>
            <div id="coll">
              <span id="c-head">School : </span>
              <span>ST Ann's High School</span>
            </div>
            {/* <div id="coll">
              <span id="c-head">Branch : </span>
              <span>Mechanical</span>
            </div> */}
            <div id="coll">
              <span id="c-head">CGPA : </span>
              <span>8.2</span>
            </div>
            <div id="coll">
              <span id="c-head">Studied At : </span>
              <span>Tallacheruvu</span>
            </div>
            <div id="coll">
              <span id="c-head">Start : </span>
              <span>junu 12 2013</span>&nbsp;&nbsp;&nbsp;
              <span id="c-head">End : </span>
              <span>April 24 2014</span>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="row  py-3 t-r  mt-3 ">
          <div className="col-md-11  bg-white mx-auto a-top shadow-sm">
            <h3>
              <span className="text-danger">I</span> am venkatesh
            </h3>
            <p>
              <i class="fas fa-hand-point-right text-success"></i> I did not
              work any company but personally i have more than 1 year experience
              on these technologies.Now i can bulid complete website i think i
              will get good job soon
              <p>
                <i class="fas fa-hand-point-right text-danger"></i> If you need
                any developer to work on your front-end related project please
                send me a mail or message actually i am working as a Freelancer
                also i will definitely help you
              </p>
            </p>
          </div>
        </div>

        {/* <div className="row mt-5 qq-r">
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
          <div className="col-md-4 col-4 col-sm-4  h-c bg-white ">
            <h2 className="qu-head bg-white">Contact</h2>
          </div>
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
        </div> */}

        <div className="row my-4 bg-dark">
          <div className="col-md-6 col-8 col-sm-7 con-c">
            <h3>
              <span id="h">Email :</span>{" "}
              <span>venkateshpannuri436@gmail.com</span>
            </h3>
            <h3>
              <span id="h">Mobile :</span> <span>7997290161</span>
            </h3>
            <h3>
              <span id="h">Facebook :</span>{" "}
              <span>https://www.facebook.com/venkatesh.pannuri/</span>
            </h3>
          </div>

          <div className="col-md-5 col-3 col-sm-4 con-2-c">
            <h3>Services</h3>
            <ul>
              <li>
                <i className="fas fa-hand-point-right"></i> Front-End Work
              </li>
              <li>
                <i className="fas fa-hand-point-right"></i> Back-End Work
                (Python,Django)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
