import { useNavigate } from "react-router-dom";
import MenuContext from "./CreateContext";

const MenuState = (props) => {
  const navi = useNavigate();

  const addItem = async (details) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/menu/additem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify(details),
        }
      );

      const res = await response.json();

      if (res.success) {
        alert("item added");
        navi("/admin-dashboard");
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const deleteItem = async (id) => {
    const authToken = localStorage.getItem("auth-token");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("auth-token", authToken);

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/menu/deleteitem/${id}`,
        {
          method: "POST",
          headers: myHeaders,
        }
      );

      const n = await response.json();
      if (n.success) {
        alert('deleted successfully');
      } else {
        res.status(500).json("deletion unsuccessful");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("internal server error");
    }
  };

  const getItems = async () => {
    const authToken = localStorage.getItem("auth-token");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("auth-token", authToken);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/menu/getitems",
        {
          method: "GET",
          headers: myHeaders,
        }
      );

      const n = await response.json();
      if (n.success) {
        return n.items;
      } else {
        //console.log(n);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("internal server error");
    }
  };

  const updateItem = async (item, id) => {
    const authToken = localStorage.getItem("auth-token");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("auth-token", authToken);
  
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/menu/updateitem/${id}`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(item),
        }
      );
  
      const res = await response.json();
  
      if (res.success) {
        alert("Updated successfully");
      } else {
        console.error("Update unsuccessful:", res.message || res);
      }
    } catch (error) {
      console.error("Internal server error:", error);
    }
  };

  return (
    <MenuContext.Provider value={{ addItem, getItems, deleteItem,updateItem }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
