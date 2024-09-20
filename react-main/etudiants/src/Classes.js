import { useState, useEffect } from "react";

function Classes() {
  const [data, setData] = useState([]);
  const EtudiantTotal = data.length;
  useEffect(() => {
    fetch('https://3001-fatmaakacha-node1-zk5yqyvy6qj.ws-eu107.gitpod.io/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1> Nombres total des étudiants est : {EtudiantTotal}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.labelle}</li>
        ))}
      </ul>

    </div>
  );
}

export default Classes;