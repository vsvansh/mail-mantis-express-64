
import React, { useState } from 'react';
import GmailHeader from '@/components/GmailHeader';
import GmailSidebar from '@/components/GmailSidebar';
import GmailTabs from '@/components/GmailTabs';
import GmailEmailList from '@/components/GmailEmailList';
import ComposeModal from '@/components/ComposeModal';
import { mockEmails, promotionsEmails, socialEmails, updatesEmails } from '@/data/mockEmails';
import { Email } from '@/components/GmailEmailList';

const Index = () => {
  // State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeLabel, setActiveLabel] = useState('inbox');
  const [activeTab, setActiveTab] = useState('primary');
  const [composeOpen, setComposeOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [promotions, setPromotions] = useState<Email[]>(promotionsEmails);
  const [social, setSocial] = useState<Email[]>(socialEmails);
  const [updates, setUpdates] = useState<Email[]>(updatesEmails);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle star on email
  const toggleStar = (id: string) => {
    // Determine which email list to update
    let targetEmails: Email[];
    let setTargetEmails: React.Dispatch<React.SetStateAction<Email[]>>;

    switch (activeTab) {
      case 'primary':
        targetEmails = emails;
        setTargetEmails = setEmails;
        break;
      case 'promotions':
        targetEmails = promotions;
        setTargetEmails = setPromotions;
        break;
      case 'social':
        targetEmails = social;
        setTargetEmails = setSocial;
        break;
      case 'updates':
        targetEmails = updates;
        setTargetEmails = setUpdates;
        break;
      default:
        targetEmails = emails;
        setTargetEmails = setEmails;
    }

    // Update the starred status
    setTargetEmails(
      targetEmails.map((email) =>
        email.id === id ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  // Get current emails based on active tab
  const getCurrentEmails = () => {
    switch (activeTab) {
      case 'primary':
        return emails;
      case 'promotions':
        return promotions;
      case 'social':
        return social;
      case 'updates':
        return updates;
      default:
        return emails;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <GmailHeader toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <GmailSidebar 
          isOpen={sidebarOpen} 
          setActiveLabel={setActiveLabel}
          activeLabel={activeLabel}
        />

        {/* Email Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <GmailTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Email List */}
          <GmailEmailList emails={getCurrentEmails()} toggleStar={toggleStar} />
        </div>
      </div>

      {/* Compose Button (Mobile) */}
      <div className="fixed bottom-4 right-4 lg:hidden z-10">
        <button 
          className="bg-white shadow-lg rounded-full p-4"
          onClick={() => setComposeOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
      </div>

      {/* Compose Modal */}
      <ComposeModal isOpen={composeOpen} onClose={() => setComposeOpen(false)} />
    </div>
  );
};

export default Index;
