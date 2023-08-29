import React from "react";
import Button from "react-bootstrap/Button";
import "./AddButton.css";

export default function AddButton({onClick}) {
  return (
    // <div className="add-button">
    //     <button type="button" class="btn add-btn">Add New Item</button>
    // </div>
    <Button variant="primary" onClick={onClick}>
      Add New Item
    </Button>
  );
}
