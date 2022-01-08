import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

// parameters (message.text will get the text of the message object :)
// higher order function (ref)
const Message = forwardRef(({ message, username }, ref) => {
  // checks if username is the same as the message username
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && `message__user`}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {!isUser && `${message.username || "Anonymous"}:`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
