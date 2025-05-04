
import React, { useState } from 'react';
import GmailHeader from '@/components/GmailHeader';
import GmailSidebar from '@/components/GmailSidebar';
import GmailTabs from '@/components/GmailTabs';
import GmailEmailList from '@/components/GmailEmailList';
import EmailDetail from '@/components/EmailDetail';
import RightSidebar from '@/components/RightSidebar';
import ComposeModal from '@/components/ComposeModal';
import { mockEmails, promotionsEmails, socialEmails, updatesEmails, sentEmails } from '@/data/mockEmails';
import { Email } from '@/components/GmailEmailList';
import { Pencil } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  // State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [activeLabel, setActiveLabel] = useState('inbox');
  const [activeTab, setActiveTab] = useState('primary');
  const [composeOpen, setComposeOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [promotions, setPromotions] = useState<Email[]>(promotionsEmails);
  const [social, setSocial] = useState<Email[]>(socialEmails);
  const [updates, setUpdates] = useState<Email[]>(updatesEmails);
  const [sent, setSent] = useState<Email[]>(sentEmails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const { toast } = useToast();

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
      case 'sent':
        targetEmails = sent;
        setTargetEmails = setSent;
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

  // Handle sending an email
  const handleSendEmail = (email: {to: string; subject: string; body: string}) => {
    const newEmail: Email = {
      id: `sent${sent.length + 1}`,
      sender: 'Me',
      subject: email.subject || '(no subject)',
      preview: email.body.substring(0, 50) + (email.body.length > 50 ? '...' : ''),
      isStarred: false,
      isRead: true,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSent([newEmail, ...sent]);
    
    // Show toast notification
    toast({
      title: 'Email sent',
      description: 'Your message has been sent successfully.',
    });

    // Close the compose modal
    setComposeOpen(false);
  };

  // Handle email click to view details
  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email);
    
    // Mark email as read
    const updateEmailAsRead = (emails: Email[]) => 
      emails.map(e => e.id === email.id ? { ...e, isRead: true } : e);
    
    // Update the correct email list
    switch (activeTab) {
      case 'primary':
        setEmails(updateEmailAsRead(emails));
        break;
      case 'promotions':
        setPromotions(updateEmailAsRead(promotions));
        break;
      case 'social':
        setSocial(updateEmailAsRead(social));
        break;
      case 'updates':
        setUpdates(updateEmailAsRead(updates));
        break;
      case 'sent':
        setSent(updateEmailAsRead(sent));
        break;
    }
  };

  // Get current emails based on active tab and label
  const getCurrentEmails = () => {
    // If we're in the sent folder, show sent emails
    if (activeLabel === 'sent') {
      return sent;
    }
    
    // Otherwise show emails from the active tab
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

  // Update activeTab when active label changes to 'sent'
  React.useEffect(() => {
    if (activeLabel === 'sent') {
      setActiveTab('sent');
    } else if (activeTab === 'sent') {
      setActiveTab('primary');
    }
  }, [activeLabel]);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <GmailHeader toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <GmailSidebar 
          isOpen={sidebarOpen} 
          setActiveLabel={setActiveLabel}
          activeLabel={activeLabel}
          onComposeClick={() => setComposeOpen(true)}
        />

        {/* Email Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs - Only show if not in sent folder */}
          {activeLabel !== 'sent' && (
            <GmailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {/* Show email list or email detail */}
          {selectedEmail ? (
            <EmailDetail email={selectedEmail} onClose={() => setSelectedEmail(null)} />
          ) : (
            <GmailEmailList 
              emails={getCurrentEmails()} 
              toggleStar={toggleStar} 
              onEmailClick={handleEmailClick}
            />
          )}
        </div>

        {/* Right Sidebar */}
        <RightSidebar 
          isOpen={rightSidebarOpen} 
          onClose={() => setRightSidebarOpen(false)}
        />
      </div>

      {/* Compose Button (Mobile) */}
      <div className="fixed bottom-4 right-4 lg:hidden z-10">
        <button 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-4"
          onClick={() => setComposeOpen(true)}
        >
          <Pencil size={24} />
        </button>
      </div>

      {/* Compose Modal */}
      <ComposeModal 
        isOpen={composeOpen} 
        onClose={() => setComposeOpen(false)} 
        onSendEmail={handleSendEmail}
      />
    </div>
  );
};

export default Index;
