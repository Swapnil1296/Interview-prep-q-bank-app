import React, { useEffect, useState } from 'react';
import { Emoji } from 'react-emoji-render';

const FormattedText = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const numberEmojis = {
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣",
  };

  const formatText = (text) => {
    if (/[0-9]️⃣/.test(text)) return text;

    return text.replace(/\b(\d)\b/g, (match, digit) => {
      if (isMobile) {
        return `<span class="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold bg-cyan-500/20 text-cyan-400 rounded-full mx-1">${digit}</span>`;
      } else {
        return numberEmojis[digit] || match;
      }
    });
  };

  const processLine = (line, key) => {
    // Check for decorative tags (b, i, u, em, strong, mark, etc.)
    const decorativeTagPattern = /<(b|i|u|em|strong|mark|sub|sup|strike|s|del|small)>.*?<\/\1>/i;
    const containsDecorativeTags = decorativeTagPattern.test(line);
  // <b> - Bold
  // <strong> - Strong emphasis (semantic bold)
  // <i> - Italic
  // <em> - Emphasis (semantic italic)
  // <mark> - Highlighted text
  // <u> - Underlined text
  // <s> - Strikethrough (semantic removed text)
  // <del> - Deleted text (semantic)
  // <ins> - Inserted text (semantic underline)
  // <sub> - Subscript
  // <sup> - Superscript
  // <small> - Smaller text

    // If the line contains HTML tags but they're not just decorative, return as raw HTML
    if (/<[^>]*>/g.test(line) && !containsDecorativeTags) {
      return line;
    }

    // Format the line with emoji processing
    const formattedLine = formatText(line);
    const isHeading = line.trim().endsWith(":");

    return (
      <p
        key={key}
        className={`mb-3 ${isHeading ? "font-medium mt-4 text-cyan-500" : "text-cyan-200"}`}
        dangerouslySetInnerHTML={{ __html: formattedLine.trim() }}
      />
    );
  };

  const processText = (text) => {
    if (!text) return null;

    const paragraphs = text.split(/\n\n+/);

    return paragraphs.map((paragraph, index) => {
      if (paragraph.includes("\n")) {
        const lines = paragraph.split("\n");
        return (
          <div key={index} className="mb-4">
            {lines.map((line, lineIndex) => line.trim() && processLine(line, `${index}-${lineIndex}`))}
          </div>
        );
      }
      return paragraph.trim() && processLine(paragraph, index);
    });
  };

  return <div className="space-y-2">{processText(text)}</div>;
};

export default FormattedText;