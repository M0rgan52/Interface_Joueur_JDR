import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"

function Login() {
    return (
   
        <div className='main'>
              <h1>Bienvenue XXXXXXXXXX</h1>
              <div className='divHome'>
                <Link to="Campagne">
              <div className='campagne'>
                <p>Clique ici pour accéder à la note de campagne</p>
              </div>
                </Link>
                <Link to='Perso'>
              <div className='perso'>
              <p>Clique ici pour accéder à la fiche de ton personnage</p>
              </div>
                </Link>
                <Link to="Combat">
              <div className='combat'>
              <p>Clique ici pour accéder à la feuille de combat</p>
              </div>
                </Link>
              </div>
                
               
        </div>
        
    )
}

export default Login