
import React from 'react';
import { Inbox, Tag, Users, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  unread?: number;
  description?: string;
}

const Tab = ({ icon, label, active = false, onClick, unread, description }: TabProps) => (
  <button
    onClick={onClick}
    className={cn(
      'flex items-center justify-center py-3 px-6 text-sm font-medium border-b-2 transition-colors relative',
      active 
        ? 'text-[#0b57d0] dark:text-blue-400 border-[#0b57d0] dark:border-blue-400 bg-[#eaf1fb] dark:bg-blue-900/20 flex-1' 
        : 'text-gray-600 dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 flex-1'
    )}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
      {unread && <span className="ml-1 text-xs bg-red-500 text-white px-1.5 rounded-full">{unread}</span>}
    </div>
    {description && active && (
      <div className="absolute top-1 right-2 text-xs text-gray-500">
        {description}
      </div>
    )}
  </button>
);

interface GmailTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const GmailTabs = ({ activeTab, setActiveTab }: GmailTabsProps) => {
  // If we're in the sent tab, don't render the regular tabs
  if (activeTab === 'sent') {
    return null;
  }
  
  return (
    <div className="flex border-b">
      <Tab
        icon={<Inbox size={16} />}
        label="Primary"
        active={activeTab === 'primary'}
        onClick={() => setActiveTab('primary')}
      />
      <Tab
        icon={<Tag size={16} />}
        label="Promotions"
        active={activeTab === 'promotions'}
        onClick={() => setActiveTab('promotions')}
        description={activeTab === 'promotions' ? "GeeksforGeeks — Accentura..." : undefined}
      />
      <Tab
        icon={<Users size={16} />}
        label="Social"
        active={activeTab === 'social'}
        onClick={() => setActiveTab('social')}
        unread={3}
      />
      <Tab
        icon={<AlertCircle size={16} />}
        label="Updates"
        active={activeTab === 'updates'}
        onClick={() => setActiveTab('updates')}
      />
    </div>
  );
};

export default GmailTabs;
