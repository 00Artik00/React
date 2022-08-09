import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from "react-dom/client";
import './index.css';



function App() {
  const [userName, setUserName] = useState('Artem');
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  const robotText = 'Some text for you from Robot'



  const createMessage = () => {
    setMessageList([...messageList, { author: userName, text: value }]);
    setValue('');
  }

  const clearMessageBlock = () => {
    document.querySelector('form').reset();
  }

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author === userName) {
        var idTimer = setTimeout(() => {
          setMessageList([...messageList, { author: "Robot", text: robotText }]);
        }
          , 1500);
      }
    }
    return () => {
      clearInterval(idTimer);
    };
  }, [messageList]);

  return (
    <div className="messageBox">
      <div className="message">
        {messageList.map((message, index) => {
          return (
            <p key={`${message.author}_{message.text}`}>
              {message.author} - {message.text}
            </p>
          );
        })}
      </div>
      <div className="submit">
        <form action="#">
          <textarea type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={createMessage} >Submit Answer</button>
        </form>
      </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);