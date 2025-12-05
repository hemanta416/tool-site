import Link from 'next/link';
import { FileText, Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">ToolHub</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600">All Tools</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Globe size={18} />
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}