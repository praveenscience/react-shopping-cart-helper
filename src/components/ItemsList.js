import React from "react";

const ItemsList = ({ Items, SelectedItems, handleSelect }) => {
  return (
    <ul className="list-group">
      {Items.map((item, key) => (
        <li
          className={
            "list-group-item list-group-item-action" +
            (SelectedItems.includes(key) ? " active" : "")
          }
          key={key}
          onClick={e => {
            e.preventDefault();
            handleSelect(key);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
