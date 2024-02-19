import React from "react";
import Aboutas from "../image/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Les travaux de construction peuvent inclure la construction d'un
          nouveau bâtiment, l'agrandissement ou la rénovation d'un bâtiment
          existant. Les travaux de construction impliquent souvent l'utilisation
          de matériaux tels que le béton, l'acier, le bois et la brique pour
          créer la structure du bâtiment. Les travaux de construction peuvent
          également inclure l'installation de systèmes électriques, de plomberie
          et de chauffage, ainsi que la finition intérieure et extérieure.
          <br />
          <br />
          Les travaux de rénovation peuvent inclure la réparation, la
          modernisation ou la mise à jour d'un bâtiment existant. Les travaux de
          rénovation peuvent inclure l'ajout de nouvelles fonctionnalités, comme
          la création d'une salle de bain supplémentaire ou d'une cuisine plus
          grande, la rénovation de la toiture ou l'ajout d'une extension pour
          agrandir l'espace de vie. Les travaux de rénovation peuvent également
          inclure la mise à niveau des systèmes électriques, de plomberie et de
          chauffage, ainsi que la modernisation de la décoration intérieure et
          extérieure.
          <br />
          <br />
          Lorsque vous entreprenez des travaux de construction ou de rénovation,
          il est important de choisir un entrepreneur qualifié et expérimenté.
          Vous devriez également obtenir plusieurs devis pour vous assurer
          d'obtenir le meilleur prix possible. Il est également important de
          disposer des permis nécessaires et de respecter toutes les règles et
          réglementations locales en matière de construction et de rénovation.
          <br />
          <br />
          Enfin, il est important de noter que les travaux de construction et de
          rénovation peuvent être coûteux et prendre du temps. Il est important
          de planifier à l'avance et de budgétiser correctement pour éviter les
          dépenses imprévues et les retards dans les travaux.
        </p>
      </div>
    </div>
  );
}

export default About;
