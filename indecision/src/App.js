

import React, { Component } from 'react';
// import './App.css';


class IndecisionApp extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    }
    this.handelRemoveAll = this.handelRemoveAll.bind(this);
    this.handelPick = this.handelPick.bind(this);
    this.handelAddoption = this.handelAddoption.bind(this);
  }

  handelRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handelPick() {
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[randomNo];
   
    alert(randomOption);
  }

  handelAddoption(option) {
   
    let options = this.state.options;
    options.push(option);
    this.setState(() => {
      return {
        options: options
      };
    });

  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
     const options = [];
    return (
      <React.Fragment>
        <Header
          title={title}
          subtitle={subtitle} />
        <Action
          options={this.state.options}
          handelPick={this.handelPick} />
        <Options
          options={this.state.options}
          handelRemoveAll={this.handelRemoveAll}
        />
        <AddOption
          handelAddoption={this.handelAddoption} />
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

class Action extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="button"
          disabled={this.props.options.length > 0 ? "" : "disabled"}
          onClick={this.props.handelPick} value="What you want to do ?" />
      </React.Fragment>
    );
  }

}

class Options extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="button" onClick={this.props.handelRemoveAll} value="Remove All" />
        {
          this.props.options.map(option => {
            return <Option key={option} option={option} />
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

class AddOption extends Component {
  constructor(props){
    super(props);
    this.handelAddoption = this.handelAddoption.bind(this);
  }
  handelAddoption(e) {
   
    e.preventDefault();
  
    let option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handelAddoption(option);
      e.target.elements.option.value="";

    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handelAddoption} >
          <input type="text" name="option" />
         <button>Add Option</button>
        </form>
      </React.Fragment>
    );
  }
}

export default IndecisionApp;



