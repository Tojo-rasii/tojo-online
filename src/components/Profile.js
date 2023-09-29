import React, { Component } from 'react'
import Navbar from '../pages/Navbar'
import Body_Profile from '../pages/Body_Profile'
import { useState, useEffect } from 'react';
import Skeleton_Profile from '../pages/Skeleton_Profile';

function Profile() {
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
    return <Skeleton_Profile />;
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
        <Body_Profile />
      </div>
      </>
    )
}

export default Profile
