import Form from "react-bootstrap/Form";
import categorias from "../utils/categorias";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const apiKey = "pub_37118b1dfddb268c10f1cf33d658177cfea99";
const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=ar`;

function Formulario() {
    const [noticias, setNoticias] = useState([]);
    const [categoria, setCategoria] = useState("top");

    function getData(categoria) {
        fetch(`${url}&category=${categoria}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setNoticias(data.results);
            })
            .catch((err) => console.log("sucedio un error", err));
    }

    function handleSelect(e) {
        setCategoria(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getData(categoria);
    }
    useEffect(() => {
        getData(categoria);
    }, []);
    return (
        <>
            <Form
                className="d-flex flex-column align-items-center px-2 py-4 gap-2 medium"
                onSubmit={handleSubmit}
            >
                <Form.Label>Buscar por categoria:</Form.Label>
                <select
                    name=""
                    id=""
                    className="form-select"
                    onChange={handleSelect}
                >
                    <option value="">seleccione una categoria</option>
                    {categorias.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
                <button className="btn btn-outline-light" type="submit">
                    buscar
                </button>
            </Form>
            <ListaNoticias noticias={noticias} />
        </>
    );
}

export default Formulario;
