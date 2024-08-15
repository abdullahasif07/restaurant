import React, { useContext } from "react";
import MenuContext from "../context/menu/CreateContext";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const { deleteItem } = useContext(MenuContext);
  const navi = useNavigate();
  const { role, item, fetchItems, handleAddToCart } = props; 

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async () => {
    let temp = item;
    localStorage.setItem('tempItem', JSON.stringify(temp));
    navi("/menuform");
  };

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>

          {role === "admin" && (
            <>
              <i
                className="fa-solid fa-trash mx-3"
                onClick={() => handleDelete(item._id)}
                style={{ cursor: 'pointer' }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={handleUpdate}
                style={{ cursor: 'pointer' }}
              ></i>
            </>
          )}

          {role === "customer" && (
            <>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
