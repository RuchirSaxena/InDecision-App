

 import React, { Component } from 'react';
// import './App.css';

class Counter extends Component{
  constructor(props){
    super(props);
    //Setting Default value of state
    this.state={
      counter:0
    }
    console.log(this.props);
    /*
    Binding the 'this' context to the function ,
    Below approach is performance efficent as 'this' context will be set to the fuctions only once and not again and again when the component re-renders again and again.
    */
    this.incrementCounter=this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }
  
  incrementCounter(){
      /**
       * setState() is a react predefined method to re-render 
       our Component with new modifications to the DOM if any 
       * setState() method takes callback fuction which returns an object with state changes
       */
      this.setState((oldState)=>{
        return {
          counter: oldState.counter +1
        }
      });
  }

  decrementCounter() {
    this.setState((prevState)=>{
      return{
        counter:prevState.counter-1
      }
    });
  }

  resetCounter() {
    this.setState(()=>{
      return {
        counter:0
      }
    });
  }

  render(){
    return(
      <div>
        <h1>Count :{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>+1</button>
        <button onClick={this.decrementCounter}>-1</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );

  }
}

 export default Counter;

// class IndecisionApp extends Component {
//   render() {
//     const title = 'Indecision';
//     const subtitle = 'Put your life in the hands of computer';
//     const options = ['Thing One', 'Thing Two', 'Thing four'];
//     return (
//       <React.Fragment>
//         <Header title={title} subtitle={subtitle} />
//         <Action />
//         <Options options={options} />
//         <AddOption />
//       </React.Fragment>
//     );
//   }
// }

// const Header = (props) => {
//   return (
//     <React.Fragment>
//       <h1>{props.title}</h1>
//       <h3>{props.subtitle}</h3>
//     </React.Fragment>
//   );
// }

// const Action = () => {
//   const handelPick = () => {
//     alert("test");
//   }
//   return (
//     <React.Fragment>
//       <input type="button" onClick={handelPick} value="What you want to do ?" />

//     </React.Fragment>
//   );
// }

// class Options extends Component {
//   constructor(props) {
//     super(props);
//     this.handelRemoveAll = this.handelRemoveAll.bind(this);
//   }

//   handelRemoveAll() {
//     console.log(this.props.options);
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <input type="button" onClick={this.handelRemoveAll} value="Remove All" />
//         {
//           this.props.options.map(option => {
//             return <Option option={option} />
//           })
//         }
//       </React.Fragment>
//     );
//   }
// }


// const Option = (props) => {
//   return (
//     <React.Fragment>
//       <div>{props.option}</div>
//     </React.Fragment>
//   );
// }

// const AddOption = () => {
//   return (
//     <React.Fragment>
//       <input type="text" />
//       <input type="button" value="Add Option" />
//     </React.Fragment>
//   );
// }

// export default IndecisionApp;



