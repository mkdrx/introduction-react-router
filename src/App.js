// Imports Route from React-Router - Route is a component
// Need to specify path and which component should be rendered (below in the return of App)
// Switch Component is imported to limit Routes, the one matching the path first and render that Route
// but we can use the exact prop and Switch won't take the path matching first
import { Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
