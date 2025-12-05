'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Upload, Download, File, Image, X, 
  CheckCircle, AlertCircle, Loader2,
  ArrowLeft, Settings, Globe
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { ToolConfig } from '@/types';

const toolConfigs: Record<string, ToolConfig> = {
  'word-to-html': {
    title: 'Word to HTML Converter',
    description: 'Convert Word documents (.doc, .docx) to clean HTML code',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.html',
    icon: <File className="h-10 w-10" />,
    color: 'purple'
  },
  'pdf-to-word': {
    title: 'PDF to Word Converter',
    description: 'Extract text from PDF files and convert to editable Word documents',
    inputFormats: ['.pdf'],
    outputFormat: '.docx',
    icon: <File className="h-10 w-10" />,
    color: 'blue'
  },
  // अन्य सबै टूलहरूको configuration थप्न सक्नुहुन्छ
};

export default function ToolPage() {
  const params = useParams();
  const toolId = params.toolId as string;
  const tool = toolConfigs[toolId] || {
    title: 'File Converter',
    description: 'Convert your files easily',
    inputFormats: ['.txt'],
    outputFormat: '.txt',
    icon: <File className="h-10 w-10" />,
    color: 'gray'
  };

  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState<{ name: string; size: number; url: string } | null>(null);
  const [settings, setSettings] = useState({ quality: 'high', language: 'en' });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) setFile(uploadedFile);
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
      'image/*': ['.jpg', '.jpeg', '.png', '.gif']
    }
  });

  const handleConvert = async () => {
    if (!file) return;

    setIsConverting(true);
    setTimeout(() => {
      setConvertedFile({
        name: `converted_${file.name.replace(/\.[^/.]+$/, '')}${tool.outputFormat}`,
        size: file.size * 0.8,
        url: '#'
      });
      setIsConverting(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (convertedFile) alert(`Downloading ${convertedFile.name}`);
  };

  const handleReset = () => {
    setFile(null);
    setConvertedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-blue-50 mb-4">
            <div className="text-blue-600">{tool.icon}</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{tool.title}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{tool.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
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
                    <p className="text-lg font-medium text-gray-700 mb-2">Drag & drop your file here</p>
                    <p className="text-gray-500 mb-4">or click to browse</p>
                  </>
                )}
                <p className="text-sm text-gray-400">
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
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={() => setFile(null)} className="p-1 hover:bg-red-100 rounded">
                      <X className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={handleConvert}
                  disabled={!file || isConverting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg ${!file || isConverting ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {isConverting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" /> Converting...
                    </span>
                  ) : (
                    `Convert to ${tool.outputFormat.toUpperCase()}`
                  )}
                </button>
              </div>

              {convertedFile && (
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold">Conversion Complete!</h3>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-6">
                    <div>
                      <p className="font-medium">{convertedFile.name}</p>
                      <p className="text-sm text-gray-500">{(convertedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button onClick={handleDownload} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                      <Download className="h-4 w-4" /> Download
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={handleReset} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Convert Another File
                    </button>
                    <button className="px-6 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50">
                      Share Result
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Settings & Tips */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold">Conversion Settings</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> <span>100% Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> <span>No Registration Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> <span>Secure & Private</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> <span>Fast Processing</span>
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
                <li>• Files are deleted after 24 hours</li>
                <li>• No limit on number of conversions</li>
                <li>• Works on all devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
