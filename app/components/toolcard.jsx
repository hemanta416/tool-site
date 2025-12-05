'use client';

import { ArrowRight, FileText, Image, Youtube, FileSpreadsheet, FilePresentation } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  'word': FileText,
  'pdf': FileText,
  'excel': FileSpreadsheet,
  'ppt': FilePresentation,
  'photo': Image,
  'youtube': Youtube,
  'translate': Globe
};

export default function ToolCard({ title, description, icon, category, actionText = "Convert Now" }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[icon] || FileText;

  return (
    <div 
      className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-blue-50">
          <IconComponent className="h-6 w-6 text-blue-600" />
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <button className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors group">
        <span className="font-medium text-blue-700">{actionText}</span>
        <ArrowRight className={`h-5 w-5 text-blue-600 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
      </button>
    </div>
  );
}