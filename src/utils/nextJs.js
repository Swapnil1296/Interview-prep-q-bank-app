export const nextJs = [
  {
    id: 1,
    topic: "nextjs",
    question: "Explain Next JS?",
    answer:
      ' What is Next.js?\n\nNext.js is a React framework that simplifies building modern web applications. It enhances the development process by providing solutions for server-side rendering (SSR), static site generation (SSG), routing, API routes, and performance optimizations, all while improving the user experience and SEO.\n\nIt was created by Vercel and is widely used for building scalable, fast, and production-ready web applications.\n\n---\n\n Why Use Next.js?\n\nNext.js offers several key benefits that make it an attractive option for building web apps:\n\n1. Server-Side Rendering (SSR):\n   - Instead of rendering pages on the client side (CSR), SSR renders pages on the server, sending fully-formed HTML to the client. This improves performance and SEO because search engines and users receive a fully rendered page immediately.\n   - Use case: Dynamic content or e-commerce pages that require fresh data on every load.\n\n2. Static Site Generation (SSG):\n   - Next.js can also generate static pages during the build process, which are served as static files. These files load faster since they don’t require server-side processing on each request.\n   - Use case: Blogs or marketing pages that don’t change frequently.\n\n3. Hybrid Model (ISR):\n   - Incremental Static Regeneration (ISR) allows static pages to be updated after the site has been deployed, combining the speed of static sites with dynamic updates.\n   - Use case: Frequently updated pages like product listings or user dashboards.\n\n4. File-based Routing:\n   - Next.js simplifies routing by using a file-based routing system. Pages are created automatically based on the files in the "pages" directory, making routing easier and more intuitive.\n   - Use case: Defining routes with no need to configure external routers like in Create React App (CRA).\n\n5. API Routes:\n   - You can create server-side API routes inside the "pages/api" directory. These routes act like serverless functions and allow you to build full-stack applications within the same project.\n   - Use case: Handling form submissions, fetching data, or interacting with a database.\n\n6. Automatic Code Splitting:\n   - Each page only loads the JavaScript required for that page, improving performance by reducing the amount of code that users download.\n   - Use case: Optimizing large web applications with many pages or components.\n\n7. Image Optimization:\n   - Next.js provides an "Image" component that automatically optimizes images, serving them in modern formats like WebP, and adjusting their size for different devices.\n   - Use case: Applications with high visual content like e-commerce platforms or blogs.\n\n8. TypeScript and CSS Support:\n   - Next.js has built-in support for TypeScript and CSS (including CSS Modules and Sass), enabling clean and modular styles with little configuration.\n   - Use case: Projects that need strong typing and maintainable CSS.\n\n9. SEO-Friendly:\n   - SSR and SSG ensure that content is available for search engine crawlers immediately, improving the SEO of your web app.\n   - Use case: Blogs, e-commerce platforms, or any application where SEO is critical.\n\n10. Fast Refresh:\n    - For development, Fast Refresh allows you to see changes instantly without losing component state, making development faster and more seamless.\n    - Use case: Any project where rapid development and real-time feedback are needed.\n\n---\n\n How Does Next.js Work?\n\nNext.js extends React with features that make developing complex apps easier. Here’s an overview of how some of its core features work:\n\n1. File-Based Routing:\n   - Pages are generated based on the structure of the "pages" folder:\n     - "pages/index.js" → "/"\n     - "pages/about.js" → "/about"\n     - "pages/blog/[id].js" → dynamic route "/blog/123"\n\n2. Server-Side Rendering (SSR):\n   - With SSR, Next.js pre-renders a page on each request. The content is generated on the server and sent as HTML to the client. \n   - To implement SSR, use the "getServerSideProps" function in any page:\n     \n     export async function getServerSideProps() {\n       const data = await fetch(\'https://api.example.com\');\n       return { props: { data } };\n     }\n     \n\n3. Static Site Generation (SSG):\n   - SSG pre-renders the page at build time. The result is a static HTML file that can be served quickly.\n   - Use the "getStaticProps" function to implement SSG:\n     \n     export async function getStaticProps() {\n       const data = await fetch(\'https://api.example.com\');\n       return { props: { data } };\n     }\n     \n\n4. Incremental Static Regeneration (ISR):\n   - ISR allows pages to be updated without requiring a full rebuild. You can define how often a static page should be revalidated and regenerated:\n     js\n     export async function getStaticProps() {\n       const data = await fetch(\'https://api.example.com\');\n       return { props: { data }, revalidate: 10 }; // revalidate every 10 seconds\n     }\n     \n\n5. Dynamic Routes:\n   - For pages with dynamic paths, use the "[param]" syntax in the "pages" directory. Combine it with "getStaticPaths" to define which pages should be generated at build time.\n     \n     // pages/blog/[id].js\n     export async function getStaticPaths() {\n       const paths = [{ params: { id: \'1\' } }];\n       return { paths, fallback: false };\n     }\n\n     export async function getStaticProps({ params }) {\n       const post = await fetch("https://api.example.com/posts/${params.id}");\n       return { props: { post } };\n     }\n     \n\n6. API Routes:\n   - Next.js lets you create serverless API routes in the "pages/api" folder:\n     \n     // pages/api/hello.js\n     export default (req, res) => {\n       res.status(200).json({ message: \'Hello World\' });\n     };\n     \n   - These can handle backend logic like fetching data from a database or integrating with third-party services.\n\n---\n\n When to Use Next.js?\n\nNext.js is suitable for projects where:\n- SEO and Performance are critical, and you need to render content for search engines.\n- You require both static content (fast and cacheable) and dynamic updates for frequently changing data.\n- You want a simple way to handle routing and API endpoints with minimal setup.\n- You are building a full-stack React app and need server-side capabilities like SSR or API handling.\n\n---\n\n Next.js vs React (Create React App)\n\n- Next.js is better suited for apps that require server-side rendering, static generation, or complex routing.\n- Create React App (CRA) is more lightweight and ideal for client-side rendering apps that don’t need SSR or SSG.\n- Next.js comes with performance optimizations, while CRA requires additional tools (e.g., React Router) and configuration to handle features like routing and code splitting.\n\n---\n\n Conclusion\n\nNext.js is a robust and flexible React framework that allows developers to create high-performance, SEO-friendly web applications. Whether you\'re building static pages, dynamic apps, or even handling backend APIs, Next.js provides the tools and optimizations necessary to simplify and speed up your development workflow.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 2,
    topic: "nextjs",
    question: "Explain the purpose of the _app.js file in Next JS.",
    answer:
      'In Next.js, the "_app.js" file is a special component that allows you to customize the default behavior of your Next.js application. It wraps every page in your application, making it the entry point for all pages. This file is used to maintain state, inject global styles, or include layouts that persist across different pages.\n\n Purpose of "_app.js" in Next.js\n\n1. Persistent Layouts:\n   - Normally, when you navigate between pages in Next.js, the layout (header, footer, etc.) would reset since each page is rendered separately. However, by wrapping your pages with a layout component in "_app.js", you can maintain a consistent layout across all pages.\n   - Example:\n     \n     // pages/_app.js\n     import Layout from \'../components/Layout\';\n\n     function MyApp({ Component, pageProps }) {\n       return (\n         <Layout>\n           <Component {...pageProps} />\n         </Layout>\n       );\n     }\n\n     export default MyApp;\n     \n\n2. Global CSS and Styling:\n   - "_app.js" is used to import global styles that apply across all pages. Without this file, styles would need to be imported on a page-by-page basis, which can lead to redundant imports.\n   - Example:\n     \n     import \'../styles/globals. \';\n\n     function MyApp({ Component, pageProps }) {\n       return <Component {...pageProps} />;\n     }\n\n     export default MyApp;\n     \n\n3. Custom App Logic:\n   - "_app.js" allows you to define custom logic that should run across all pages, such as initializing third-party libraries, adding providers for global state (e.g., Redux or Context API), or handling global data fetching.\n   - Example with Redux provider:\n     \n     import { Provider } from \'react-redux\';\n     import store from \'../store\';\n\n     function MyApp({ Component, pageProps }) {\n       return (\n         <Provider store={store}>\n           <Component {...pageProps} />\n         </Provider>\n       );\n     }\n\n     export default MyApp;\n     \n\n4. Component Initialization:\n   - You can perform logic or operations that should happen before a page is rendered. For example, setting up error boundaries, adding meta tags, or handling session management.\n\n5. Passing Page-Specific Props:\n   - The "pageProps" object in "_app.js" contains props that are passed from your individual pages, especially when you use "getInitialProps", "getServerSideProps", or "getStaticProps" to fetch data.\n   - Example:\n     \n     function MyApp({ Component, pageProps }) {\n       return <Component {...pageProps} />;\n     }\n\n     export default MyApp;\n     \n\n How Does "_app.js" Work?\n\n- "_app.js" wraps every page component with the root-level logic and structure. Every page in the "pages" directory automatically passes through this component.\n- It receives two props:\n  1. Component: The active page that is being rendered.\n  2. pageProps: The initial props that are pre-fetched or passed to the page component.\n\n Example: Custom "_app.js"\n\n\n// pages/_app.js\nimport \'../styles/globals. \';\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n\nexport default MyApp;\n\n\n Common Use Cases for "_app.js"\n\n1. Global State Management: Using libraries like Redux or React Context.\n2. Persistent Layout: Wrapping all pages with common UI elements (e.g., a navigation bar, footer).\n3. Analytics: Including analytics tracking code that runs on every page.\n4. Global Styles: Importing stylesheets or CSS modules that apply to all pages.\n5. Error Handling: Implementing custom error boundaries for better error reporting and logging.\n\n Key Points:\n\n- Required: "_app.js" is not required by default, but you include it when you want to customize the app behavior.\n- Global Scope: It acts globally, meaning any code placed here will affect every page in the app.\n\nIn summary, the "_app.js" file in Next.js serves as the root component for every page in your app, making it essential for global configuration, applying shared layouts, and managing state or logic across the entire application.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 3,
    topic: "nextjs",
    question: "What is the purpose of Next JS when we already have React JS ?",
    answer:
      "Next.js is built on top of React and extends its capabilities, offering features and optimizations that make it ideal for modern web development. Here's why you might need Next.js even when React is already available:\r\n\r\n1. Server-Side Rendering (SSR)\r\nReact by itself renders content on the client side, meaning the browser builds the page after loading JavaScript. This can lead to slower initial page loads and SEO challenges.\r\nNext.js provides server-side rendering (SSR), where pages are pre-rendered on the server and sent to the browser, improving speed and SEO.\r\n\r\n2. Static Site Generation (SSG)\r\nFor pages that don't change often (like blogs or documentation), Next.js can generate static HTML during build time.\r\nThis makes pages load faster and reduces server load, something React alone doesn't handle natively.\r\n\r\n3. Built-In Routing\r\nReact needs external libraries like React Router for routing, while Next.js comes with a file-based routing system.\r\nYou simply create files in the pages folder to define routes—no extra setup required.\r\n\r\n4. SEO-Friendly\r\nNext.js improves SEO by rendering content on the server. Search engines can easily index pages because the content is available in the initial HTML, unlike React's client-side rendering.\r\n\r\n5. API Routes\r\nNext.js includes a backend feature called API Routes, allowing you to build serverless APIs directly within the app.\r\nNo need for a separate backend server when using React.\r\n\r\n6. Performance Optimizations\r\nNext.js offers many built-in performance features:\r\nImage Optimization: Automatically optimizes images for faster loading.\r\nCode Splitting: Automatically splits JavaScript to load only what’s needed.\r\nPrefetching: Automatically prefetches pages linked in the app.\r\n\r\n7. Full Stack Capabilities\r\nWith API routes, SSR, and SSG, Next.js enables full-stack development in a single framework. React, on the other hand, is limited to the frontend.\r\n\r\n8. Community and Ecosystem\r\nNext.js has a growing community and is backed by Vercel, with regular updates and excellent documentation. It's designed to handle production-level web apps efficiently.\r\n\r\nWhen to Use Next.js?\r\nSEO is important: Blogs, e-commerce sites, and marketing pages.\r\nFaster loading is needed: Apps with large data or international users.\r\nDynamic or static content: Projects needing both SSR and SSG.\r\nSimplified development: No need for extra libraries or backend setups.\r\n\r\nReal-Life Analogy\r\nThink of React as a high-quality toolkit for building a car (frontend). You need to design every part yourself, including the engine (server-side rendering) and navigation (routing).\r\nNext.js is like getting a car framework that already has an engine, navigation, and optimizations built-in, so you can focus on customization and building features.\r\nThat’s why many developers prefer Next.js for production-ready applications.\r\n\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 4,
    topic: "nextjs",
    question: "What is the Use of next.config file?",
    answer:
      "The next.config.js  file in a   Next.js   application is where you customize and configure the behavior of your Next.js app. You can tweak settings, add features, and optimize your app for various use cases. Here's a simple explanation with examples:\r\n\r\n---\r\n\r\n      Key Uses of next.config.js :  -\r\n\r\n1.   Customizing Build and Runtime Settings\r\nYou can set environment variables, tune performance, or override default behavior while building or at runtime.  Example:  Example:  module.exports = {\r\n       reactStrictMode: true, // Enable React's strict mode for better debugging\r\n       poweredByHeader: false, // Remove the \"X-Powered-By: Next.js\" header\r\n   };\r\n---\r\n\r\n2.   Enabling Experimental Features    \r\n   Use this file to enable experimental features or opt into upcoming Next.js functionalities.  \r\n   Example:  \r\n   \r\n   module.exports = {\r\n       experimental: {\r\n           appDir: true, // Enable experimental app directory structure\r\n},\r\n   };\r\n   \r\n\r\n---\r\n\r\n3.   Setting Up Image Optimization    \r\n   Configure how images are optimized and loaded in your application.  \r\n   Example:  \r\n   \r\n   module.exports = {\r\n       images: {\r\ndomains: ['example.com', 'cdn.example.com'], // Allow images from external domains\r\n       },\r\n   };\r\n   \r\n\r\n---\r\n\r\n4.   Rewrites, Redirects, and Headers    \r\n   Define custom URLs, handle redirects, and add headers for security or caching.  \r\n   Example:\r\nmodule.exports = {\r\n       async redirects() {\r\n           return [\r\n               { source: '/old-page', destination: '/new-page', permanent: true },\r\n           ];\r\n       },\r\nasync headers() {\r\n             return [\r\n                 {\r\n                     source: '/api/:path ',\r\nheaders: [\r\n                       { key: 'Cache-Control', value: 'max-age=3600' },\r\n                   ],\r\n},\r\n           ];\r\n       },\r\n   };\r\n   \r\n\r\n---\r\n\r\n5.   Customizing Webpack Configuration    \r\n   Extend or modify Webpack settings for custom requirements.  \r\n   Example:\r\nmodule.exports = {\r\n       webpack: (config) => {\r\n           config.module.rules.push({\r\n               test: /\\\\.svg$/,\r\n               use: ['@svgr/webpack'],\r\n});\r\n           return config;\r\n       },\r\n   };\r\n   \r\n\r\n---\r\n\r\n6.   Internationalization (i18n)    \r\n   Add support for multiple languages in your app.  \r\n   Example:\r\nmodule.exports = {\r\n       i18n: {\r\n           locales: ['en', 'fr', 'es'], // Supported languages\r\n           defaultLocale: 'en',        // Default language\r\n       },\r\n   };\r\n\r\nWhy Do You Need It?  \r\n- Customise Next.js behavior to match your project's needs.  \r\n- Integrate third-party services (e.g., external images or custom headers).  \r\n- Optimize performance and security.  \r\n- Enable advanced features like rewrites, redirects, and Webpack tweaks.  \r\n\r\n      Real-Life Analogy\r\nThink of next.config.js  as being similar to a   control panel   for your Next.js app. It allows you to configure an app to behave in whatever fashion you want, akin to setting up rules, permissions, and optimizations for a more seamless experience.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 5,
    topic: "nextjs",
    question:
      "What is the difference between SSR (Server-Side Rendering) and SSG (Static Site Generation) in Next.js?\n",
    answer:
      "## SSR: It generates HTML for each request on the server side. This guarantees that the content is always fresh and up to date but at the cost of slower page loads compared to static sites.\n## SSG (Static Site Generation): This generates HTML at build time and serves static files. It loads pages faster, but the content is static, and changes will not be there until the site is rebuilt.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 6,
    topic: "nextjs",
    question: "What is the getServerSideProps method used for in Next.js?",
    answer:
      "getServerSideProps is used for server-side rendering in Next.js. It runs on the server on every request and fetches data that is required to render a page. It allows you to pass fetched data as props to the page component.\r\n export async function getServerSideProps(context) {\r\n  const res = await fetch('https://api.example.com/data');\r\n  const data = await res.json();\r\n  return { props: { data } };\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 7,
    topic: "nextjs",
    question: "What is the getStaticProps method used for in Next.js?",
    answer:
      "getStaticProps is used for static site generation in Next.js. It runs at build time and fetches data to pre-render a page into static HTML. This data is then passed as props to the component. It’s ideal for pages that don’t change frequently.\r\n export async function getStaticProps() {\r\n  const res = await fetch('https://api.example.com/data');\r\n  const data = await res.json();\r\n  return { props: { data } };\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 8,
    topic: "nextjs",
    question: "What is the getStaticPaths method in Next.js?",
    answer:
      "getStaticPaths is used in conjunction with getStaticProps for dynamic routes that need to be statically generated at build time. It tells Next.js which dynamic paths to pre-render. It returns an object with paths (an array of possible paths) and fallback (a boolean or string to handle unknown paths).\r\n export async function getStaticPaths() {\r\n  const res = await fetch('https://api.example.com/items');\r\n  const items = await res.json();\r\n  const paths = items.map(item => ({ params: { id: item.id } }));\r\n  return { paths, fallback: false };\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 9,
    topic: "nextjs",
    question: " What is the useRouter hook in Next.js?\r",
    answer:
      "The useRouter hook provides access to the router object, which allows you to programmatically navigate between pages, access the current route, and handle query parameters. It’s commonly used for route handling and dynamic routing.\r\n import { useRouter } from 'next/router';\r\nconst router = useRouter();\r\nconst { id } = router.query;\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 10,
    topic: "nextjs",
    question: "How does Next.js handle routing?\r",
    answer:
      " Next.js uses a file-based routing system. The files inside the pages directory automatically correspond to routes in your application. For example, pages/index.js is the home page (/), and pages/about.js is accessible at /about. Dynamic routes are created by adding a file with square brackets, e.g., pages/[id].js",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 11,
    topic: "nextjs",
    question: "What is the Link component in Next.js?\r",
    answer:
      "The Link component is used for client-side navigation between pages in a Next.js app. It prefetches the linked page for faster navigation and avoids full-page reloads.\r\n import Link from 'next/link';\r\n<Link href=\"/about\">Go to About</Link>\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 12,
    topic: "nextjs",
    question: "How do you optimize images in Next.js?\r",
    answer:
      'Next.js provides an Image component, which automatically optimizes images by serving them in the most suitable format, resizing them, and applying lazy loading. This improves performance and load times.\r\n import Image from \'next/image\';\r\n<Image src="/path/to/image.jpg" alt="Image" width={500} height={300} />\r',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 13,
    topic: "nextjs",
    question: "What is API routing in Next.js?\r\n",
    answer:
      "API routes in Next.js allow you to build backend functionality directly within your Next.js app. Files in the pages/api directory are treated as API endpoints. For example, pages/api/user.js can be accessed at /api/user.\r\n // pages/api/user.js\r\nexport default function handler(req, res) {\r\n  res.status(200).json({ name: 'John Doe' });\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 14,
    topic: "nextjs",
    question: "What is Incremental Static Regeneration (ISR) in Next.js?\r",
    answer:
      " ISR allows you to update static content after the site has been built without rebuilding the entire site. You can specify a revalidate time in getStaticProps to regenerate static pages at a specific interval.\r\n export async function getStaticProps() {\r\n  const data = await fetchData();\r\n  return {\r\n    props: { data },\r\n    revalidate: 10, // Revalidate every 10 seconds\r\n  };\r\n}\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 15,
    topic: "nextjs",
    question: "What is the purpose of the _document.js file in Next.js?",
    answer:
      "_document.js is used to customize the HTML document structure. It allows you to modify the <html>, <head>, and <body> tags. This file is only rendered on the server side, and it’s often used for adding custom fonts, meta tags, and other global elements.\r\n // pages/_document.js\r\nimport Document, { Html, Head, Main, NextScript } from 'next/document';\r\nclass MyDocument extends Document {\r\n  render() {\r\n    return (\r\n      <Html>\r\n        <Head />\r\n        <body>\r\n          <Main />\r\n          <NextScript />\r\n        </body>\r\n      </Html>\r\n    );\r\n  }\r\n}\r\nexport default MyDocument;\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 16,
    topic: "nextjs",
    question: "How does Next.js handle environment variables?",
    answer:
      "Next.js supports environment variables that can be defined in .env.local, .env.development, .env.production, etc. You can access them via process.env.VARIABLE_NAME. Only variables prefixed with NEXT_PUBLIC_ are exposed to the browser.\r\n process.env.NEXT_PUBLIC_API_URL",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 17,
    topic: "nextjs",
    question:
      "What is getInitialProps and how is it different from getStaticProps and getServerSideProps?",
    answer:
      " getInitialProps is used for fetching data on the server before rendering the page, but it is not recommended in Next.js for SSR as it disables automatic static optimization. getStaticProps is recommended for static site generation, and getServerSideProps is for server-side rendering on every request",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 18,
    topic: "nextjs",
    question: "What is the App component in Next.js?",
    answer:
      "The App component (defined in pages/_app.js) is used to initialize pages. It can be used to set global styles, manage global state, or wrap pages with layout components. It is the top-level component that wraps all other pages",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 19,
    topic: "nextjs",
    question: "How does Next.js optimize performance?",
    answer:
      "Next.js automatically optimizes performance through:\r\nCode Splitting: Automatically splits code at the page level.\r\nImage Optimization: Using the Image component for automatic resizing and lazy loading.\r\nPrefetching: Automatically prefetching links for faster navigation.\r\nAutomatic Static Optimization: Automatically renders pages statically when possible.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 20,
    topic: "nextjs",
    question:
      "What are the advantages of using Next.js over a regular React app?",
    answer:
      "The main advantages include:\r\nServer-side rendering (SSR) and static site generation (SSG)\r\nBuilt-in API routes for backend functionality\r\nFile-based routing system\r\nAutomatic code splitting and optimization\r\nSupport for Incremental Static Regeneration (ISR)\r\nImage optimization and other performance improvements\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 21,
    topic: "nextjs",
    question: "How does Next.js handle 404 errors?",
    answer:
      " In Next.js, you can create a custom 404 page by adding a 404.js file in the pages directory. This page will automatically be displayed when a user navigates to a route that does not exist. The page can be customized as needed.\r\n // pages/404.js\r\nexport default function Custom404() {\r\n  return <h1>404 - Page Not Found</h1>;\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 22,
    topic: "nextjs",
    question: "What is the next.config.js file used for?",
    answer:
      "next.config.js is a configuration file where you can customize the behavior of your Next.js application. It allows you to modify Webpack configurations, enable features like environment variable support, and set custom settings for things like internationalization (i18n) or redirects",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 23,
    topic: "nextjs",
    question: "How do you handle redirects in Next.js?",
    answer:
      "Redirects in Next.js can be handled in next.config.js by defining a redirects array. This array contains objects with source, destination, and permanent (boolean) properties for each redirect.\r\n // next.config.js\r\nmodule.exports = {\r\n  async redirects() {\r\n    return [\r\n      {\r\n        source: '/old-url',\r\n        destination: '/new-url',\r\n        permanent: true,\r\n      },\r\n    ];\r\n  },\r\n};\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 24,
    topic: "nextjs",
    question: "What are Dynamic Imports in Next.js?",
    answer:
      "Dynamic imports allow you to import a module or component only when it’s needed, helping to reduce the initial bundle size. In Next.js, dynamic imports can be used with the next/dynamic module, which also supports server-side rendering.\r\n import dynamic from 'next/dynamic';\r\nconst DynamicComponent = dynamic(() => import('../components/SomeComponent'));\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 25,
    topic: "nextjs",
    question: "What is the purpose of the Head component in Next.js?",
    answer:
      'The Head component is used to modify the <head> section of the HTML document. You can add or update meta tags, titles, links, and other elements that should appear in the head of the page.\r\n import Head from \'next/head\';\r\nconst Page = () => (\r\n  <>\r\n    <Head>\r\n      <title>My Page</title>\r\n      <meta name="description" content="My awesome page description" />\r\n    </Head>\r\n    <h1>Welcome to My Page</h1>\r\n  </>\r\n);\r\n\r\n\r\n25. What is next export in Next.js?\r\nAnswer: next export is a command used to export a Next.js application as a static site. This command generates HTML files for all pages in the project and allows it to be hosted anywhere static files are supported (e.g., GitHub Pages, Netlify, etc.).\r\n next export\r\n\r\n\r\n26. What is the role of next/head in Next.js?\r\nAnswer: The next/head component allows you to modify the head section of the document for individual pages. It is useful for adding dynamic metadata such as page titles, descriptions, and OpenGraph tags.\r\n import Head from \'next/head\';\r\nconst Page = () => (\r\n  <Head>\r\n    <title>Page Title</title>\r\n    <meta name="description" content="Page Description" />\r\n  </Head>\r\n);\r',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 26,
    topic: "nextjs",
    question: "What is middleware in Next.js?",
    answer:
      "Middleware in Next.js are functions that can run before the request reaches the server-side logic, allowing you to modify the request or response. They can be used for tasks like authentication, redirects, logging, etc. Middleware is typically used with API routes.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 27,
    topic: "nextjs",
    question: "How do you use custom error pages in Next.js?",
    answer:
      " In Next.js, you can create custom error pages by defining 404.js for handling not found errors and 500.js for handling server errors. These files will be automatically rendered for respective error scenarios.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 28,
    topic: "nextjs",
    question:
      "What is the difference between useEffect and getInitialProps in Next.js?",
    answer:
      "useEffect is a React hook used for handling side effects in a functional component after rendering. It works only on the client-side. On the other hand, getInitialProps is used for fetching data on both the server-side and client-side, but it is less optimized and disables automatic static optimization.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 29,
    topic: "nextjs",
    question: "What is the purpose of export default in Next.js pages?\r",
    answer:
      "The export default syntax is used to export a React component as the default export from the page file in Next.js. This is how Next.js recognizes the component and uses it for rendering the page.\r\n export default function HomePage() {\r\n  return <h1>Welcome to the Home Page</h1>;\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 30,
    topic: "nextjs",
    question: "What is the App component in Next.js?",
    answer:
      "The App component is used in the pages/_app.js file. It serves as the wrapper for all the pages in a Next.js application. You can use it to add global styles, maintain global state, and wrap pages with layout components.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 31,
    topic: "nextjs",
    question: "How do you handle authentication in Next.js?",
    answer:
      "Authentication in Next.js can be handled by storing JWT tokens or session data in cookies or localStorage. You can use server-side logic (like in getServerSideProps) to check authentication status or implement a custom API route to validate the token.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 32,
    topic: "nextjs",
    question: "How do you enable CSS Modules in Next.js?\r\n",
    answer:
      "CSS Modules are enabled by default in Next.js. You simply need to import the .module.css file inside your components, and Next.js will scope the styles locally to that component.\r\n import styles from './Button.module.css';\r\nconst Button = () => <button className={styles.btn}>Click Me</button>;\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 33,
    topic: "nextjs",
    question: "How can you handle global state in Next.js?\r",
    answer:
      "Global state can be managed in Next.js using React's Context API, Redux, or third-party state management libraries. Next.js also allows integrating server-side state (using getServerSideProps) and client-side state together for a unified state management solution.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 34,
    topic: "nextjs",
    question:
      "What are the benefits of using Next.js for SEO (Search Engine Optimization)?\r",
    answer:
      " Next.js provides several features that help with SEO:\r\nServer-Side Rendering (SSR): Content is served from the server, making it crawlable by search engines.\r\nStatic Site Generation (SSG): Pre-rendering pages at build time ensures fast page load times.\r\nOptimized <head> management: Through the next/head component, you can manage metadata like title and description dynamically for each page.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 35,
    topic: "nextjs",
    question: "How do you handle dynamic routes in Next.js?",
    answer:
      "Dynamic routes in Next.js are created by using file names with square brackets. For example, pages/[id].js will match any route like /1, /2, etc., where id is a dynamic parameter.\r\n // pages/[id].js\r\nexport default function Page({ id }) {\r\n  return <h1>Dynamic Route: {id}</h1>;\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 36,
    topic: "nextjs",
    question:
      "What are the advantages of using Next.js over traditional React apps?",
    answer:
      " The key advantages of using Next.js over a traditional React app include:\r\nSSR & SSG for improved SEO and faster page loads.\r\nFile-based routing for easy navigation setup.\r\nAutomatic code splitting to optimize the app’s performance.\r\nBuilt-in API routes to handle backend functionality.\r\nOptimized image handling for better performance.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 37,
    topic: "nextjs",
    question: "Custom Webpack Configuration\r",
    answer:
      " Next.js comes with its own Webpack configuration, but you can customize it using the next.config.js file. This allows you to adjust the build process, add custom loaders or plugins, and extend Webpack’s capabilities to suit your needs.\r\n // next.config.js\r\nmodule.exports = {\r\n  webpack: (config, { isServer }) => {\r\n    // Modify webpack config\r\n    return config;\r\n  },\r\n};\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 38,
    topic: "nextjs",
    question: " Incremental Static Regeneration (ISR)",
    answer:
      "ISR allows you to update static content after deployment without rebuilding the entire app. With ISR, you can set a revalidation period (time-to-live) after which Next.js will regenerate the static page in the background on the next request.\r\n export async function getStaticProps() {\r\n  return {\r\n    props: { data },\r\n    revalidate: 60, // Regenerate the page every 60 seconds\r\n  };\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 39,
    topic: "nextjs",
    question: "Server-side Authentication\r",
    answer:
      " Server-side authentication with Next.js can be done using middleware or API routes. You can authenticate users on the server side using getServerSideProps and send tokens in the HTTP request headers for validation. This is useful for rendering authenticated content.\r\n export async function getServerSideProps(context) {\r\n  const res = await fetch('https://api.example.com/protected', {\r\n    headers: {\r\n      Authorization: Bearer ${context.req.cookies.token},\r\n    },\r\n  });\r\n  const data = await res.json();\r\n  return { props: { data } };\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 40,
    topic: "nextjs",
    question: "Advanced API Routes\r",
    answer:
      "In Next.js, API routes are used to build serverless functions. You can create complex APIs with them, handle methods like GET, POST, PUT, DELETE, and even integrate with databases or external services.\r\n // pages/api/hello.js\r\nexport default function handler(req, res) {\r\n  if (req.method === 'GET') {\r\n    res.status(200).json({ message: 'Hello World' });\r\n  } else {\r\n    res.status(405).end();\r\n  }\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 41,
    topic: "nextjs",
    question: "Custom Server in Next.js\r\n",
    answer:
      "Next.js supports custom servers using frameworks like Express.js or Fastify. This is useful when you need more control over your server-side logic or want to integrate additional features such as custom routing or handling websockets.\r\n const express = require('express');\r\nconst next = require('next');\r\nconst app = next({ dev });\r\nconst handle = app.getRequestHandler();\r\n\r\napp.prepare().then(() => {\r\n  express().get('', (req, res) => {\r\n    return handle(req, res);\r\n  }).listen(3000);\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 42,
    topic: "nextjs",
    question: "Multi-Zone Deployment\r",
    answer:
      "Multi-zone deployment in Next.js allows you to deploy the same Next.js app in multiple regions to optimize latency. You can deploy your application across multiple regions using cloud platforms like Vercel, which supports this feature out of the box.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 43,
    topic: "nextjs",
    question: "Edge Functions",
    answer:
      "Edge functions are used to run JavaScript code close to the user, at the edge, rather than in a centralized server. Next.js supports Edge functions for serverless deployments, which can be used to improve performance by reducing latency.\r\n export default async function handler(req) {\r\n  return new Response('Hello from the edge!', { status: 200 });\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 44,
    topic: "nextjs",
    question: "Optimizing Performance with Web Vitals",
    answer:
      "Web Vitals are a set of metrics that measure the user experience on your website. Next.js integrates with the web-vitals library to measure and report key performance metrics such as LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift). This data can be sent to analytics services for further analysis.\r\n import { reportWebVitals } from 'next/web-vitals';\r\n\r\nexport function reportWebVitals(metric) {\r\n  console.log(metric);\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 45,
    topic: "nextjs",
    question: "Automatic Static Optimization",
    answer:
      "Next.js automatically optimizes pages by statically generating them when possible, and it only falls back to server-side rendering if necessary. This improves performance by reducing the number of server-side requests and providing pre-rendered HTML to the client.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 46,
    topic: "nextjs",
    question: "Custom Error Handling with Error Boundaries",
    answer:
      " In Next.js, you can create error boundaries to catch JavaScript errors and display fallback UIs, especially useful for handling errors in SSR or SSG pages. Although Next.js has built-in error handling, creating a custom error boundary can provide better control over error states.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 47,
    topic: "nextjs",
    question: "Server-Side Data Caching\r\n",
    answer:
      "In Next.js, caching server-side data (e.g., API responses, database queries) can be done using libraries like swr or caching headers. This helps reduce server load and speeds up response times by serving previously cached data instead of re-fetching it.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 48,
    topic: "nextjs",
    question: " Localization (i18n) in Next.js",
    answer:
      "Next.js supports internationalization (i18n) out of the box. You can configure your app to serve content in multiple languages by modifying the next.config.js file and using a package like next-i18next for translation management.\r\n module.exports = {\r\n  i18n: {\r\n    locales: ['en', 'fr', 'de'],\r\n    defaultLocale: 'en',\r\n  },\r\n};\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 49,
    topic: "nextjs",
    question: "React Suspense and Concurrent Rendering with Next.js\r\n",
    answer:
      "Next.js supports React Suspense and Concurrent Rendering, which allow you to load components and data asynchronously, improving the user experience by displaying loading states while waiting for the data or components to be ready.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 50,
    topic: "nextjs",
    question: "Analytics with Next.js\r",
    answer:
      " You can integrate analytics tools like Google Analytics, Segment, or custom metrics directly in Next.js. With built-in hooks like useEffect or getServerSideProps, you can send analytics data when pages load or during user interactions.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 51,
    topic: "nextjs",
    question: "Customizing the Build Process with Next.js\r\n",
    answer:
      "You can customize the build process of Next.js using custom Webpack configurations, defining specific build scripts, or adjusting settings in the next.config.js file to optimize for your particular application needs.\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 52,
    topic: "nextjs",
    question: "What is next.config.js and why is it important?",
    answer:
      "next.config.js is a server-side configuration file for Next.js applications. It's important because it:\r\n- Allows customization of Next.js behavior and features\r\n- Controls build-time and runtime configuration\r\n- Enables module path aliases, environment variables, and webpack configurations\r\n- Manages deployment and production settings\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 53,
    topic: "nextjs",
    question: " What's the difference between next.config.js and .env files?",
    answer:
      "- next.config.js is for build-time and runtime configuration of the Next.js framework itself\r\n- .env files are for environment variables and sensitive information\r\n- next.config.js can access environment variables but shouldn't store sensitive data\r\n- .env files are processed before next.config.js is executed\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 54,
    topic: "nextjs",
    question:
      " How would you implement image optimization for external domains?",
    answer:
      "To implement image optimization for external domains in Next.js, you can configure the next.config.js file using either the remotePatterns property or, for older versions, the domains propertyTo implement image optimization for external domains in Next.js, you can configure the next.config.js file using either the remotePatterns property or, for older versions, the domains property\nMethod 1: Using remotePatterns\nThe remotePatterns property allows you to specify the protocols, hostnames, ports, and pathnames for external images.This method offers more control and security\n\nmodule.exports = {\n  images: {\n    remotePatterns: [\n      {\n        protocol: 'https',\n        hostname: 'example.com',\n        port: '',\n        pathname: '/account123/**',\n        search: '',\n      },\n    ],\n  },\n};\n\nMethod 2: Using domains\nThe domains property allows you to provide a list of allowed hostnames for external images. However, this method does not support wildcard pattern matching and cannot restrict protocol, port, or pathname.\nmodule.exports = {\n  images: {\n    domains: ['example.com'],\n  },\n};\nAdditional Options\nUsing a proxy: You can use a proxy like Cloudinary or Imgix and allow their domains in the next.config.js file. Then, use their fetch features to load external images4.\nUsing a loader: You can configure a loader to use a cloud provider for image optimization instead of Next.js' built-in Image Optimization API\nmodule.exports = {\n  images: {\n    loader: \"cloudinary\",\n    path: \"https://res.cloudinary.com/your-unique-account-id/\",\n  },\n};\n\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 55,
    topic: "nextjs",
    question: "\r\nHow do you configure custom redirects and rewrites?",
    answer:
      "To configure custom redirects and rewrites in Next.js, you can use the next.config.js file. Next.js provides several ways to handle redirects, including using the redirects key in next.config.js, the redirect function, and the useRouter hook.\n1. Using the redirects key in next.config.js:\nThe redirects key in next.config.js is an async function that returns an array of objects for configuring redirects.\nEach object in the array defines a redirect rule with source, destination, and permanent properties.\nsource is the incoming request path pattern.\ndestination is the path you want to route to.\npermanent indicates whether the redirect is permanent (308 status code) or temporary (307 status code).\nYou can match URL paths using wildcard patterns or regular expressions.\nIt's also possible to configure redirects based on header, cookie, or query values.\nmodule.exports = {\n  async redirects() {\n    return [\n      {\n        source: '/about',\n        destination: '/',\n        permanent: true,\n      },\n    ];\n  },\n};\n2.Using the redirect function:\r\nThe redirect function allows you to redirect the user to another URL.\r\nIt can be used in Server Components, Route Handlers, and Server Actions.\r\nIt is often used after a mutation or event\nexport async function getServerSideProps(context) {\r\n  const { userRole } = context.req;\r\n  if (userRole !== \"admin\") {\r\n    return {\r\n      redirect: {\r\n        destination: \"/unauthorized\",\r\n        permanent: false,\r\n      },\r\n    };\r\n  }\r\n\r\n  return {\r\n    props: {},\r\n  };\r\n}\r\n3. Client-side redirects:\nFor client-side redirects, you can use the useRouter hook and the router.push method\nimport { useRouter } from 'next/navigation';\r\n\r\nfunction MyComponent() {\r\n  const router = useRouter();\r\n\r\n  const handleClick = () => {\r\n    router.push('/new-page');\r\n  };\r\n\r\n  return (\r\n    <button onClick={handleClick}>Go to new page</button>\r\n  );\r\n}\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
];
