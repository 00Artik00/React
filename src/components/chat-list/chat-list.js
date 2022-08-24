import { List } from "@mui/material";
import { useCallback, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Chat } from "./chat";

// @TODO переделать на роутер (использовать NavLink to={`/chat/${chat}`})
export const ChatList = () => {
  const [chatList] = useState(["room1", "room2", "room3"]);
  const [selectedRoom, setSeledRoom] = useState("room1");
  const { roomId } = useParams();

  return (
    <List component="nav">
      {chatList.map((chat) => (
        <NavLink key={chat} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={chat === roomId}
          />
        </NavLink>
      ))}
    </List>
  );
};
