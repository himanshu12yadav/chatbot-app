import {useEffect, useState} from 'react';
import './ChatMessage.css';

export const ChatMessage = ({messages}) => {
    const [isTyping, isSetTyping] = useState(false);

    return (
        <>
            <div
                className="chat-messages"
                style={{
                    flex: 1,
                    padding: '16px',
                    overflowY: 'auto',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}
            >
                {messages.length > 0 &&
                    messages.map((item, key) => (
                        <div key={key} className={`message ${item.user}`}>
                            {item.message}
                        </div>
                    ))}
            </div>
        </>
    );
};
