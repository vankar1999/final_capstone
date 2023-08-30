import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import AddModal from "./AddModal";
import "./AddButton.css";

export default function AddButton({fetchMenu, categories, selectedCategory}) {
    // modal code

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
   return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>
      <AddModal fetchMenu={fetchMenu} categories={categories} selectedCategory={selectedCategory} show = {show} setShow = {setShow}  handleClose = {handleClose} handleShow = {handleShow}/> 
     </div> 
     
  );
}
