import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FunctionComponent, ClassComponent, Message } from "./App";


const message = "some random text for point 3 homework"
const Parent = () => {
  return (
    <div className="App">
      <FunctionComponent name='Artem' />
      <hr />
      <ClassComponent name='Ivan' />
      <hr />
      <Message text={message} />
    </div>
  );
};






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


reportWebVitals();
