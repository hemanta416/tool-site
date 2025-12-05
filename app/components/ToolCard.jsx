import ToolCard from './components/ToolCard';

// तपाईंको tools array मा
const tools = [
  {
    id: 'word-to-html',
    title: 'Word to HTML',
    description: 'Convert Word documents to clean HTML code'
  },
  // ... अन्य tools
];

// Render गर्दा
{tools.map((tool) => (
  <ToolCard 
    key={tool.id}
    toolId={tool.id}
    title={tool.title}
    description={tool.description}
  />
))}