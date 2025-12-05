'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  Upload, Download, File, Image, X, 
  CheckCircle, AlertCircle, Loader2,
  ArrowLeft, Settings, Globe,
  FileText, Code, FileSpreadsheet, 
  FilePresentation, Youtube
} from 'lucide-react';
import Link from 'next/link';

const toolConfigs = {
  'word-to-html': {
    title: 'Word to HTML Converter',
    description: 'Convert Word documents (.doc, .docx) to clean HTML code',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.html',
    icon: Code,
    color: 'purple'
  },
  'pdf-to-word': {
    title: 'PDF to Word Converter',
    description: 'Extract text from PDF files and convert to editable Word documents',
    inputFormats: ['.pdf'],
    outputFormat: '.docx',
    icon: FileText,
    color: 'blue'
  },
  'word-to-pdf': {
    title: 'Word to PDF Converter',
    description: 'Convert Word files to PDF format with preserved formatting',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.pdf',
    icon: FileText,
    color: 'red'
  },
  'pdf-to-excel': {
    title: 'PDF to Excel Converter',
    description: 'Convert PDF tables to Excel spreadsheets',
    inputFormats: ['.pdf'],
    outputFormat: '.xlsx',
    icon: FileSpreadsheet,
    color: 'green'
  },
  'excel-to-pdf': {
    title: 'Excel to PDF Converter',
    description: 'Convert Excel files to PDF documents',
    inputFormats: ['.xls', '.xlsx'],
    outputFormat: '.pdf',
    icon: FileSpreadsheet,
    color: 'yellow'
  },
  'ppt-to-pdf': {
    title: 'PPT to PDF Converter',
    description: 'Convert PowerPoint presentations to PDF',
    inputFormats: ['.ppt', '.pptx'],
    outputFormat: '.pdf',
    icon: FilePresentation,
    color: 'orange'
  },
  'pdf-to-ppt': {
    title: 'PDF to PPT Converter',
    description: 'Convert PDF slides to PowerPoint format',
    inputFormats: ['.pdf'],
    outputFormat: '.pptx',
    icon: FilePresentation,
    color: 'pink'
  },
  'translate-pdf': {
    title: 'Translate PDF',
    description: 'Translate PDF documents to multiple languages',
    inputFormats: ['.pdf'],
    outputFormat: '.pdf',
    icon: Globe,
    color: 'indigo'
  },
  'compress-photo': {
    title: 'Compress Photo',
    description: 'Reduce image file size without losing quality',
    inputFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    outputFormat: 'Same format',
    icon: Image,
    color: 'teal'
  },
  'photo-size': {
    title: 'Photo Size Manager',
    description: 'Resize images to specific dimensions (1×2cm, 3×4cm, etc.)',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    outputFormat: 'Same format',
    icon: Image,
    color: 'cyan'
  },
  'google-translate': {
    title: 'Google Translation',
    description: 'Translate files and documents using Google Translate',
    inputFormats: ['.txt', '.doc', '.docx', '.pdf'],
    outputFormat: 'Same format',
    icon: Globe,
    color: 'emerald'
  },
  'youtube-summarize': {
    title: 'YouTube Summarizer',
    description: 'Get summary from YouTube video links',
    inputFormats: ['YouTube URL'],
    outputFormat: '.txt',
    icon: Youtube,
    color: 'red'
  }
};

export default function ToolPage() {
  const params = useParams();
  const toolId = params.toolId;
  const tool = toolConfigs[toolId] || {
    title: 'File Converter',
    description: 'Convert your files easily',
    inputFormats: ['.txt'],
    outputFormat: '.txt',
    icon: File,
    color: 'gray'
  };

  const IconComponent = tool.icon;
  
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [settings, setSettings] = useState({
    quality: 'high',
    language: 'en'
  });

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleConvert = async () => {
    if (toolId === 'youtube-summarize') {
      if (!youtubeUrl) return;
    } else {
      if (!file) return;
    }
    
    setIsConverting(true);
    
    setTimeout(() => {
      if (toolId === 'youtube-summarize') {
        setConvertedFile({
          name: 'youtube_summary.txt',
          size: 2048,
          url: '#',
          content: 'This is a sample summary of the YouTube video...'
        });
      } else {
        const originalName = file.name;
        const extension = tool.outputFormat === 'Same format' ? 
          originalName.split('.').pop() : 
          tool.outputFormat.replace('.', '');
        
        setConvertedFile({
          name: `converted_${originalName.replace(/\.[^/.]+$/, '')}.${extension}`,
          size: file.size * 0.8,
          url: '#'
        });
      }
      setIsConverting(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (convertedFile) {
      const blob = new Blob([convertedFile.content || 'Sample content'], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = convertedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  const handleReset = () => {
    setFile(null);
    setConvertedFile(null);
    setYoutubeUrl('');
  };

  const isYouTubeTool = toolId === 'youtube-summarize';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Tools
        </Link>

        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${getColorClass(tool.color, 'bg')} mb-4`}>
            <IconComponent className={`h-10 w-10 ${getColorClass(tool.color, 'text')}`} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {tool.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {tool.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              
              {isYouTubeTool ? (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    YouTube Video URL
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="flex-1 border rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-gray-50 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Upload your file
                    </p>
                    <p className="text-gray-500 mb-4">Click to select file</p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
                    >
                      Choose File
                    </label>
                    <p className="text-sm text-gray-400 mt-4">
                      Supported formats: {tool.inputFormats.join(', ')}
                    </p>
                  </div>

                  {file && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setFile(null)}
                          className="p-1 hover:bg-red-100 rounded"
                        >
                          <X className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="mt-8">
                <button
                  onClick={handleConvert}
                  disabled={(isYouTubeTool ? !youtubeUrl : !file) || isConverting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg ${((isYouTubeTool ? !youtubeUrl : !file) || isConverting) ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {isConverting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {isYouTubeTool ? 'Summarizing...' : 'Converting...'}
                    </span>
                  ) : (
                    isYouTubeTool ? 'Get Summary' : `Convert to ${tool.outputFormat.toUpperCase()}`
                  )}
                </button>
              </div>

              {convertedFile && (
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold">
                      {isYouTubeTool ? 'Summary Generated!' : 'Conversion Complete!'}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-6">
                    <div>
                      <p className="font-medium">{convertedFile.name}</p>
                      {!isYouTubeTool && (
                        <p className="text-sm text-gray-500">
                          {(convertedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      {isYouTubeTool ? 'New Summary' : 'Convert Another File'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold">Settings</h3>
              </div>
              
              <div className="space-y-4">
                {(toolId === 'compress-photo' || toolId === 'photo-size') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {toolId === 'compress-photo' ? 'Compression Quality' : 'Target Size'}
                    </label>
                    {toolId === 'compress-photo' ? (
                      <select 
                        className="w-full border rounded-lg px-3 py-2"
                        value={settings.quality}
                        onChange={(e) => setSettings({...settings, quality: e.target.value})}
                      >
                        <option value="low">Low (Smallest Size)</option>
                        <option value="medium">Medium (Balanced)</option>
                        <option value="high">High (Best Quality)</option>
                      </select>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {['1×1.5 inch', '2×2 inch', '3.5×4.5 cm', '35×45 mm', 'Passport', 'Visa'].map((size) => (
                          <button 
                            key={size}
                            className="border rounded-lg py-2 text-sm hover:bg-gray-50"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {(toolId === 'translate-pdf' || toolId === 'google-translate') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Language
                    </label>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <select 
                        className="w-full border rounded-lg px-3 py-2"
                        value={settings.language}
                        onChange={(e) => setSettings({...settings, language: e.target.value})}
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                        <option value="ne">Nepali</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No Registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Secure & Private</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Fast Processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Tips</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Maximum file size: 100MB</li>
                <li>• Files are deleted after processing</li>
                <li>• No limit on conversions</li>
                {isYouTubeTool && (
                  <li>• Works with public YouTube videos</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function getColorClass(color, type) {
  const colorMap = {
    purple: type === 'bg' ? 'bg-purple-100' : 'text-purple-600',
    blue: type === 'bg' ? 'bg-blue-100' : 'text-blue-600',
    red: type === 'bg' ? 'bg-red-100' : 'text-red-600',
    green: type === 'bg' ? 'bg-green-100' : 'text-green-600',
    yellow: type === 'bg' ? 'bg-yellow-100' : 'text-yellow-600',
    orange: type === 'bg' ? 'bg-orange-100' : 'text-orange-600',
    pink: type === 'bg' ? 'bg-pink-100' : 'text-pink-600',
    indigo: type === 'bg' ? 'bg-indigo-100' : 'text-indigo-600',
    teal: type === 'bg' ? 'bg-teal-100' : 'text-teal-600',
    cyan: type === 'bg' ? 'bg-cyan-100' : 'text-cyan-600',
    emerald: type === 'bg' ? 'bg-emerald-100' : 'text-emerald-600',
    gray: type === 'bg' ? 'bg-gray-100' : 'text-gray-600'
  };
  
  return colorMap[color] || (type === 'bg' ? 'bg-gray-100' : 'text-gray-600');
}