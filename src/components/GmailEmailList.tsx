
import React from 'react';
import { Star, RefreshCcw, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  isStarred: boolean;
  isRead: boolean;
  date: string;
  labels?: string[];
}

interface EmailRowProps {
  email: Email;
  toggleStar: (id: string) => void;
  onEmailClick: (email: Email) => void;
}

const EmailRow = ({ email, toggleStar, onEmailClick }: EmailRowProps) => (
  <div 
    className={`gmail-email-row ${!email.isRead ? 'font-medium' : ''} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
    onClick={() => onEmailClick(email)}
  >
    <div className="flex items-center w-full">
      <div className="flex items-center pr-4">
        <Checkbox 
          id={`email-${email.id}`} 
          className="mr-2"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={(e) => { 
            e.stopPropagation(); 
            toggleStar(email.id); 
          }}
          className="p-1"
        >
          <Star 
            size={18} 
            fill={email.isStarred ? "gold" : "transparent"} 
            color={email.isStarred ? "gold" : "gray"} 
          />
        </button>
      </div>
      
      <div className="flex-[0.25] truncate font-medium">{email.sender}</div>
      
      <div className="flex-1 flex">
        <span className="truncate">{email.subject} - </span>
        <span className="truncate text-gray-500 ml-1">{email.preview}</span>
      </div>
      
      <div className="ml-4 text-xs text-right whitespace-nowrap">{email.date}</div>
    </div>
  </div>
);

interface GmailEmailListProps {
  emails: Email[];
  toggleStar: (id: string) => void;
  onEmailClick: (email: Email) => void;
}

const GmailEmailList = ({ emails, toggleStar, onEmailClick }: GmailEmailListProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex justify-between items-center p-3 border-b">
        <div className="flex items-center">
          <Checkbox id="select-all" className="mr-2" />
          <button className="gmail-icon-button">
            <RefreshCcw size={18} />
          </button>
          <button className="gmail-icon-button">
            <MoreVertical size={18} />
          </button>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <span>1-50 of 704</span>
          <button className="gmail-icon-button ml-2">
            <ChevronLeft size={18} />
          </button>
          <button className="gmail-icon-button">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div>
        {emails.map((email) => (
          <EmailRow 
            key={email.id} 
            email={email} 
            toggleStar={toggleStar}
            onEmailClick={onEmailClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GmailEmailList;
