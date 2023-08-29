import React, { useState, useEffect } from "react";
import MenuByAppetizer from "./MenuByAppetizer";
import MenuByEntree from "./MenuByEntree";
import MenuByDessert from "./MenuByDessert";
import AddButton from "./AddButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Menu.css";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchMenu = () => {
    const path = "http://localhost:5000/api";

    fetch(`${path}/menuitems`)
      .then((menuItemsResponse) => menuItemsResponse.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((err) => console.log(err));
  };

  //fetching the menu items
  useEffect(fetchMenu, []); //passing in the function without the call back function, which is the fetchMenu

  //modal code

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal code ends
  const categories = ["Appetizer", "Entree", "Dessert"];

  return (
    <div>
      <h1>Menu</h1>
      <img
        src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/cad39ed25806987c88d2881af39a130e.jpg/public"
        alt="food"
      />

      {/* This is going to be the dropdown part of the page */}

      <form>
        <select
          onChange={(e) => {
            const c = categories?.find((x) => x === e.target.value);
            setSelectedCategory(c);
          }}
        >
          <option disabled="" value="">
            Select menu category
          </option>
          {/* drop down items */}
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
            <AddButton onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Menu Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row>
                    <Form.Group
                      as = {Col} sm={12}
                      className="mb-3"
                      controlId="addForm.ControlCategory"
                    >
                      <Form.Label>Category</Form.Label>
                      <Form.Control type="text" placeholder="" autoFocus />
                    </Form.Group>
                  </Row>
                  <Form.Group
                    className="mb-3"
                    controlId="addForm.ControlItemName"
                  >
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder=" " autoFocus />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="addForm.ControlIngredients"
                  >
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder=" " autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="addForm.ControlPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="$ 00.00 "
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="addForm.ControlImg">
                    <Form.Label>Image Name</Form.Label>
                    <Form.Control type="text" placeholder=" " autoFocus />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          <MenuByAppetizer
            selectedCategory={selectedCategory}
            menuItems={menuItems}
            fetchMenu={fetchMenu}
          />
        </div>
      ) : null}

      {selectedCategory === "Entree" ? (
        <div>
          <>
            <AddButton />
          </>
          <MenuByEntree
            selectedCategory={selectedCategory}
            menuItems={menuItems}
          />
        </div>
      ) : null}

      {selectedCategory === "Dessert" ? (
        <div>
          <>
            <AddButton />
          </>
          <MenuByDessert
            selectedCategory={selectedCategory}
            menuItems={menuItems}
          />
        </div>
      ) : null}
    </div>
  );
}
