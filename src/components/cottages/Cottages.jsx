import React from "react";
import { useEffect } from "react";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import c6 from "./images/c6.jpg";
function Cottages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <section className="py-5 container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto text-center">
              <h1 className="fw-light">Bask in Serene Comfort</h1>
              <p className="lead text-body-secondary">
                Escape to your own private oasis amidst the lush surroundings of
                Faelan Beach Resort's charming cottages.
              </p>
            </div>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xlink:href="PATH_TO_YOUR_IMG.png"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <image
                        xlinkHref={c2}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        Tables crafted from bamboo at beach resorts infuse
                        rustic allure, harmonizing with the environment,
                        enriching tranquil dining settings.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                          >
                            Bamboo Table
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 500.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <image
                        xlinkHref={c1}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        Offer scenic dining experiences, complementing the
                        coastal ambiance, creating memorable moments by the
                        shore.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                          >
                            Anahaw Seaside
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 800.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <image
                        xlinkHref={c3}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        Provide unique accommodations, offering panoramic views
                        of the sea, ensuring a tranquil and memorable stay.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                          >
                            Floating Cottage
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 1,500.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <image
                        xlinkHref={c4}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        Offers traditional Filipino charm, featuring bamboo
                        architecture, providing cozy and authentic
                        accommodations by the sea.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                          >
                            Bahay Kubo
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 1,000.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <image
                        xlinkHref={c5}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        At beach resorts, unassuming tables offer a relaxed
                        environment, perfect for enjoying meals and admiring the
                        surroundings with ease
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                          >
                            Anahaw Table
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 1,000.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <image
                        xlinkHref={c6}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        Provides a back-to-nature experience, allowing guests to
                        sleep under the stars and immerse themselves in coastal
                        beauty.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group ">
                          <button
                            type="button"
                            className="btn btn-sm btn-success" 
                          >
                            Tent Pitching
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          Php 300.00
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cottages;
