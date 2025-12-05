"use client";

import { FileText, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-8 w-8" />
              <span className="text-xl font-bold">ToolHub</span>
            </div>
            <p className="text-gray-400">Free online tools for document conversion, translation, and more.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Document Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Word to HTML</li>
              <li>PDF to Word</li>
              <li>Word to PDF</li>
              <li>PDF to Excel</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Media Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Compress Photo</li>
              <li>Photo Size Manager</li>
              <li>YouTube Summarizer</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 ToolHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
