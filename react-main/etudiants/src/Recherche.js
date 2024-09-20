import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recherche() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://3001-fatmaakacha-node1-zk5yqyvy6qj.ws-eu107.gitpod.io/etudiants/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Etudiant not found");
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
        setData(null); 
      });
  }, [id]);

  if (!data) {
    return <div>Etudiant n'existe pas</div>;
  }

  return (
    <div>
      <ul>
        <li>{data.nom}</li>
      </ul>
    </div>
  );
}

export default Recherche;
