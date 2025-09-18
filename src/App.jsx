import { useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { ChatContainer } from './components/ChatContainer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  console.log('Status: ', isChatOpen);

  return (
    <>
      {isChatOpen && <ChatContainer toggle={setIsChatOpen} />}
      {!isChatOpen && <Button setChatStatus={setIsChatOpen} />}
    </>
  );
}

export default App;
