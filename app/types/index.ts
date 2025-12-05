export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export interface ToolConfig {
  title: string;
  description: string;
  inputFormats: string[];
  outputFormat: string;
  icon: React.ReactNode;
  color: string;
}