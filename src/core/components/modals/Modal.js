import React from "react";
import Button from "../Button";
import BootstrapModal from "react-bootstrap/Modal"

// Bootstrap default Modal
const BModal = ({template, show, setModalState}) => (
    <>
        <BootstrapModal show={show} onHide={() => setModalState(false)}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>{template.title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>{template.body}</BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="danger" onClick={() => setModalState(false)} backgroundColor="#FF605C">
                    Close
                </Button>
                <Button variant="primary" onClick={() => setModalState(false)}>
                    Save Changes
                </Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    </>
)

//Full template bootstrap Modal
const TModal = ({template, show, setModalState}) => {
    const Template = template

    return (
        <BootstrapModal show={show} onHide={() => setModalState(false)}>
            <Template setModalState={setModalState}/>
        </BootstrapModal>
    )
}

const Modal = ({template, setModalState, show}) => {

    if (template.title !== undefined || template.body !== undefined)
        return <BModal show={show} template={template} setModalState={setModalState}/>

    return <TModal show={show} template={template} setModalState={setModalState}/>
}

export default Modal;
