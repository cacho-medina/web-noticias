import Container from "react-bootstrap/Container";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
    return (
        <Container fluid className="px-0 text-light">
            <h1 className="m-0 bg-primary display-1 text-center fw-medium py-2">
                Noticias
            </h1>
            <div className="bg-secondary py-4">
                <Formulario />
            </div>
        </Container>
    );
}

export default App;
