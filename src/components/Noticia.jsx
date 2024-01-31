import news from "../assets/news.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function Noticia({ noticia }) {
    return (
        <Card
            className="bg-dark text-light p-0 text-center"
            style={{ width: "18rem", height: "500px" }}
        >
            <Card.Img
                variant="top"
                src={!noticia.image_url ? news : noticia.image_url}
                alt={noticia.description}
                style={{ maxHeight: "30%" }}
                className="img-fluid object-fit-fill"
            />
            <Card.Body className="px-2 d-flex flex-column justify-content-between">
                <p className="m-0 fst-italic smaller">
                    <Badge>{noticia.source_id}</Badge>
                </p>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text className="description">
                    {noticia.description?.slice(0, 200)}
                </Card.Text>
                <Button variant="primary">Ver noticia completa</Button>
            </Card.Body>
        </Card>
    );
}

export default Noticia;
