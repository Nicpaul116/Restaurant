import React from "react";
import {
  Blog,
  Footer,
  Header,
  Menu,
  Contact,
  Login,
  About,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div>
      <Login />
      <Header />
      <About />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
