import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteButton.css';

export default function DeleteButton({fetchMenu, id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const path = "http://localhost:5000/api";
    console.log(id);

    //since we pass the id in the DeleteButton function, we don't need the id here, but can leave as is
    const deleteMenuItem = async () => {
        const data = await fetch(`${path}/menuitems/`+ id, {method: "DELETE"})
            .then((menuItemsResponse) => menuItemsResponse.json()) //may need to go
            .then(()=>{
                fetchMenu();
            })
        }

    return (
        <>
        <div className="delete-justify" >
            <Button className = "delete-btn" variant="primary" onClick={handleShow}>
                Delete
            </Button>
        </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting this item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item? 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Nevermind
                    </Button>
                    <Button className="delete-button" variant="primary" onClick={ deleteMenuItem } >
                        Yes, delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
