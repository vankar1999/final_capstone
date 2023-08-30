import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";
import "./EditButton.css";

export default function EditButton ({ fetchMenu, categories }) {
    //modal code
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log({categories})

    return (
        <div>
            <div className="edit-justify">
            <Button className="edit-btn" variant="primary" onClick={handleShow}>
                Edit
            </Button>
            </div>
            <EditModal fetchMenu={fetchMenu} categories={categories} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
      </div>
    );
}