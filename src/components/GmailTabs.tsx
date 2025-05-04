
import React from 'react';
import { Inbox, Tag, Users, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const Tab = ({ icon, label, active = false, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={cn('gmail-tab', active && 'active')}
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
