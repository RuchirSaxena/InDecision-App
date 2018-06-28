import React, { Component } from 'react';
import './App.css';

class IndecisionApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </React.Fragment>
    );
  }
}

const Header = () => {
  return (
    <React.Fragment>
      <h1>Indecision</h1>
      <h3>Put Your Life in the hands of computer</h3>
    </React.Fragment>
  );
}

const Action = () => {
  function  handelPick(){
     alert("test");
  }
  return (
    <React.Fragment>
      {/* <p>What you want to do ?</p> */}
      <input type="button" onClick={handelPick} value="What you want to do ?" />
    </React.Fragment>
  );
}

const Options = () => {
  return (
    <React.Fragment>
      <p>Options Componet</p>
      <p>Options</p>
    </React.Fragment>
  );
}

const Option = () => {
  return (
    <React.Fragment>
      <p>Option Componet</p>
    </React.Fragment>
  );
}

const AddOption = () => {
  return (
    <React.Fragment>
      <p>Add Option Here</p>
    </React.Fragment>
  );
}

export default IndecisionApp;



