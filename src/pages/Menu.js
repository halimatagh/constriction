import React from "react";
import MenuList from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
// import pr1 from "../image/project-1.jpg";
// import pr2 from "../image/project-2.jpg";
// import pr3 from "../image/project-3.jpg";
// import pr4 from "../image/project-4.jpg";

import "../styles/Menu.css";

function Menu() {
  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Business services</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                id={menuItem.id}
                image={menuItem.image}
                name={menuItem.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
