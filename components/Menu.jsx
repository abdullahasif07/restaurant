import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../context/menu/CreateContext";
import MenuItem from "./MenuItem";

const Menu = () => {
  const role = localStorage.getItem("role");
  const { getItems } = useContext(MenuContext);
  const [items, setItems] = useState([]); // State to hold menu items
  const [loading, setLoading] = useState(true); // State to indicate loading

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems(); // Fetch items from context
        setItems(fetchedItems); // Set the items in state
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchItems(); // Call the async function to fetch items
  }, [getItems]); // Dependency array ensures this runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className="container my-3">
      <h1>Menu</h1>
      <div className="row">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
