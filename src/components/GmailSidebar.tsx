
import React, { useState } from 'react';
import { Inbox, Star, Clock, Send, FileText, Trash, ChevronDown, ChevronUp, Pencil, AlertCircle, MessageSquare, Calendar, Mail, AlertOctagon, Tag, Settings, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  onComposeClick: () => void;
}

const GmailSidebar = ({ isOpen, setActiveLabel, activeLabel, onComposeClick }: GmailSidebarProps) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  
  if (!isOpen) return null;
  
  return (
    <div className="w-64 min-h-[calc(100vh-64px)] border-r flex flex-col">
      <div className="p-4">
        <button className="gmail-compose-btn" onClick={onComposeClick}>
          <Pencil size={18} />
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
        
        <Collapsible open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <CollapsibleTrigger className="w-full">
            <SidebarItem 
              icon={isMoreOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />} 
              label={isMoreOpen ? "Less" : "More"}
              active={activeLabel === 'more'} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarItem 
              icon={<AlertCircle size={18} />} 
              label="Important"
              active={activeLabel === 'important'} 
              onClick={() => setActiveLabel('important')}
            />
            <SidebarItem 
              icon={<MessageSquare size={18} />} 
              label="Chats"
              active={activeLabel === 'chats'} 
              onClick={() => setActiveLabel('chats')}
            />
            <SidebarItem 
              icon={<Calendar size={18} />} 
              label="Scheduled"
              active={activeLabel === 'scheduled'} 
              onClick={() => setActiveLabel('scheduled')}
            />
            <SidebarItem 
              icon={<Mail size={18} />} 
              label="All Mail"
              active={activeLabel === 'allmail'} 
              onClick={() => setActiveLabel('allmail')}
            />
            <SidebarItem 
              icon={<AlertOctagon size={18} />} 
              label="Spam"
              count={3}
              active={activeLabel === 'spam'} 
              onClick={() => setActiveLabel('spam')}
            />
            <SidebarItem 
              icon={<Trash size={18} />} 
              label="Trash"
              active={activeLabel === 'trash'} 
              onClick={() => setActiveLabel('trash')}
            />
            <SidebarItem 
              icon={<Tag size={18} />} 
              label="Categories"
              active={activeLabel === 'categories'} 
              onClick={() => setActiveLabel('categories')}
            />
            <SidebarItem 
              icon={<Settings size={18} />} 
              label="Manage labels"
              active={activeLabel === 'managelabels'} 
              onClick={() => setActiveLabel('managelabels')}
            />
            <SidebarItem 
              icon={<Plus size={18} />} 
              label="Create new label"
              active={activeLabel === 'createlabel'} 
              onClick={() => setActiveLabel('createlabel')}
            />
          </CollapsibleContent>
        </Collapsible>
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
