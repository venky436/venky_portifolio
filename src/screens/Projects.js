import React from 'react'
import '../styles/Projects.css'
import eco from '../ecommerce.png'
import dice from "../dice.png";
import age from "../age.png";
import face from "../facebook.png";



export default function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row qq-r" style={{ margin: "5rem 0 7rem 0" }}>
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
          <div className="col-md-4 col-4 col-sm-4  h-c bg-white ">
            <h2 className="qu-head bg-white">Projects</h2>
          </div>
          <div className="col-md-3 col-3 col-sm-3 l bg-danger"></div>
        </div>

        <div className="row p-r" style={{ padding: "3rem" }}>
          <div className="col-md-4 col-sm-4 col-5 my-3 ccc">
            <div className="card w-100">
              <img
                src={eco}
                className="d-block w-100 im"
              />
              <div className="card-body">
                <h3 className="card-title c-t">Ecommerce Store</h3>
                <hr />
                <p className="card-text">
                  It is a Ecommerce shoping website, i had built this with
                  react.js
                </p>
              </div>
              <hr />
              <div className="card-body d-flex">
                <a
                  href="https://estore-436.herokuapp.com/"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  View
                </a>
                <a
                  href="https://github.com/venky436/Estore"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-5 my-3 ccc">
            <div className="card w-100">
              <img
                src={dice}
                className="d-block w-100 im"
              />
              <div className="card-body">
                <h3 className="card-title c-t">Dice Game</h3>
                <hr />
                <p className="card-text">
                  It is a Dice game I built with html css javascript
                </p>
              </div>
              <hr />
              <div className="card-body d-flex">
                <a
                  href="https://venky436.github.io/NumberGame/"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  View
                </a>
                <a
                  href="https://github.com/venky436/NumberGame"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-5 my-3 ccc">
            <div className="card w-100">
              <img
                src="https://www.projectmanager.com/wp-content/uploads/2019/09/190916_Blog_Feature_Critical_Chain_PM.jpg"
                className="d-block w-100 im"
              />
              <div className="card-body">
                <h3 className="card-title c-t">Website Landing Page</h3>
                <hr />
                <p className="card-text">
                  website landing page i did this with Html Css
                </p>
              </div>
              <hr />
              <div className="card-body d-flex">
                <a
                  href="https://venky436.github.io/Home_Page/"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  View
                </a>
                <a
                  href="https://github.com/venky436/Home_Page"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-5 my-3 ccc">
            <div className="card w-100">
              <img
                src={face}
                className="d-block w-100 im"
              />
              <div className="card-body">
                <h3 className="card-title c-t">Facebook Login page</h3>
                <hr />
                <p className="card-text">it's just static page</p>
              </div>
              <hr />
              <div className="card-body d-flex">
                <a
                  href="https://venky436.github.io/NewtonSchool_Project-1/"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  View
                </a>
                <a
                  href="https://github.com/venky436/NewtonSchool_Project-1"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-5 my-3 ccc">
            <div className="card w-100">
              <img
                src={age}
                className="d-block w-100 im"
              />
              <div className="card-body">
                <h3 className="card-title c-t">Age calculator</h3>
                <hr />
                <p className="card-text">
                  You can calulate how many years and days since you were born
                </p>
              </div>
              <hr />
              <div className="card-body d-flex">
                <a
                  href="https://venky436.github.io/AgeCalculator//"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  View
                </a>
                <a
                  href="https://venky436.github.io/AgeCalculator"
                  id="btn"
                  target="_blank"
                  className="btn btn-outline-success"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
