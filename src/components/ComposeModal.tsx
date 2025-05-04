
import React, { useState } from 'react';
import { X, Minimize, ArrowUpRight, Paperclip, MoreVertical, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComposeModal = ({ isOpen, onClose }: ComposeModalProps) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed bottom-0 right-16 w-[500px] h-[500px] bg-white shadow-xl rounded-t-lg z-20 flex flex-col">
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center rounded-t-lg">
        <span className="text-sm">New Message</span>
        <div className="flex items-center space-x-3">
          <button className="hover:bg-gray-700 rounded p-1">
            <Minimize size={16} />
          </button>
          <button className="hover:bg-gray-700 rounded p-1">
            <ArrowUpRight size={16} />
          </button>
          <button className="hover:bg-gray-700 rounded p-1" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="border-b p-2">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipients"
            className="border-0 focus-visible:ring-0 px-2 py-1"
          />
        </div>
        
        <div className="border-b p-2">
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="border-0 focus-visible:ring-0 px-2 py-1"
          />
        </div>
        
        <div className="flex-1 p-2">
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Compose email"
            className="border-0 focus-visible:ring-0 h-full resize-none"
          />
        </div>
      </div>
      
      <div className="p-3 border-t flex justify-between items-center">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          Send
        </Button>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Paperclip size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <MoreVertical size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
