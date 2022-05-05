import React from 'react'
import '../styles/Home.css'


export default function HomeScreen() {
  return (
    <div>
      <div className="container-fluid bg-light shadow-lg">
        <div className="row home-r">
          <div className="col-md-7 home-c mt-2 py-3">
            <h2>
              Hello there,
            </h2>
            <h3>
              I am venkatesh Now Iam working as a{" "}
              <span className="text-white bg-success py-1 px-3 fw-bold">
                full-stack developer
              </span>
            </h3>
            {/* <p>Serching for new job right now</p> */}
          </div>
          <div className="col-md-5 mt-2 py-3">
            <img
              src="http://purepng.com/public/uploads/large/purepng.com-men-pointing-thumbs-uppeoplepersonsgesturesmanmalepointing-thumbs-up-1121525088552izp1f.png"
              id="pro-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
