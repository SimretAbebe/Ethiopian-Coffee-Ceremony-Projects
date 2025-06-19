import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import Header from "./component/header/header";
import History from "./component/history/histroy"; 
import Title from "./component/title/title";
import Part from "./component/part1/part";
import Pro from "./component/procedure/pro";
import Gallery from "./component/gallery/gallery";



const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title title="Discover the History of Ethiopian Coffee" />
      <div className="shared">
        <History />
        <Part />
      </div>
      <Title title="The Procedure of making Ethiopian Coffee" />
      
      <Pro />
      <Title title="The Art of Tradition" />
      <Gallery />
    </div>
  );
};

export default App;
