export const toolConfigs = {
  'word-to-html': {
    title: 'Word to HTML Converter',
    description: 'Convert Word documents (.doc, .docx) to clean HTML code',
    inputFormats: ['.doc', '.docx'],
    outputFormat: '.html',
    color: 'purple'
  },
  'pdf-to-word': {
    title: 'PDF to Word Converter',
    description: 'Extract text from PDF files and convert to editable Word documents',
    inputFormats: ['.pdf'],
    outputFormat: '.docx',
    color: 'blue'
  },
  'compress-photo': {
    title: 'Compress Photo',
    description: 'Reduce image size while maintaining quality',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    outputFormat: '.jpg',
    color: 'green'
  }
  // अन्य tools थप्न सक्नुहुन्छ
};
