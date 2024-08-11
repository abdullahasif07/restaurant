import React, { useContext, useState } from "react";
import MenuContext from "../context/menu/CreateContext";

const MenuForm = () => {
  const { addItem } = useContext(MenuContext);
  const [menuData, setMenuData] = useState({
    name: "",
    ingredients: "",
    rating: 0,
    price: "",
    available: false,
    image: "",
    category: "appetizer",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setMenuData({
      ...menuData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(menuData);
    addItem(menuData);
  };

  return (
    <div className="container my-5" style={{width:'30rem'}}>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <h2 className="form-label my-3">Name</h2>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={menuData.name}
            onChange={changeHandler}
            required
          />

          <h2 className="form-label my-3">Ingredients</h2>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={menuData.ingredients}
            onChange={changeHandler}
            placeholder="Enter ingredients separated by commas"
            required
          />

          <h2 className="form-label my-3">Rating</h2>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={menuData.rating}
            onChange={changeHandler}
            min="0"
            max="5"
            step="0.1"
            required
          />

          <h2 className="form-label my-3">Price</h2>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={menuData.price}
            onChange={changeHandler}
            min="0"
            step="0.01"
            required
          />

          <h2 className="form-label my-3">Available</h2>
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={menuData.available}
            onChange={changeHandler}
          />

          <h2 className="form-label my-3">Image URL</h2>
          <input
            //type="url"
            className="form-control"
            id="image"
            name="image"
            value={menuData.image}
            onChange={changeHandler}
            required
          />

          <h2 className="form-label my-3">Category</h2>
          <select
            className="form-control"
            id="category"
            name="category"
            value={menuData.category}
            onChange={changeHandler}
            required
          >
            <option value="appetizer">Appetizer</option>
            <option value="main course">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MenuForm;
