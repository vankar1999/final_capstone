import React, { useState, useEffect } from "react";
import MenuByCategory from "./MenuByCategory";
import './Menu.css'

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


  const categories = ["Appetizer", "Entree", "Dessert"];


  return (
    <div>
      <div className="menu-title">
        <h1 className="menu-h1">Menu</h1>
      </div>
      <div className="menu-background-image">
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
        {selectedCategory && (
          <div>
            <MenuByCategory
              categories={categories}
              selectedCategory={selectedCategory}
              menuItems={menuItems}
              fetchMenu={fetchMenu}
            />
          </div>
        )}
      </div>
    </div>
  );
}
