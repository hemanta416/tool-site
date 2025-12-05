import React from 'react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;  // React icon component
  color: string;          // icon/text color
  bgColor: string;        // icon background color
}

export interface ToolConfig {
  title: string;
  description: string;
  inputFormats: string[];
  outputFormat: string;
  icon: React.ReactNode;
  color: string;
}
