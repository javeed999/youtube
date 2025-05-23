import '/home/javeed/Documents/MERN STACK/my-app/src/componentsJ/ChatBot/ChatWidget.css'; // Link to the CSS file
import React, { useState } from 'react';
import './ChatWidget.css'; // ✅ Adjust if your path is different

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setInput('');

    try {
      const res = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });

      if (!res.ok) {
        const errorData = await res.text();
        const errorMsg = {
          sender: 'bot',
          text: `⚠️ Server error: ${res.status} — ${errorData}`
        };
        setMessages(prev => [...prev, errorMsg]);
        return;
      }

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      const errorMsg = {
        sender: 'bot',
        text: '⚠️ Fetch error: ' + error.message
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-widget">
      <div className="chat-icon" onClick={toggleChat}>
        💬
      </div>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            Chatbot
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">Typing...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
