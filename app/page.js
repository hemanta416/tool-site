import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToolCard from './components/ToolCard';
import { toolConfigs } from './types';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">All Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(toolConfigs).map((key) => (
            <ToolCard key={key} toolId={key} title={toolConfigs[key].title} description={toolConfigs[key].description} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
