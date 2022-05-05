import React from 'react'
import '../styles/Nav.css'
import { LinkContainer } from 'react-router-bootstrap';

export default function Nav() {
  return (
    <div>
      <div className="container-fluid px-1 ">
        <div className="row d-flex w-100">
          <div className="col-md-8 nav-head  col-sm-8 bg-dark d-flex align-items-center justify-content-start">
            <div className="main">
              <div id="t"></div>

              <LinkContainer to='/'>
                <h4 className="text-white">venkatesh</h4>
              </LinkContainer>
              <div id="b"></div>
            </div>
          </div>
          <div className="col-md-4  col-sm-4  nav-c">
            <div className="nav">
              {/* <LinkContainer to="/">
                <li>Home</li>
              </LinkContainer> */}
              <LinkContainer to="/">
                <li>About</li>
              </LinkContainer>

              <LinkContainer to="/projects">
                <li>Projects</li>
              </LinkContainer>
              {/* <LinkContainer to="/contact">
                <li>Contact</li>
              </LinkContainer> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
