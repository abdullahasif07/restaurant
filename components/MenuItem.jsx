import React, { useContext } from "react";
import MenuContext from "../context/menu/CreateContext";

const MenuItem = (props) => {
    let {deleteItem} = useContext(MenuContext);
    console.log(props.item)
    return (
      <div className="col-md-3 my-3">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">
              {props.item.price}
              
            </p>
            {/* {<i className="fa-solid fa-trash mx-3" onClick={()=>{deleteItem(props.item._id);}}></i>} */}
            {/* {<i className="fa-solid fa-pen-to-square" onClick={()=>{props.updateNote(props.note);}}></i>} */}
          </div>
        </div>
      </div>
    );
};

export default MenuItem;
