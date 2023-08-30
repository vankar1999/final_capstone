import React, { useState, useEffect } from "react";
import MenuByAppetizer from "./MenuByAppetizer";
import MenuByEntree from "./MenuByEntree";
import MenuByDessert from "./MenuByDessert";
import AddButton from "./AddButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Menu.css";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const path = "http://localhost:5000/api";

  const fetchMenu = () => {
    fetch(`${path}/menuitems`)
      .then((menuItemsResponse) => menuItemsResponse.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((err) => console.log(err));
  };

  //fetching the menu items
  useEffect(fetchMenu, []); //passing in the function without the call back function, which is the fetchMenu

  // //modal code

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [category, setCategory] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [price, setPrice] = useState("");
  // const [img, setImg] = useState("");

  // //modal code ends
  const categories = ["Appetizer", "Entree", "Dessert"];

  // const addMenuItem = async (e) => {

  //   let data = await fetch(`${path}/menuitems`, {
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

  return (
    <div>
      <h1>Menu</h1>
      <img
        src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/cad39ed25806987c88d2881af39a130e.jpg/public"
        alt="food"
      />

      <form className="categoryForm">
        <select
          onChange={(e) => {
            const c = categories?.find((x) => x === e.target.value);
            setSelectedCategory(c);
          }}
        >
          <option disabled="" value="">
            Select menu category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      {selectedCategory === "Appetizer" ? (
        <div>
          <>
            {/* <AddButton /> */}
            {/* <Modal show={show} onHide={handleClose}>
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
            </Modal> */}
          </>
          <MenuByAppetizer
            categories={categories}
            selectedCategory={selectedCategory}
            menuItems={menuItems}
            fetchMenu={fetchMenu}
          />
        </div>
      ) : null}

      {selectedCategory === "Entree" ? (
        <div>
          <MenuByEntree
            categories={categories}
            selectedCategory={selectedCategory}
            menuItems={menuItems}
            fetchMenu={fetchMenu}
          />
        </div>
      ) : null}

      {selectedCategory === "Dessert" ? (
        <div>
          <MenuByDessert
            categories={categories}
            selectedCategory={selectedCategory}
            menuItems={menuItems}
            fetchMenu={fetchMenu}
          />
        </div>
      ) : null}
    </div>
  );
}
