import './App.css';
import React from 'react';
// Функциональный компонент
export const FunctionComponent = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello, {props.name}, (function component)</h3>
      </header>
    </div>
  );
}
// Классовый компонент
export class ClassComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          My First React App
          <h3>Hello, {this.props.name}, (class component)</h3>
        </header>
      </div>
    );
  }
}
// Компонент для 3 пункта дз
export const Message = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {props.text}
      </header>
    </div>
  );
}


