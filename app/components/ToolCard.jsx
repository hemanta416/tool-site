'use client';

import Link from 'next/link';
import { 
  FileText, Image, Youtube, Globe, 
  FileSpreadsheet, FilePresentation, Code,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  'word-to-html': Code,
  'pdf-to-word': FileText,
  'word-to-pdf': FileText,
  'pdf-to-excel': FileSpreadsheet,
  'excel-to-pdf': FileSpreadsheet,
  'ppt-to-pdf': FilePresentation,
  'pdf-to-ppt': FilePresentation,
  'translate-pdf': Globe,
  'compress-photo': Image,
  'photo-size': Image,
  'google-translate': Globe,
  'youtube-summarize': Youtube,
};

const categoryColors = {
  'Document': 'bg-blue-100 text-blue-800',
  'Image': 'bg-green-100 text-green-800',
  'Presentation': 'bg-purple-100 text-purple-800',
  'Translation': 'bg-indigo-100 text-indigo-800',
  'Video': 'bg-red-100 text-red-800',
};

const gradientColors = {
  'Document': 'from-blue-500 to-blue-600',
  'Image': 'from-green-500 to-emerald-600',
  'Presentation': 'from-purple-500 to-purple-600',
  'Translation': 'from-indigo-500 to-indigo-600',
  'Video': 'from-red-500 to-red-600',
};

export default function ToolCard({ toolId, title, description, category = 'Document' }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = iconMap[toolId] || FileText;
  const categoryClass = categoryColors[category] || 'bg-gray-100 text-gray-800';
  const gradientClass = gradientColors[category] || 'from-gray-500 to-gray-600';

  return (
    <Link href={`/tools/${toolId}`}>
      <div 
        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top gradient bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${gradientClass}`}></div>
        
        <div className="p-6">
          {/* Icon and arrow */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientClass}`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <ArrowRight className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
          </div>
          
          {/* Title and description */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Category and status */}
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryClass}`}>
              {category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Free
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}