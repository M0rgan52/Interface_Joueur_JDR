import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Note from './pages/Campagne'
import Perso from "./pages/Fiche_perso"
import Combat from "./pages/Combat"
import Contact from "./pages/Contact"
import Mentions from "./pages/Mentions"
import FichePersonnage from './pages/Fiche_perso'
import FicheCampagne from './pages/Campagne'
import FicheCombat from './pages/Combat'

function Chemin() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />

      <Route path="/Home" element={<Home />} />
      
      <Route path="/Home/Campagne" element={<Note/>}>
      <Route path="/Home/Campagne/Perso" element={<FichePersonnage/>} />
      <Route path="/Home/Campagne/Campagne" element={<FicheCampagne/>} />
      <Route path="/Home/Campagne/Combat" element={<FicheCombat/>} />
      </Route>  
      <Route path="/Home/Perso" element={<Perso/>} />
      <Route path="/Home/Combat" element={<Combat/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Mentions" element={<Mentions />} />
    

      <Route path="*" element={<Error />} /> 
    </Routes>
  )
}

export default Chemin;






