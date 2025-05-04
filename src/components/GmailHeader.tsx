
import React from 'react';
import { Menu, Search, Settings, HelpCircle, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface GmailHeaderProps {
  toggleSidebar: () => void;
}

const GmailHeader = ({ toggleSidebar }: GmailHeaderProps) => {
  return (
    <header className="flex items-center px-4 py-2 border-b bg-white sticky top-0 z-10">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="gmail-icon-button lg:mr-2">
          <Menu size={20} />
        </button>
        <div className="flex items-center">
          <Mail className="h-8 w-8 text-[hsl(var(--gmail-red))] mr-2" />
          <span className="text-xl font-medium hidden sm:inline">Gmail</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input 
            type="search"
            placeholder="Search mail"
            className="pl-10 py-5 bg-[hsl(var(--gmail-light-gray))] border-none rounded-lg w-full"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="gmail-icon-button hidden sm:block">
          <HelpCircle size={20} />
        </button>
        <button className="gmail-icon-button">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer">
          <span>V</span>
        </div>
      </div>
    </header>
  );
};

export default GmailHeader;
