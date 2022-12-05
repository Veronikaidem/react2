import "./App.css";
import axios from "axios";
import React from "react";

function App() {
  //first one
  const deficienti =  [
    { name: "veronika", surname: "kopaliani", age: 30, id: 01 },
    { name: "marco", surname: "vatteroni", age: 34, id: 02 },
    {},
    { name: "andrea", surname: "ricci", age: 32, id: 03 },
    {},
    { name: "gianmarco", surname: "ludovici", age: 34, id: 04 },
    {},
    {
      name: "claudio", surname: "colasanti", age: 41, id: 05 
    }
  ]

  const isLoggedIn = true;
  const idontknowwhatimdoing = () => {
    if (isLoggedIn) {
      return <div>{deficienti}</div>;
    } else {
      return <p>you are not authorized to see users list</p>;
    }
  };
  

  //second homework :( 
  const navBar = ['home', 'about', 'booking', 'contact'];
  const footer = ['something', 'blabla', 'medzineba'];
 
const Wrapper = ()=> {
  console.log('i have no idea what to do now');
}
  
 
  return (
    <div className="App">
  <nav>
    <ul>{navBar}</ul></nav>
  <footer> <ul>{footer}</ul></footer>
    </div>
  );
}




export default App;
