import './Navbar.css'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
function NavPrincipal() {
    return (
        <div className='Navbar'>
            <div className="Nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="logo">
                <img src="./src/assets/FLYER 2.png" width={250}></img>
            </div>
            <div className="redes">
                <ul>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                </ul>
            </div>
        </div>
   
    )
}
export default NavPrincipal