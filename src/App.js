import React from "react";
import { Blog, Footer, Header, Menu, Contact, Login } from "./containers";
import { Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Header />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
