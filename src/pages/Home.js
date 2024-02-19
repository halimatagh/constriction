import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage1 from "../image/B1.jpg";
import BannerImage2 from "../image/B2.jpg";
import BannerImage3 from "../image/B3.jpg";
import comme1 from "../image/Cl1.jpg";
import comme2 from "../image/Cl2.jpg";
import comme3 from "../image/Cl3.jpg";
import vd from "../image/about-vid.mp4";
import "../styles/Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <>
      <div
        className="home"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="headerContainer">
          <h1>IDEA TRAV</h1>
          <p>TRAVAUX DE CONSTRUCTION ET RÉNOVATION</p>
          <Link to="/menu">
            <button>Voir Services</button>
          </Link>
        </div>
      </div>
      <section class="about" id="about">
        <h1 class="heading"> about us </h1>

        <div class="row">
          <div class="video">
            <video src={vd} loop muted autoplay></video>
          </div>

          <div class="content">
            <h3>
              You can expect nothing but the best work from us, just like you've
              always dreamed of!
            </h3>
            <p>
              Les travaux de construction peuvent inclure la construction d'un
              nouveau bâtiment, l'agrandissement ou la rénovation d'un bâtiment
              existant.
            </p>
            <Link to="/about">
              <a href="#services" class="btn">
                read more
              </a>
            </Link>
          </div>
        </div>

        <div class="box-container">
          <div class="box">
            <h3>12+</h3>
            <p>years of experience</p>
          </div>

          <div class="box">
            <h3>120+</h3>
            <p>project completed</p>
          </div>

          <div class="box">
            <h3>680+</h3>
            <p>satiesfied clients</p>
          </div>

          <div class="box">
            <h3>350+</h3>
            <p>active workers</p>
          </div>
        </div>
      </section>
      <div class="customer-review">
        <h1>customer review</h1>
        <div class="main-review">
          <div class="inner-review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate sequi veniam sint dicta necessitatibus excepturi fugiat
              veritatis itaque maiores modi architecto soluta dignissimos
              provident repellendus repellat non, perferendis facilis unde!
            </p>
            <img src={comme1} alt="" />
          </div>

          <div class="inner-review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate sequi veniam sint dicta necessitatibus excepturi fugiat
              veritatis itaque maiores modi architecto soluta dignissimos
              provident repellendus repellat non, perferendis facilis unde!
            </p>
            <img src={comme2} alt="" />
          </div>

          <div class="inner-review">
            <i class="fas fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate sequi veniam sint dicta necessitatibus excepturi fugiat
              veritatis itaque maiores modi architecto soluta dignissimos
              provident repellendus repellat non, perferendis facilis unde!
            </p>
            <img src={comme3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
