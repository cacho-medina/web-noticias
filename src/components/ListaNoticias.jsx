import Noticia from "./Noticia";
import Error from "./Error";

function ListaNoticias({ noticias, categoria }) {
    return (
        <div className="bg-dark py-3 ">
            <h2 className="text-center mb-3">Noticias mas recientes</h2>
            <div className="d-flex flex-column align-items-center gap-2 flex-md-row flex-md-wrap justify-content-center align-content-between gap-md-3">
                {!noticias.length ? (
                    <Error categoria={categoria} />
                ) : (
                    noticias.map((item, index) => {
                        return <Noticia key={index} noticia={item} />;
                    })
                )}
            </div>
        </div>
    );
}

export default ListaNoticias;
