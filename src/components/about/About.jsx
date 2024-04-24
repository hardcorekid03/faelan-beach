import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import f1 from "./images/1.jpg";
import f2 from "./images/2.jpg";
import f3 from "./images/3.jpg";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="main">
        <section className="caru">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" id="item1">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Welcome to Faelan Beach Resort</h1>
                    <p className="opacity-75">
                      Unwind in lavish rooms with breathtaking sea views.
                    </p>
                    <p>
                      <Link
                        to="https://www.facebook.com/faelanbeach"
                        className="btn btn-outline-light"
                      >
                        Visit us on Facebook
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="item2">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Relaxation and Serenity.</h1>
                    <p>
                      Recharge your mind, body, and soul in a serene beach
                      retreat.
                    </p>
                    <p>
                      <Link to="/contact" className="btn btn-outline-light">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="item3">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>Exciting Beach Activities.</h1>
                    <p>
                      From snorkeling to beach volleyball, there's something for
                      everyone.
                    </p>
                    <p>
                      <Link className="btn btn-outline-light" to="/gallery">
                        Browse gallery
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className="contents container py-5">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 text-dark">
                Faelan Beach Resort
              </h2>
              <p className="lead text-body-secondary">
                <em>Let the sea sets you free!</em>
              </p>
              <p className="lead text-body-secondary">
                <small>
                  Welcome to <strong> Faelan Beach Resort </strong> , where
                  tranquility meets luxury amidst the stunning backdrop of
                  pristine shores and lush landscapes. Nestled along the azure
                  coastline, our resort offers an unforgettable escape for those
                  seeking solace and adventure alike.
                </small>
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid mx-auto shadow-sm" src={f1}></img>
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1 text-dark">
                Your Dream Escape Awaits
              </h2>
              <p className="lead lead text-body-secondary">
                <small>
                  At Faelan Beach Resort, we envision creating a sanctuary where
                  every guest can rejuvenate their mind, body, and spirit. Our
                  aim is to provide unparalleled hospitality, ensuring that
                  every moment spent with us is filled with joy, relaxation, and
                  cherished memories.{" "}
                </small>
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="img-fluid mx-auto shadow-sm" src={f2}></img>
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 text-dark">
                Our Location
              </h2>
              <p className="lead lead text-body-secondary">
                <small>
                  Located on the picturesque shores of
                  <strong> Brgy. Mabacong , Batangas City, Philippines, </strong>
                  Faelan Beach Resort boasts an enviable setting that seamlessly
                  blends natural beauty with modern comforts. Whether you're
                  lounging on the sun-kissed sands or exploring the rich marine
                  life beneath the waves, our prime location offers endless
                  opportunities for exploration and relaxation.{" "}
                </small>
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid mx-auto shadow-sm" src={f3}></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
