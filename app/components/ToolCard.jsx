'use client';

import Link from 'next/link';
import { 
  FileText, 
  Image, 
  Youtube, 
  Globe, 
  FileSpreadsheet, 
  FilePresentation, 
  Code,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

// Icon mapping for different tools
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

// Color mapping for different tool categories
const colorMap = {
  'word-to-html': 'from-purple-500 to-pink-500',
  'pdf-to-word': 'from-blue-500 to-cyan-500',
  'word-to-pdf': 'from-red-500 to-orange-500',
  'pdf-to-excel': 'from-green-500 to-emerald-500',
  'excel-to-pdf': 'from-yellow-500 to-amber-500',
  'ppt-to-pdf': 'from-orange-500 to-red-500',
  'pdf-to-ppt': 'from-pink-500 to-rose-500',
  'translate-pdf': 'from-indigo-500 to-blue-500',
  'compress-photo': 'from-teal-500 to-cyan-500',
  'photo-size': 'from-cyan-500 to-blue-500',
  'google-translate': 'from-emerald-500 to-green-500',
  'youtube-summarize': 'from-red-500 to-pink-500',
};

export default function ToolCard({ toolId, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get icon component
  const IconComponent = iconMap[toolId] || FileText;
  const gradientClass = colorMap[toolId] || 'from-gray-500 to-gray-700';

  return (
    <Link href={`/tools/${toolId}`}>
      <div 
        className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative p-6">
          {/* Icon and badge */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientClass}`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <ArrowRight className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
          
          {/* Title and description */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              {getToolCategory(toolId)}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">Free</span>
          </div>
        </div>
        
        {/* Hover effect line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} transform ${isHovered ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300 origin-left`}></div>
      </div>
    </Link>
  );
}

// Helper function to get tool category
function getToolCategory(toolId) {
  if (toolId.includes('word') || toolId.includes('pdf') || toolId.includes('excel')) {
    return 'Document';
  } else if (toolId.includes('photo') || toolId.includes('compress')) {
    return 'Image';
  } else if (toolId.includes('ppt') || toolId.includes('presentation')) {
    return 'Presentation';
  } else if (toolId.includes('translate')) {
    return 'Translation';
  } else if (toolId.includes('youtube')) {
    return 'Video';
  } else {
    return 'Tool';
  }
}