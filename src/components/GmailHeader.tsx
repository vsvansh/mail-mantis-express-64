
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
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
          <Menu size={20} />
        </button>
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/f5a3cd0b-73a0-41eb-8f38-af05ca2d4bb9.png" 
            alt="Gmail" 
            className="h-8" 
          />
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <Input 
            type="search"
            placeholder="Search mail"
            className="pl-11 pr-12 py-5 bg-[#eaf1fb] border-none rounded-3xl w-full h-12 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <button className="p-2.5 rounded-full hover:bg-gray-100 mx-1">
          <HelpCircle size={20} className="text-gray-600" />
        </button>
        <button className="p-2.5 rounded-full hover:bg-gray-100 mx-1">
          <Settings size={20} className="text-gray-600" />
        </button>
        <button className="p-2.5 rounded-full hover:bg-gray-100 mx-1">
          <Sparkles size={20} className="text-gray-600" />
        </button>
        <button className="p-2.5 rounded-full hover:bg-gray-100 mx-1">
          <Grid3X3 size={20} className="text-gray-600" />
        </button>
        <Avatar className="w-8 h-8 ml-2">
          <AvatarFallback className="bg-blue-500 text-white">V</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default GmailHeader;
