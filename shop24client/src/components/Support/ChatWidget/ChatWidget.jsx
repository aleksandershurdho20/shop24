import React, { useState } from "react";
import {
    ChatBox,
    ChatWindow,
    MsgContainer,
    MsgBox,
    Image,
    Flr,
    Messages,
    Message,
    TimeStamp,
    Username,
    PostTime,
    ChatForm,
    Input,
    Button,
    ChatHeader,
    ToogleChat,
    ChatCircle,
    ChatOverlay,
} from "./styles";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
const handleSubmit = (e) => e.preventDefault();
export default function ChatWidget() {
    const [isChatOpened, setIsChatOpened] = useState(true);
    const handleToogle = () => setIsChatOpened(!isChatOpened);
    return (
        <>
            {isChatOpened ? (
                <ChatBox>
                    <ChatHeader>
                        <ToogleChat>
                            <CloseIcon onClick={handleToogle} />
                        </ToogleChat>
                    </ChatHeader>
                    <ChatWindow>
                        <MsgContainer>
                            <MsgBox>
                                <Image
                                    className="user-img"
                                    id="user-0"
                                    src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro"
                                />
                                <Flr>
                                    <Messages>
                                        <Message>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Praesent varius, neque non tristique
                                            tincidunt, mauris nunc efficitur
                                            erat, elementum semper justo odio id
                                            nisi.
                                        </Message>
                                    </Messages>
                                    <TimeStamp>
                                        <Username>Aleksander</Username>&bull;
                                        <PostTime>3 minutes ago</PostTime>
                                    </TimeStamp>
                                </Flr>
                            </MsgBox>
                        </MsgContainer>
                        <MsgContainer className="msg-self">
                            <MsgBox className="msg-box">
                                <Flr>
                                    <Messages>
                                        <Message className="msg">
                                            Lorem ipsum
                                        </Message>
                                    </Messages>
                                    <TimeStamp className="timestamp">
                                        <Username>Aleksander2</Username>&bull;
                                        <PostTime> 10 minutes ago</PostTime>
                                    </TimeStamp>
                                </Flr>
                                <Image
                                    className="user-img"
                                    id="user-0"
                                    src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro"
                                />
                            </MsgBox>
                        </MsgContainer>
                    </ChatWindow>
                    <ChatForm onSubmit={handleSubmit}>
                        <Input placeholder="Enter your message" />
                        <Button>
                            <SendIcon />
                        </Button>
                    </ChatForm>
                </ChatBox>
            ) : (
                <ChatCircle onClick={handleToogle} className="slide-down">
                    <ChatOverlay />
                    <ChatIcon fontSize="large" />
                </ChatCircle>
            )}
        </>
    );
}
