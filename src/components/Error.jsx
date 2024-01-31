function Error({categoria}) {
    return (
        <>
            <p className="display-6 my-3 text-secondary text-center">
                No se encontraron noticias sobre {categoria} <br /> Seleccione
                otra categoria o intente mas tarde
            </p>
        </>
    );
}

export default Error;
