import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';


const appData = {
  options: ['one']
}

const onFromSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.txtOption.value;
  console.log(option);
 debugger;
  if (!option) {
    alert("Enter Option");
  } else {
    appData.options.push(option);
  }
  e.target.elements.txtOption.value="";
  reRender();
}

const onMakeDecision = (e) => {
  e.preventDefault();
  const randomNum = Math.floor(Math.random() * appData.options.length);
  let selectedElement = appData.options[randomNum];
  console.log(selectedElement);
  alert(selectedElement);
}

const onRemoveAll = (e) => {
  e.preventDefault();
  appData.options = [];
  reRender();
}
let App ="";
const reRender=()=>{
   App =
(
    <React.Fragment>
      <h1>Indecision App</h1>
      <form onSubmit={onFromSubmit}>
        <button disabled={appData.options.length===0} onClick={onMakeDecision}>What should I do ?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <br />
        <input type="text" name="txtOption" id="" />
        <button>Add Option</button><br />

        {(appData.options && appData.options.length > 0) && <ul>
          {
            appData.options.map((option) => {
              return <li key={option}>{option}</li>
            })
          }
        </ul>
        }
      </form>
    </React.Fragment>
  );
  ReactDOM.render(App, document.getElementById('root'));
}

export { App, reRender};
