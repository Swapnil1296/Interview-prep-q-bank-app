import React from 'react';
import { Emoji } from 'react-emoji-render';

const FormattedText = ({ text }) => {
  const numberEmojis = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };

  const formatText = (text) => {
    // Skip if already contains processed emojis
    if (text.includes(':one:')) return text;

    // Convert standalone numbers to emoji shortcodes
    return text.replace(/\b(\d)\b/g, (match, digit) => 
      `:${numberEmojis[digit]}:`
    );
  };

  const processLine = (line) => {
    // Check if the line is a heading (ends with ":")
    const isHeading = line.trim().endsWith(":");
    
    // Format the line with emoji processing
    const formattedLine = formatText(line);
    
    return (
      <p
        key={line}
        className={`mb-3 ${
          isHeading ? "font-medium mt-4 text-cyan-500" : "text-cyan-200"
        }`}
      >
        <Emoji text={formattedLine.trim()} />
      </p>
    );
  };

  const processText = (text) => {
    if (!text) return null;
    
    // Split by double newlines to separate paragraphs
    const paragraphs = text.split(/\n\n+/);
    
    return paragraphs.map((paragraph, index) => {
      // If paragraph contains single newlines, split and process each line
      if (paragraph.includes('\n')) {
        const lines = paragraph.split('\n');
        return (
          <div key={index} className="mb-4">
            {lines.map((line, lineIndex) => 
              line.trim() && processLine(line)
            )}
          </div>
        );
      }
      // Process single paragraph
      return paragraph.trim() && processLine(paragraph);
    });
  };

  return <div className="space-y-2">{processText(text)}</div>;
};

export default FormattedText;