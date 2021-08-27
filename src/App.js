import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

//Components
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";



export default function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              DaB-Azon
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route parth="/cart/:id?" component={CartScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
        </main>
        <footer className="row center">David Martinez -2021- All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}


