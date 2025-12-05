'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 
  FileText, Image, Youtube, Globe, Zap, Upload, 
  FileSpreadsheet, FilePresentation, Code, FileImage,
  ArrowRight, Shield, Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    id: 'word-to-html',
    title: "Word to HTML",
    description: "Convert Word documents to clean HTML code",
    icon: <Code className="h-6 w-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: 'pdf-to-word',
    title: "PDF to Word",
    description: "Extract text from PDF to editable Word",
    icon: <FileText className="h-6 w-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 'word-to-pdf',
    title: "Word to PDF",
    description: "Convert Word files to PDF format",
    icon: <FileText className="h-6 w-6" />,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: 'pdf-to-excel',
    title: "PDF to Excel",
    description: "Convert PDF tables to Excel spreadsheets",
    icon: <FileSpreadsheet className="h-6 w-6" />,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 'excel-to-pdf',
    title: "Excel to PDF",
    description: "Convert Excel files to PDF documents",
    icon: <FileSpreadsheet className="h-6 w-6" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    id: 'ppt-to-pdf',
    title: "PPT to PDF",
    description: "Convert PowerPoint to PDF",
    icon: <FilePresentation className="h-6 w-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 'pdf-to-ppt',
    title: "PDF to PPT",
    description: "Convert PDF slides to PowerPoint",
    icon: <FilePresentation className="h-6 w-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    id: 'translate-pdf',
    title: "Translate PDF",
    description: "Translate PDF to multiple languages",
    icon: <Globe className="h-6 w-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  },
  {
    id: 'compress-photo',
    title: "Compress Photo",
    description: "Reduce image size without losing quality",
    icon: <Image className="h-6 w-6" />,
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  },
  {
    id: 'photo-size',
    title: "Photo Size Manager",
    description: "Resize images to specific dimensions",
    icon: <FileImage className="h-6 w-6" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100"
  },
  {
    id: 'google-translate',
    title: "Google Translation",
    description: "Translate files using Google Translate",
    icon: <Globe className="h-6 w-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
  {
    id: 'youtube-summarize',
    title: "YouTube Summarizer",
    description: "Get summary from YouTube videos",
    icon: <Youtube className="h-6 w-6" />,
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

const categories = [
  { name: "All", count: 12 },
  { name: "Document", count: 5 },
  { name: "Image", count: 2 },
  { name: "Translation", count: 2 },
  { name: "Presentation", count: 2 },
  { name: "Video", count: 1 }
];

export default function Home() {
  const router = useRouter();

  const handleToolClick = (toolId) => {
    router.push(`/tools/${toolId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Free Online <span className="text-blue-600">File Tools</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Convert, translate, compress, and manage files with our collection of 12+ free tools.
          No registration, no limits.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for tools (e.g., 'PDF to Word', 'Compress Image')"
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none shadow-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button 
              key={category.name}
              className={`px-4 py-2 rounded-full border ${category.name === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-80">({category.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Available Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              onClick={() => handleToolClick(tool.id)}
              className="bg-white rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${tool.bgColor}`}>
                  <div className={tool.color}>{tool.icon}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Fast conversion</span>
                <span className="mx-2">•</span>
                <Shield className="h-3 w-3" />
                <span>Secure</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Tool</h3>
              <p className="text-gray-600">Select from our 12+ free online tools</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload File</h3>
              <p className="text-gray-600">Drag & drop or click to upload your file</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download Result</h3>
              <p className="text-gray-600">Get your converted file instantly</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}