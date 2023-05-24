import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/products/Product";
import Nav from "./components/navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/weather/Weather";
import WeatherC from "./components/weather/WeatherC";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              {" "}
              inline
              <div style={{ textAlign: "center" }}>
                {" "}
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                <span>Hello React</span> with Duc Anh
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
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/about">
          <div>I'm Duc Anh</div>
        </Route>
        <Route path="*">
          <div>404 not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
