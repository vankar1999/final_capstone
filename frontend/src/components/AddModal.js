import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddModal({fetchMenu, categories, selectedCategory,show,setShow,handleClose,handleShow}){
    const [category, setCategory] = useState("");
    const [itemName, setItemName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
  
    // modal code ends

    //add menu item function
    const addMenuItem = async (e) => {

      let data = await fetch('http://localhost:5000/api/menuitems', {
        method: "POST",
        body: JSON.stringify({ category: selectedCategory, itemName, ingredients, price, img }),
        headers: {
          "Content-Type": "application/json",
        },
      })
  
      data = await data.json();
      console.warn(data);
      if (data) {
        alert("Data saved succesfully");
        setCategory(selectedCategory);
        setItemName("");
        setIngredients("");
        setPrice("");
        setImg("");
        handleClose();
        fetchMenu();
      }
    };

    console.log({categories});
    console.log({selectedCategory})
return(
    <div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Menu Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="addForm.ControlCategory"
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
                    controlId="addForm.ControlItemName"
                  >
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="addForm.ControlIngredients"
                  >
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="addForm.ControlPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="$ 00.00 "
                      autoFocus
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="addForm.ControlImg">
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
                <Button variant="primary" onClick={() => addMenuItem()} >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
)


}