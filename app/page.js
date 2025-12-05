import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToolCard from './components/ToolCard';
import { Search, Sparkles, Zap, Shield } from 'lucide-react';

const tools = [
  {
    id: 'word-to-html',
    title: 'Word to HTML Converter',
    description: 'Convert Word documents (.doc, .docx) to clean HTML code',
    category: 'Document'
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word Converter',
    description: 'Extract text from PDF files and convert to editable Word documents',
    category: 'Document'
  },
  {
    id: 'word-to-pdf',
    title: 'Word to PDF Converter',
    description: 'Convert Word files to PDF format with preserved formatting',
    category: 'Document'
  },
  {
    id: 'pdf-to-excel',
    title: 'PDF to Excel Converter',
    description: 'Convert PDF tables to Excel spreadsheets',
    category: 'Document'
  },
  {
    id: 'excel-to-pdf',
    title: 'Excel to PDF Converter',
    description: 'Convert Excel files to PDF documents',
    category: 'Document'
  },
  {
    id: 'ppt-to-pdf',
    title: 'PPT to PDF Converter',
    description: 'Convert PowerPoint presentations to PDF',
    category: 'Presentation'
  },
  {
    id: 'pdf-to-ppt',
    title: 'PDF to PPT Converter',
    description: 'Convert PDF slides to PowerPoint format',
    category: 'Presentation'
  },
  {
    id: 'translate-pdf',
    title: 'Translate PDF',
    description: 'Translate PDF documents to multiple languages',
    category: 'Translation'
  },
  {
    id: 'compress-photo',
    title: 'Compress Photo',
    description: 'Reduce image size while maintaining quality',
    category: 'Image'
  },
  {
    id: 'photo-size',
    title: 'Photo Size Manager',
    description: 'Resize images to specific dimensions (1×2cm, 3×4cm, etc.)',
    category: 'Image'
  },
  {
    id: 'google-translate',
    title: 'Google Translation',
    description: 'Translate files and documents using Google Translate',
    category: 'Translation'
  },
  {
    id: 'youtube-summarize',
    title: 'YouTube Summarizer',
    description: 'Get summary from YouTube video links',
    category: 'Video'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">File Tools</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Convert, translate, compress, and manage files with 12+ free tools. No registration required.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search for tools (e.g., 'PDF to Word', 'Compress Image')"
                className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Conversion</h3>
            <p className="text-gray-600">Process files in seconds</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-600 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Files deleted after 24 hours</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Free</h3>
            <p className="text-gray-600">No hidden charges</p>
          </div>
        </div>
      </section>

      {/* All Tools Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">All Tools</h2>
            <p className="text-gray-600 mt-2">Choose from our collection of free tools</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              All
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Document
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Image
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              toolId={tool.id}
              title={tool.title}
              description={tool.description}
              category={tool.category}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}