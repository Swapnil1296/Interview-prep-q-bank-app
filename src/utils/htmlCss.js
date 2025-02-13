export const htmlAndCSS = [
  {
    id: 1,
    topic: "html&css",
    question:
      "What is a URLs full form? Explain what a url is and the four parts it consists of \r",
    answer:
      "URL stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc.A URL (Uniform Resource Locator) is a specific type of URI (Universal Resource Identifier)\nA URL for HTTP (or HTTPS) is normally made up of three or four components:\n1.A scheme. The scheme identifies the protocol to be used to access the resource on the Internet. It can be HTTP (without SSL) or HTTPS (with SSL).\n2.A host. The host name identifies the host that holds the resource. For example, www.example.com. A server provides services in the name of the host, but hosts and servers do not have a one-to-one mapping. Refer to Host names.\nHost names can also be followed by a port number. Refer to Port numbers. Well-known port numbers for a service are normally omitted from the URL. Most servers use the well-known port numbers for HTTP and HTTPS , so most HTTP URLs omit the port number.\n3.A path. The path identifies the specific resource in the host that the web client wants to access. For example, /software/htp/cics/index. .\n4.A query string. If a query string is used, it follows the path component, and provides a string of information that the resource can use for some purpose (for example, as parameters for a search or as data to be processed). The query string is usually a string of name and value pairs; for example, term=bluebird. Name and value pairs are separated from each other by an ampersand (&); for example, term=bluebird&source=browser-search.\n",
    keyFeatures: [],
    actionWords: [
      "1.Uniform resource locator\n2. scheme + host+ path+query string",
    ],
    codeExample: "",
  },
  {
    id: 2,
    topic: "html&css",
    question: "What is HTTP protocol?\n",
    answer:
      "  HTTP (HyperText Transfer Protocol)   is the foundation of data communication on the web, enabling the transfer of resources like HTML, images, and videos between a client (browser) and a server. It follows a   stateless request-response model  , meaning each request is independent.\n\n    Key Features:\n-   Methods  : Common ones include  GET  (retrieve),  POST  (create),  PUT  (update),  DELETE  (remove), and  PATCH  (partial update).\n-   Status Codes  : Indicate request outcomes:\n HTTP is a   text-based, flexible, and layered protocol   operating over TCP/IP and is integral to the World Wide Web and APIs.\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 3,
    topic: "html&css",
    question: "What is TCP protocol?\n",
    answer:
      "  TCP (Transmission Control Protocol)   is a reliable, connection-oriented protocol at the transport layer of the TCP/IP model. It ensures error-free, ordered, and complete delivery of data between devices.\r\n\r\n    Key Features:\r\n-   Connection-Oriented  : Establishes a connection using a three-way handshake.\r\n-   Reliable Delivery  : Guarantees error-free and in-order data transfer.\r\n-   Error Checking  : Detects and retransmits corrupted data.\r\n-   Flow & Congestion Control  : Manages data flow and adjusts the transmission rate to prevent congestion.\r\n\r\n    Applications:\r\n- Web browsing (HTTP/HTTPS)\r\n- Email (SMTP, IMAP)\r\n- File transfers (FTP)\r\n- Remote access (SSH, Telnet)\r\n\r\nTCP is ideal for applications needing accuracy and reliability, though it has higher overhead compared to UDP.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 4,
    topic: "html&css",
    question: "What is HTTPS?\n",
    answer:
      "  HTTPS (HyperText Transfer Protocol Secure)   is the secure version of HTTP, using   TLS (Transport Layer Security)   to encrypt data between a client and server. \r\n\r\n    Key Features:\r\n-   Encryption  : Protects data from eavesdropping.\r\n-   Authentication  : Verifies the server's identity with certificates.\r\n-   Data Integrity  : Ensures data is not altered during transfer.\r\n-   Port  : Uses port   443  , unlike HTTP's port   80  .\r\n\r\n    Benefits:\r\n- Protects sensitive information (e.g., passwords, payment details).\r\n- Increases user trust and SEO rankings.\r\n\r\nHTTPS is essential for secure web communication, especially for sensitive transactions and data.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 5,
    topic: "html&css",
    question: "What are tags and attributes in HTML?",
    answer:
      "Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 6,
    topic: "html&css",
    question: "What are void elements in HTML?",
    answer:
      "HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.\r\n\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 7,
    topic: "html&css",
    question:
      "What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?",
    answer:
      'The key difference lies in   uniqueness   and   purpose  :\n\n      Class Attribute  \n-   The  class  attribute can be used by multiple HTML elements to group them together.\n-   It\'s for applying the same styles or functionality to a group of elements. It\'s like assigning a team name where multiple people (elements) can belong to the same group.\n\n      \n  <div class="highlight">Item 1</div>\n  <p class="highlight">Item 2</p>\n  <button class="highlight">Item 3</button>\n     \n  Here, all three elements share the same  class  value  highlight . This allows them to have consistent styling or behavior.\n\n      ID Attribute  \n-   The  id  attribute is meant to uniquely identify a single element in the HTML document.\n-   It\'s for targeting a specific, unique element for styling, interaction, or linking.\n\n      \n  <div id="main-header">Header</div>\n     \n  The  id   main-header  belongs to this one  <div> , and no other element in the same document can have this  id .\n\n---\n\n    Why This Difference?\n1.   Classes  : Allow grouping. Many elements can share the same  class  because they might need the same styling or functionality.\n   -   Example Use  : Making all buttons with a  class="submit"  look the same.\n2.   IDs  : Ensure uniqueness. Only one element can have a particular  id  because it\'s used for uniquely identifying or linking that element.\n   -   Example Use  : Scrolling to a specific section of a page using an anchor link ( <a href=" main-header">Go to Header</a> ).\n\n---\n\n    Analogy:\n-   Class  : Like giving several students in a class the same uniform—many can wear the same outfit, and they all belong to the same group.\n-   ID  : Like assigning a roll number to each student—each student gets a unique number for identification.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 8,
    topic: "html&css",
    question: "What is the significance of <head> and <body> tag in HTML?",
    answer:
      'The  <head>  and  <body>  tags are two essential sections in an HTML document that serve distinct purposes:\n\n---\n\n      1.  <head>  Tag  \nThe  <head>  contains metadata and resources for the document. It doesn\'t display content directly on the webpage but provides critical information and resources to the browser.\n\n       Significance:  \n-   Metadata  : Information about the webpage, like the title, description, and character encoding.\n-   Scripts and Styles  : Links to CSS files or embedded  <style>  blocks for styling and  <script>  tags for JavaScript functionality.\n-   SEO and Accessibility  : Metadata like  <meta name="description">  helps with search engine optimization (SEO).\n-   Page Title  : The  <title>  tag sets the text displayed on the browser tab or window title.\n-   External Resources  : Links to external stylesheets, fonts, or JavaScript libraries.\n\n       Example  :\n    \n<head>\n  <title>My Web Page</title>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link rel="stylesheet" href="styles. ">\n  <script src="script.js"></script>\n</head>\n   \n\n---\n\n      2.  <body>  Tag  \nThe  <body>  contains all the content visible on the webpage. This includes text, images, videos, links, and interactive elements.\n\n       Significance:  \n-   Visible Content  : Everything inside the  <body>  is rendered on the webpage.\n-   Structure  : Defines the layout of the page using elements like  <div> ,  <header> ,  <footer> ,  <main> , etc.\n-   Interaction  : Contains interactive elements such as forms, buttons, and scripts that affect user interaction.\n\n       Example  :\n    \n<body>\n  <header>\n    <h1>Welcome to My Web Page</h1>\n  </header>\n  <main>\n    <p>This is the main content of the webpage.</p>\n  </main>\n  <footer>\n    <p>Footer information goes here.</p>\n  </footer>\n</body>\n   \n\n---\n\n      Summary of Roles:  \n\n|   Tag     |   Purpose                                                                                    |\n|-----------|----------------------------------------------------------------------------------------------|\n|  <head>   | Provides information  about  the webpage to the browser (metadata, styles, scripts).         |\n|  <body>   | Contains the actual content of the webpage that users see and interact with.                 |\n\n---\n\n      Analogy:  \nThink of a webpage as a book:\n- The    <head>    is like the cover and index—important details about the book but not part of the story.\n- The    <body>    is like the main content—the chapters and text that the reader engages with.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 9,
    topic: "html&css",
    question:
      "What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element.",
    answer:
      "When we use the attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 10,
    topic: "html&css",
    question: "What are the differences between Inline & block level element ?",
    answer:
      'In HTML5, elements are categorized as   inline   or   block-level   based on how they behave in the document flow and how they are displayed.\n\n---\n\n      Block-Level Elements  \n1. Start on a new line.\n2. Take up the full width of their container (by default).\n3. Can contain other block-level elements and inline elements.\n4. Useful for creating layout structure.\n\n       Examples:  \n-  <div> : Generic container for grouping content.\n-  <p> : Paragraphs.\n-  <h1> ,  <h2> ...  <h6> : Headings.\n-  <ul> ,  <ol> : Lists.\n-  <section> ,  <article> ,  <header> ,  <footer> ,  <nav> : Semantic structural elements.\n   \n\n      Inline Elements   \n1. Do not start on a new line; they remain "in line" with surrounding text.\n2. Take up only as much width as their content requires.\n3. Cannot contain block-level elements (only inline elements).\n4. Ideal for text formatting and small content pieces.\n\n       Examples:  \n-  <span> : Generic container for inline content.\n-  <a> : Links.\n-  <img> : Images.\n-  <strong> ,  <em> : Text emphasis (bold, italic).\n-  <label> : Form input labels.\n\n       Example Code:  \n    \n<p>This is a <strong>bold</strong> word in a paragraph.</p>\n<a href=" ">This is a link</a>\n   \n\n---\n\n      Comparison Table  \n\n| Feature                | Block Elements                          | Inline Elements                 |\n|------------------------|------------------------------------------|----------------------------------|\n|   Starts on New Line   | Yes                                      | No                              |\n|   Default Width        | Full width of the parent container       | Width of the content            |\n|   Examples             |  <div> ,  <p> ,  <h1> - <h6> ,  <ul>    |  <a> ,  <span> ,  <img> ,  <em>  |\n|   Containment          | Can contain block and inline elements    | Can only contain inline elements |\n\n---\n\n      Conclusion:  \n- Use   block-level elements   for larger structural components like headings, paragraphs, or sections.\n- Use   inline elements   for smaller, in-line modifications like links, formatting, or embedding images in text. \n\nUnderstanding the distinction helps in creating well-structured, semantic HTML.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 11,
    topic: "html&css",
    question: " What are Semantic Elements?",
    answer:
      "Semantic elements in HTML are tags that clearly describe their meaning in both the browser and to the developer. These elements provide a more readable and meaningful structure to a webpage, making it easier for both humans and machines (like search engines or screen readers) to understand the content.\n\nSignificance of Semantic Elements:\nImproved Readability: They make the code more readable by describing the role of the content, rather than just giving a generic container (like <div> or <span>).\nBetter Accessibility: Screen readers and other assistive technologies can better understand the content and its purpose.\nSEO Benefits: Search engines can better analyze the content of the page, which can improve its ranking.\nMaintainability: Easier for developers to understand the structure of the page when reading or editing the code.\n\nEx: <nav> , <section>, <header>, <footer> ",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 12,
    topic: "html&css",
    question:
      "What is the Box model in CSS? Which CSS properties are a part of it?",
    answer:
      "The   CSS Box Model   is a fundamental concept in web design that describes how elements on a webpage are structured and spaced. Every HTML element is considered as a rectangular box, and the box model defines the size and spacing of that box.\r\n\r\n---\r\n\r\n      Parts of the Box Model  \r\n\r\n1.   Content  :\r\n   - The innermost part of the box.\r\n   - Contains the actual content, such as text, images, or other elements.\r\n   - The size of the content area is determined by the  width  and  height  properties.\r\n\r\n2.   Padding  :\r\n   - The space between the content and the border.\r\n   - Adds internal spacing around the content.\r\n   - Controlled using the  padding  property.\r\n\r\n3.   Border  :\r\n   - The boundary that wraps around the padding and content.\r\n   - Can be styled using the  border  property (e.g., width, style, and color).\r\n\r\n4.   Margin  :\r\n   - The outermost space between the element and its neighboring elements.\r\n   - Provides external spacing.\r\n   - Controlled using the  margin  property.\r\n\r\n---\r\n\r\n      Visualization of the Box Model  \r\n\r\n   \r\n+-------------------------+\r\n|        Margin           |\r\n+-------------------------+\r\n|        Border           |\r\n+-------------------------+\r\n|        Padding          |\r\n+-------------------------+\r\n|        Content          |\r\n+-------------------------+\r\n   \r\n\r\n---\r\n\r\n      CSS Properties in the Box Model  \r\n\r\n|   Property       |   Description                                                                   |\r\n|-------------------|---------------------------------------------------------------------------------|\r\n|  width ,  height  | Specifies the width and height of the content area.                            |\r\n|  padding          | Adds space inside the element, around the content.                             |\r\n|  border           | Defines the thickness, style, and color of the border around the element.      |\r\n|  margin           | Creates space outside the element, separating it from other elements.          |\r\n|  box-sizing       | Determines how the total size of the box is calculated (content-box or border-box). |\r\n\r\n---\r\n\r\n       box-sizing  Property  \r\n\r\nThe  box-sizing  property controls how the total width and height of an element are calculated:\r\n-    content-box  (default)  : \r\n  - Width and height include only the content; padding and border are added outside.\r\n-    border-box   :\r\n  - Width and height include content, padding, and border.\r\n\r\n---\r\n\r\n      Summary  \r\nThe CSS Box Model defines how elements are spaced and displayed. It includes:\r\n1.   Content  : Actual content size.\r\n2.   Padding  : Space between content and border.\r\n3.   Border  : Surrounds padding and content.\r\n4.   Margin  : Space outside the element. \r\n\r\nUnderstanding the box model is essential for accurate layout and spacing in web design.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 13,
    topic: "html&css",
    question: "What are the different types of Selectors in CSS?",
    answer:
      'CSS selectors are patterns used to select and style specific elements in an HTML document. Here are the key types:\r\n\r\n1.   Universal Selector (   )  :  \r\n   Selects all elements.  \r\n       \r\n     { margin: 0; }\r\n      \r\n\r\n2.   Type Selector  :  \r\n   Selects elements by their tag name.  \r\n       \r\n   p { color: blue; }\r\n      \r\n\r\n3.   Class Selector ( .classname )  :  \r\n   Selects elements with a specific class.  \r\n       \r\n   .highlight { background: yellow; }\r\n      \r\n\r\n4.   ID Selector (  id )  :  \r\n   Selects an element with a specific ID.  \r\n       \r\n    header { font-size: 20px; }\r\n      \r\n\r\n5.   Group Selector ( , )  :  \r\n   Styles multiple elements together.  \r\n       \r\n   h1, h2, p { margin: 10px; }\r\n      \r\n\r\n6.   Descendant Selector (space)  :  \r\n   Selects elements inside a specific ancestor.  \r\n       \r\n   div p { color: gray; }\r\n      \r\n\r\n7.   Child Selector ( > )  :  \r\n   Selects direct children of an element.  \r\n       \r\n   ul > li { font-weight: bold; }\r\n      \r\n\r\n8.   Adjacent Sibling Selector ( + )  :  \r\n   Selects the next sibling of an element.  \r\n       \r\n   h1 + p { margin-top: 5px; }\r\n      \r\n\r\n9.   General Sibling Selector ( ~ )  :  \r\n   Selects all siblings after an element.  \r\n       \r\n   h1 ~ p { color: green; }\r\n      \r\n\r\n10.   Attribute Selector  :  \r\n   Selects elements with specific attributes.  \r\n       \r\n   input[type="text"] { border: 1px solid black; }\r\n      \r\n\r\n11.   Pseudo-classes  :  \r\n   Selects elements in a specific state.  \r\n       \r\n   a:hover { color: red; }\r\n      \r\n\r\n12.   Pseudo-elements  :  \r\n   Styles parts of an element.  \r\n       \r\n   p::first-line { font-style: italic; }\r\n      \r\n\r\n      Summary  :  \r\nSelectors include basic (universal, type, class, ID), combinators (descendant, child, sibling), attribute-based, and pseudo (classes and elements). These provide powerful ways to style HTML efficiently.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 14,
    topic: "html&css",
    question: "What is the difference between margin and padding?",
    answer:
      "Margin is used to create space around elements and padding is used to create space around elements inside the border.\r\nWe can set the margin property to auto but we cannot set the padding property to auto.\r\nIn Margin property we can allow negative or float number but in padding we cannot allow negative values.\r\nMargin and padding target all the 4 sides of the element. Margin and padding will work without the border property also.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 15,
    topic: "html&css",
    question: "What are pseudo-classes in CSS?",
    answer:
      "A Pseudo class in CSS is used to define the special state of an element. It can be combined with a CSS selector to add an effect to existing elements based on their states. For Example, changing the style of an element when the user hovers over it, or when a link is visited. All of these can be done using Pseudo Classes in CSS.\nselector: pseudo-class{\r\n     property: value;\r\n}",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 16,
    topic: "html&css",
    question: "What are the diffrences between Flex & Grid ?",
    answer:
      "The   difference between Flexbox and Grid   lies in their use cases, layout mechanisms, and flexibility. Here’s a concise comparison:\n\n---\n\n      1. Layout Philosophy  :\n-   Flexbox  : Designed for   one-dimensional layouts   (either row or column).\n  - Focuses on aligning and distributing space within a container.\n  - Best for items that need to be laid out in a single direction.\n  - Example: Navigation bars, button groups.\n\n-   Grid  : Designed for   two-dimensional layouts   (rows and columns).\n  - Creates full grid systems for both horizontal and vertical alignment.\n  - Best for complex page layouts.\n  - Example: Webpage templates, dashboard designs.\n\n---\n\n      2. Flexibility  :\n-   Flexbox  :\n  - Flexible and dynamic: Adjusts based on content size and space.\n  - Uses properties like  flex-grow ,  flex-shrink , and  align-items  for alignment.\n\n-   Grid  :\n  - Defines explicit layouts using rows and columns with precise control.\n  - Uses properties like  grid-template-rows  and  grid-template-columns .\n\n---\n\n      3. Alignment  :\n-   Flexbox  : Aligns items along the main axis or cross axis with  justify-content  and  align-items .\n-   Grid  : Aligns items within cells and entire grid areas using  justify-items  and  align-content .\n\n---\n\n      4. Syntax  :\n-   Flexbox  :\n  - Items are placed in a single flow.\n      \n  display: flex;\n  flex-direction: row;\n     \n\n-   Grid  :\n  - Defines both rows and columns.\n      \n  display: grid;\n  grid-template-rows: 100px 100px;\n  grid-template-columns: 1fr 2fr;\n     \n\n---\n\n      5. Use Cases  :\n|   Flexbox                              |   Grid                                  |\n|----------------------------------------|-----------------------------------------|\n| Best for small components or items in a single line. | Best for larger, complex page layouts.  |\n| Dynamic content alignment.             | Precise, pre-defined layouts.           |\n\n---\n\n      Key Difference  :\n-   Flexbox  : Great for simpler, content-driven layouts.  \n-   Grid  : Better for robust, structured designs with rows and columns. \n\nUse   Flexbox   for alignment and smaller components, and   Grid   for entire page layouts or multi-axis designs.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
];
