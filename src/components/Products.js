//import Badge from 'react-bootstrap/Badge';
import { BuyButton } from '../buttons/BuyButton';
//import { Modal } from '../modal/Modal';

import CardBS from 'react-bootstrap/Card';

export const Products = ({ id, image, nome, descricao, preco, onClick }) => {
    return (
        <div>
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
                
                <BuyButton
                    variant="primary"
                    id={id}
                    nome={nome}
                    descricao={descricao}
                    preco={preco}
                    onClick={onClick}
                >
                    Comprar
                </BuyButton>
            </CardBS>


        </div >
    )
} 