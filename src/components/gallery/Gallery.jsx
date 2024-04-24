import React from "react";
import { useEffect } from 'react';
import g1 from "./images/g1.jpg"
import g2 from "./images/g2.jpg"
import g3 from "./images/g3.jpg"
import g4 from "./images/g4.jpg"
import g5 from "./images/g5.jpg"
import g6 from "./images/g6.jpg"
function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <section className="container py-5">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto text-center">
              <h1 className="fw-light">Capturing Paradise</h1>
              <p className="lead text-body-secondary">
                Explore moments of serenity, adventure, and pure bliss as you
                journey through our collection. Let these snapshots whisk you
                away to a place where every moment is a postcard-worthy memory.
              </p>
            </div>
          </div>
          <div className="row py-lg-5">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={g5}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <img
                src={g1}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={g3}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src={g4}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={g2}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src={g6}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Gallery;
