import {useState} from 'react';
import {IoSend} from 'react-icons/io5';

export const ChatInput = ({inputMessage, submitted}) => {
    const [input, setInput] = useState('');


    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const clickHandler = () => {
        inputMessage(prev => {
            return [...prev, {
                user: 'human', message: input
            }]
        })
        setInput('');
        submitted(true);
    };


    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-end',
                }}
            >
        <textarea
            value={input}
            onChange={inputHandler}
            placeholder="Type your message..."
            style={{
                flex: 1,
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '10px 12px',
                fontSize: '14px',
                resize: 'none',
                minHeight: '40px',
                maxHeight: '100px',
                outline: 'none',
                fontFamily: 'inherit',
            }}
            onFocus={(e) => {
                e.target.style.borderColor = '#007bff';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
            }}
        />
                <button
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 16px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        minWidth: '60px',
                        height: '100%',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#0056b3';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#007bff';
                    }}
                    onClick={clickHandler}
                >
                    <IoSend size={30}/>
                </button>
            </div>
        </>
    );
};
