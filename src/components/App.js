import React, { useState } from "react";
import Header from "./Header";
import Items from "../constants/Items";
import ItemsList from "./ItemsList";

const App = () => {
  const [SelectedItems, setSelectedItems] = useState([]);
  const handleSelect = key => {
    if (SelectedItems.includes(key)) {
    } else {
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
