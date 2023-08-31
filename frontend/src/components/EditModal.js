import React from "react";
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
  category,
  setCategory,
  itemName,
  setItemName,
  ingredients,
  setIngredients,
  price,
  setPrice,
  img,
  setImg
})

  
    // modal code ends

    //edit menu item function
    {
    const editMenuItem = async () => {
      let data = await fetch(`http://localhost:5000/api/menuitems/` + id, {
        method: "PUT",
        body: JSON.stringify({
          category: category, 
          itemName: itemName, 
          ingredients: ingredients, 
          price: price, 
          img: img
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }) 

      data = await data.json();
      console.warn(data);
      if (data) {
        alert("Data saved succesfully");
        setCategory(category);
        setItemName(itemName);
        setIngredients(ingredients);
        setPrice(price);
        setImg(img);
        handleClose();
        fetchMenu();
      }
    } 

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
                    <Form.Select
                        onChange={(e) => {
                          const c = categories?.find((x) => x === e.target.value);
                          setCategory(c);
                        }}
                        value={category}
                        defaultValue={category}
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
                      as="textarea"
                      defaultValue={ingredients}
                      onChange={(e) => setIngredients(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="editForm.ControlPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="$ 00.00 "
                      autoFocus
                      defaultValue={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="editForm.ControlImg">
                    <Form.Label>Image Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      autoFocus
                      defaultValue={img}
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
                onClick={editMenuItem}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
)

}
