import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function EditModal({
  fetchMenu, 
  categories,
  show,
  setShow,
  handleClose,
  handleShow, 
  id,
  category2,
  itemName2,
  ingredients2,
  price2,
  img2
  
}){
    // const [menuItemById, setMenuItemById] = useState([]);

    const [category, setCategory] = useState(category2);
    const [itemName, setItemName] = useState(itemName2);
    const [ingredients, setIngredients] = useState(ingredients2);
    const [price, setPrice] = useState(price2);
    const [img, setImg] = useState(img2);
  
    // modal code ends

    //edit menu item function
    // const editMenuItem = async id => {
    //   const data = await fetch('http://localhost:5000/api/menuitems/:id', {
    //     method: "PUT",
    //     body: JSON.stringify({
    //       category: category, 
    //       itemName: itemName, 
    //       ingredients: ingredients, 
    //       price: price, 
    //       img: img
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }) 
    //   .then((menuItemsResponse) => menuItemsResponse.json())
    //   .then((data) => {
    //     console.log(data);

    //   })
    // } 

    // const fetchMenuItem = async id => {
    //   const data = await fetch('http://localhost:5000/api/menuitems/:id', 
    //       {method: "GET"})
    //       .then((menuItemsResponse) => menuItemsResponse.json()) //may need to go
    //       .then((data)=>{
    //         setMenuItemById(data);
    //       })
    //       .then((data) => {
    //             console.log(data);    
    //       }) 
    //       .catch((err) => console.log(err));
    //   }


    //   let data = await fetch('http://localhost:5000/api/menuitems', {
    //     method: "POST",
    //     body: JSON.stringify({ category: selectedCategory, itemName, ingredients, price, img }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
  
    //   data = await data.json();
    //   console.warn(data);
    //   if (data) {
    //     alert("Data saved succesfully");
    //     setCategory(selectedCategory);
    //     setItemName("");
    //     setIngredients("");
    //     setPrice("");
    //     setImg("");
    //     handleClose();
    //     fetchMenu();
    //   }
    // };

    console.log({categories});

return(
    <div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Menu Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="editForm.ControlCategory"
                  >
                    <Form.Label>Category</Form.Label>
                    {/* Current set up of the form select does not default the value for us. Appetizer will always show first bc that is the first thing in the categories array */}
                    <Form.Select
                        onChange={(e) => {
                          const c = categories?.find((x) => x === e.target.value);
                          setCategory(c);
                        }}
                        value={category}
                      >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Select>
                    
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="editForm.ControlItemName"
                  >
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      defaultValue={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="editForm.ControlIngredients"
                  >
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="editForm.ControlPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="$ 00.00 "
                      autoFocus
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="editForm.ControlImg">
                    <Form.Label>Image Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" 
                // onClick={() => editMenuItem()} 
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
)


}