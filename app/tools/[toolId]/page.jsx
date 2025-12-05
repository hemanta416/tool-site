'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { 
  Upload, Download, File, Image, X, 
  CheckCircle, AlertCircle, Loader2,
  ArrowLeft, Settings, Globe,
  FileText, Code, FileSpreadsheet, 
  FilePresentation, Youtube
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';

const toolConfigs = {
  'word-to-html': {
    title: 'Word to HTML Converter',
    description: 'Convert Word documents (.doc, .docx) to clean HTML code',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.html',
    icon: <Code className="h-10 w-10" />,
    color: 'purple'
  },
  'pdf-to-word': {
    title: 'PDF to Word Converter',
    description: 'Extract text from PDF files and convert to editable Word documents',
    inputFormats: ['.pdf'],
    outputFormat: '.docx',
    icon: <FileText className="h-10 w-10" />,
    color: 'blue'
  },
  'word-to-pdf': {
    title: 'Word to PDF Converter',
    description: 'Convert Word files to PDF format with preserved formatting',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.pdf',
    icon: <FileText className="h-10 w-10" />,
    color: 'red'
  },
  'pdf-to-excel': {
    title: 'PDF to Excel Converter',
    description: 'Convert PDF tables to Excel spreadsheets',
    inputFormats: ['.pdf'],
    outputFormat: '.xlsx',
    icon: <FileSpreadsheet className="h-10 w-10" />,
    color: 'green'
  },
  'excel-to-pdf': {
    title: 'Excel to PDF Converter',
    description: 'Convert Excel files to PDF documents',
    inputFormats: ['.xls', '.xlsx'],
    outputFormat: '.pdf',
    icon: <FileSpreadsheet className="h-10 w-10" />,
    color: 'yellow'
  },
  'ppt-to-pdf': {
    title: 'PPT to PDF Converter',
    description: 'Convert PowerPoint presentations to PDF',
    inputFormats: ['.ppt', '.pptx'],
    outputFormat: '.pdf',
    icon: <FilePresentation className="h-10 w-10" />,
    color: 'orange'
  },
  'pdf-to-ppt': {
    title: 'PDF to PPT Converter',
    description: 'Convert PDF slides to PowerPoint format',
    inputFormats: ['.pdf'],
    outputFormat: '.pptx',
    icon: <FilePresentation className="h-10 w-10" />,
    color: 'pink'
  },
  'translate-pdf': {
    title: 'Translate PDF',
    description: 'Translate PDF documents to multiple languages',
    inputFormats: ['.pdf'],
    outputFormat: '.pdf',
    icon: <Globe className="h-10 w-10" />,
    color: 'indigo'
  },
  'compress-photo': {
    title: 'Compress Photo',
    description: 'Reduce image file size without losing quality',
    inputFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    outputFormat: 'Same format',
    icon: <Image className="h-10 w-10" />,
    color: 'teal'
  },
  'photo-size': {
    title: 'Photo Size Manager',
    description: 'Resize images to specific dimensions (1×2cm, 3×4cm, etc.)',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    outputFormat: 'Same format',
    icon: <Image className="h-10 w-10" />,
    color: 'cyan'
  },
  'google-translate': {
    title: 'Google Translation',
    description: 'Translate files and documents using Google Translate',
    inputFormats: ['.txt', '.doc', '.docx', '.pdf'],
    outputFormat: 'Same format',
    icon: <Globe className="h-10 w-10" />,
    color: 'emerald'
  },
  'youtube-summarize': {
    title: 'YouTube Summarizer',
    description: 'Get summary from YouTube video links',
    inputFormats: ['YouTube URL'],
    outputFormat: '.txt',
    icon: <Youtube className="h-10 w-10" />,
    color: 'red'
  }
};

// यदि toolId फेला परेन भने default configuration
const getToolConfig = (toolId) => {
  return toolConfigs[toolId] || {
    title: 'File Converter',
    description: 'Convert your files easily',
    inputFormats: ['.txt'],
    outputFormat: '.txt',
    icon: <File className="h-10 w-10" />,
    color: 'gray'
  };
};

export default function ToolPage() {
  const params = useParams();
  const toolId = params.toolId;
  const tool = getToolConfig(toolId);

  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [settings, setSettings] = useState({
    quality: 'high',
    language: 'en'
  });

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp']
    }
  });

  const handleConvert = async () => {
    if (!file) return;
    
    setIsConverting(true);
    // यहाँ API call गर्ने
    setTimeout(() => {
      const originalName = file.name;
      const extension = tool.outputFormat === 'Same format' ? 
        originalName.split('.').pop() : 
        tool.outputFormat.replace('.', '');
      
      setConvertedFile({
        name: `converted_${originalName.replace(/\.[^/.]+$/, '')}.${extension}`,
        size: file.size * 0.8,
        url: '#'
      });
      setIsConverting(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (convertedFile) {
      // Download logic here
      const link = document.createElement('a');
      link.href = convertedFile.url;
      link.download = convertedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleReset = () => {
    setFile(null);
    setConvertedFile(null);
  };

  // YouTube summarizer को लागि विशेष input field
  const isYouTubeTool = toolId === 'youtube-summarize';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Tools
        </Link>

        {/* Tool Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-${tool.color}-50 mb-4`}>
            <div className={`text-${tool.color}-600`}>{tool.icon}</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {tool.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {tool.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Upload Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              
              {/* YouTube Tool को लागि विशेष input */}
              {isYouTubeTool ? (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    YouTube Video URL
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="flex-1 border rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                      Summarize
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Upload Zone */}
                  <div 
                    {...getRootProps()} 
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'}`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    {isDragActive ? (
                      <p className="text-lg font-medium text-blue-600">Drop the file here...</p>
                    ) : (
                      <>
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Drag & drop your file here
                        </p>
                        <p className="text-gray-500 mb-4">or click to browse</p>
                      </>
                    )}
                    <p className="text-sm text-gray-400">
                      Supported formats: {tool.inputFormats.join(', ')}
                    </p>
                  </div>

                  {/* File Preview */}
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

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={handleConvert}
                  disabled={(isYouTubeTool ? false : !file) || isConverting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg ${((isYouTubeTool ? false : !file) || isConverting) ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
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

              {/* Result Section */}
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
                    <button className="px-6 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50">
                      Share Result
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Settings & Info */}
          <div className="space-y-6">
            {/* Settings Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold">Settings</h3>
              </div>
              
              <div className="space-y-4">
                {/* Photo Compression Settings */}
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

                {/* Translation Settings */}
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
                        <option value="ja">Japanese</option>
                        <option value="ko">Korean</option>
                        <option value="zh">Chinese</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* PDF Settings */}
                {toolId.includes('pdf') && !toolId.includes('translate') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PDF Quality
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option value="standard">Standard</option>
                      <option value="high">High Quality</option>
                      <option value="print">Print Quality</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No Registration Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Secure & Private</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Fast Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works on All Devices</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Tips</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Maximum file size: 100MB</li>
                <li>• Files are deleted after 24 hours</li>
                <li>• No limit on number of conversions</li>
                <li>• Supports all modern browsers</li>
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