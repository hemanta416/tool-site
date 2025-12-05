'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Upload, Download, File, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { toolConfigs } from '@/types';

export default function ToolPage() {
  const params = useParams();
  const toolId = params.toolId;
  const tool = toolConfigs[toolId] || {
    title: 'File Converter',
    description: 'Convert your files easily',
    inputFormats: ['.txt'],
    outputFormat: '.txt',
    color: 'gray'
  };

  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleConvert = () => {
    if (!file) return;
    setIsConverting(true);
    setTimeout(() => {
      setConvertedFile({
        name: `converted_${file.name.replace(/\.[^/.]+$/, '')}${tool.outputFormat}`,
        size: file.size * 0.8,
        url: '#'
      });
      setIsConverting(false);
    }, 1500);
  };

  const handleDownload = () => { if (convertedFile) alert(`Downloading ${convertedFile.name}`); };
  const handleReset = () => { setFile(null); setConvertedFile(null); };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to All Tools
        </Link>

        <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
        <p className="text-gray-600 mb-6">{tool.description}</p>

        <div className="bg-white rounded-xl p-6 shadow">
          <div {...getRootProps()} className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-blue-400">
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p>{isDragActive ? 'Drop the file here...' : 'Drag & drop your file here or click to browse'}</p>
            <p className="text-sm text-gray-400">Supported formats: {tool.inputFormats.join(', ')}</p>
          </div>

          {file && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 flex justify-between items-center">
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{(file.size/1024/1024).toFixed(2)} MB</p>
              </div>
              <button onClick={() => setFile(null)} className="text-red-500">Remove</button>
            </div>
          )}

          <button onClick={handleConvert} disabled={!file || isConverting} className="mt-4 w-full py-3 bg-blue-600 text-white rounded-xl disabled:bg-gray-300">
            {isConverting ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin h-5 w-5" /> Converting...</span> : `Convert to ${tool.outputFormat}`}
          </button>

          {convertedFile && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">{convertedFile.name}</p>
                <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-1 rounded">Download</button>
              </div>
              <button onClick={handleReset} className="mt-2 px-4 py-1 border rounded">Convert Another File</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
