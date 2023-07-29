import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// ({ loading, label, loadingLabel, variant, disable, onClick })
// Spread 
export const ModalButton = ({ loading, label, loadingLabel }) => {
    return (
        // variant={variant} disabled={disable} onClick={onClick}
        <ButtonBS>
            {loading && (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    >
                        < span className="visually-hidden">Loading...</span>
                    </Spinner>{' '}
                </>
            )}
            {loading ? loadingLabel : label}
        </ButtonBS >
    )
}