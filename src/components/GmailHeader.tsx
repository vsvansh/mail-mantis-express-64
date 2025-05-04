
import React from 'react';
import { Menu, Search, Settings, HelpCircle, Sparkles, Grid3X3, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface GmailHeaderProps {
  toggleSidebar: () => void;
}

const GmailHeader = ({ toggleSidebar }: GmailHeaderProps) => {
  return (
    <header className="flex items-center px-4 py-2 border-b bg-white sticky top-0 z-10">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="p-2.5 rounded-full hover:bg-gray-100 mr-2">
          <Menu size={20} />
        </button>
        <div className="flex items-center">
          <img src="/gmail_logo.png" alt="Gmail" className="h-8 mr-2" />
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            type="search"
            placeholder="Search mail"
            className="pl-10 py-5 bg-[hsl(var(--gmail-light-gray))] border-none rounded-3xl w-full h-12"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="gmail-icon-button hidden sm:block">
          <HelpCircle size={20} />
        </button>
        <button className="gmail-icon-button">
          <Settings size={20} />
        </button>
        <button className="gmail-icon-button">
          <Sparkles size={20} />
        </button>
        <button className="gmail-icon-button">
          <Grid3X3 size={20} />
        </button>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-blue-500 text-white">V</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default GmailHeader;
