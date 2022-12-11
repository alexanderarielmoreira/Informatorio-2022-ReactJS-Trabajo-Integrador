import { LOGO } from '../../Libs/constantes';

const Header = () => {
    return (
            <header><img className='ImagenLogo' src={LOGO} width="70" alt="Logotipo" /><h2 className='TitleText'> Informatorio 2022 - Trabajo Integrador: Buscador de Noticias con React JS </h2></header>
    )
};

export default Header;
