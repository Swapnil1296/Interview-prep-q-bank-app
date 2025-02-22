import React, { useState } from 'react';
import InterviewPrepApp from './components/InterviewPrepApp';
import ExcelToJsonConverter from './components/ExcelToJsonConverter';
import { javascriptQuestionData } from './utils/javascriptQuestionData';
import { reactQuesionData } from './utils/reacQuestiondata';
import { Menu, X } from 'lucide-react';
import { htmlAndCSS } from './utils/htmlCss';
import { reduxRtk } from './utils/reduxRtk';
import { nextJs } from './utils/nextJs';
import { postman } from './utils/postman';
import { systemDesign } from './utils/systemDesign';
import { Axios } from './utils/axios';
import { expressJs } from "./utils/ExpressJS";
import { gitHub } from "./utils/gitGithub";
import { mongoDB } from "./utils/mongoDb";
import { nodeJS } from "./utils/nodeJs";
import { postgreSql } from "./utils/postgreSql";
import { reactRouter } from "./utils/reactRouterDom";
import { typescript } from "./utils/typeScript";
import Footer from "./components/Footer"; // Import the footer
import { behavioural } from "./utils/behavioural";
import { awsQbank } from "./utils/awsQbank";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("interview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dataSources = {
    htmlAndCSS,
    reactQuesionData,
    javascriptQuestionData,
    reduxRtk,
    nextJs,
    Axios,
    reactRouter,
    gitHub,
    typescript,
    nodeJS,
    expressJs,
    mongoDB,
    postgreSql,
    postman,
    awsQbank,
    systemDesign,
    behavioural,
  };

  const handleNavClick = (component) => {
    setActiveComponent(component);
    setIsMobileMenuOpen(false);
  };

  return (
    // Use flex-col and min-h-screen so the footer sticks to the bottom when content is short
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">
                Interview Prep
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button
                onClick={() => handleNavClick("interview")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeComponent === "interview"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                Interview Questions
              </button>
              <button
                onClick={() => handleNavClick("excel")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeComponent === "excel"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                Upload Questions
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  onClick={() => handleNavClick("interview")}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeComponent === "interview"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  Interview Questions
                </button>
                <button
                  onClick={() => handleNavClick("excel")}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeComponent === "excel"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  Upload Questions
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-grow w-full">
        {activeComponent === "interview" && (
          <InterviewPrepApp dataSources={dataSources} />
        )}
        {activeComponent === "excel" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Upload Questions
              </h2>
              <div className="max-w-3xl mx-auto">
                <ExcelToJsonConverter />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
