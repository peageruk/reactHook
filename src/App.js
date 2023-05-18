import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/products/Product";
import Nav from "./components/navigation/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <div>weather app</div>
        </Route>
        <Route path="/about">
          <div>I'm Duc Anh</div>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header content-left">
              {" "}
              inline
              <div style={{ textAlign: "center" }}>
                {" "}
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                <span>Hello world React</span> with Eric
              </p>
              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
