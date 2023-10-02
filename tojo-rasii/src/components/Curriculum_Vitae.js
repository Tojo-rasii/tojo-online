import React, { useState, useEffect } from 'react';
import Navbar from '../pages/Navbar';
import Body_CurriculumVitae from '../pages/Body_CurriculumVitae';
import Skeleton_Loading from '../pages/Skeleton_Loading';

function Curriculum_Vitae() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simuler une requête asynchrone (remplacez ceci par votre appel API réel)
    setTimeout(() => {
      // Une fois les données chargées, masquez la page de chargement
      setLoading(false);
      // Mettez à jour l'état avec les données reçues
      setData(); // Remplacez "mockData" par les données réelles
    }, 2200); // Temps de délai simulé de 2 secondes
  }, []);

  useEffect(() => {
    // Assurez-vous que les éléments existent avant d'accéder à leurs propriétés
    const translate = document.getElementById("translate_icon");
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");

    if (translate && moon && sun) {
      if (loading) {
        translate.style.opacity = "0";
        moon.style.opacity = "0";
        sun.style.opacity = "0";
      } else {
        translate.style.opacity = "1";
        moon.style.opacity = "1";
        sun.style.opacity = "1";
      }
    }
  }, [loading]);
  if (loading) {
    return <Skeleton_Loading />;
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
        <Body_CurriculumVitae />
      </div>
    </>
  );
}

export default Curriculum_Vitae;

