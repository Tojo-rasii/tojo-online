import React, { Component } from 'react'
import Navbar from '../pages/Navbar'
import Body_Contact from '../pages/Body_Contact'
import { useState, useEffect } from 'react';
import Body_Loading from '../pages/Body_Loading';

function Contact() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // Simuler une requête asynchrone (remplacez ceci par votre appel API réel)
      setTimeout(() => {
        // Une fois les données chargées, masquez la page de chargement
        setLoading(false);
        // Mettez à jour l'état avec les données reçues
        setData(); // Remplacez "mockData" par les données réelles
      }, 1000); // Temps de délai simulé de 2 secondes
    }, []);
    if (loading) {
      return <Body_Loading />;
    }
    return ( 
      <>
       {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <div>
      <Navbar />
      <Body_Contact />
      </div>
      </>
    )
}

export default Contact
