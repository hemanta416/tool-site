import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';
import { FileText, Image, Youtube, Globe, Zap, Upload } from 'lucide-react';

const tools = [
  {
    title: "Word to HTML",
    description: "Convert Word documents to clean HTML code instantly",
    icon: "word",
    category: "Document"
  },
  {
    title: "PDF to Word",
    description: "Extract text from PDF to editable Word document",
    icon: "pdf",
    category: "Document"
  },
  {
    title: "Word to PDF",
    description: "Convert Word files to PDF format",
    icon: "word",
    category: "Document"
  },
  {
    title: "PDF to Excel",
    description: "Convert PDF tables to Excel spreadsheets",
    icon: "excel",
    category: "Document"
  },
  {
    title: "Excel to PDF",
    description: "Convert Excel files to PDF documents",
    icon: "excel",
    category: "Document"
  },
  {
    title: "PPT to PDF",
    description: "Convert PowerPoint presentations to PDF",
    icon: "ppt",
    category: "Presentation"
  },
  {
    title: "PDF to PPT",
    description: "Convert PDF slides to PowerPoint format",
    icon: "ppt",
    category: "Presentation"
  },
  {
    title: "Translate PDF",
    description: "Translate PDF documents to multiple languages",
    icon: "translate",
    category: "Translation"
  },
  {
    title: "Compress Photo",
    description: "Reduce image file size without losing quality",
    icon: "photo",
    category: "Image"
  },
  {
    title: "Photo Size Manager",
    description: "Resize images to specific dimensions (1*2cm, 3*4cm, etc.)",
    icon: "photo",
    category: "Image"
  },
  {
    title: "Google Translation",
    description: "Translate files and documents using Google Translate",
    icon: "translate",
    category: "Translation"
  },
  {
    title: "YouTube Summarizer",
    description: "Get summary from YouTube video links",
    icon: "youtube",
    category: "Video"
  }
];

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Conversion",
    description: "Process files in seconds with our optimized tools"
  },
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Easy to Use",
    description: "Simple drag-and-drop interface for all tools"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "100% Free",
    description: "All tools available completely free of charge"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Secure Processing",
    description: "Files are deleted automatically after conversion"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          All Your <span className="text-blue-600">File Tools</span> in One Place
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Convert, translate, compress, and manage files online with our free tools.
          No registration required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Converting Now
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Tools
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tools?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Tools</h2>
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            View All Tools →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* Special Tools Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Image className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold">Photo Size Manager</h3>
              </div>
              <p className="text-gray-600 mb-6">Resize images to specific passport photo sizes:</p>
              <div className="grid grid-cols-3 gap-4">
                {['1×1.5 inch', '2×2 inch', '3.5×4.5 cm', '35×45 mm', 'Passport Size', 'Visa Size'].map((size) => (
                  <div key={size} className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold">YouTube Summarizer</h3>
              </div>
              <p className="text-gray-600 mb-6">Get instant summaries from YouTube videos</p>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Paste YouTube link here..."
                  className="flex-1 border rounded-lg px-4 py-3"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                  Summarize
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}