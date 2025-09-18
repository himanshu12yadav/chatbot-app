import {useEffect, useState} from 'react';
import {ChatHeader} from './ChatHeader';
import {ChatInput} from './ChatInput';
import {ChatMessage} from './ChatMessage';

export const ChatContainer = ({toggle}) => {
    const [message, setMessage] = useState([]);
    const [inputStatus, setInputStatus] = useState(true);

    const [token, setToken] = useState(
        localStorage.getItem('token') !== undefined
            ? localStorage.getItem('token')
            : null);


    useEffect(() => {

        const makeRequest = async () => {
            let url =
                'http://localhost:5678/webhook/08504fa0-a365-41be-bc4d-fee0d7392129/chat';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatInput: `${message.length > 0 ? message[message.length - 1].message : ""}`,
                    user: 'guest',
                    sessionId: token ? token : null,
                    id: Math.random().toString(36).substr(2),
                }),
            });

            const responseJSON = await response.json();
            let {message: reply, token: t} = await JSON.parse(responseJSON.output);
            if (!token) {
                localStorage.setItem('token', `${t}`);
            }

            setMessage((prev) => [
                ...prev,
                {
                    user: 'system',
                    message: reply, // Use either 'message' OR 'reply', not both
                },
            ]);
        };


        if (inputStatus) {
            makeRequest().then(() => setInputStatus(false));
        }


    }, [inputStatus, setMessage]);

    return (
        <>
            <div
                className="chat-container"
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '20px',
                    width: '350px',
                    height: '500px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0',
                }}
            >
                <ChatHeader toggleEvent={toggle}/>
                <ChatMessage messages={message}/>
                <ChatInput inputMessage={setMessage} submitted={setInputStatus}/>
            </div>
        </>
    );
};
