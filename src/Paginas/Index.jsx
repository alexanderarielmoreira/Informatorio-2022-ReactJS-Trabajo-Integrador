import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getListadoNoticias } from "../Servicios/noticias";
import { useSearchParams } from "react-router-dom";
import Spinner from "../Componentes/Spinner/Spinner"; 
import Buscador from "../Componentes/Buscador/Buscador";
import { ListaNoticias } from "../Componentes/Noticia/Noticia";
import Paginator from "../Componentes/Paginator/Paginator";
import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";


const Index = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalResultado, setTotalResultado] = useState(0);
    const [hayResultado, setHayResultado] = useState(false)

    const buscarNoticias = async (pagina) => {
        setIsLoading(true);        
        const {Search: _status, articles, totalResults} = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(articles);
        setTotalResultado(totalResults)
        setHayResultado(Boolean(totalResults))
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    }

    useEffect(() => {
        if (searchParams.get('query')) {
            buscarNoticias(pagina)
        }
    }, [searchParams, pagina]);

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    }

    return (
        <div>
            <Header />
            <Container maxWidth='sm'>
                <div id='busqueda'><Buscador onBuscar={onBuscar}/></div>
                { isLoading && <Spinner /> }
                { !isLoading && noticias && !hayResultado && <div><h3>No se encontró nada relacionado con "{searchParams.get('query')}".</h3></div> }
                { noticias && hayResultado && <h3>Está viendo hasta 10 noticias de {totalResultado} resultados.</h3> }
                { noticias && <ListaNoticias noticias={noticias} /> }
                <div id='busqueda'>{ noticias && <Paginator cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }</div>
            </Container> 
            { !hayResultado && <Footer />}
        </div>
    )
};

export default Index;