import Noticia from "./Noticia";
function ListaNoticias({ noticias }) {
    return (
        <div>
            <h2>Noticias mas recientes</h2>
            {noticias?.map((item, index) => {
                return <Noticia key={index} noticia={item} />;
            })}
        </div>
    );
}

export default ListaNoticias;
