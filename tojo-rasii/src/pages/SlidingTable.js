import React, { useState } from 'react';
 // Assurez-vous de créer ce fichier CSS pour styliser votre composant

function PopupWithLink() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Ouvrir le pop-up</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Contenu du pop-up</h2>
            <p>
              Ceci est un lien actif :{' '}
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                Exemple.com
              </a>
            </p>
            <button onClick={togglePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupWithLink;
