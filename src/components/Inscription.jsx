import React from "react";
import '../styles/Inscription.css'


function Inscription() {
    return (
      <div className="Container">
      
      <div className="ContainerInscription">
        <form method="post">
            <div className="test">
            <label htmlFor="id">Votre ID</label>
            <input type="text" id="id" />
            </div>
            <div className="test">
            <label htmlFor="mdp">Votre mot de passe</label>
            <input type="password" id="mdp" />
            </div>
            <div className="test">
            <label htmlFor="code">Votre code de campagne</label>
            <input type="text" id="code" />
            <button onClick={event => alert('vous avez cliqué')}>Cliquez ici</button>
            </div>
          
        </form>
   
      </div>
      </div>
    );
  }
  
  export default Inscription;