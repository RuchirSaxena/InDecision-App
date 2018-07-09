import React, { Component } from 'react';
import './App.css';

class IndecisionApp extends Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['Thing One', 'Thing Two', 'Thing four'];
    return (
      <React.Fragment>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </React.Fragment>
    );
  }
}

const Header = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </React.Fragment>
  );
}

const Action = () => {
  const handelPick = () => {
    alert("test");
  }
  return (
    <React.Fragment>
      <input type="button" onClick={handelPick} value="What you want to do ?" />

    </React.Fragment>
  );
}

class Options extends Component {
  constructor(props) {
    super(props);
    this.handelRemoveAll = this.handelRemoveAll.bind(this);
  }

  handelRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <React.Fragment>
        <input type="button" onClick={this.handelRemoveAll} value="Remove All" />
        {
          this.props.options.map(option => {
            return <Option option={option} />
          })
        }
      </React.Fragment>
    );
  }
}


const Option = (props) => {
  return (
    <React.Fragment>
      <div>{props.option}</div>
    </React.Fragment>
  );
}

const AddOption = () => {
  return (
    <React.Fragment>
      <input type="text" />
      <input type="button" value="Add Option" />
    </React.Fragment>
  );
}

export default IndecisionApp;



