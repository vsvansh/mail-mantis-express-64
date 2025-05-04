
import React from 'react';
import { Calendar, CheckSquare, Clock, Minus, Plus, X } from 'lucide-react';
import { Button } from './ui/button';

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="w-16 border-l flex flex-col items-center py-3 bg-white dark:bg-gray-900">
      {/* Icons */}
      <Button variant="ghost" className="rounded-full p-2 mb-4" size="icon">
        <Calendar size={20} />
      </Button>
      
      <Button variant="ghost" className="rounded-full p-2 mb-4" size="icon">
        <CheckSquare size={20} />
      </Button>
      
      <Button variant="ghost" className="rounded-full p-2 mb-4" size="icon">
        <Clock size={20} />
      </Button>
      
      <Button variant="ghost" className="rounded-full p-2 mb-4" size="icon">
        <Plus size={20} />
      </Button>
      
      <div className="flex-1"></div>
      
      <div className="border-t w-full pt-3 flex justify-center">
        <Button variant="ghost" className="rounded-full p-2" size="icon" onClick={onClose}>
          <Minus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
