
import React, { useState } from 'react';
import { X, Minimize, ArrowUpRight, Paperclip, MoreVertical, Trash, Undo, Redo, Bold, Italic, Underline, List, ListOrdered, AlignLeft, Quote, Strikethrough, ImageIcon, Smile, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendEmail?: (email: {to: string; subject: string; body: string}) => void;
}

const ComposeModal = ({ isOpen, onClose, onSendEmail }: ComposeModalProps) => {
  const [to, setTo] = useState('');
  const [cc, setCC] = useState('');
  const [bcc, setBCC] = useState('');
  const [showCcBcc, setShowCcBcc] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const { toast } = useToast();
  
  if (!isOpen) return null;
  
  const handleSend = () => {
    if (onSendEmail) {
      onSendEmail({
        to,
        subject,
        body
      });
    }
    
    toast({
      title: "Email sent",
      description: "Your message has been sent.",
    });
    
    // Reset form
    setTo('');
    setSubject('');
    setBody('');
    onClose();
  };
  
  return (
    <div className="fixed bottom-0 right-16 w-[550px] h-[500px] bg-white shadow-xl rounded-t-lg z-20 flex flex-col">
      <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
        <span className="text-sm font-medium">New Message</span>
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
        <div className="border-b px-4 py-2 flex items-center">
          <div className="w-12">To</div>
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipients"
            className="border-0 focus-visible:ring-0 px-2 py-1"
          />
          <div className="text-gray-500 flex space-x-2">
            {!showCcBcc && (
              <button 
                onClick={() => setShowCcBcc(true)}
                className="text-sm hover:text-gray-800"
              >
                Cc/Bcc
              </button>
            )}
          </div>
        </div>
        
        {showCcBcc && (
          <>
            <div className="border-b px-4 py-2 flex items-center">
              <div className="w-12">Cc</div>
              <Input
                value={cc}
                onChange={(e) => setCC(e.target.value)}
                className="border-0 focus-visible:ring-0 px-2 py-1"
              />
            </div>
            <div className="border-b px-4 py-2 flex items-center">
              <div className="w-12">Bcc</div>
              <Input
                value={bcc}
                onChange={(e) => setBCC(e.target.value)}
                className="border-0 focus-visible:ring-0 px-2 py-1"
              />
            </div>
          </>
        )}
        
        <div className="border-b px-4 py-2">
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="border-0 focus-visible:ring-0 px-2 py-1"
          />
        </div>
        
        <div className="flex-1 px-4 py-2 overflow-auto">
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Compose email"
            className="border-0 focus-visible:ring-0 h-full resize-none"
          />
        </div>
      </div>
      
      {/* Format toolbar */}
      <div className="border-t border-b px-2 py-1 flex items-center space-x-1 text-gray-600">
        <button className="p-1 hover:bg-gray-100 rounded"><Undo size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Redo size={16} /></button>
        <span className="mx-1 text-gray-300">|</span>
        <select className="bg-transparent border-0 text-sm outline-none">
          <option>Sans Serif</option>
        </select>
        <span className="mx-1 text-gray-300">|</span>
        <button className="p-1 hover:bg-gray-100 rounded"><Bold size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Italic size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Underline size={16} /></button>
        <span className="mx-1 text-gray-300">|</span>
        <button className="p-1 hover:bg-gray-100 rounded"><AlignLeft size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><List size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><ListOrdered size={16} /></button>
        <span className="mx-1 text-gray-300">|</span>
        <button className="p-1 hover:bg-gray-100 rounded"><Quote size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Strikethrough size={16} /></button>
      </div>
      
      <div className="p-3 flex justify-between items-center">
        <Button 
          variant="default" 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md"
          onClick={handleSend}
        >
          Send
        </Button>
        
        <div className="flex items-center space-x-1">
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Paperclip size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <ImageIcon size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Smile size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <AlertTriangle size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <MoreVertical size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
