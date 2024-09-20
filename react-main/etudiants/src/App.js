import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://3001-fatmaakacha-node1-zk5yqyvy6qj.ws-eu107.gitpod.io/etudiants")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  const listeetudiantsPDF = (students) => {
    const doc = new jsPDF();
    doc.text("Liste des étudiants", 20, 10);

    students.forEach((student, index) => {
      const text = `${index + 1}. ${student.lastname} ${student.firstname}`;
      doc.text(text, 20, 20 + index * 10);
    });

    // Enregistrez le fichier PDF avec un nom spécifique (par exemple, liste_etudiants.pdf)
    doc.save("liste_etudiants.pdf");
  };

  return (
    <div className="App">
      <h1> La liste des Etudiants </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.lastname} {item.firstname} :{" "}
            <Link to={`/editer/${item.id}`}>Editer</Link>
            <Link to={`/delete/${item.id}`}>Supprimer</Link>
          </li>
        ))}
      </ul>

      <button onClick={() => listeetudiantsPDF(data)}>Générer PDF</button>
    </div>
  );
}

export default App;
