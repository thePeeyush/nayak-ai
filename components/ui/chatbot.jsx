"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [apiKey, setApiKey] = useState(process.env.OPENAI_API_KEY || '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');

  useEffect(() => {
    if (!apiKey) {
      console.error('Please set your OpenAI API key in the .env.local file.');
      return;
    }
  }, [apiKey]);

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { text: input, user: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 50,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botMessage = response.data.choices[0].text;
      const updatedMessages = [...newMessages, { text: botMessage, user: 'bot' }];
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
