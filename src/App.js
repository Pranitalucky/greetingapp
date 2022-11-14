import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  let currDate = new Date();
currDate = currDate.getHours();
let greet = "";
const cssStyle = {};
if(currDate >= 1 && currDate < 12){
  greet = "enjoy your morning with a cup of hot tea.Have a nice day";
  cssStyle.color = "green";
}else if(currDate >= 12 && currDate < 20){
  greet = "woohops..the day time is very hot";
  cssStyle.color = "yellow";
} else{
  greet = "such a peaceful night.have a sweet dream";
  cssStyle.color = "blue";
}
  return (
    <div>
    <h1>Hello Manoj <span style = {cssStyle}> {greet} </span> ...</h1>
    </div>
  );
}

export default App;
