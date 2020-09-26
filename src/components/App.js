import React from "react";
import Header from "./Header";
import Items from "../constants/Items";
import ItemsList from "./ItemsList";

const App = () => {
  return (
    <div className="App">
      <Header className="Header d-block text-center mb-4" dark={true}>
        React Shopping Helper
      </Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ItemsList Items={Items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
