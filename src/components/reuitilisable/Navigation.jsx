import React from 'react'
import { useState } from 'react';
import {HomeIcon,CalendarIcon, UserIcon } from '@heroicons/react/24/solid'
export default function Navigation() {
  const [activeTab, setActiveTab] = useState('accueil');

  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: <HomeIcon className='h-6 w-6 cursor-pointer' /> },
    { id: 'planning', label: 'Planning', icon: <CalendarIcon className='h-6 w-6 cursor-pointer'  /> },
    { id: 'profile', label: 'Profile', icon: <UserIcon className='h-6 w-6 cursor-pointer'  /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-3 pb-6 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === item.id ? 'text-[#6366F1]' : 'text-gray-400'
          }`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === item.id ? 'bg-[#F5F7FF]' : ''}`}>
            {item.icon}
          </div>
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

