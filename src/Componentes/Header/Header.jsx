import { LOGO } from "../../Libs/constantes"; 
import './Header.css' 

const Header = () => {
    return (
            <header className="HeaderContainer"><img src={ LOGO } width="60" alt="Logotipo" className="Imagen"/><h4 className="TitleText"> Informatorio 2022 - Trabajo Integrador: Buscador de Noticias con React JS </h4></header>
    )
};

export default Header;