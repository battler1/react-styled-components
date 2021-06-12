import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SingUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SingUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
