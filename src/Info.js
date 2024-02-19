import React from "react";
import { useParams } from "react-router-dom";
import MenuList from "./helpers/MenuList";
// import pr1 from "../image/project-1.jpg";
// import pr2 from "../image/project-2.jpg";
// import pr3 from "../image/project-3.jpg";
import "./infos.css";

function Info() {
  const { id } = useParams();
  const item = MenuList.find((i) => i.id === parseInt(id));
  return (
    <>
      <div className="container">
        <div className="image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="description">
          <h1>{item.name}</h1>
          <p>{item.info}</p>
        </div>
      </div>
      {/* <section class="projects" id="projects">
        <h1 class="heading"> our projects </h1>

        <div class="box-container">
          <a href="images/project-1.jpg" class="box">
            <div class="image">
              <img src={pr1} alt="gh" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a>
            <div class="image">
              <img src={pr2} alt="hm" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-3.jpg" class="box">
            <div class="image">
              <img src={pr3} alt="hh" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>
        </div>
      </section> */}
    </>
  );
}

export default Info;
