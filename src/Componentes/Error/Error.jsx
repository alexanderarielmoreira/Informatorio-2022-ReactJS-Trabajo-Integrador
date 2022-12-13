import './Error.css';
import { DEFAULT_IMAGE } from '../../Libs/constantes';

const Error = ()=> {
    return(
        <div className="ErrorContainer">
            <h2 className="ErrorMessage"> Recurso no encontrado - Error 404 </h2>
            <img src={ DEFAULT_IMAGE } width="550" alt="Imagen-de-error-404" />
        </div>
    )
};

export default Error;