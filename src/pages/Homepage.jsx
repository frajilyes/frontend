import React, { useState } from "react";
import SportList from "../components/SportList";
import Filtre from "../components/Filtre";
import AddForm from "../components/AddForm";

const Homepage = () => {
  const [sports, setsports] = useState([
    {
      title: "football",
      description:
        "Le football est un sport collectif qui oppose deux équipes de 11 joueurs sur un terrain. ce sport, le plus populaire au monde",
      dueDate: "28/08/2025",
      status:
        "Le football, c'est plus qu'un sport, c'est une passion qui unit, un rêve qui inspire et une bataille qui se gagne avec le cœur",
    },
    {
      title: "basketball",
      description:
        "Le basketball est un sport collectif qui se joue entre deux équipes de cinq joueurs.ce sport demande agilité et précision ",
      status:
        "Le basket, c'est plus qu'un jeu, c'est une passion. Dribbler avec détermination, passer avec précision, tirer avec confiance et gagner avec le cœur",
      dueDate: "01/05/2025",
    },
    {
      title: "tennis",
      description:
        "Le tennis est un sport de raquette qui oppose deux joueurs simple ou deux équipes de deux joueurs double",
      dueDate: "07/09/2025",
      status:
        "Le tennis, c'est une question de précision, de puissance et de mental. Chaque point est une nouvelle bataille, chaque match un défi à relever",
    },
  ]);
  const [filtered, setfiltered] = useState(sports);
  return (
    <div>
      <SportList sports={sports} />
      <AddForm
        setsports={setsports}
        setfiltered={setfiltered}
        sports={sports}
      />
      <Filtre
        setfiltered={setfiltered}
        setsports={setsports}
        sports={sports}
        filtered={filtered}
      />
    </div>
  );
};

export default Homepage;
