import React, { useContext } from "react";
import MenuContext from "../context/menu/CreateContext";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const { deleteItem } = useContext(MenuContext);
  const navi = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      props.fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async () => {
    let temp = props.item;
    localStorage.setItem('tempItem', JSON.stringify(temp));
    navi("/menuform");
  }

  return (
    <>
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">{props.item.price}</p>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => handleDelete(props.item._id)}
            style={{cursor:'pointer'}}
          ></i>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={handleUpdate}
            style={{cursor:'pointer'}}
            ></i>
        </div>
      </div>
    </div>
    </>
  );
};

export default MenuItem;
