import béton from "../image/image1.jpg";
import métalliques from "../image/image2.jpg";
import construction from "../image/image3.jpg";
import restauration from "../image/image4.jpg";
import installations from "../image/image5.png";
import décoration from "../image/image6.jpg";

const MenuList = [
  {
    id: 1,
    name: "constructions en béton",
    image: béton,
    info: "Les constructions en béton sont des structures solides et durables qui utilisent le béton comme matériau principal. Elles sont conçues pour répondre aux normes de sécurité et de qualité grâce à la collaboration entre les ingénieurs et les architectes. Bien que le béton offre une grande résistance, les constructions en béton peuvent être coûteuses et nécessiter des fondations profondes. Les traitements de surface tels que la galvanisation ou la peinture peuvent être utilisés pour protéger contre la corrosion et la fissuration. Les constructions en béton sont utilisées pour une variété d'applications, allant des bâtiments résidentiels et commerciaux aux ponts et aux barrages.",
  },
  {
    id: 2,
    name: "constructions métalliques",
    image: métalliques,
    info: "Les constructions métalliques utilisent principalement des matériaux en acier pour construire des bâtiments, des ponts, des tours, des hangars, des passerelles et d'autres types d'ouvrages. Les avantages des constructions métalliques incluent leur résistance à la traction, leur légèreté, leur résistance à la corrosion, leur durabilité et leur adaptabilité. Les structures métalliques peuvent être préfabriquées en usine puis assemblées sur place, ce qui réduit les délais de construction et les coûts. Les constructions métalliques sont utilisées dans une variété d'applications, telles que les bâtiments industriels, les centres commerciaux, les ponts, les tours de transmission, les plates-formes pétrolières et les hangars d'avions. Les constructions métalliques sont conçues selon les normes et les codes de construction en vigueur dans chaque pays, en collaboration avec des ingénieurs et des architectes pour répondre aux besoins spécifiques de chaque projet.",
  },
  {
    id: 3,
    name: "Travaux de construction privés et individuels",
    image: construction,
    info: "",
  },
  {
    id: 4,
    name: "Travaux d'agrandissement et de restauration",
    image: restauration,
    info: "Les travaux d'agrandissement et de restauration impliquent la modification, la rénovation ou l'extension d'un bâtiment existant pour l'adapter aux besoins actuels ou futurs. Ils peuvent inclure l'ajout d'un étage, la modernisation des installations, ou l'ajout d'éléments architecturaux. La planification et la réalisation des travaux nécessitent l'expertise de professionnels tels que des architectes, ingénieurs et entrepreneurs. Il est important de respecter les règlements en matière de construction et de sécurité, et de prendre en compte les coûts, les délais et les contraintes. Les travaux permettent de rénover un bâtiment tout en préservant son histoire et son caractère unique.",
  },
  {
    id: 5,
    name: "Construire des installations industrielles",
    image: installations,
    info: "La construction d'installations industrielles implique des compétences spécialisées en planification, conception et construction pour répondre aux normes de sécurité et de qualité. Les matériaux peuvent varier selon les besoins du projet, avec des systèmes mécaniques et électriques complexes pouvant être nécessaires.",
  },
  {
    id: 6,
    name: "Travaux de finition et de décoration",
    image: décoration,
    info: "Les travaux de finition et de décoration sont une étape importante dans la construction ou la rénovation d'un bâtiment. Ils impliquent l'installation de revêtements de sol, de murs et de plafonds, ainsi que la mise en place de finitions décoratives telles que la peinture, le papier peint, les carreaux et les luminaires. Les travaux de finition et de décoration peuvent avoir un impact significatif sur l'esthétique et la fonctionnalité d'un bâtiment, et doivent être réalisés avec soin pour assurer la qualité et la durabilité. Les professionnels de la construction utilisent une variété de techniques et de matériaux pour réaliser ces travaux, en fonction des besoins et des préférences du client.",
  },
];

export default MenuList;
