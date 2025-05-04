
import React from 'react';
import { ArrowLeft, Archive, Clock, Delete, MoreVertical, MoveRight, Printer, Star, Undo } from 'lucide-react';
import { Email } from './GmailEmailList';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { Tag } from 'lucide-react'; // Import Tag icon as a replacement for Label

interface EmailDetailProps {
  email: Email | null;
  onClose: () => void;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email, onClose }) => {
  if (!email) return null;

  return (
    <div className="flex-1 flex flex-col h-full overflow-auto bg-white dark:bg-gray-900">
      {/* Email actions toolbar */}
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ArrowLeft size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Archive size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Delete size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Clock size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <MoveRight size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Tag size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical size={20} />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">1 of 704</span>
          <Button variant="ghost" size="icon">
            <Undo size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Printer size={20} />
          </Button>
        </div>
      </div>

      {/* Email header */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold mb-1">{email.subject}</h1>
            <div className="text-xs text-gray-500 mb-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded mr-2">Inbox</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Printer size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Sender info */}
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4 bg-gray-300">
            <span className="text-lg">{email.sender.charAt(0).toUpperCase()}</span>
          </Avatar>
          <div>
            <div className="flex items-center">
              <span className="font-medium">{email.sender}</span>
              <span className="text-gray-500 text-sm ml-2">&lt;{email.sender.toLowerCase().replace(/\s/g, '')}@example.com&gt;</span>
            </div>
            <div className="text-xs text-gray-500">
              to me
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">{email.date}</span>
          <Button variant="ghost" size="icon">
            <Star 
              size={18} 
              fill={email.isStarred ? "gold" : "transparent"} 
              color={email.isStarred ? "gold" : "gray"}
            />
          </Button>
        </div>
      </div>

      {/* Email content */}
      <div className="p-6 flex-1">
        <div className="email-content">
          <p>Dear User,</p>
          <br />
          <p>{email.preview}</p>
          <br />
          {email.subject.includes("RECRUITMENT") && (
            <>
              <h3 className="font-bold mt-4 text-purple-800">RECRUITMENT & DEVELOPMENT MANAGER</h3>
              <p>Jobsnta</p>
              <p>Multiple Cities 1-4 yrs</p>
              <p>Skills: Sales, Sales Front Line Sales, Business Development</p>
              <br />
              <div className="mt-4 text-center">
                <button className="bg-purple-700 text-white px-6 py-2 rounded-md">
                  Quick Apply
                </button>
                <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md ml-4">
                  View All Jobs
                </button>
              </div>
            </>
          )}
          
          {email.subject.includes("Discord") && (
            <>
              <p>You have new messages in your Discord channels.</p>
              <br />
              <p>Click below to view them:</p>
              <br />
              <button className="bg-[#5865F2] text-white px-6 py-2 rounded-md">
                View Messages
              </button>
            </>
          )}
          
          {email.subject.includes("Wellfound") && (
            <>
              <p>Welcome to Wellfound!</p>
              <br />
              <p>Please complete your profile to get started. Our platform connects talented individuals with exciting opportunities.</p>
              <br />
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md">
                Complete Profile
              </button>
            </>
          )}
          
          <br />
          <p>Best regards,</p>
          <p>{email.sender}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
