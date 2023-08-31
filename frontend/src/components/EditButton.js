import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";
import "./EditButton.css";

export default function EditButton ({ fetchMenu, categories, menuItems, id }) {
    
    // const [menuItemById, setMenuItemById] = useState([]);

    const updatedItem = menuItems.find((item) => item._id === id);
    console.log(updatedItem);


    const [category, setCategory] = useState(updatedItem.category);
    const [itemName, setItemName] = useState(updatedItem.itemName);
    const [ingredients, setIngredients] = useState(updatedItem.ingredients);
    const [price, setPrice] = useState(updatedItem.price);
    const [img, setImg] = useState(updatedItem.img);

    //modal code
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(id);

    console.log({categories})

    return (
        <div>
            <div className="edit-justify">
            <Button className="edit-btn" variant="primary" 
            // onClick={handleShow}
            onClick={handleShow}
            >
                Edit
            </Button>
            </div>
            <EditModal 
                fetchMenu={fetchMenu} 
                categories={categories} 
                show={show} 
                setShow={setShow} 
                handleClose={handleClose} 
                handleShow={handleShow} 
                id={id}
                // category2={updatedItem.category}
                // itemName2={updatedItem.itemName}
                // ingredients2={updatedItem.ingredients}
                // price2={updatedItem.price}
                // img2={updatedItem.img}
                category={category}
                setCategory={setCategory}
                itemName={itemName}
                setItemName={setItemName}
                ingredients={ingredients}
                setIngredients={setIngredients}
                price={price}
                setPrice={setPrice}
                img={img}
                setImg={setImg}


            />
      </div>
    );
}