import React from 'react'
import Inscription from '../components/Inscription'


import "../styles/Login.css"

function Home() {
    return (

        <div className='main'>
            <header>
                <h1>Interface joueur JDR</h1>
                <p>Bienvenue jeunes joueurs ! Vous êtes passionnés par les jeux de rôles et vous en avez assez de la version papier? Avec bang Bang Jeux de Rôles tout devient plus simple</p>
            </header>
            <Inscription />


        </div>

    )
}

export default Home






