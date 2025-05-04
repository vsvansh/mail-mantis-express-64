
import React, { useState } from 'react';
import { Menu, Search, Settings, HelpCircle, Sparkles, Grid3X3, SlidersHorizontal, MessageSquare, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/components/ThemeProvider';

interface GmailHeaderProps {
  toggleSidebar: () => void;
}

const GmailHeader = ({ toggleSidebar }: GmailHeaderProps) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="flex items-center px-4 py-2 border-b bg-background sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
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
            className="pl-11 pr-12 py-5 bg-[#eaf1fb] dark:bg-gray-800 border-none rounded-3xl w-full h-12 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        {/* Chatbot Button with "New" Label */}
        <div className="relative mx-1">
          <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <MessageSquare size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">New</span>
        </div>
        
        <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mx-1">
          <HelpCircle size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        
        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mx-1">
              <Settings size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between items-center cursor-default">
              <span>Theme</span>
              <div className="relative">
                <Toggle 
                  pressed={theme === "dark"} 
                  onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className="relative data-[state=on]:bg-gray-800 bg-gray-100"
                >
                  {theme === "dark" ? (
                    <Moon className="h-[1.1rem] w-[1.1rem]" />
                  ) : (
                    <Sun className="h-[1.1rem] w-[1.1rem]" />
                  )}
                </Toggle>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">New</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>Quick Settings</DropdownMenuItem>
            <DropdownMenuItem>See all settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mx-1">
          <Sparkles size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mx-1">
          <Grid3X3 size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <Avatar className="w-8 h-8 ml-2">
          <AvatarFallback className="bg-blue-500 text-white">V</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default GmailHeader;
