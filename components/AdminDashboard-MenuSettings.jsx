import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const AdminDashboardMenuSettings = () => {
  const navi = useNavigate();
  return (
    <div>
      <section className="menu-settings">
        <h2>Menu Settings</h2>
        <button onClick={() => navi("/menuform")}>Add Item</button>
        <Menu />
      </section>
    </div>
  );
};

export default AdminDashboardMenuSettings;
