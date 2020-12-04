import React,{useState,useEffect} from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
function App() {
    const [name,setName]= useState([]);
  return (
    <div className="Lotto">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
