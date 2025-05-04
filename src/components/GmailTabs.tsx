
import React from 'react';
import { Inbox, Tag, Users, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const Tab = ({ icon, label, active = false, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={cn(
      'flex-1 flex items-center justify-center py-3 text-sm font-medium border-b-2 transition-colors',
      active 
        ? 'text-[#0b57d0] dark:text-blue-400 border-[#0b57d0] dark:border-blue-400 bg-[#eaf1fb] dark:bg-blue-900/20' 
        : 'text-gray-600 dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
    )}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
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
      />
      <Tab
        icon={<Users size={16} />}
        label="Social"
        active={activeTab === 'social'}
        onClick={() => setActiveTab('social')}
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
