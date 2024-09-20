import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recherche from './Recherche';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Pays from './component/Pays';
import Region from './component/Region';
import Classes from './Classes';
import Modifier from './Modifier.js';
import Ajouter from './Ajouter';
import Supprimer from './Supprimer';
import RechercheA from './RechercheA';
import Header from './Header.js';
import Editer from './Editer.js';
import Delete from './Delete.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pays" element={<Pays />} />
      <Route path="/region/:reg" element={<Region />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/modifier" element={<Modifier />} />
      <Route path="/ajouter" element={<Ajouter />} />
      <Route path="/supprimer" element={<Supprimer />} />
      <Route path="/rechercheA" element={<RechercheA />} />
      <Route path="/editer/:id" element={<Editer />} />
      <Route path="/delete/:id" element={<Delete />} />
    </Routes>
  </Router>
);