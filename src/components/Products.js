//import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import CardBS from 'react-bootstrap/Card';

export const Products = ({ image, nome, descricao, preco }) => {
    return (
        <CardBS>
            <CardBS.Img src={image} height={'200vw'} alt="Card image" />
            <CardBS.ImgOverlay>
                {/* <Button  variant="primary">
                    Salvar <Badge bg="secondary">{total}</Badge>
                </Button> */}
            </CardBS.ImgOverlay>
            <CardBS.Body>
                <CardBS.Title>{nome}</CardBS.Title>
                <CardBS.Text>{descricao}</CardBS.Text>
            </CardBS.Body>
            <CardBS.Footer>{preco}</CardBS.Footer>
            <Button variant="primary">
                Comprar
            </Button>
        </CardBS>
    )
} 