import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export const Claims = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your Virtual Claims Assistant. I can help you understand the claims process so you don't get denied. What happened?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock Bot Response
    setTimeout(() => {
      const botMsg: Message = { 
        id: Date.now() + 1, 
        text: "I understand. Based on typical AI-insurer policies, make sure you take photos of the damage immediately and do NOT admit fault at the scene. Would you like a checklist?", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex flex-col">
      <div className="container mx-auto px-4 md:px-6 flex-grow flex flex-col max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Virtual Claims Guide</h1>
          <p className="text-slate-600">Get instant advice on how to file a successful claim.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 flex-grow flex flex-col overflow-hidden h-[600px]">
          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-teal-500'}`}>
                    {msg.sender === 'user' ? <User className="text-white" size={20} /> : <Bot className="text-white" size={20} />}
                  </div>
                  <div className={`p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                className="flex-grow p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
