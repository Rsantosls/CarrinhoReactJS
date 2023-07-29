import ButtonBS from 'react-bootstrap/Button';
// ({ loading, label, loadingLabel, variant, disable, onClick })
// Spread 
export const BuyButton = ({ variant, id, nome, descricao, preco }) => {


    return (
        // variant={variant} disabled={disable} onClick={onClick}
        <ButtonBS
            variant={variant}
            id={id}
            nome={nome}
            descricao={descricao}
            preco={preco}
        >
            Adicionar ao Carrinho
        </ButtonBS >
    )
}