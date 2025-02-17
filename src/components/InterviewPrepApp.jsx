import React, { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUp, X } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const topics = [
  { id: "html", name: "HTML", dataSource: "htmlAndCSS" },
  { id: "react", name: "ReactJs", dataSource: "reactQuesionData" },
  {
    id: "javascript",
    name: "JavaScript",
    dataSource: "javascriptQuestionData",
  },
  { id: "rtk", name: "Redux&Rtk", dataSource: "reduxRtk" },
  { id: "next", name: "NextJs", dataSource: "nextJs" },
  { id: "axios", name: "Axios", dataSource: "Axios" },
  { id: "rrd", name: "Router-Dom", dataSource: "reactRouter" },
  { id: "typescript", name: "Typescript", dataSource: "typescript" },
  { id: "git&github", name: "Git/Github", dataSource: "gitHub" },
  { id: "node", name: "NodeJS", dataSource: "nodeJS" },
  { id: "express", name: "ExpressJS", dataSource: "expressJs" },
  { id: "postgresql", name: "PostgreSql", dataSource: "postgreSql" },
  { id: "mogo", name: "MongoDB", dataSource: "mongoDB" },
  { id: "postman", name: "Postman", dataSource: "postman" },
  { id: "systemDesign", name: "System Design", dataSource: "systemDesign" },
  { id: "behavioural", name: "Behavioural", dataSource: "behavioural" },
];

const FormattedText = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const numberEmojis = {
    '0': '0️⃣',
    '1': '1️⃣',
    '2': '2️⃣',
    '3': '3️⃣',
    '4': '4️⃣',
    '5': '5️⃣',
    '6': '6️⃣',
    '7': '7️⃣',
    '8': '8️⃣',
    '9': '9️⃣'
  };

  const formatText = (text) => {
    // Skip if already contains emoji numbers
    if (/[0-9]️⃣/.test(text)) return text;

    // Convert standalone numbers based on device type
    return text.replace(/\b(\d)\b/g, (match, digit) => {
      if (isMobile) {
        return `<span class="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold bg-cyan-500/20 text-cyan-400 rounded-full mx-1">${digit}</span>`;
      } else {
        return numberEmojis[digit] || match;
      }
    });
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
        dangerouslySetInnerHTML={{ __html: formattedLine.trim() }}
      />
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



const InterviewPrepApp = ({ dataSources }) => {
  const [activeTab, setActiveTab] = useState("react");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const questionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeData = getActiveData();
    const tags = new Set();
    activeData?.forEach((item) => {
      item?.tags?.forEach((tag) => tags.add(tag));
    });
    setAvailableTags(Array.from(tags));
    setSelectedTag(""); // Reset selected tag when changing tabs
  }, [activeTab]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getActiveData = () => {
    const activeSource = topics.find(
      (topic) => topic.id === activeTab
    )?.dataSource;
    return dataSources?.[activeSource] || [];
  };

  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? "" : tag));
    setSearchQuery(""); // Clear search when selecting tag
  };

  const filteredQuestions = getActiveData().filter((q) => {
    const matchesSearch = q?.question
      ?.toLowerCase?.()
      ?.includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || q?.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleQuestionClick = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);

    if (expandedQuestion !== questionId) {
      setTimeout(() => {
        questionRefs.current?.[questionId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const availableTopics = topics.filter(
    (topic) => dataSources?.[topic.dataSource]?.length > 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-serif">
      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 font-sans animate-fade-in">
            Interview Preparation Guide
          </h1>
          <p className="text-xl font-light tracking-wide">
            Master your technical interviews with comprehensive answers and
            examples
          </p>
        </div>
      </div>

      <div className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 custom-scrollbar">
          <div className="flex space-x-4 overflow-x-auto custom-scrollbar">
            {availableTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`py-4 px-6 font-medium transition-all cursor-pointer duration-300 relative ${
                  activeTab === topic.id
                    ? "text-cyan-400"
                    : "text-cyan-300 hover:text-cyan-400"
                }`}
              >
                {topic.name}
                {activeTab === topic.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-4 ">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 flex items-center gap-2 capitalize
                                ${
                                  selectedTag === tag
                                    ? "bg-cyan-500 text-white shadow-lg"
                                    : "bg-gray-800 text-cyan-300 hover:bg-gray-700"
                                }`}
            >
              {tag}
              {selectedTag === tag && <X size={14} className="opacity-70" />}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sticky top-16 z-10 bg-transparent">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md text-cyan-100 placeholder-cyan-300/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="space-y-6">
          {filteredQuestions.map((question, index) => (
            <div
              key={question?.id}
              ref={(el) => (questionRefs.current[question?.id] = el)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 scroll-mt-32 hover:shadow-cyan-900/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div
                    className="flex justify-between cursor-pointer items-start group"
                    onClick={() => handleQuestionClick(question?.id)}
                  >
                    <h3 className="text-lg font-medium text-cyan-300 flex-1 group-hover:text-cyan-400 transition-colors first-letter:capitalize">
                      <span className="font-semibold text-lg text-cyan-500 ">
                        {index + 1}:
                      </span>{" "}
                      {question?.question}
                    </h3>
                    <button className="ml-4 p-2 hover:bg-cyan-900/30 rounded-full transition-colors">
                      {expandedQuestion === question?.id ? (
                        <ChevronUp className="text-cyan-400" />
                      ) : (
                        <ChevronDown className="text-cyan-400" />
                      )}
                    </button>
                  </div>

                  {/* Tags Display */}
                  {/* <div className="flex flex-wrap gap-2">
                    {question?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                          selectedTag === tag
                            ? "bg-cyan-500 text-white"
                            : "bg-gray-700/50 text-cyan-300 hover:bg-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  {question?.actionWords?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {question.actionWords.map((word, index) =>
                        word?.trim() !== "" ? (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-cyan-900/50 to-indigo-900/50 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium shadow-lg border border-cyan-800/30 line-clamp-2 first-letter:uppercase"
                          >
                            {word.trim()}
                          </span>
                        ) : null
                      )}
                    </div>
                  )}
                </div>

                {expandedQuestion === question?.id && (
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-cyan-300 mb-4 underline">
                        Answer
                      </h4>
                      <div className="leading-relaxed">
                        <FormattedText text={question?.answer} />
                      </div>
                    </div>

                    {question?.codeExample && (
                      <div>
                        <h4 className="text-lg font-medium text-cyan-300 mb-3">
                          Code Example
                        </h4>
                        <SyntaxHighlighter
                          language="javascript"
                          style={vscDarkPlus}
                          className="rounded-xl overflow-x-auto shadow-lg border border-gray-700 p-6"
                        >
                          {question.codeExample}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default InterviewPrepApp;
