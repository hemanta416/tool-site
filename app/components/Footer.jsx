import { FileText, Github, Twitter, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ToolHub</span>
            </div>
            <p className="text-gray-400">
              Free online tools for document conversion, translation, compression, and more.
              No registration required.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/tools" className="hover:text-white">All Tools</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>PDF to Word</li>
              <li>Word to PDF</li>
              <li>Compress Photo</li>
              <li>YouTube Summarizer</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@toolhub.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail className="h-4 w-4" /> support@toolhub.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"><Github className="h-5 w-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by ToolHub Team
          </p>
          <p className="mt-2">© {new Date().getFullYear()} ToolHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
