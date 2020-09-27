import React, { useState } from "react";
import Header from "./Header";
import Items from "../constants/Items";
import ItemsList from "./ItemsList";
import Shop from "../assets/shop.png";

const App = () => {
  const [SelectedItems, setSelectedItems] = useState([]);
  const [ShopMode, setShopMode] = useState(false);
  const ShopModeValues = [...SelectedItems]
    .map(item => "- " + Items[item])
    .join("\n");
  const handleSelect = key => {
    // Check if the element is present in the selected items.
    if (SelectedItems.includes(key)) {
      // Make a copy of the selected items to not mutate the state.
      let items = [...SelectedItems];
      // Find index at which the element exists.
      const idx = items.indexOf(key)
      // Remove the element.
      items.splice(idx, 1);
      
      // Update the state.
      setSelectedItems(items);
    } else {
      // Add the element at the end and sort the whole array alphabetically and update the state.
      setSelectedItems([...SelectedItems, key];
    }
  };
  const toggleShopMode = e => {
    e.preventDefault();
    setShopMode(!ShopMode);
  };
  const handleCopy = e => {
    e.target.select();
    document.execCommand("copy");
  };
  return (
    <div className="App">
      <Header className="Header d-block text-center mb-4" dark={true}>
        React Shopping Helper
      </Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {ShopMode ? (
              <textarea
                readOnly={true}
                className="form-control"
                value={ShopModeValues}
                onClick={handleCopy}
              />
            ) : (
              <ItemsList
                Items={Items}
                SelectedItems={SelectedItems}
                handleSelect={handleSelect}
              />
            )}
          </div>
        </div>
      </div>
      <span
        className={"shop-button" + (ShopMode ? " active" : "")}
        onClick={toggleShopMode}
      >
        <img src={Shop} alt="Start Shopping" />
      </span>
    </div>
  );
};

export default App;
