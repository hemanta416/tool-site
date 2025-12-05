'use client';

import Link from 'next/link';
import { FileText, Menu, X, Home, Wrench, Info, Upload } from 'lucide-react';
import { useState } from 'react';

const tools = [
  { id: 'word-to-html', name: 'Word to HTML' },
  { id: 'pdf-to-word', name: 'PDF to Word' },
  { id: 'word-to-pdf', name: 'Word to PDF' },
  { id: 'pdf-to-excel', name: 'PDF to Excel' },
  { id: 'excel-to-pdf', name: 'Excel to PDF' },
  { id: 'ppt-to-pdf', name: 'PPT to PDF' },
  { id: 'pdf-to-ppt', name: 'PDF to PPT' },
  { id: 'translate-pdf', name: 'Translate PDF' },
  { id: 'compress-photo', name: 'Compress Photo' },
  { id: 'photo-size', name: 'Photo Size' },
  { id: 'google-translate', name: 'Google Translate' },
  { id: 'youtube-summarize', name: 'YouTube Summarizer' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ToolHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
              <Home className="h-4 w-4" />
              Home
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
                onMouseEnter={() => setIsToolsDropdownOpen(true)}
                onMouseLeave={() => setIsToolsDropdownOpen(false)}
              >
                <Wrench className="h-4 w-4" />
                Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToolsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2"
                  onMouseEnter={() => setIsToolsDropdownOpen(true)}
                  onMouseLeave={() => setIsToolsDropdownOpen(false)}
                >
                  <div className="px-4 py-2 text-sm text-gray-500 border-b">All Tools</div>
                  <div className="max-h-96 overflow-y-auto">
                    {tools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span>{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
              <Info className="h-4 w-4" />
              About
            </Link>

            <Link 
              href="/tools/word-to-html" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <Upload className="h-4 w-4" />
              Upload File
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slideDown">
            <div className="space-y-4">
              <Link 
                href="/" 
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </Link>

              <div className="border-t pt-4">
                <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2">All Tools</h3>
                <div className="space-y-1 max-h-64 overflow-y-auto">
                  {tools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.id}`}
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span className="font-medium">About</span>
              </Link>

              <Link 
                href="/tools/word-to-html" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Upload className="h-5 w-5" />
                Upload File
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}