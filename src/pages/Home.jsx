import React from 'react'
import Inscription from '../components/Inscription'


import "../styles/Home.css"

function Home() {
    return (
   
        <div className='main'>
                <header>
                <h1>Les BÔ Bro !</h1>
                <p>Bienvenue jeunes joueurs ! Vous êtes passionnés par les jeux de rôles? Vous avez envie de créer vos propres fiches de personnages? Vous êtes au bon endroit</p>
                </header>
                <Inscription/>
                
               
        </div>
        
    )
}

export default Home






