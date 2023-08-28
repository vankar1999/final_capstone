import React, { useState, useEffect } from 'react'
import MenuByAppetizer from './MenuByAppetizer';
import MenuByEntree from './MenuByEntree';
import MenuByDessert from './MenuByDessert';
import './Menu.css'



export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //fetching the menu items
  useEffect(() => {
    const path = "http://localhost:5000/api"

    fetch(`${path}/menuitems`)
        .then(menuItemsResponse => menuItemsResponse.json())
        .then(data => {
            setMenuItems(data);
        })
        .catch((err) => console.log(err))
    }, []);

  const categories = ['Appetizer', 'Entree', 'Dessert'];

  return (
    <div>
      <h1>Menu</h1>
      <img src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/cad39ed25806987c88d2881af39a130e.jpg/public" alt="food" />

      {/* This is going to be the dropdown part of the page */}

      <form >
        <select onChange={(e) => {
          const c = categories?.find((x) => x === e.target.value);
          setSelectedCategory(c);
        }}>
          <option disabled="" value="">Select menu category</option>
          {/* drop down items */}
          {categories.map((category) => (
              <option key={category} value={category}>{category}</option>)
          )}
        </select>
      </form>
      {
        selectedCategory === 'Appetizer' ? 
        <div>
            <MenuByAppetizer selectedCategory = {selectedCategory}   menuItems = {menuItems}/> 
        </div>
        : null  
      }

      {
        selectedCategory === 'Entree' ? 
        <div>
            <MenuByEntree selectedCategory = {selectedCategory}   menuItems = {menuItems}/> 
        </div>
        : null  
      }

      {
        selectedCategory === 'Dessert' ? 
        <div>
            <MenuByDessert selectedCategory = {selectedCategory}   menuItems = {menuItems}/> 
        </div>
        : null  
      }

    </div>
  )
}