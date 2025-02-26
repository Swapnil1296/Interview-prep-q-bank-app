import React, { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUp, X } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FormattedText from './helpers/FormattedText';
import TopicsMenu from "./helpers/MenuComponent";

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
  { id: "rrd", name: "Router", dataSource: "reactRouter" },
  { id: "typescript", name: "Typescript", dataSource: "typescript" },
  { id: "git&github", name: "Git/Github", dataSource: "gitHub" },
  { id: "node", name: "NodeJS", dataSource: "nodeJS" },
  { id: "express", name: "ExpressJS", dataSource: "expressJs" },
  { id: "postgresql", name: "PostgreSql", dataSource: "postgreSql" },
  { id: "mogo", name: "MongoDB", dataSource: "mongoDB" },
  { id: "postman", name: "Postman", dataSource: "postman" },
  { id: "aws", name: "AWS", dataSource: "awsQbank" },
  { id: "systemDesign", name: "System Design", dataSource: "systemDesign" },
  { id: "behavioural", name: "Behavioural", dataSource: "behavioural" },
];

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
    setSelectedTag("");
    setSearchQuery("");
    setExpandedQuestion(null);
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
    if (!q?.question) return false;

    const matchesSearch = q.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
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
    <div className="min-h-screen bg-gradient-to-br  from-gray-900 via-gray-800 to-black text-white font-serif">
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

      <div className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-30 border-b border-gray-700">
        <TopicsMenu
          availableTopics={availableTopics}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="container mx-auto text-right px-4 py-6 sticky top-14 z-20 bg-transparent">
        <div className="relative">
          {/* <Search
            className="absolute  left-3 top-1/2  transform -translate-y-1/2 text-cyan-400"
            size={20}
          /> */}
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full md:w-3/5 lg:w-3/5  pl-10 pr-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md text-cyan-100 placeholder-cyan-300/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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

      <div className="container mx-auto px-4 pb-16 ">
        <div className="space-y-6">
          {filteredQuestions.map((question, index) => (
            <div
              key={question?.id}
              ref={(el) => (questionRefs.current[question?.id] = el)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 scroll-mt-32 hover:shadow-cyan-900/20 transition-all duration-300 transform hover:-translate-y-1 "
            >
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div
                    className="flex justify-between cursor-pointer items-start group"
                    onClick={() => handleQuestionClick(question?.id)}
                  >
                    <h3 className="text-lg font-medium text-cyan-300 flex-1 group-hover:text-cyan-400 transition-colors first-letter:capitalize">
                      <span className="font-semibold text-lg text-cyan-500 ">
                        <span> {index + 1}:</span>
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
                          wrapLines
                          lineProps={{
                            style: {
                              wordBreak: "break-all",
                              whiteSpace: "pre-wrap",
                            },
                          }}
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
