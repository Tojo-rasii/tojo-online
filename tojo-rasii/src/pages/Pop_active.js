import React from 'react';

function PopupNavigation({ closePopup }) {
  return (
    <div>
      <h2>Menu de navigation</h2>
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button onClick={closePopup}>Fermer</button>
    </div>
  );
}

export default PopupNavigation;
