import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import ProduLista from "./components/ProduLista";
import ProduView from "./components/ProduView";
import ProductAdd from "./components/ProductAdd";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            CandyCom
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Agregar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={ProduLista} />
            <Route path="/add" component={ProductAdd} />
            <Route path="/:id" component={ProduView} />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
