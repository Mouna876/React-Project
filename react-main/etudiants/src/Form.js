import React, { useState } from 'react';

function Form() {
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const rechercher = () => {
    fetch(`https://3001-fatmaakacha-node1-zk5yqyvy6qj.ws-eu107.gitpod.io/etudiants/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }

  return (
    <div>
      <h1>Formulaire</h1>
      <form>
        <label>
          ID Etudiant:
          <input
            type="number"
            value={id}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={rechercher}>
          Rechercher
        </button>
      </form>
      <div>
        
          <div>
            <p>Nom: {data.nom}</p>
          </div>
      </div>
    </div>
  );
}

export default Form;