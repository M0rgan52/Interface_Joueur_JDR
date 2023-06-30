import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom'
import "../styles/Sidebar.css"



function Sidebar (){

    //Pour changer la classe du burger
    
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState (false)

    //toggle pour changer le menu burger
    const updateMenu =() => {
        if (!isMenuClicked) {
            setBurgerClass ("burger-bar clicked")
            setMenuClass ("menu visible")
        }
        else{
            setBurgerClass ("burger-bar unclicked")
            setMenuClass ("menu hidden")  
        }
        setIsMenuClicked(!isMenuClicked)
    }



    return (
        <div className='DivSidebar'>
            <nav className='NavSidebar'>
                <div className='burger-menu'onClick={updateMenu} >
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>    
                
            </nav>
            <Outlet/>
            <div className={menu_class}>
                <div className="choices">
               <ul>
                <Link to="Campagne">
                <li>
                    Note de Campagne
                </li>                
                </Link>
                 <Link to="Perso">
                <li>
                    Fiche de Personnage
                </li>
                </Link>
                <Link to="Combat">
                <li>
                    Feuille de Combat
                </li>
                </Link>
               </ul>

                </div>
            </div>

        </div>
   
    )
};

export default Sidebar;

