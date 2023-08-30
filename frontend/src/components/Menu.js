import React, { useState, useEffect } from "react";
import MenuByAppetizer from "./MenuByAppetizer";
import MenuByEntree from "./MenuByEntree";
import MenuByDessert from "./MenuByDessert";
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

  
  const categories = ["Appetizer", "Entree", "Dessert"];

  
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
