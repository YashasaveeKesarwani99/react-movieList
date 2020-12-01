import React from "react";
import "./styles.css";
import Search from "../Container/Search/search";
import { BrowserRouter, Route } from "react-router-dom";
import Authentication from "../Container/Authentication/authentication";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => <Authentication />} />
        <Route path="/Search" render={() => <Search />} />
      </div>
    </BrowserRouter>
  );
}
