import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Modal } from '../modal/Modal';
import { Products } from '../components/Products';

export const HomePage = () => {
    return (
        <div>
            {/* <Modal
            show={false}
            nome={'Box LoTR'} 
            descricao={'Box trilogia senhor dos anéis'}
            /> */}
            <Container fluid>
                <h1> Essa é a HomePage</h1>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={4} md={2}>
                            <Products
                                image={require('../imgs/box_lotr.jpg')}
                                nome={'Box LoTR'}
                                descricao={'Box trilogia senhor dos anéis'}
                                preco={159}
                            />

                        </Col>
                        <Col xs={12} sm={4} md={2}>
                            <Products
                                image={require('../imgs/caneca_gb.jpg')}
                                nome={'Caneca Gameboy'}
                                descricao={'Caneca de cerâmica Gameboy'}
                                preco={27}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}