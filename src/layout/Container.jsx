import React from 'react'
import "../styles/Container.css"

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Container({children}) {
    return (
        <div className='shaping'>
            {children}
        </div>
    )
}

export default Container