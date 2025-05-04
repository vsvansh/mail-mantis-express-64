
import React from 'react';
import { Inbox, Star, Clock, Send, FileText, Trash, ChevronDown, Plus, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, count, active = false, onClick }: SidebarItemProps) => (
  <button 
    onClick={onClick}
    className={cn('gmail-sidebar-item group', active && 'active')}
  >
    <div className="w-6">{icon}</div>
    <span className="flex-1">{label}</span>
    {count !== undefined && (
      <span className="text-xs font-medium">{count}</span>
    )}
  </button>
);

interface GmailSidebarProps {
  isOpen: boolean;
  setActiveLabel: (label: string) => void;
  activeLabel: string;
}

const GmailSidebar = ({ isOpen, setActiveLabel, activeLabel }: GmailSidebarProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="w-64 min-h-[calc(100vh-64px)] border-r flex flex-col">
      <div className="p-4">
        <button className="gmail-compose-btn">
          <Paperclip size={18} />
          <span>Compose</span>
        </button>
      </div>
      
      <div className="flex-1">
        <SidebarItem 
          icon={<Inbox size={18} />} 
          label="Inbox" 
          count={482}
          active={activeLabel === 'inbox'}
          onClick={() => setActiveLabel('inbox')}
        />
        <SidebarItem 
          icon={<Star size={18} />} 
          label="Starred"
          active={activeLabel === 'starred'} 
          onClick={() => setActiveLabel('starred')}
        />
        <SidebarItem 
          icon={<Clock size={18} />} 
          label="Snoozed"
          active={activeLabel === 'snoozed'} 
          onClick={() => setActiveLabel('snoozed')}
        />
        <SidebarItem 
          icon={<Send size={18} />} 
          label="Sent"
          active={activeLabel === 'sent'} 
          onClick={() => setActiveLabel('sent')}
        />
        <SidebarItem 
          icon={<FileText size={18} />} 
          label="Drafts"
          count={1}
          active={activeLabel === 'drafts'} 
          onClick={() => setActiveLabel('drafts')}
        />
        <SidebarItem 
          icon={<ChevronDown size={18} />} 
          label="More"
          active={activeLabel === 'more'} 
          onClick={() => setActiveLabel('more')}
        />
      </div>
      
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Labels</span>
          <button className="gmail-icon-button p-1">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GmailSidebar;
