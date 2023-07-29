import ModalBS from 'react-bootstrap/Modal'
import { ModalButton } from '../buttons/ModalButton'

export const Modal = ({ show }) => {

    return (
        <div>
            <ModalBS show={show} onHide={() => { }}>
                <ModalBS.Header closeButton>
                    <ModalBS.Title>{'Adicionar produto'}</ModalBS.Title>
                </ModalBS.Header>
                <ModalBS.Footer>
                    <ModalButton
                        // onClick={}
                        loading={true}
                        label={'Adicionar ao Carrinho'}
                        loadingLabel={'Adicionando'}
                    />
                </ModalBS.Footer>
            </ModalBS>
        </div >
    )
}