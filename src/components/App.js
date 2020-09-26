import React, { useState } from "react";
import Header from "./Header";
import Items from "../constants/Items";
import ItemsList from "./ItemsList";

const App = () => {
  const [SelectedItems, setSelectedItems] = useState([]);
  const handleSelect = key => {
    // Check if the element is present in the selected items.
    if (SelectedItems.includes(key)) {
      // Make a copy of the selected items to not mutate the state.
      let items = [...SelectedItems];
      // Find index at which the element exists.
      const idx = items.indexOf(key);
      // If the element is there, then...
      if (idx > -1) {
        // Remove the element.
        items.splice(idx, 1);
      }
      // Update the state.
      setSelectedItems(items);
    } else {
      // Add the element at the end and sort the whole array alphabetically and update the state.
      setSelectedItems([...SelectedItems, key].sort((a, b) => +a - +b));
    }
  };
  return (
    <div className="App">
      <Header className="Header d-block text-center mb-4" dark={true}>
        React Shopping Helper
      </Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ItemsList
              Items={Items}
              SelectedItems={SelectedItems}
              handleSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
