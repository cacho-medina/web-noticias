import Form from "react-bootstrap/Form";
import categorias from "../utils/categorias";
import { useState } from "react";

const apiKey = "pub_37118b1dfddb268c10f1cf33d658177cfea99";
const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

function getData() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => setNoticias(data.results));
}

function Formulario() {
    const [noticias, setNoticias] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        getData();
    }
    return (
        <Form
            className="d-flex flex-column align-items-center px-2"
            onSubmit={handleSubmit}
        >
            <Form.Label>Buscar por categoria:</Form.Label>
            <select name="" id="" className="form-select">
                <option value="">seleccione una categoria</option>
                {categorias?.map((item, index) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
            <button className="btn btn-outline-light">buscar</button>
        </Form>
    );
}

export default Formulario;
