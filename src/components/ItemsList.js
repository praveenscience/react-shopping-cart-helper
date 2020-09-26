import React from "react";

const ItemsList = ({ Items }) => {
  return (
    <ul className="list-group">
      {Items.map((item, key) => (
        <li className="list-group-item list-group-item-action" key={key}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
