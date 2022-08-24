import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";

// @TODO  переделать как в https://codesandbox.io/s/gbchat-router-7fg2fn?file=/src/App.js:1887-1898
export const MessageList = () => {
  const [messageList, setMessageList] = useState({ room1: [], room2: [], room3: [] });
  const [value, setValue] = useState("");

  const ref = useRef();
  const { roomId } = useParams();

  const sendMessage = () => {
    if (value) {
      setMessageList({
        ...messageList,
        [roomId]: [...messageList[roomId], { author: 'user', message: value }]
      });

      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messageList]);

  useEffect(() => {
    const lastMessage = messageList[roomId][messageList[roomId].length - 1];
    let timerId = null;

    if (messageList[roomId].length && lastMessage.author === "user") {
      timerId = setTimeout(() => {
        setMessageList({
          ...messageList,
          [roomId]: [...messageList[roomId], { author: 'Bot', message: "Hello from Bot" }]
        });
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList[roomId]]);

  return (
    <>
      <div ref={ref}>
        {messageList[roomId].map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <Input
        fullWidth
        placeholder="Проверить добавление чата..."
        endAdornment={
          <InputAdornment position="end">
            <SendIcon onClick={addChat} />
          </InputAdornment>
        }
      />
      <Input
        autoFocus
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};


