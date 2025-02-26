export const nodeJS = [
    {
        "id": 1,
        "topic": "nodeJs",
        "question": "What is Node.JS?",
        "answer": "-Node.JS is an open-source and <mark>cross-platform runtime environment</mark> built on Chrome’s V8 JavaScript engine for <mark>executing JavaScript code outside of a browser</mark>. \n-It provides an <mark>event-driven, non-blocking (asynchronous) I/O</mark>, and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.",
        "tags": [
            "definition"
        ],
        "keyFeatures": [],
        "actionWords": [
            "cross-platform runtime environment",
            "event-driven",
            "non-blocking (asynchronous) I/O",
            "executes JS outside of browser"
        ],
        "codeExample": ""
    },
    {
        "id": 2,
        "topic": "nodeJs",
        "question": "What is the difference between Node.JS and JavaScript?",
        "answer": "JavaScript is a scripting language whereas Node.JS is an engine that provides the runtime environment to run JavaScript code.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [
            "scripting language",
            " engine-runtime environment"
        ],
        "codeExample": ""
    },
    {
        "id": 3,
        "topic": "nodeJs",
        "question": "Is Node.JS single-threaded?",
        "answer": "Yes, Node.JS is single-threaded by default. However, it utilizes event-driven architecture and non-blocking I/O operations to handle multiple concurrent requests efficiently, enabling scalability and high performance in applications.",
        "tags": [
            "basics"
        ],
        "keyFeatures": [],
        "actionWords": ["single-threaded by default",],
        "codeExample": ""
    },
    {
        "id": 4,
        "topic": "nodeJs",
        "question": "What kind of API function is supported by Node.JS?",
        "answer": "There are two types of API functions supported by Node.JS:\n\n1.<i>Synchronous:</i> These API functions are used for blocking code.\n2.<i>Asynchronous:</i> These API functions are used for non-blocking code.",
        "tags": [
            "basics"
        ],
        "keyFeatures": [],
        "actionWords": [
            "synchronous",
            " asynchronous"
        ],
        "codeExample": ""
    },
    {
        "id": 5,
        "topic": "nodeJs",
        "question": "What is the difference between Synchronous and Asynchronous functions?",
        "answer": "The difference between synchronous and asynchronous functions lies in how tasks are executed and managed, particularly with respect to blocking and non-blocking behavior.\n\n       Synchronous Functions:\n\n - Synchronous functions   <mark>execute tasks sequentially, one after the other</mark>. Each task must complete before the next one begins. This means the program <mark>execution is blocked during the execution of a synchronous function</mark>.\n\n    ⭐Key Characteristics:\n-   Blocking  : The execution of the program is blocked until the synchronous function completes.\n-   Sequential Execution  : Tasks are executed in a specific order, one at a time.\n-   Simpler Flow  : Easier to understand and reason about because operations happen in a straightforward, linear sequence.\n-   Use Case  : Suitable for tasks where waiting for a previous task to complete is acceptable, such as simple scripts or tasks that do not involve I/O operations.\n\n       Asynchronous Functions:\n\n  -Asynchronous functions   <mark>allow tasks to run concurrently</mark>. \n-The program can <mark>initiate a task and then continue executing other tasks without waiting for the initiated task to complete</mark>. When the asynchronous task finishes, it can trigger a callback function, return a promise, or emit an event to handle the result.\n\n         ⭐Key Characteristics:\n-   Non-blocking  : The program does not wait for the asynchronous function to complete and can continue executing other tasks.\n-   Concurrent Execution  : Multiple tasks can be in progress simultaneously.\n-   Complex Flow  : Requires handling of callbacks, promises, or async/await, making the code potentially more complex but also more efficient.\n-   Use Case  : Ideal for I/O operations, network requests, and handling multiple concurrent tasks where blocking would be inefficient.\n\n       ⚖️Comparison \n\n1.   Blocking vs. Non-blocking  :\n   -   Synchronous  : Blocks the execution until the task is complete.\n   -   Asynchronous  : Does not block execution; other tasks can run concurrently.\n\n2.   Execution Flow  :\n   -   Synchronous  : Tasks are executed one after another in a linear, predictable sequence.\n   -   Asynchronous  : Tasks can start and complete at different times; the flow is managed via callbacks, promises, or async/await.\n\n3.   Performance  :\n   -   Synchronous  : Can lead to <mark>performance bottlenecks</mark>, especially with tasks involving I/O operations (e.g., reading files, network requests).\n   -   Asynchronous  : <mark>Optimizes performance</mark> by allowing multiple tasks to run concurrently, making it more efficient for I/O-bound and high-latency operations.\n\n4.   Code Complexity  :\n   -   Synchronous  : Simpler and easier to understand due to linear execution.\n   -   Asynchronous  : More complex due to the need to handle concurrency, but offers greater flexibility and efficiency.\n\n       📝Summary:\n\n-   Synchronous functions   are blocking and execute tasks sequentially, which is simple but can be inefficient for I/O operations.\n-   Asynchronous functions   are non-blocking and mark, improving performance and efficiency, especially for I/O-bound tasks, but requiring more complex code to manage the concurrency. \n\nUnderstanding the difference between synchronous and asynchronous functions is crucial for developing efficient and responsive applications, particularly in environments like Node.JS, where non-blocking I/O operations are a fundamental feature.",
        "tags": [
            "sync vs async"
        ],
        "keyFeatures": [],
        "actionWords": [
            "execute tasks sequentially",
            "execution is blocked during the execution of a synchronous function",
            "allow tasks to run concurrently",
            ""
        ],
        "codeExample": "const fs = require('fs');\n\ntry {\n  const data = fs.readFileSync('/path/to/file.txt', 'utf8');\n  console.log(data); // The program blocks here until the file is read\n} catch (err) {\n  console.error(err);\n}\n\nconsole.log('This message is logged after the file is read'); // Executed after file read\n\n                                                \nconst fs = require('fs');\n\nfs.readFile('/path/to/file.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data); // The callback function is executed once the file is read\n});\n\nconsole.log('This message is logged while the file is being read'); // Executed immediately, without waiting for file read\n"
    },
    {
        "id": 6,
        "topic": "nodeJs",
        "question": "What is a module in Node.JS?",
        "answer": "-In Node.JS Application, a Module can be considered as <mark>a block of code that provide a simple or complex functionality that can communicate with external application</mark>. \n-Modules can be organized in a single file or a collection of multiple files/folders. \n-Modules are <mark>useful because of their reusability and ability to reduce the complexity of code into smaller pieces</mark>. \n-Some examples of modules are <i> http, fs, os, path,</i> etc.",
        "tags": [
            "module"
        ],
        "keyFeatures": [],
        "actionWords": [
            "a block of code that communicate with external app",
            "reusability and ability to reduce the complexity"
        ],
        "codeExample": "// math.\r\nconst add = (a, b) => a + b;\r\nconst subtract = (a, b) => a - b;\r\n\r\nmodule.exports = { add, subtract };\n                                  \n\r\nconst { add, subtract } = require('./math');\n\nconsole.log(add(5, 3)); // Output: 8\nconsole.log(subtract(5, 3)); // Output: 2"
    },
    {
        "id": 7,
        "topic": "nodeJs",
        "question": "What is npm and its advantages?",
        "answer": "-npm (Node.JS Package Manager) is the <mark>default package manager for Node.JS</mark>.\n- It allows developers to discover, share, and reuse code packages easily. \n-Its advantages include <i>dependency management, version control, centralized repository, and seamless integration</i> with Node.JS projects.",
        "tags": [
            "npm"
        ],
        "keyFeatures": [],
        "actionWords": [
            "defaualt pkg manager for node",
            "ependency management",
            " version control",
            " centralized repository"
        ],
        "codeExample": ""
    },
    {
        "id": 8,
        "topic": "nodeJs",
        "question": "What is middleware?",
        "answer": "👉Middleware refers to <mark>functions that have access to the request object ( \"req \"), the response object ( \"res \"), and the next middleware function</mark> in the application's request-response cycle.\n-Middleware functions can perform a variety of tasks, including modifying the request and response objects, ending the request-response cycle, or calling the next middleware function in the stack.\n -Middleware <mark> gets executed after the server receives the request and before the controller sends the response</mark>.\n\n       ⭐Key Characteristics of Middleware:\n\n1.   <i>Access to Request and Response </i> : Middleware functions can read and modify the  \"req \" and  \"res \" objects.\n2.   <i>Sequential Execution</i>  : Middleware functions are executed in sequence, one after the other.\n3.  <i> Next Function </i> : Middleware functions can call the  \"next() \" function to pass control to the next middleware in the stack.\n4.   <i>Multiple Purposes</i>  : Middleware can be used for various purposes such as logging, authentication, error handling, parsing request bodies, and more.\n\n       ⭐Types of Middleware:\n\n1.   Application-level Middleware  : Bound to an instance of the Express app using  \"app.use() \" or specific HTTP methods like  \"app.get() \",  \"app.post() \", etc.\n2.   Router-level Middleware  : Bound to an instance of an Express router using  \"router.use() \" or specific router methods.\n3.   Error-handling Middleware  : Specifically designed to handle errors. These functions take four arguments:  \"err \",  \"req \",  \"res \", and  \"next \".\n4.   Built-in Middleware  : Provided by Express., such as  \"express.on() \" for parsing JSON request bodies.\n5.   Third-party Middleware  : Middleware provided by third-party libraries, such as  \"morgan \" for logging,  \"body-parser \" for parsing request bodies, etc.\n\n       How Middleware Works:\n\n1.   Request-Response Cycle  : When a request is made to the server, it passes through the middleware functions in the order they are defined.\n2.   Modifications  : Middleware can make changes to the  \"req \" and  \"res \" objects, perform operations such as logging, authentication checks, or modify the response data.\n3.   Control Flow  : Middleware functions use  \"next() \" to pass control to the next function. If  \"next() \" is not called, the request will be left hanging.\n\n       📝Summary:\n\n-Middleware in Node.JS, particularly with Express., is a powerful concept that allows for modular and reusable code. Middleware functions can perform a wide range of tasks such as logging, parsing, authentication, and error handling, significantly enhancing the capabilities and flexibility of web applications. Understanding and effectively using middleware is essential for building robust and scalable Express. applications.",
        "tags": [
            "middleware"
        ],
        "keyFeatures": [],
        "actionWords": [
            "access to req/res object & next middleware",
            "\ngets executed after the server receives the request and before the controller sends the response"
        ],
        "codeExample": "const express = require('express');\nconst app = express();\n\n// Middleware function to log request details\napp.use((req, res, next) => {\n  console.log( \"${req.method} ${req.url} \");\n  next(); // Pass control to the next middleware function\n});\n\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});\n// Error-handling middleware\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});\n\n"
    },
    {
        "id": 9,
        "topic": "nodeJs",
        "question": "How does Node.JS handle concurrency even after being single-threaded?",
        "answer": "-Node.JS handles concurrency using an event-driven, non-blocking I/O model, despite being single-threaded. \n-This architecture allows Node.JS to manage multiple operations simultaneously without the need for multiple threads. \n\n     A.  Event Loop:\n-The event loop is the core mechanism that enables Node.JS to perform non-blocking I/O operations. \n-It allows Node.JS to handle multiple tasks concurrently by offloading operations to the system kernel whenever possible.\n\n👉How the Event Loop Works:\n\n1.   <i>Event Queue  :</i> Node.JS maintains an event queue where it places <mark>callbacks and event handlers</mark> for various I/O operations (e.g., file reading, network requests).\n2.  <i> Single Thread  :</i> Node.JS operates on a single thread for executing JavaScript code. This thread processes events in the event queue.\n3.   <i>Non-blocking I/O  :</i> When a non-blocking operation is initiated (e.g., reading a file), Node.JS offloads the task to the system kernel and continues executing other code. Once the operation completes, the kernel notifies Node.JS, and the corresponding callback is added to the event queue.\n4.   <i>Handling Events  :</i> The event loop continuously checks the event queue. When the event loop detects that there are callbacks or event handlers in the queue, it executes them one by one.\n\n  B. Asynchronous APIs:\n-Node.JS provides asynchronous APIs for I/O operations, which do not block the execution of the program. These APIs typically use callbacks, promises, or async/await to handle the completion of tasks.\n\n-  <i> Callbacks</i> are the Functions passed as arguments to asynchronous functions, invoked when the task is complete.\n-   <i>Promises</i> is an Objects representing the eventual completion (or failure) of an asynchronous operation, allowing chaining of operations.\n-   <i>Async/Await</i> is a  Syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.\n\n  C. Offloading to the System Kernel:\n\n-Modern operating systems provide asynchronous interfaces for I/O operations. Node.JS leverages these capabilities to improve performance.\n\n-   File I/O  : When reading or writing files, Node.JS delegates the task to the kernel. The kernel performs the operation and notifies Node.JS upon completion.\n-   Network I/O  : Similarly, for network requests, Node.JS relies on the kernel to manage the communication and uses event-driven callbacks to handle the responses.\n\n  D.Worker Threads:\n\n-For CPU-intensive tasks, Node.JS can use the  \"worker_threads \" module to create additional threads. These threads can handle tasks concurrently without blocking the main event loop.\n\n-   Worker Threads Is a Separate threads for executing JavaScript code, useful for performing heavy computations in parallel with the main event loop.\n\n       📝Summary:/;\n\nNode. handles concurrency through an event-driven, non-blocking I/O model facilitated by the event loop. By using asynchronous APIs, offloading tasks to the system kernel, and leveraging worker threads for CPU-intensive tasks, Node.JS efficiently manages multiple operations concurrently while operating on a single thread. This design makes Node.JS particularly well-suited for I/O-bound applications like web servers and real-time communication systems.",
        "tags": [
            "concurrency "
        ],
        "keyFeatures": [],
        "actionWords": [
            "using an event-driven model",
            "non-blocking I/O model",
            "Asynchronous APIs",
            " Offloading to the System Kernel",
            "Worker Threads"
        ],
        "codeExample": ""
    },
    {
        "id": 10,
        "topic": "nodeJs",
        "question": "What do you mean by event loop in Node.JS?",
        "answer": "- The event loop is a core mechanism in Node.JS that enables non-blocking I/O operations by handling asynchronous events and executing callback functions.\n- It allows Node.JS to perform tasks like reading files, making network requests, and handling timers concurrently without blocking the main thread. This is crucial for maintaining high performance and scalability, especially for I/O-bound applications.\n\n       🌞Key Concepts of the Event Loop:\n\n1.   Single Thread  : Node.JS operates on a single thread, executing JavaScript code in a single sequence.\n2.   Non-blocking I/O  : The event loop allows Node.JS to offload I/O operations to the system kernel, which can handle multiple operations in the background.\n3.   Callback Queue  : Completed asynchronous operations place their callbacks in a queue, waiting to be executed.\n4.   Phases  : The event loop has multiple phases, each handling different types of callbacks and tasks.\n\n       👉Phases of the Event Loop:\n\n-The event loop processes tasks in a series of phases, each with a specific purpose. Here are the main phases:\n\n1.   <i>Timers Phase</i>  : Executes callbacks scheduled by  \"setTimeout() \" and  \"setInterval() \".\n2.  <i> I/O Callbacks Phase</i>  : Executes almost all callbacks except for timers, close callbacks, and those scheduled by  \"setImmediate() \".\n3.  <i> Idle, Prepare Phase </i> : Internal use only.\n4.   <i>Poll Phase</i>  : Retrieves new I/O events; executes I/O-related callbacks (e.g., reading a file) until the event queue is exhausted or a limit is reached.\n5.   <i>Check Phase</i>  : Executes callbacks scheduled by  \"setImmediate() \".\n6.  <i> Close Callbacks Phase </i> : Executes callbacks related to closed connections, like  \"socket.on('close', ...) \".\n\n👉How the Event Loop Works:\n\n1.   Task Submission  : When an asynchronous operation is initiated (e.g., reading a file, making an HTTP request), Node.JS offloads the task to the system kernel.\n2.   Kernel Notification  : Once the operation completes, the kernel notifies Node.JS, and the associated callback is placed in the callback queue.\n3.   Event Loop Execution  : The event loop picks callbacks from the queue and executes them in the appropriate phase.\n\n       📝Summary:\n\nThe event loop in Node.JS is a fundamental part of its non-blocking I/O model, allowing the execution of asynchronous operations efficiently. By cycling through different phases and executing callbacks, it ensures that Node.JS can handle multiple tasks concurrently on a single thread, making it highly suitable for I/O-bound and real-time applications. Understanding the event loop is crucial for writing performant and scalable Node.JS applicatio",
        "tags": [
            "event-loop"
        ],
        "keyFeatures": [],
        "actionWords": [
            "core-mechanism-enabling non-blocking I/O operations",
            "concurrent handling without blocing main thread",
            " hight performance & scalability"
        ],
        "codeExample": "const fs = require('fs');\n\n// Asynchronous file read\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('File content:', data);\n});\n\n// Timer set with setTimeout\nsetTimeout(() => {\n  console.log('Timeout executed');\n}, 0);\n\n// Immediate execution with setImmediate\nsetImmediate(() => {\n  console.log('Immediate executed');\n});\n\nconsole.log('Script start');\n\n\nExecution Order:\nconsole.log('Script start') is executed immediately.\nfs.readFile initiates an asynchronous file read.\nsetTimeout schedules a callback to run after the timer expires.\nsetImmediate schedules a callback to run in the check phase.\nThe event loop handles the asynchronous file read, placing its callback in the I/O callbacks phase once complete.\nsetTimeout callback is executed in the timers phase.\nsetImmediate callback is executed in the check phase.\nThe file read callback is executed once the file is read and the poll phase allows it.\nOutput : \nScript start\nImmediate executed\nTimeout executed\nFile content: <content of example.txt>\n"
    },
    {
        "id": 11,
        "topic": "nodeJs",
        "question": "What is a Reactor Pattern in Node.JS?",
        "answer": "- The reactor pattern, also known as the event-driven or event loop pattern, is a design pattern commonly used in Node.JS to <mark> handle asynchronous I/O operations efficiently</mark>.\n- In this pattern, the application's <mark>control flow is driven by events or asynchronous callbacks rather than synchronous blocking calls</mark>.",
        "tags": [
            "event-loop"
        ],
        "keyFeatures": [],
        "actionWords": [
            "event-driven or event loop pattern"
        ],
        "codeExample": ""
    },
    {
        "id": 12,
        "topic": "nodeJs",
        "question": "What is event-driven programming in Node.JS?",
        "answer": "- Event-driven programming in Node.JS is a paradigm where the <mark>flow of the program is determined by events that occur asynchronously</mark>.\n- In this model, the program responds to events triggered by user actions, system events, or messages from other parts of the program.\n\n       🌞Key Concepts:\n\n1.   Events  :\n- Events are occurrences that happen asynchronously and can trigger a response in the program.\n- Examples include user interactions (clicks, keystrokes), system events (file read/write, network requests), or custom events raised within the program.\n\n2.   Event Emitters  : \n-Objects that emit events are called event emitters. In Node.JS, many core modules and custom objects are event emitters. \n- For example, the  \"http.Server \" class emits events like 'request' when a request is received.\n\n3.   Event Listeners  : \n-Event listeners are functions that are registered to handle specific events. \n-When an event emitter emits an event, all registered listeners for that event are invoked.\n\n4.   Event Loop  : \n-Node.JS uses an event loop to manage asynchronous events.\n- The event loop continuously listens for events and dispatches them to event listeners.\n\n 👉Benefits of Event-Driven Programming in Node.JS:\n\n1.   <i>Non-Blocking</i>  : Event-driven programming allows Node.JS to handle multiple concurrent tasks without blocking the execution of other code.\n\n2.  <i> Scalability </i> : It enables scalable and efficient handling of I/O-bound operations, making Node.JS suitable for building highly responsive and scalable applications.\n\n3.  <i> Modularity </i> : Event-driven architecture promotes <mark>modularity and decoupling of components  </mark>, making it easier to maintain and extend applications.\n\n4.  <i> Real-Time Communication</i>  : It facilitates real-time communication and updates in applications, such as chat applications or real-time analytics dashboards.\n\n       💡Use Cases:\n\n-   Web Servers  : Node.JS web servers use event-driven programming to handle incoming HTTP requests asynchronously.\n-   I/O Operations  : File system operations, network requests, and database queries in Node.JS are typically event-driven to avoid blocking the event loop.\n-   User Interfaces  : Event-driven programming is common in building interactive user interfaces, where actions like clicks, input, or drag-and-drop trigger events.\n-   Message Queues  : Systems that use message queues for communication between components often rely on event-driven architecture.\n\n       📝Summary:\n\nEvent-driven programming is a fundamental concept in Node.JS, where the program flow is driven by asynchronous events and responses to those events. By leveraging event emitters, listeners, and the event loop, Node.JS applications can efficiently handle I/O operations, scale to handle concurrent requests, and build responsive and real-time applications.",
        "tags": [
            "event-loop"
        ],
        "keyFeatures": [],
        "actionWords": ["flow of the program is determined by events that occur asynchronously.", "promotes modularity and decoupling of components"],
        "codeExample": ""
    },
    {
        "id": 13,
        "topic": "nodeJs",
        "question": "What is control flow in Node.JS?",
        "answer": "- Control flow in Node.JS refers to the <mark>order in which the statements, functions, and operations are executed within an application</mark>, especially when dealing with asynchronous operations.\n- Managing control flow is crucial for ensuring that asynchronous tasks execute in the desired sequence, handling results and errors appropriately.\n\n👉 Key Aspects of Control Flow in Node.JS:\n\n1.   <i>Sequential Execution</i>  : Executing operations one after the other in a specific order.\n2.  <i> Parallel Execution </i> : Running multiple operations simultaneously without waiting for each to finish before starting the next.\n3.   <i>Conditional Execution</i>  : Performing different operations based on certain conditions.\n4. <i>Iteration </i> : Repeating a set of operations multiple times.\n\n👉 Handling Asynchronous Control Flow:\n\n-Node.JS uses several patterns and tools to handle asynchronous control flow effectively, including callbacks, promises, and async/await.\n\n      A. Callbacks:\n\nCallbacks are functions passed as arguments to asynchronous functions. They are invoked once the asynchronous operation completes.\n\n      B.Promises:\n\nPromises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide methods like  \"then() \",  \"catch() \", and  \"finally() \" to handle results and errors.\n\n       C.Async/Await:\n\nAsync/await is syntactic sugar over promises, making asynchronous code look and behave more like synchronous code. It uses the  \"async \" keyword to define an asynchronous function and the  \"await \" keyword to pause execution until a promise is resolved.\n\n       Control Flow Libraries:\n\n-Several libraries help manage control flow in Node.JS applications, particularly for more complex scenarios involving multiple asynchronous operations.\n\n         Example Libraries:\n\n1.   Async.  : Provides functions like  \"series() \",  \"parallel() \", and  \"waterfall() \" to manage asynchronous control flow.\n\n  2.   Promises  : In addition to native promises, libraries like Bluebird offer extended functionality and performance improvements.\n\n3.   Control Flow Patterns  : Using patterns like the Promise chain and async/await to simplify handling multiple asynchronous operations.\n\nWhy Control Flow Matters in Node.JS:\n1.Responsiveness: Non-blocking operations allow Node.JS to handle other tasks while waiting for I/O operations to complete.\n2.Efficiency: The event-driven model helps build applications that can scale by efficiently handling numerous concurrent operations without spawning many threads.\n\n\n       📝Summary:\n\nControl flow in Node.JS is essential for managing the order and timing of asynchronous operations. It ensures that tasks execute in the desired sequence, results are handled correctly, and errors are managed appropriately. By using callbacks, promises, async/await, and control flow libraries, developers can effectively manage complex asynchronous workflows in their Node.JS applications.\n",
        "tags": [
            "control-flow"
        ],
        "keyFeatures": [],
        "actionWords": ["order in which the statements, functions, and operations are executed within an application"],
        "codeExample": "Example Using Callbacks\nConsider this simple example using setTimeout, which simulates an asynchronous operation:\nconsole.log(\"Start\");\r\n\r\nsetTimeout(() => {\r\n  console.log(\"This message is delayed by 1 second\");\r\n}, 1000);\r\n\r\nconsole.log(\"End\");\r\n\n\nExplanation:\n\n1.The program starts by logging \"Start\".\n2.It then sets a timer using setTimeout for 1 second. The provided callback function won't run immediately; it's scheduled to run after the timer expires.\n3.The next line logs \"End\".\n4.After approximately 1 second, the callback from setTimeout is executed, logging \"This message is delayed by 1 second\".\n5.This sequence demonstrates that even though the setTimeout call appears between the two console.log statements, its callback is executed asynchronously, allowing the code following it to run without waiting."
    },
    {
        "id": 14,
        "topic": "nodeJs",
        "question": " What is the order in which control flow statements get executed?",
        "answer": "In Node.JS, the order in which control flow statements get executed, particularly involving asynchronous operations, follows a specific sequence managed by the event loop. \n\n1.   <i>Synchronous Code</i>  : All synchronous statements are executed first, in the order they appear in the code.\n\n2.  <i> Process.nextTick()</i>  : Functions passed to  \"process.nextTick() \" are executed immediately after the current operation completes, before the event loop continues.\n\n3. <i>Microtasks </i> : Promises and other microtasks (like  \"queueMicrotask() \") are executed after the current synchronous code and  \"process.nextTick() \" callbacks, but before the event loop continues to the next phase.\n\n4.  <i> Timers Phase</i>  :  \"setTimeout() \" and  \"setInterval() \" callbacks are executed in this phase, but only if their specified delay has been reached.\n\n5.  <i> I/O Callbacks Phase</i>  : Executes almost all callbacks except for timers, close callbacks, and those scheduled by  \"setImmediate() \".\n\n6. <i>Idle, Prepare Phase</i>  : Internal use only, generally not relevant for user-defined callbacks.\n\n7. <i>Poll Phase</i>  : Retrieves new I/O events; executes I/O-related callbacks (e.g., reading a file) until the event queue is exhausted or a limit is reached.\n\n8.  <i> Check Phase </i> : Executes  \"setImmediate() \" callbacks.\n\n9.  <i> Close Callbacks Phase</i>  : Executes callbacks related to closed connections, like  \"socket.on('close', ...) \".\n\nUnderstanding this order is crucial for writing and debugging asynchronous code in Node.JS, ensuring you can predict and control when various operations will execute.",
        "tags": [
            "control-flow"
        ],
        "keyFeatures": [],
        "actionWords": ["follows a specific sequence managed by the event loop",],
        "codeExample": "Example and Execution Order\n\n\nconst fs = require('fs');\n\n// Asynchronous file read\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('File content:', data);\n});\n\n// Timer set with setTimeout\nsetTimeout(() => {\n  console.log('Timeout executed');\n}, 0);\n\n// Immediate execution with setImmediate\nsetImmediate(() => {\n  console.log('Immediate executed');\n});\n\n// Process.nextTick\nprocess.nextTick(() => {\n  console.log('NextTick executed');\n});\n\n// Promise\nPromise.resolve().then(() => {\n  console.log('Promise resolved');\n});\n\nconsole.log('Script start');\n\n\nDetailed Execution Order:\n\n1.   Synchronous Code  :\n   -  \"console.log('Script start'); \"\n\n   Output:  \"Script start \"\n\n2.   Process.nextTick()  :\n   -  \"process.nextTick(() => console.log('NextTick executed')); \"\n\n   Output:  \"NextTick executed \"\n\n3.   Microtasks   (Promises):\n   -  \"Promise.resolve().then(() => console.log('Promise resolved')); \"\n\n   Output:  \"Promise resolved \"\n\n4.   Timers Phase  :\n   -  \"setTimeout(() => console.log('Timeout executed'), 0); \"\n\n5.   Check Phase  :\n   -  \"setImmediate(() => console.log('Immediate executed')); \"\n\n6.   Poll Phase  :\n   - The callback from  \"fs.readFile \" will be executed once the file read operation completes.\n\nLikely Complete Output:\n\n\nScript start\nNextTick executed\nPromise resolved\nImmediate executed\nTimeout executed\nFile content: <content of example.txt>\n\n\nExplanation:\n\n1.   Synchronous Code  : Runs first in the main execution stack.\n2.   Process.nextTick()  : Executes immediately after the current operation completes but before any other asynchronous operations are processed.\n3.   Microtasks  : Promises and other microtasks are processed next.\n4.   Timers Phase  :  \"setTimeout \" callbacks are executed if their timer has expired.\n5.   Check Phase  :  \"setImmediate \" callbacks are executed.\n6.   Poll Phase  : Handles I/O callbacks, such as the one from  \"fs.readFile \"."
    },
    {
        "id": 15,
        "topic": "nodeJs",
        "question": "What are the main disadvantages of Node.JS?",
        "answer": "While Node.JS has many advantages, such as being highly scalable and efficient for I/O-bound tasks, it also has some disadvantages that are important to consider\n\n1.Single-Threaded Nature :\n\n-  <i> Blocking Operations</i>  : Since Node.JS runs on a single thread, any blocking operation (e.g., complex calculations, synchronous file I/O) can block the entire event loop, leading to performance issues.\n-   Concurrency Challenges  : Handling CPU-intensive tasks efficiently can be challenging, as they can block the event loop and degrade the performance of other tasks.\n\n       2.   Callback Hell : \n\n-   Complexity  : The heavy use of callbacks can lead to deeply nested and hard-to-read code, often referred to as \"callback hell.\"\n-   Maintainability  : Managing complex asynchronous code can be difficult, making the code harder to maintain and debug.\n\n       3.   Lack of Strong Typing:  \n\n-   Error-Prone  : JavaScript is a dynamically typed language, which can lead to type-related errors that are only caught at runtime. This can result in more bugs and less predictable code.\n-   Tooling  : While tools like TypeScript can mitigate this issue, it adds an extra layer of complexity and setup.\n\n       4.   Mature Ecosystem :\n\n-   Maturity of Libraries  : Although the Node.JS ecosystem is vast, not all libraries are equally mature or well-maintained, which can lead to issues when integrating third-party modules.\n-   Security  : A large number of dependencies can introduce security vulnerabilities, as not all modules are rigorously audited for security issues.\n\n       5.   Limited Standard Library :\n\n-   Functionality  : Compared to other ecosystems like Python or Java, Node.JS has a relatively limited standard library, which means developers often need to rely on third-party modules for additional functionality.\n-   Fragmentation  : This reliance can lead to fragmentation, where different projects use different modules for the same functionality, making it harder to standardize and share code.\n\n       6.   Concurrency Model :\n\n-   Event Loop Overhead  : While the event loop model is great for I/O-bound tasks, it can introduce overhead when managing many concurrent connections, leading to increased complexity in handling race conditions and ensuring consistent application state.\n-   Limited Parallelism  : Although Node.JS has worker threads and clustering, achieving true parallelism can be more complex compared to multi-threaded environments.\n\n       7.   Rapidly Changing Environment :\n\n-   Constant Updates  : The Node.JS ecosystem evolves quickly, with frequent updates and changes. Keeping up with the latest practices, updates, and deprecations can be challenging.\n-   Breaking Changes  : Major updates can introduce breaking changes that require significant refactoring of existing codebases to stay up-to-date.\n\n       8.   Error Handling : \n\n-   Exception Handling  : Error handling in asynchronous code can be tricky. Mistakes in managing errors can lead to unhandled exceptions, which can crash the application.\n-   Debugging  : Debugging asynchronous operations can be more challenging compared to synchronous code, as the stack traces can be less informative.\n\n       📝Summary: :\nWhile Node.JS is powerful and well-suited for many types of applications, especially those that are I/O-heavy and require real-time interactions, it has limitations. These include challenges with handling CPU-intensive tasks, the complexity of managing asynchronous code, potential security issues due to a large number of dependencies, and the overhead of the event-driven architecture. Understanding these disadvantages is crucial for making informed decisions about when and how to use Node.JS effectively.",
        "tags": [
            "disadvantage"
        ],
        "keyFeatures": [],
        "actionWords": [
            "Single-Threaded Nature",
            " Callback Hell",
            "Lack of Strong Typing", "Event Loop Overhead"

        ],
        "codeExample": ""
    },
    {
        "id": 16,
        "topic": "nodeJs",
        "question": "What is callback hell?",
        "answer": "-Callback hell, also known as \"pyramid of doom,\" refers to the <mark>situation in asynchronous programming where code becomes difficult to read and maintain due to excessive levels of nested callbacks</mark>.\n- This occurs when multiple asynchronous operations are chained together using callbacks, resulting in deeply nested callback functions.\n\n       Characteristics of Callback Hell:\n\n1.   Nested Callbacks  : Callback functions are nested within other callback functions, resulting in code indentation and complexity.\n  \n2.   Poor Readability  : The code becomes difficult to read and understand, making it hard to follow the flow of execution.\n  \n3.   Error Handling  : Error handling becomes cumbersome, as errors must be handled within each nested callback function, leading to repetitive error-checking code.\n  \n4.   Difficulty in Debugging  : Debugging becomes challenging, as it's hard to trace the flow of execution through multiple levels of nested callbacks.\n  \n5.   Maintainability Issues  : Code maintenance becomes difficult, as making changes or adding new functionality requires navigating through layers of nested callbacks.\n\n       Ways to Avoid Callback Hell:\n\n1.   Use Named Functions  : Define named functions for callback handlers to reduce nesting and improve readability.\n  \n2.   Use Promises  : Use promises or async/await syntax for asynchronous operations, which provide a more structured and readable way to handle asynchronous code.\n  \n3.   Modularization  : Break down complex asynchronous code into smaller, modular functions to reduce nesting and improve maintainability.\n  \n4.   Error Handling Middleware  : Implement error handling middleware or libraries to centralize error handling and reduce repetitive error-checking code.\n\n       📝Summary:\n\nCallback hell refers to the situation in asynchronous programming where code becomes difficult to read and maintain due to excessive levels of nested callbacks. It leads to poor readability, difficulty in debugging, and maintainability issues. To avoid callback hell, it's recommended to use named functions, promises, modularization, and error handling middleware to structure asynchronous code more effectively.",
        "tags": [
            "callback hell"
        ],
        "keyFeatures": [],
        "actionWords": [
            "a situation where code becomes difficult to read & maintain",
            ""
        ],
        "codeExample": " -Example of Callback Hell:\n\n\nasyncOperation1(function(error, result1) {\n  if (error) {\n    handleError(error);\n  } else {\n    asyncOperation2(function(error, result2) {\n      if (error) {\n        handleError(error);\n      } else {\n        asyncOperation3(function(error, result3) {\n          if (error) {\n            handleError(error);\n          } else {\n            // Do something with result1, result2, and result3\n          }\n        });\n      }\n    });\n  }\n});\n\n\n -Example of Refactored Code using Promises:\n\n\nasyncOperation1()\n  .then(result1 => asyncOperation2())\n  .then(result2 => asyncOperation3())\n  .then(result3 => {\n    // Do something with result1, result2, and result3\n  })\n  .catch(error => {\n    handleError(error);\n  });\n\n\n"
    },
    {
        "id": 17,
        "topic": "nodeJs",
        "question": "What are the three methods to avoid callback hell?",
        "answer": "The three methods to avoid callback hell are:\n\n1.Using async/await()\n2.Using promises\n3.Using generators",
        "tags": [
            "callback hell"
        ],
        "keyFeatures": [],
        "actionWords": [
            "async/await ",
            " promises",
            " generator functions"
        ],
        "codeExample": ""
    },
    {
        "id": 18,
        "topic": "nodeJs",
        "question": "What is async / await in node  ?",
        "answer": "In Node.JS,  \"async \" and  \"await \" are modern JavaScript features introduced in ECMAScript 2017 (ES8) that simplify working with asynchronous code. They are syntactic sugar over Promises, providing a more intuitive and readable way to write asynchronous code compared to traditional callback-based approaches or even plain Promises.\n\n       🌞Key Concepts:\n\n1.    \"async \" Function  :\n   - An  \"async \" function is a function that implicitly returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected with that error.\n   \n2.    \"await \" Expression  :\n   - The  \"await \" keyword is used inside an  \"async \" function to pause the execution of the function until the Promise is resolved or rejected. It can only be used within  \"async \" functions and not in regular functions or global scope.\n\n       👉Benefits of  \"async \"/ \"await \":\n\n-   Simplicity and Readability  : Makes asynchronous code look and behave more like synchronous code, making it easier to read and understand.\n-   Error Handling  : Easier error handling with  \"try/catch \" blocks, just like synchronous code.\n-   Flow Control  : Improves the flow of control in asynchronous code, avoiding the need for chaining  \"then \" calls or nesting callbacks.\n\n\n\n\n      \n       📝Summary:\n\n \"async \" and  \"await \" in Node.JS provide a powerful and easy-to-use syntax for working with asynchronous operations. They make asynchronous code appear more synchronous, improving readability and maintainability. By leveraging  \"async \" functions and the  \"await \" keyword, developers can write cleaner and more understandable asynchronous code, effectively handling operations like file I/O, network requests, and more.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [
            "intorduced in ES8 ",
            " are syntactic sugar over promises",
            ""
        ],
        "codeExample": "    -Example:\n\n -Traditional Callback Approach:\n\n\nconst fs = require('fs');\n\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error('Error reading file:', err);\n    return;\n  }\n  console.log('File content:', data);\n});\n\n\n- Promise Approach:\n\n\nconst fs = require('fs').promises;\n\nfs.readFile('example.txt', 'utf8')\n  .then(data => {\n    console.log('File content:', data);\n  })\n  .catch(err => {\n    console.error('Error reading file:', err);\n  });\n\n\n          \"async \"/ \"await \" Approach:\n\n\nconst fs = require('fs').promises;\n\nasync function readFile() {\n  try {\n    const data = await fs.readFile('example.txt', 'utf8');\n    console.log('File content:', data);\n  } catch (err) {\n    console.error('Error reading file:', err);\n  }\n}\n\nreadFile();\n How  \"async \"/ \"await \" Works:\n\n1.   Declaring an  \"async \" Function  :\n   - Use the  \"async \" keyword before a function declaration or expression.\n   - The function automatically returns a Promise.\n\n   \n   async function exampleFunction() {\n     // Function body\n   }\n   \n\n2.   Using  \"await \"  :\n   - Use  \"await \" to pause execution of the  \"async \" function until the awaited Promise is resolved.\n   - The result of the awaited Promise is returned, allowing it to be assigned to a variable.\n\n   \n   async function exampleFunction() {\n     const result = await someAsyncFunction();\n     console.log(result);\n   }\n   \n\n3.   Error Handling  :\n   - Use  \"try/catch \" blocks to handle errors in an  \"async \" function, similar to synchronous code.\n\n   \n   async function exampleFunction() {\n     try {\n       const result = await someAsyncFunction();\n       console.log(result);\n     } catch (error) {\n       console.error('Error:', error);\n     }\n   }\n   \n"
    },
    {
        "id": 19,
        "topic": "nodeJs",
        "question": "What are promises in Node.JS?",
        "answer": "Promises in Node.JS are a way to handle asynchronous operations, providing a cleaner and more structured alternative to using callbacks.\n A promise represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to handle its result or error once it's available.\n\n       Key Features of Promises:\n\n1.   States  : Promises can be in one of three states: pending, fulfilled, or rejected.\n   -   Pending  : Initial state, neither fulfilled nor rejected.\n   -   Fulfilled  : The operation completed successfully.\n   -   Rejected  : The operation failed.\n\n2.   Chaining  : Promises support method chaining, allowing you to attach multiple callbacks to handle the result of an asynchronous operation or transform the result further.\n\n3.   Error Handling  : Promises provide a separate callback, typically accessed through  \".catch() \", to handle errors that occur during the asynchronous operation or any of its chained callbacks.\n\n       Creating a Promise:\n\nYou can create a new promise using the  \"Promise \" constructor, passing a function with two parameters:  \"resolve \" and  \"reject \". Inside this function, you perform the asynchronous operation, and when it completes successfully, you call  \"resolve() \" with the result. If an error occurs, you call  \"reject() \" with the error.\n       Consuming a Promise:\n\nOnce you have a promise, you can use methods like  \".then() \" and  \".catch() \" to handle its result or error.\n\n       Promise Chaining:\n\nPromises can be chained to perform sequential asynchronous operations or to transform the result of one operation before passing it to the next.\n\n       👉Benefits of Promises:\n\n-   Readability  : Promises offer a more readable and maintainable way to handle asynchronous code compared to nested callbacks (callback hell).\n-   Error Handling  : Errors can be easily propagated down the promise chain and caught centrally with  \".catch() \".\n-   Composition  : Promises can be composed and combined to perform complex asynchronous operations with ease.\n\n       📝Summary:\n\nPromises in Node.JS provide a structured way to handle asynchronous operations, offering improved readability, error handling, and composability compared to traditional callback-based approaches. They play a significant role in modern JavaScript development, especially in Node.JS applications where asynchronous operations are common.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 20,
        "topic": "nodeJs",
        "question": "Explain three states of promise , when each is invoked ?",
        "answer": "A JavaScript Promise can be in one of three states throughout its lifecycle:\r\n\r\n1. Pending:  \r\n   This is the initial state when a promise is created. In the pending state, the promise's final value is not yet available because the asynchronous operation is still ongoing. It remains pending until either the operation completes successfully (leading to fulfillment) or encounters an error (leading to rejection).\r\n\r\n2. Fulfilled (Resolved):  \r\n   Once the asynchronous operation completes successfully, the promise transitions to the fulfilled state. At this point, the promise has a resolved value. Any .then() callbacks attached to the promise are executed with that value. This state signifies that the operation was successful and the result is ready.\r\n\r\n3. Rejected:  \r\n   If the asynchronous operation fails, the promise transitions to the rejected state. Here, the promise holds a reason for the failure (typically an error). Any .catch() or rejection handler provided in .then() is executed with this error information.\r\n\r\n\r\n\r\nIn summary, a promise starts as pending, then becomes fulfilled if the operation completes successfully or rejected if an error occurs during the process.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [
            "pending ",
            " resolved/fullfiled",
            " rejected"
        ],
        "codeExample": " When Each State is Invoked\r\n\r\n- Pending:  \r\n  Invoked immediately upon creating a promise. For example:\r\n  \r\n  const myPromise = new Promise((resolve, reject) => {\r\n    // Asynchronous work begins here\r\n  });\r\n  // At this moment, myPromise is pending.\r\n  \r\n\r\n- Fulfilled:  \r\n  Invoked when the asynchronous operation completes successfully and resolve() is called. For example:\r\n  \r\n  const myPromise = new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve(\"Success!\");\r\n    }, 1000);\r\n  });\r\n  // After 1 second, the promise is fulfilled with the value \"Success!\".\r\n  \r\n\r\n- Rejected:  \r\n  Invoked when an error occurs or the asynchronous operation fails and reject() is called. For example:\r\n  \r\n  const myPromise = new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      reject(new Error(\"Something went wrong.\"));\r\n    }, 1000);\r\n  });\r\n  // After 1 second, the promise is rejected with an error.\r\n  "
    },
    {
        "id": 21,
        "topic": "nodeJs",
        "question": "Explain .then() , .catch() & .finally(). And when each is called",
        "answer": "When working with Promises in JavaScript, you have three key methods for handling the result of an asynchronous operation: .then(), .catch(), and .finally(). Each serves a specific purpose in managing the promise lifecycle.\n\n\n\n .then():\n\n- Purpose:  \n  Registers a callback to be executed when the promise is fulfilled (i.e., when the asynchronous operation completes successfully).\n\n- When It’s Called:  \n  It is invoked after the promise is resolved with a value. The callback receives the resolved value as its argument.\n\n-\n\n\n .catch():\n\n- Purpose:  \n  Registers a callback to handle errors when the promise is rejected.\n\n- When It’s Called:  \n  It is invoked if the promise is rejected due to an error or when an exception is thrown during the asynchronous operation.\n\n\n\n .finally():\n\n- Purpose:  \n  Registers a callback that will be executed regardless of the promise's outcome (whether it is fulfilled or rejected). It is useful for performing cleanup or final actions that should happen in either case.\n\n- When It’s Called:  \n  It is invoked after the promise settles—meaning once it has either fulfilled or rejected.\n\n\n\n\n 📝Summary:\n\n- .then(): Executes when the promise is fulfilled.\n- .catch(): Executes when the promise is rejected.\n- .finally(): Executes after the promise settles, no matter if it was fulfilled or rejected.\n\nEach of these methods helps you manage asynchronous code more effectively, making it easier to separate success handling, error handling, and cleanup tasks in your applications.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " -Example of then:\n  \n  new Promise((resolve, reject) => {\n    setTimeout(() => resolve(\"Data loaded\"), 1000);\n  })\n  .then(data => {\n    console.log(data); // \"Data loaded\"\n  });\n  \n  In this example, once the promise resolves after 1 second, the .then() callback logs \"Data loaded\".\n- Example catch:\n  \n  new Promise((resolve, reject) => {\n    setTimeout(() => reject(new Error(\"Failed to load data\")), 1000);\n  })\n  .catch(error => {\n    console.error(error); // Logs the error message\n  });\n  \n  Here, the promise is rejected after 1 second, so the .catch() callback is executed to handle the error.\n\n\n- Example of finally:\n  \n  new Promise((resolve, reject) => {\n    // Simulate an asynchronous operation\n    setTimeout(() => resolve(\"Success\"), 1000);\n    // or setTimeout(() => reject(\"Error\"), 1000);\n  })\n  .then(result => {\n    console.log(result);\n  })\n  .catch(error => {\n    console.error(error);\n  })\n  .finally(() => {\n    console.log(\"Cleanup actions completed\");\n  });\n  \n  In this example, regardless of whether the promise resolves with \"Success\" or is rejected with an \"Error\", the .finally() callback logs \"Cleanup actions completed\".\n"
    },
    {
        "id": 22,
        "topic": "nodeJs",
        "question": " What is package.on in Node.JS?",
        "answer": "package.on in Node.JS is a metadata file that contains project-specific information such as dependencies, scripts, version, author details, and other configuration settings required for managing and building the project.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 23,
        "topic": "nodeJs",
        "question": "What is buffer in Node.JS?",
        "answer": "In Node.JS, a buffer is a temporary storage area in memory used to store raw binary data. It is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffers are useful when working with binary data, such as reading from or writing to files, handling network communication, or manipulating binary streams.\n\n       Key Features of Buffers:\n\n1.   Fixed Size  : Buffers have a fixed size when created, and this size cannot be changed after creation.\n2.   Raw Binary Data  : Buffers store raw binary data, which can be accessed and manipulated at the byte level.\n3.   Fast and Efficient  : Buffers are designed for fast and efficient handling of binary data, making them suitable for I/O operations and network communication.\n\n       Creating Buffers:\n\nThere are several ways to create buffers in Node.JS:\n\n1.   Using Buffer.from()  : Creates a buffer from an array, string, or other buffer-like objects.\n2.   Using Buffer.alloc()  : Creates a buffer of a specified size filled with zeros.\n3.   Using Buffer.allocUnsafe()  : Creates a buffer of a specified size without initializing its contents. This method is faster but potentially unsafe.\n\n\n\n       Accessing Buffer Data:\n\nYou can access and manipulate buffer data using various methods:\n\n-   Indexing  : Access individual bytes of the buffer using array-like indexing.\n-   Slice  : Extract a portion of the buffer using the  \"slice() \" method.\n-   Reading and Writing  : Read from or write to the buffer using methods like  \"readUInt8() \",  \"writeUInt8() \",  \"readUInt16LE() \",  \"writeUInt16LE() \", etc.\n\n       Use Cases for Buffers:\n\n-   File I/O Operations  : Reading from or writing to files involves working with binary data, for which buffers are well-suited.\n-   Network Communication  : Buffers are used to send and receive binary data over network sockets.\n-   Image Processing  : Processing and manipulating images often involve working with binary image data stored in buffers.\n-   Encryption and Hashing  : Cryptographic operations like encryption and hashing require handling binary data, which can be done efficiently using buffers.\n\n       📝Summary:\n\nIn Node.JS, buffers are used to handle raw binary data efficiently, making them suitable for various tasks involving I/O operations, network communication, and manipulation of binary streams. Buffers provide a fast and efficient way to work with binary data, allowing developers to build high-performance applications for tasks such as file I/O, network communication, and cryptography.",
        "tags": [
            "buffer"
        ],
        "keyFeatures": [],
        "actionWords": [
            "a temporary inmemory storage area",
            " stores raw binary data",
            " corresponed to raw memory location",
            ""
        ],
        "codeExample": ""
    },
    {
        "id": 24,
        "topic": "nodeJs",
        "question": "What are streams in Node.JS?",
        "answer": "Streams in Node.JS are powerful objects that let you handle data in chunks, rather than reading or writing the entire dataset at once. This is particularly useful for large files or network operations, as it helps manage memory usage efficiently.\n\n       🌞Key Concepts of Streams:\n\n1.   Flow of Data  : Streams represent a continuous flow of data that can be read from or written to asynchronously.\n\n2.   Chunks  : Data in streams is processed in small, manageable pieces called chunks. This allows for efficient handling of large datasets without needing to load everything into memory at once.\n\n3.   ⭐Types of Streams  : There are several types of streams in Node.JS, including Readable, Writable, Duplex, and Transform streams, each serving different purposes in data processing.\n 1.Readable Streams: Used for reading data from a source (e.g., reading from a file).\n2.Writable Streams: Used for writing data to a destination (e.g., writing to a file).\n3.Duplex Streams: Can both read and write data (e.g., TCP sockets).\n4.Transform Streams: A type of duplex stream that modifies data as it is read and written (e.g., transforming data to uppercase).\n\n4.   Back Pressure  : Streams provide mechanisms for handling back pressure, which occurs when the rate of data consumption is slower than the rate of data production. This ensures that data is processed efficiently without overwhelming system resources.\n\n       ⭐Types of Streams:\n\n1.   Readable Streams  : Used for reading data from a source, such as a file, network socket, or standard input (stdin).\n\n2.   Writable Streams  : Used for writing data to a destination, such as a file, network socket, or standard output (stdout).\n\n3.   Duplex Streams  : Streams that can both read from and write to a source or destination simultaneously. An example is a network socket where data can be both sent and received.\n\n4.   Transform Streams  : A special type of duplex stream that allows data to be modified as it is passed through the stream. It's like a combination of a readable and writable stream, with the ability to transform data in between.\n\n       Example Use Cases for Streams:\n\n-   Reading and Writing Files  : Streams are efficient for reading from or writing to large files without loading the entire file into memory.\n  \n-   Network Communication  : Streams are commonly used for sending and receiving data over network sockets, such as in HTTP requests and responses.\n  \n-   Data Processing  : Streams are useful for processing data in real-time, such as parsing JSON data, compressing/decompressing files, or encrypting/decrypting data.\n\n       👉Benefits of Streams:\n\n-   Efficiency  : Streams enable efficient handling of large datasets by processing data in small, manageable chunks.\n  \n-   Low Memory Footprint  : Since streams process data incrementally, they require a lower memory footprint compared to loading entire datasets into memory.\n  \n-   Scalability  : Streams are scalable and can handle large volumes of data without consuming excessive system resources.\n  \n-   Back Pressure Handling  : Streams provide built-in mechanisms for handling back pressure, ensuring optimal resource utilization and preventing system overload.\n\n       📝Summary:\n\nStreams in Node.JS are a versatile and efficient mechanism for handling data flows. They allow you to read from or write to data sources incrementally, in manageable chunks, making them ideal for working with large datasets, network communication, and real-time data processing. Streams provide a scalable and memory-efficient solution for processing data in Node.JS applications.",
        "tags": [
            "stream"
        ],
        "keyFeatures": [],
        "actionWords": [
            "handles data flow"
        ],
        "codeExample": "-Practical Example: Copying a File Using Streams:\nBelow is an example where we copy the content of one file to another using streams. This approach is memory efficient since the file is processed in chunks rather than loading it completely into memory.\nconst fs = require('fs');\n\n// Create a readable stream for the source file\nconst readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });\n\n// Create a writable stream for the destination file\nconst writableStream = fs.createWriteStream('output.txt');\n\n// Pipe the data from the readable stream to the writable stream\nreadableStream.pipe(writableStream);\n\nreadableStream.on('end', () => {\n  console.log('File has been copied successfully.');\n});\n\nreadableStream.on('error', (error) => {\n  console.error('An error occurred while reading the file:', error);\n});\n\nwritableStream.on('error', (error) => {\n  console.error('An error occurred while writing the file:', error);\n});\n\n-Explanation :\n\n1.Creating Streams:\nfs.createReadStream('input.txt', { encoding: 'utf8' }) creates a readable stream to read the file input.txt in chunks.\nfs.createWriteStream('output.txt') creates a writable stream to write data into output.txt.\n2.Piping:\nThe .pipe() method connects the readable stream to the writable stream. As data is read from input.txt, it is immediately written to output.txt.\n3.Event Handling:\nThe end event on the readable stream signals that all data has been read and copied.\nError events on both streams help catch and handle any issues during the file operations."
    },
    {
        "id": 25,
        "topic": "nodeJs",
        "question": "Explain the types of streams in Node.JS",
        "answer": "⭐Types of Stream:\n1.Readable stream: It is the stream from where you can receive and read the data in an ordered fashion. However, you are not allowed to send anything. For example, fs.createReadStream() lets us read the contents of a file.\n2.Writable stream: It is the stream where you can send data in an ordered fashion but you are not allowed to receive it back. For example, fs.createWriteStream() lets us write data to a file.\n3.Duplex stream: It is the stream that is both readable and writable. Thus you can send in and receive data together. For example, net.Socket is a TCP socket.\n4.Transform stream: It is the stream that is used to modify the data or transform it as it is read. The transform stream is basically a duplex in nature. For example, zlib.createGzip stream is used to compress the data using gzip.\nIn Node.JS, streams are objects that allow you to read data from a source or write data to a destination in a continuous manner. Streams are particularly useful for handling large amounts of data efficiently, as they allow you to process data piece by piece rather than loading the entire dataset into memory at once.\n\n       ⭐Types of Streams in Node.JS:\n\n1.   Readable Streams  :\n   -   Purpose  : Used to read data from a source.\n   -   Examples  : Reading data from a file, HTTP requests, or process input.\n   -   Methods  :  \"read() \",  \"pipe() \".\n   -   Events  :  \"data \",  \"end \",  \"error \",  \"readable \".\n\n \n\n2.   Writable Streams  :\n   -   Purpose  : Used to write data to a destination.\n   -   Examples  : Writing data to a file, HTTP responses, or process output.\n   -   Methods  :  \"write() \",  \"end() \".\n   -   Events  :  \"drain \",  \"finish \",  \"error \".\n\n\n   \n\n3.   Duplex Streams  :\n   -   Purpose  : Used for both reading and writing data.\n   -   Examples  : Network sockets.\n   -   Methods  : Inherits both readable and writable stream methods.\n   -   Events  : Inherits both readable and writable stream events.\n\n  \n \n\n4.   Transform Streams  :\n   -   Purpose  : Used to modify or transform data while reading and writing.\n   -   Examples  : Compression, encryption, or data format transformation.\n   -   Methods  : Inherits both readable and writable stream methods.\n   -   Events  : Inherits both readable and writable stream events.\n\n\n\n       📝Summary:\n\n-   Readable Streams  : For reading data from a source (e.g., files, HTTP requests).\n-   Writable Streams  : For writing data to a destination (e.g., files, HTTP responses).\n-   Duplex Streams  : For both reading and writing data (e.g., network sockets).\n-   Transform Streams  : For transforming data during read/write operations (e.g., compression, encryption).\n\nEach type of stream provides a different set of functionalities tailored to specific use cases, allowing for efficient and flexible data handling in Node.JS applications.",
        "tags": [
            "stream"
        ],
        "keyFeatures": [],
        "actionWords": [
            "Readable Streams: Allow you to read data piece by piece",
            "Writable Streams: Enable you to write data in chunks",
            "Duplex Streams: Combine both readable and writable capabilities.",
            "Transform Streams: A type of duplex stream that can modify or transform the data as it is read or written."
        ],
        "codeExample": "1.Readable Streams Example:\n  const fs = require('fs');\n   const readableStream = fs.createReadStream('file.txt');\n   readableStream.on('data', (chunk) => {\n     console.log( \"Received ${chunk.length} bytes of data. \");\n   });\n   readableStream.on('end', () => {\n     console.log('No more data.');\n   });\n   \n2.Writable Streams Example:\nconst fs = require('fs');\n   const writableStream = fs.createWriteStream('output.txt');\n   writableStream.write('Hello, World!');\n   writableStream.end();\n   writableStream.on('finish', () => {\n     console.log('All writes are complete.');\n   });\n\n3.Duplex streams Example:\n const { Duplex } = require('stream');\n   const duplexStream = new Duplex({\n     read(size) {\n       this.push('Hello');\n       this.push(null);\n     },\n     write(chunk, encoding, callback) {\n       console.log( \"Writing: ${chunk.toString()} \");\n       callback();\n     }\n   });\n   duplexStream.on('data', (chunk) => {\n     console.log( \"Received: ${chunk} \");\n   });\n   duplexStream.write('World');\n   duplexStream.end();\n4.Tra"
    },
    {
        "id": 26,
        "topic": "nodeJs",
        "question": "What is the difference between readFile and create Read Stream in Node.JS?",
        "answer": "Both readFile and createReadStream are methods provided by Node.JS's fs module to read files, but they work in fundamentally different ways:\n\n\n\n readFile\n\n- How It Works:  \n  The fs.readFile function reads the entire contents of a file into memory before invoking the callback. This means you get all the file data as a single Buffer or string once the read operation completes.\n\n- Use Case:  \n  Best suited for small to moderately sized files where loading the entire file into memory isn’t a concern.\n\n\n\n createReadStream\n\n- How It Works:  \n  The fs.createReadStream method creates a readable stream that emits chunks of data as they are read from the file. This approach does not load the entire file into memory at once; instead, it processes the file piece by piece.\n\n- Use Case:  \n  Ideal for large files or when you need to process data in chunks (e.g., piping data to another stream) without consuming a lot of memory.\n\n\n\n 📝Summary: of Differences\n\n- Memory Usage:\n  - readFile: Loads the entire file into memory.\n  - createReadStream: Reads the file in smaller chunks, making it more memory efficient.\n\n- Performance:\n  - readFile: May be faster for very small files since it completes in one go.\n  - createReadStream: More efficient for large files or continuous data processing since it doesn’t require loading the entire file at once.\n\n- Control Over Data Flow:\n  - readFile: You get the complete data in a single callback.\n  - createReadStream: Allows for processing data incrementally, which can be useful for tasks like real-time processing or piping data between streams.\n\nThese differences make each method suitable for different scenarios depending on file size, memory constraints, and the need for processing data in parts versus as a whole.",
        "tags": [
            "stream"
        ],
        "keyFeatures": [],
        "actionWords": [
            "fs.readFile function reads the entire contents of a file into memory before invoking the callback",
            "\nfs.createReadStream method creates a readable stream that emits chunks of data as they are read from the file"
        ],
        "codeExample": "- Example readFile:\n  \n  const fs = require('fs');\n\n  fs.readFile('example.txt', 'utf8', (err, data) => {\n    if (err) {\n      console.error('Error reading file:', err);\n      return;\n    }\n    console.log('File contents:', data);\n  });\n  \n\n\n- Example createReadStream:\n  \n  const fs = require('fs');\n\n  const readStream = fs.createReadStream('example.txt', { encoding: 'utf8' });\n\n  readStream.on('data', chunk => {\n    console.log('Received chunk:', chunk);\n  });\n\n  readStream.on('end', () => {\n    console.log('Finished reading file.');\n  });\n\n  readStream.on('error', err => {\n    console.error('Error reading file:', err);\n  });\n  \n\n"
    },
    {
        "id": 27,
        "topic": "nodeJs",
        "question": "What is piping in Node.JS?",
        "answer": "In Node.JS, piping refers to the process of connecting the output of one stream to the input of another stream. This is achieved by using the  \"pipe() \" method provided by readable streams. Piping allows data to be efficiently transferred from one stream to another without the need for manual handling of data events.\n\n       Key Components of Piping:\n\n1.   Readable Stream  : The stream that produces data to be consumed by another stream. Examples include reading data from a file, receiving data from an HTTP request, or generating data using a readable stream.\n\n2.   Writable Stream  : The stream that consumes data produced by the readable stream. Examples include writing data to a file, sending data over an HTTP response, or processing data using a writable stream.\n\n3.    \"pipe() \" Method  : The method provided by readable streams to connect the output of one stream to the input of another stream. When called, this method sets up the data flow between the two streams automatically.\n\n      \n       👉Benefits of Piping:\n\n1.   Simplicity  : Piping simplifies the process of transferring data between streams by automatically managing data flow.\n   \n2.   Efficiency  : Piping is efficient because it minimizes memory consumption and maximizes data throughput by transferring data in chunks.\n\n3.   Error Handling  : Piping automatically handles errors such as backpressure, ensuring that data is transferred smoothly between streams.\n\n4.   Flexibility  : Piping can be used with various types of streams, including readable and writable streams provided by Node.JS, third-party libraries, or user-defined streams.\n\n       📝Summary:\n\nPiping in Node.JS allows data to be efficiently transferred from one stream to another by connecting the output of a readable stream to the input of a writable stream. This process is achieved using the  \"pipe() \" method provided by readable streams, simplifying data transfer and improving efficiency while handling data in Node.JS applications.",
        "tags": [
            "piping"
        ],
        "keyFeatures": [],
        "actionWords": [
            " the process of connecting the output of one stream to the input of another stream"
        ],
        "codeExample": " Example of Piping in Node.JS:\n\n\nconst fs = require('fs');\n\n// Create a readable stream to read data from a file\nconst readableStream = fs.createReadStream('input.txt');\n\n// Create a writable stream to write data to another file\nconst writableStream = fs.createWriteStream('output.txt');\n\n// Pipe the data from the readable stream to the writable stream\nreadableStream.pipe(writableStream);\n\n// Optionally, listen for events on the streams\nreadableStream.on('end', () => {\n  console.log('Data reading completed.');\n});\n\nwritableStream.on('finish', () => {\n  console.log('Data writing completed.');\n});\n\n\nIn this example:\n-  \"createReadStream() \" creates a readable stream to read data from the file  \"input.txt \".\n-  \"createWriteStream() \" creates a writable stream to write data to the file  \"output.txt \".\n-  \"pipe() \" connects the output of the readable stream ( \"readableStream \") to the input of the writable stream ( \"writableStream \").\n- When data is read from the  \"input.txt \" file, it is automatically written to the  \"output.txt \" file without manual handling of data events."
    },
    {
        "id": 28,
        "topic": "nodeJs",
        "question": "What are the Key difference between Streams & Buffere ? ",
        "answer": "Streams and Buffers are two fundamental concepts in Node.JS that relate to data handling, but they serve different purposes and work in distinct ways:\n\n\n\n Buffers\n\n- Definition:  \n  Buffers are used to handle binary data directly in Node.JS.JSJS They represent fixed-size memory allocations that store raw bytes.\n\n- Usage:  \n  - Ideal for scenarios where you work with binary data such as reading from a file, network protocols, or handling binary streams of data.\n  - Buffers are created to temporarily hold the binary data before it is processed or converted to a string.\n\n- Characteristics:  \n  - Fixed size once allocated.\n  - Low-level representation of data.\n  - Efficient for binary manipulation.\n\n\n  \n\n\n\n Streams\n\n- Definition:  \n  Streams are an abstraction for handling continuous data flows. They allow data to be read or written piece by piece (chunk by chunk) over time.\n\n- Usage:  \n  - Particularly useful for working with large datasets, such as reading/writing large files or handling data from network requests.\n  - Streams process data in chunks, which can help manage memory usage by not loading everything at once.\n\n- ⭐Types of Streams:  \n  - Readable Streams: For reading data.\n  - Writable Streams: For writing data.\n  - Duplex Streams: For both reading and writing.\n  - Transform Streams: For modifying data as it is read or written.\n\n- Characteristics:  \n  - Can handle data continuously, without needing to load it entirely into memory.\n  - Built-in backpressure mechanism to control the flow of data.\n  - Event-driven, which makes them suitable for asynchronous operations.\n\n\n\n\n Key Differences\n\n1. Data Handling:\n   - Buffers:  \n     Store raw binary data in a fixed-size container. They are static and represent a specific block of data.\n   - Streams:  \n     Process data continuously in chunks, allowing for data to be read or written piece by piece.\n\n2. Memory Usage:\n   - Buffers:  \n     Require allocating memory to store the complete set of data, which can be inefficient for large data sizes.\n   - Streams:  \n     Read/write data in parts, reducing memory overhead by not needing to store the entire dataset at once.\n\n3. 💡Use Cases:\n   - Buffers:  \n     Suitable for handling binary data, such as image processing, or when you need to perform operations on a fixed block of data.\n   - Streams:  \n     Ideal for operations involving large files or continuous data flows (e.g., file transfers, network communications) where processing data incrementally is more efficient.\n\n4. Control and Flow:\n   - Buffers:  \n     Offer a static snapshot of data, without control over how the data is processed over time.\n   - Streams:  \n     Provide event-based mechanisms (like data, end, and error events) to manage how data flows through your application, enabling more granular control over data processing.\n\n\n\nIn summary, while Buffers are used for managing fixed-size binary data efficiently, Streams provide a dynamic and memory-efficient way to handle large or continuous flows of data by processing it in manageable chunks.",
        "tags": [
            "stream vs buffere"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "- Example Buffer:\n  \n  // Creating a buffer from a string\n  const buffer = Buffer.from('Hello, world!', 'utf8');\n  console.log(buffer); // Outputs the raw byte representation\n\n- Example stream:\n  \n  const fs = require('fs');\n\n  // Creating a readable stream for a file\n  const readStream = fs.createReadStream('example.txt', { encoding: 'utf8' });\n\n  readStream.on('data', chunk => {\n    console.log('Received chunk:', chunk);\n  });\n\n  readStream.on('end', () => {\n    console.log('Finished reading file.');\n  });\n  \n"
    },
    {
        "id": 29,
        "topic": "nodeJs",
        "question": "What is a cluster in Node.JS?",
        "answer": "A cluster in Node.JS is a way to take advantage of multi-core systems by creating multiple child processes (workers) that run simultaneously and share the same server port. This helps improve the performance and scalability of your application by distributing the workload across all available CPU cores.\n\n Benefits\n\n- Improved Performance:  \n  Utilizing all available CPU cores can significantly enhance the performance of Node.JS applications, which are single-threaded by default.\n  \n- Fault Tolerance:  \n  If a worker crashes, the master process can spawn a new worker to replace it, improving application reliability.\n\nBy using clusters, you can build highly scalable and efficient applications that fully leverage the hardware capabilities of the host machine.",
        "tags": [
            "cluster"
        ],
        "keyFeatures": [],
        "actionWords": [
            "allows you to create multiple instances of a Node.JS process (workers) that can share the same port and handle incoming requests",
            ""
        ],
        "codeExample": " Practical Example\n\nBelow is an example that demonstrates how to set up a simple HTTP server using the Node.JS cluster module:\n\n\nconst cluster = require('cluster');\nconst http = require('http');\nconst os = require('os');\n\nconst numCPUs = os.cpus().length;\n\nif (cluster.isMaster) {\n  console.log(Master process ${process.pid} is running);\n\n  // Fork a worker for each CPU core.\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n\n  // Listen for dying workers and log when one exits.\n  cluster.on('exit', (worker, code, signal) => {\n    console.log(Worker ${worker.process.pid} died);\n    // Optionally, you can fork a new worker here to replace the one that died.\n  });\n} else {\n  // Workers share the same server port\n  http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('Hello from Node.JS cluster!\\n');\n  }).listen(8000);\n\n  console.log(Worker ${process.pid} started and is listening on port 8000);\n}\n\n\n Explanation\n\n- Master Process:  \n  - Checks if the current process is the master using cluster.isMaster.\n  - Forks new worker processes equal to the number of CPU cores available (numCPUs).\n  - Monitors worker processes and logs when any of them exit.\n\n- Worker Process:  \n  - Runs the HTTP server that listens on port 8000.\n  - Handles incoming HTTP requests, with the operating system balancing requests among all active workers.\n\n\n How It Works:\n\n- Mmastaster Process:  \n  The er process is responsible for forking worker processes. It controls the lifecycle of these workers and can restart them if they crash.\n  \n- Worker Processes:  \n  Each worker process is a separate instance of the Node.JS application. They can all listen on the same port, and the operating system will distribute incoming requests among them.\n\n- Communication:  \n  Workers can communicate with the master process (and sometimes with each other) using an inter-process communication (IPC) mechanism.\n\n\n"
    },
    {
        "id": 30,
        "topic": "nodeJs",
        "question": "Explain some of the cluster methods in Node.JS",
        "answer": "Fork(): It creates a new child process from the master. The isMaster returns true if the current process is master or else false.\nisWorker: It returns true if the current process is a worker or else false.\nprocess: It returns the child process which is global.\nsend(): It sends a message from worker to master or vice versa. \nkill(): It is used to kill the current worker.\n\nIn Node.JS, the  \"cluster \" module provides several methods for managing and interacting with the cluster of worker processes. These methods allow you to control the creation, termination, and communication between the master and worker processes in a clustered application. Here are some of the key methods provided by the  \"cluster \" module:\n\n",
        "tags": [
            "cluster"
        ],
        "keyFeatures": [],
        "actionWords": [
            "fork()",
            " isWorker()",
            " process()",
            " send()",
            "kill()",
            ""
        ],
        "codeExample": "1.   cluster.fork()  : This method is used to create a new worker process. When called in the master process, it forks the current process to create a new worker process. Each worker process runs the same code as the master process.\nconst cluster = require('cluster');\n\n    if (cluster.isMaster) {\n      // Fork a new worker process\n      const worker = cluster.fork();\n\n      // Listen for worker exit event\n      worker.on('exit', (code, signal) => {\n        console.log( \"Worker ${worker.process.pid} exited with code ${code} \");\n      });\n    }\n    \n\n2.   cluster.setupMaster([options])  : This method is used to set up configuration options for the master process. It accepts an optional  \"options \" object to configure various settings, such as the path to the execution script, environment variables, and the number of worker processes to fork.\nconst cluster = require('cluster');\n\n    cluster.setupMaster({\n      exec: 'worker.', // Path to the worker script\n      args: ['arg1', 'arg2'], // Command-line arguments for the worker script\n      silent: false // Whether to redirect worker output to the master process\n    });\n    \n\n3.   cluster.worker  : This property provides access to information about the current worker process. It is only defined within the context of a worker process and returns an object containing details such as the process ID ( \"pid \") and the index of the worker ( \"id \").\n\n    const cluster = require('cluster');\n\n    if (cluster.isWorker) {\n      console.log( \"Worker PID: ${cluster.worker.process.pid} \");\n      console.log( \"Worker ID: ${cluster.worker.id} \");\n    }\n    \n\n4.   cluster.workers  : This property is an object containing references to all the active worker processes. Each worker process is identified by its unique process ID (PID). You can use this property to iterate over all worker processes and perform operations such as sending messages or terminating processes.\n\n    const cluster = require('cluster');\n\n    for (const id in cluster.workers) {\n      console.log( \"Worker PID: ${cluster.workers[id].process.pid} \");\n    }\n    \n\n5.   cluster.isMaster  : This property is a boolean value that indicates whether the current process is the master process ( \"true \") or a worker process ( \"false \"). You can use this property to conditionally execute code based on the process type.\n\n    const cluster = require('cluster');\n\n    if (cluster.isMaster) {\n      console.log('This is the master process');\n    } else {\n      console.log('This is a worker process');\n    }\n    \n\nThese are some of the commonly used methods provided by the  \"cluster \" module in Node.JS for managing and interacting with worker processes in a clustered application. They allow you to control the creation, configuration, and communication between master and worker processes, enabling you to build scalable and high-performance applications."
    },
    {
        "id": 31,
        "topic": "nodeJs",
        "question": "What is the difference between spawn() and fork() method?",
        "answer": "In Node.JS, both spawn() and fork() are methods from the child_process module used to create child processes, but they serve different purposes and offer distinct features:\n\n\n\n spawn()\n\n- General Purpose:  \n  Used to launch any external command or executable.\n\n- Usage:  \n  - Suitable for running non-Node.JS applications or shell commands.\n  - Returns a ChildProcess object with streams for stdin, stdout, and stderr.\n\n- Communication:  \n  - Does not set up an inter-process communication (IPC) channel by default.\n  - You interact with the process through standard streams.\n\n\n  \n\n\n\n fork()\n\n- Specialized for Node.JS:  \n  A specialized version of spawn() designed specifically to create new Node.JS processes.\n\n- Usage:  \n  - Used to run another Node.JS module as a child process.\n  - Automatically sets up an IPC channel, enabling direct communication between the parent and child process via process.send() and process.on('message').\n\n- Communication:  \n  - Ideal when you need to pass messages or data between processes without dealing with raw streams.\n\n\n\n\n 📝Summary: of Key Differences\n\n- Purpose:\n  - spawn(): For launching arbitrary commands and executables.\n  - fork(): Specifically for spawning new Node.JS processes.\n\n- IPC (Inter-Process Communication):\n  - spawn(): No built-in IPC channel; relies on standard streams.\n  - fork(): Automatically establishes an IPC channel for message-based communication.\n\n- Use Case:\n  - spawn(): Running external programs, scripts, or shell commands.\n  - fork(): Splitting work among Node.JS processes, often to take advantage of multi-core systems while easily communicating between processes.\n\nThese differences help you choose the right tool based on whether you need to run a general command or if you're working within the Node.JS ecosystem and require straightforward communication between processes.",
        "tags": [
            "cluster"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "- Example spawn():\n  \n  const { spawn } = require('child_process');\n  const ls = spawn('ls', ['-lh', '/usr']);\n\n  ls.stdout.on('data', data => {\n    console.log(stdout: ${data});\n  });\n\n  ls.stderr.on('data', data => {\n    console.error(stderr: ${data});\n  });\n\n  ls.on('close', code => {\n    console.log(Child process exited with code ${code});\n  });\n\n- Example fork():\n  \n  // Parent process file (parent.)\n  const { fork } = require('child_process');\n  const child = fork('child.');\n\n  child.on('message', message => {\n    console.log('Message from child:', message);\n  });\n\n  child.send({ hello: 'world' });\n\n  // Child process file (child.)\n  process.on('message', message => {\n    console.log('Message from parent:', message);\n    process.send({ received: true });\n  });\n  \n"
    },
    {
        "id": 32,
        "topic": "nodeJs",
        "question": "What is a thread pool, and which library handles it in Node.JS?",
        "answer": "A thread pool in Node.JS is a collection of worker threads that execute background tasks concurrently. It’s used to handle I/O operations (such as file system operations, DNS lookups, and some cryptographic functions) that are offloaded from the main event loop to avoid blocking it.\r\n\r\nIn Node.JS, this thread pool is managed by the libuv library. libuv allocates a fixed number of threads (by default 4, but this can be adjusted with the UV_THREADPOOL_SIZE environment variable) to handle these asynchronous tasks efficiently.\r\n\r\n Key Points\r\n\r\n- Purpose:  \r\n  The thread pool allows Node.JS to perform blocking operations without freezing the event loop, ensuring that the application remains responsive.\r\n\r\n- Library:  \r\n  libuv is the underlying library that provides the thread pool mechanism, among other system-level utilities, to Node.JS.JSJS\r\n\r\n- Usage:  \r\n  While most I/O operations in Node.JS are non-blocking, some operations (like file system methods) are offloaded to the thread pool to prevent blocking the single-threaded event loop.\r\n\r\nBy using libuv’s thread pool, Node.JS can handle CPU-bound tasks and long-running I/O operations in parallel, leveraging multiple cores without compromising the event-driven model.",
        "tags": [
            " worker threads "
        ],
        "keyFeatures": [],
        "actionWords": [
            "a collection of worker threads that executes background tasks concurrently."
        ],
        "codeExample": "A practical example of how Node.JS uses the thread pool is through certain asynchronous operations—like cryptographic functions—that are offloaded to background threads managed by libuv.\r\n\r\nFor instance, the crypto.pbkdf2 function (used for key derivation) leverages the thread pool to perform its computationally intensive work without blocking the main event loop.\r\n\r\n Example: Using crypto.pbkdf2\r\n\r\n\r\nconst crypto = require('crypto');\r\n\r\n// Record the start time to see how long the operation takes.\r\nconsole.time('pbkdf2');\r\n\r\ncrypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {\r\n  if (err) throw err;\r\n  console.log('Derived key:', derivedKey.toString('hex'));\r\n  console.timeEnd('pbkdf2');\r\n});\r\n\r\n\r\n Explanation\r\n\r\n- Offloading to the Thread Pool:  \r\n  When you call crypto.pbkdf2, Node.JS hands off the heavy cryptographic computation to one of the worker threads in the libuv thread pool. This prevents the main event loop from getting blocked by the CPU-intensive task.\r\n\r\n- Non-Blocking Behavior:  \r\n  While the computation runs in the background, the rest of your application remains responsive. When the operation completes, the callback is queued and executed on the main thread.\r\n\r\n- Adjusting Thread Pool Size:  \r\n  If you have multiple CPU-bound tasks, you can adjust the thread pool size using the UV_THREADPOOL_SIZE environment variable. For example, running:\r\n  bash\r\n  UV_THREADPOOL_SIZE=8 node yourScript.\r\n  \r\n  increases the pool size from the default of 4 to 8 threads.\r\n\r\n Running Multiple Operations\r\n\r\nYou can also see the thread pool in action when running multiple heavy tasks concurrently. For example:\r\n\r\n\r\nconst crypto = require('crypto');\r\n\r\nfor (let i = 1; i <= 4; i++) {\r\n  console.time(task ${i});\r\n  crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {\r\n    if (err) throw err;\r\n    console.log(Task ${i} completed in:);\r\n    console.timeEnd(task ${i});\r\n  });\r\n}\r\n\r\n\r\nEach crypto.pbkdf2 call is offloaded to the thread pool. If you run them concurrently, you might see that tasks are processed in parallel up to the number of threads available in the pool. This illustrates how Node.JS uses libuv's thread pool to handle multiple CPU-intensive tasks without blocking the main execution thread.\r\n\r\nThis example shows how the thread pool works in practice: it enables non-blocking behavior even for operations that are computationally heavy by delegating them to separate threads managed by libuv."
    },
    {
        "id": 33,
        "topic": "nodeJs",
        "question": "How are worker threads different from clusters?",
        "answer": "Worker threads and clusters both allow Node.JS applications to leverage multi-core systems, but they do so in different ways and are suited for different types of tasks.\r\n\r\n\r\n\r\n Key Differences\r\n\r\n- Process vs. Thread:  \r\n  - Clusters:  \r\n    Create multiple Node.JS processes. Each process has its own memory and V8 instance, which makes them isolated from each other. They are ideal for handling high-concurrency network applications by distributing incoming requests among processes.\r\n  \r\n  - Worker Threads:  \r\n    Run within the same process but on separate threads. They share memory using transferable objects or shared buffers, making them more lightweight than clusters. Worker threads are better suited for CPU-intensive tasks that require heavy computation without blocking the event loop.\r\n\r\n- Inter-Process Communication (IPC) vs. Shared Memory:  \r\n  - Clusters:  \r\n    Use IPC via message passing to communicate between processes, which involves serialization and can be slower.\r\n  \r\n  - Worker Threads:  \r\n    Can share memory directly through SharedArrayBuffer or MessageChannel, enabling more efficient data sharing.\r\n\r\n- Isolation:  \r\n  - Clusters:  \r\n    Provide complete isolation, which can be beneficial for fault tolerance since a crash in one process doesn’t affect others.\r\n  \r\n  - Worker Threads:  \r\n    Have less isolation since they run in the same process; an error in one thread can potentially affect the entire process if not handled carefully.\r\n\r\n\r\n\r\n 📝Summary:\r\n\r\n- Clusters:  \r\n  - Use separate processes.\r\n  - Ideal for network-based workloads and fault isolation.\r\n  - Use IPC for communication.\r\n\r\n- Worker Threads:  \r\n  - Use threads within the same process.\r\n  - Ideal for CPU-intensive tasks.\r\n  - Can share memory for faster communication.\r\n\r\nEach approach serves a different purpose. Clusters excel in handling large numbers of I/O-bound requests by distributing them across multiple processes, while worker threads are better for parallelizing heavy computations within a single process.",
        "tags": [
            " worker threads vs cluster"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\nBelow are examples that illustrate each approach.\r\n\r\n Example with Clusters\r\n\r\ncluster-example.\r\n\r\nconst cluster = require('cluster');\r\nconst http = require('http');\r\nconst os = require('os');\r\n\r\nconst numCPUs = os.cpus().length;\r\n\r\nif (cluster.isMaster) {\r\n  console.log(Master ${process.pid} is running);\r\n\r\n  // Fork workers equal to the number of CPU cores.\r\n  for (let i = 0; i < numCPUs; i++) {\r\n    cluster.fork();\r\n  }\r\n\r\n  cluster.on('exit', (worker, code, signal) => {\r\n    console.log(Worker ${worker.process.pid} died);\r\n    // Optionally fork a new worker here.\r\n  });\r\n} else {\r\n  // Worker process: handles HTTP requests\r\n  http.createServer((req, res) => {\r\n    res.writeHead(200);\r\n    res.end(Handled by process ${process.pid}\\n);\r\n  }).listen(8000);\r\n\r\n  console.log(Worker ${process.pid} started);\r\n}\r\n\r\n\r\nExplanation:\r\n\r\n- The master process forks a number of worker processes equal to the number of CPU cores.\r\n- Each worker process runs an HTTP server on the same port. The operating system distributes incoming connections among them.\r\n- This setup enhances fault tolerance and scales network operations across multiple cores.\r\n\r\n Example with Worker Threads\r\n\r\nworker-threads-example.\r\n\r\nconst { Worker, isMainThread, parentPort } = require('worker_threads');\r\n\r\nif (isMainThread) {\r\n  // Main thread: offloads CPU-intensive computation to worker threads\r\n  console.log(Main thread ${process.pid} is running);\r\n\r\n  // Create a worker thread\r\n  const worker = new Worker(__filename);\r\n  \r\n  // Listen for messages from the worker\r\n  worker.on('message', result => {\r\n    console.log(Result from worker: ${result});\r\n  });\r\n\r\n  // Listen for errors\r\n  worker.on('error', error => {\r\n    console.error('Worker error:', error);\r\n  });\r\n\r\n  // Listen for exit event\r\n  worker.on('exit', code => {\r\n    if (code !== 0)\r\n      console.error(Worker stopped with exit code ${code});\r\n  });\r\n\r\n  // Send a message to the worker to start computation\r\n  worker.postMessage(10);  // e.g., calculate factorial of 10\r\n} else {\r\n  // Worker thread: performs CPU-intensive task\r\n  parentPort.on('message', (num) => {\r\n    // A simple CPU-intensive task: calculate factorial\r\n    let result = 1;\r\n    for (let i = 1; i <= num; i++) {\r\n      result = i;\r\n    }\r\n    // Send the result back to the main thread\r\n    parentPort.postMessage(result);\r\n  });\r\n}\r\n\r\n\r\nExplanation:\r\n\r\n- The main thread creates a worker thread using the Worker constructor.\r\n- The worker thread listens for messages from the main thread, performs a CPU-intensive task (calculating a factorial), and sends the result back.\r\n- Since worker threads share memory with the main process, they are ideal for parallel computations without the overhead of full process isolation.\r\n\r\n\r\n\r\n"
    },
    {
        "id": 34,
        "topic": "nodeJs",
        "question": "What are child processes in Node.JS?",
        "answer": "Child processes in Node.JS are separate processes that your Node.JS application can spawn to perform tasks outside of the main event loop. They allow you to execute other programs, run system commands, or even spawn additional Node.JS processes. This is especially useful for offloading heavy or blocking operations, performing parallel processing, or isolating execution environments.\n\nNode. provides the child_process module, which offers several methods to create child processes, including:\n\n- spawn(): Launches a new process with a given command, providing streams for input/output.\n- exec(): Executes a command in a shell and buffers the output.\n- fork(): A specialized version of spawn() for creating new Node.JS processes with an automatic IPC channel.\n\n\n When to Use Child Processes\n\n- Parallel Execution:  \n  Offload CPU-intensive or blocking tasks to child processes, so the main event loop remains responsive.\n  \n- Isolation:  \n  Run tasks in isolated environments to ensure that failures in a child process do not crash the main application.\n\n- Interacting with Other Programs:  \n  Execute external commands or interact with system-level utilities.\n\nThis example demonstrates how you can use child processes to extend the capabilities of your Node.JS applications, allowing for more flexible and efficient execution of tasks that might otherwise block your application’s main thread.",
        "tags": [
            "child-process"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example Using spawn()\n\nBelow is a practical example that uses spawn() to execute the Unix ls command to list directory contents:\n\n\nconst { spawn } = require('child_process');\n\n// Spawn a child process to run the 'ls' command with the '-l' argument.\nconst ls = spawn('ls', ['-l']);\n\nls.stdout.on('data', (data) => {\n  console.log(stdout: ${data});\n});\n\nls.stderr.on('data', (data) => {\n  console.error(stderr: ${data});\n});\n\nls.on('close', (code) => {\n  console.log(Child process exited with code ${code});\n});\n\n\n Explanation\n\n- Spawning the Process:  \n  The spawn('ls', ['-l']) call starts a new process to execute the ls -l command. The command and its arguments are passed as separate parameters.\n\n- Handling Output:  \n  - The stdout stream is used to capture the standard output of the command. Each chunk of data is logged to the console.\n  - The stderr stream is used to capture any error output from the command.\n\n- Process Termination:  \n  The close event is emitted when the child process has finished executing. It provides the exit code, which you can use to determine if the process executed successfully (typically, an exit code of 0 means success).\n"
    },
    {
        "id": 35,
        "topic": "nodeJs",
        "question": "Explain the use of timers module in Node.JS",
        "answer": "The timers module in Node.JS provides a set of functions that allow you to schedule the execution of code after a specified delay, repeatedly at intervals, or immediately after the current phase of the event loop. These functions help you manage asynchronous operations without blocking the main event loop.\r\n\r\n Key Timer Functions\r\n\r\n- setTimeout(callback, delay):  \r\n  Schedules a callback to run after a specified delay (in milliseconds).\r\n\r\n- setInterval(callback, delay):  \r\n  Repeatedly calls a callback function at fixed time intervals.\r\n\r\n- setImmediate(callback):  \r\n  Schedules a callback to execute on the next iteration of the event loop, after I/O events are processed.\r\n\r\n- process.nextTick(callback):  \r\n  Schedules a callback to run at the end of the current operation, before the event loop continues.\r\n\r\nThese functions are part of Node.JS's core and are available globally. Internally, they work with the libuv event loop to manage asynchronous task execution.\r\n\r\n\r\n\r\n\r\n\r\n Use Cases\r\n\r\n- setTimeout:  \r\n  Useful for delaying execution (e.g., waiting for a resource to become available).\r\n\r\n- setInterval:  \r\n  Ideal for periodic tasks (e.g., polling a server or updating a UI).\r\n\r\n- setImmediate & process.nextTick:  \r\n  Allow you to fine-tune the scheduling of callbacks, ensuring that some operations occur immediately after the current call stack clears, without interfering with I/O operations.\r\n\r\nBy using these timer functions, you can schedule tasks in a non-blocking way, keeping your Node.JS application responsive even when dealing with asynchronous operations.",
        "tags": [
            "timers"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\nBelow is a code snippet that demonstrates the use of various timers:\r\n\r\n\r\nconsole.log('Before timers');\r\n\r\n// Schedules the callback to run after approximately 1 second.\r\nsetTimeout(() => {\r\n  console.log('setTimeout: This message appears after 1 second.');\r\n}, 1000);\r\n\r\n// Schedules the callback to run repeatedly every 2 seconds.\r\nconst intervalId = setInterval(() => {\r\n  console.log('setInterval: This message appears every 2 seconds.');\r\n}, 2000);\r\n\r\n// Schedules the callback to run immediately after I/O events in the next event loop iteration.\r\nsetImmediate(() => {\r\n  console.log('setImmediate: This message appears immediately after I/O events.');\r\n});\r\n\r\n// Schedules the callback to run before the event loop continues, at the end of the current operation.\r\nprocess.nextTick(() => {\r\n  console.log('process.nextTick: This message appears before any timers.');\r\n});\r\n\r\n// Stop the interval after 7 seconds to clean up.\r\nsetTimeout(() => {\r\n  clearInterval(intervalId);\r\n  console.log('Interval cleared.');\r\n}, 7000);\r\n\r\nconsole.log('After timers');\r\n\r\n\r\n Explanation\r\n\r\n1. Synchronous Logs:  \r\n   - The first console.log (\"Before timers\") and the last one (\"After timers\") execute immediately.\r\n\r\n2. process.nextTick:  \r\n   - The callback passed to process.nextTick is executed as soon as the current operation ends, before any timers or I/O events.\r\n\r\n3. setImmediate:  \r\n   - The setImmediate callback runs on the next iteration of the event loop, after I/O events are processed. It’s typically used for tasks that should be executed as soon as possible but not during the current phase.\r\n\r\n4. setTimeout:  \r\n   - The callback for setTimeout is scheduled to run after a delay of 1000 milliseconds (1 second).\r\n\r\n5. setInterval:  \r\n   - The setInterval callback runs every 2000 milliseconds (2 seconds) until it’s cleared with clearInterval.\r\n\r\n6. Clearing an Interval:  \r\n   - A second setTimeout is used to clear the interval after 7 seconds, demonstrating how you can stop repeated executions.\r\n\r\n"
    },
    {
        "id": 36,
        "topic": "nodeJs",
        "question": "What is CORS in Node.JS?",
        "answer": "CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web applications running in one origin (domain, protocol, or port) from making requests to another origin. It prevents a web page from making requests to a different domain than the one it was served from, which helps protect users from cross-site request forgery attacks.\n\n       How CORS Works:\n\nWhen a web application makes a cross-origin request (i.e., a request to a different domain, protocol, or port), the browser sends a preflight request (an HTTP OPTIONS request) to the server to determine if the cross-origin request is allowed. The server responds with CORS headers indicating whether the request is permitted or not.\n\n       CORS Headers:\n\n1.   Access-Control-Allow-Origin  : Specifies which origins are allowed to access the resource. It can be set to a specific origin, \" \", or \"null\" to allow any origin.\n\n2.   Access-Control-Allow-Methods  : Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) allowed when accessing the resource.\n\n3.   Access-Control-Allow-Headers  : Specifies which headers are allowed in the actual request.\n\n4.   Access-Control-Allow-Credentials  : Indicates whether the browser should send credentials (e.g., cookies, HTTP authentication) with the request.\n\n5.   Access-Control-Expose-Headers  : Specifies which headers the browser should expose to the client.\n\n",
        "tags": [
            "cors"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 37,
        "topic": "nodeJs",
        "question": "How to get information about a file in Node.JS?",
        "answer": "In Node.JS, you can retrieve detailed information about a file using the fs.stat() (or its promise-based version, fs.promises.stat()) method from the built-in fs module. This method returns a Stats object containing properties such as the file size, creation and modification times, and methods to determine if the path is a file, directory, or symbolic link.\n\n",
        "tags": [
            "fs"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example Using Callbacks\n\n\nconst fs = require('fs');\n\nfs.stat('path/to/file.txt', (err, stats) => {\n  if (err) {\n    console.error('Error fetching file info:', err);\n    return;\n  }\n  \n  console.log('File Size:', stats.size);         // Size in bytes\n  console.log('Created At:', stats.birthtime);     // Creation date\n  console.log('Modified At:', stats.mtime);        // Last modification date\n  \n  if (stats.isFile()) {\n    console.log('It is a file.');\n  } else if (stats.isDirectory()) {\n    console.log('It is a directory.');\n  }\n});\n\n\n Example Using Promises (Async/Await)\n\n\nconst fs = require('fs/promises');\n\nasync function getFileInfo(filePath) {\n  try {\n    const stats = await fs.stat(filePath);\n    \n    console.log('File Size:', stats.size);\n    console.log('Created At:', stats.birthtime);\n    console.log('Modified At:', stats.mtime);\n    \n    if (stats.isFile()) {\n      console.log('It is a file.');\n    } else if (stats.isDirectory()) {\n      console.log('It is a directory.');\n    }\n  } catch (err) {\n    console.error('Error fetching file info:', err);\n  }\n}\n\ngetFileInfo('path/to/file.txt');\n\n\n Explanation\n\n- fs.stat():  \n  Retrieves the file statistics asynchronously. When the operation completes, it provides a Stats object that includes:\n  - stats.size: The file's size in bytes.\n  - stats.birthtime: The time when the file was created.\n  - stats.mtime: The time when the file was last modified.\n  - Methods like stats.isFile() and stats.isDirectory() help determine the type of the file system object.\n\n- Error Handling:  \n  If the file does not exist or an error occurs during the operation, an error is returned which you can handle appropriately.\n\nThis approach is commonly used in applications that need to verify file properties, manage file system operations, or perform conditional logic based on the file type or attributes."
    },
    {
        "id": 38,
        "topic": "nodeJs",
        "question": "What is tracing in Node.JS?",
        "answer": "Tracing in Node.JS refers to the process of monitoring and recording the execution of your application to help diagnose performance issues, debug complex behaviors, and understand how various parts of your code are interacting at runtime. Tracing provides detailed insight into function calls, asynchronous events, and system interactions.\r\n\r\n Key Points\r\n\r\n- Performance Analysis:  \r\n  Tracing helps identify bottlenecks by capturing detailed timing information, allowing you to see where your application spends most of its time.\r\n\r\n- Debugging:  \r\n  By logging detailed events and function calls, tracing makes it easier to understand the flow of execution and diagnose issues that might not be obvious with traditional logging.\r\n\r\n- Tools and Libraries:  \r\n  Node.JS offers built-in support for tracing via the V8 engine and the libuv library. You can enable tracing features using command-line flags (like --trace-warnings, --trace-deprecation, or --trace-sync-io) or leverage external tools and profilers.  \r\n  Additionally, tools such as Chrome DevTools, Node.JS Inspector, or external tracing systems (like Jaeger or OpenTelemetry) can be used to visualize and analyze trace data.\r\n\r\n",
        "tags": [
            "tracing"
        ],
        "keyFeatures": [],
        "actionWords": [
            "process of monitoring and recording the execution of your application"
        ],
        "codeExample": " Practical Example\r\n\r\nConsider enabling tracing for deprecation warnings using a Node.JS flag. You can start your application like this:\r\n\r\nbash\r\nnode --trace-deprecation app.\r\n\r\n\r\nThis command tells Node.JS to output a stack trace whenever a deprecated API is used, which can help you pinpoint where outdated code resides.\r\n\r\nFor more complex tracing, you might instrument your code with performance hooks. Here's an example using the built-in perf_hooks module:\r\n\r\n\r\nconst { performance, PerformanceObserver } = require('perf_hooks');\r\n\r\n// Create an observer to log performance entries\r\nconst obs = new PerformanceObserver((list) => {\r\n  const entries = list.getEntries();\r\n  entries.forEach((entry) => {\r\n    console.log(${entry.name}: ${entry.duration}ms);\r\n  });\r\n});\r\n\r\n// Start observing performance entries\r\nobs.observe({ entryTypes: ['measure'] });\r\n\r\n// Mark the start of a task\r\nperformance.mark('A');\r\n\r\n// Simulate a task with a delay\r\nsetTimeout(() => {\r\n  // Mark the end of the task\r\n  performance.mark('B');\r\n  // Measure the duration between marks\r\n  performance.measure('A to B', 'A', 'B');\r\n}, 1000);\r\n\r\n\r\n Explanation\r\n\r\n- Performance Hooks:  \r\n  The perf_hooks module in Node.JS lets you measure the time taken by specific parts of your code. You use performance.mark to indicate the start and end points, and performance.measure to record the duration between these marks.\r\n\r\n- Performance Observer:  \r\n  A PerformanceObserver listens for and logs these performance entries. In this example, when the measure \"A to B\" is recorded, it outputs the duration it took to execute the task.\r\n\r\n- Real-World 💡Use Cases:  \r\n  - Profiling CPU-bound tasks: Identify slow functions or heavy computations.\r\n  - Monitoring asynchronous operations: Understand how long various asynchronous processes take.\r\n  - Optimizing response times: Trace API calls to spot delays in the processing chain.\r\n\r\nTracing is a powerful technique in Node.JS that, when combined with proper tooling, can significantly aid in performance tuning and debugging complex applications."
    },
    {
        "id": 39,
        "topic": "nodeJs",
        "question": "Explain the concept of stub in Node.JS.JSJS",
        "answer": "A stub in Node.JS is a piece of code—typically a function—that stands in for a real component or dependency during testing or development. It simulates the behavior of that component by returning pre-defined responses, allowing you to isolate the part of your code you want to test.\n\n Key Points\n\n- Purpose:  \n  - Isolation: Stubs help isolate the unit being tested by replacing external dependencies or complex logic with simple, controlled behavior.\n  - Deterministic Testing: By providing predetermined outputs, stubs make tests more reliable and predictable.\n  - Simplification: They allow you to focus on the functionality under test without worrying about the behavior of its dependencies.\n\n- Difference from Mocks and Spies:  \n  - Stub: Primarily used to provide canned responses and simulate behavior.\n  - Mock: Often includes expectations about how it should be called and verifies those expectations.\n  - Spy: Records information about function calls without modifying behavior.\n\nIn summary, a stub is a valuable tool for isolating functionality during testing, ensuring that you can simulate external dependencies and control the behavior of your application in a predictable way.",
        "tags": [
            "stub"
        ],
        "keyFeatures": [],
        "actionWords": [
            " tool for isolating functionality during testing"
        ],
        "codeExample": " Practical Example Using Sinon\r\n\r\nHere's a simple example using the Sinon library to create a stub for a function:\r\n\r\n\r\nconst sinon = require('sinon');\r\n\r\n// Imagine we have an object with a method that we want to stub\r\nconst userService = {\r\n  getUser: function(id) {\r\n    // Imagine this makes a complex database call\r\n    return { id, name: 'Real User' };\r\n  }\r\n};\r\n\r\n// In our test, we replace getUser with a stub\r\nconst stub = sinon.stub(userService, 'getUser').returns({ id: 1, name: 'Stubbed User' });\r\n\r\n// Now when we call userService.getUser, it returns the stubbed response\r\nconsole.log(userService.getUser(1)); // Output: { id: 1, name: 'Stubbed User' }\r\n\r\n// Restore the original method after testing\r\nstub.restore();\r\n\r\n\r\n Explanation\r\n\r\n1. Creating the Stub:  \r\n   - We use sinon.stub to replace the getUser method on userService with a stub that always returns a specific object.\r\n\r\n2. Using the Stub:  \r\n   - When userService.getUser is called during tests, it returns the stubbed response instead of executing the real logic (e.g., a database query).\r\n\r\n3. Restoring the Original Function:  \r\n   - After the test, the original method is restored to avoid affecting other tests.\r\n\r\nThis approach allows you to test the behavior of components that rely on userService.getUser without worrying about the complexities or side effects of the actual implementation.\r\n\r\n"
    },
    {
        "id": 40,
        "topic": "nodeJs",
        "question": "What is \"non-blocking\" in node.?",
        "answer": "\"Non-blocking\" in Node.JS means that operations (especially I/O tasks) are executed asynchronously, allowing the main thread to continue processing other tasks without waiting for those operations to complete. Rather than halting the execution of code until a task finishes, Node.JS uses callbacks, promises, or async/await to handle tasks once they are done. This approach helps maintain high performance and responsiveness, especially in applications that deal with many concurrent operations.\n\n Key Points\n\n- Event Loop:  \n  Node.JS uses an event loop to manage asynchronous operations. When an I/O operation is initiated (e.g., reading a file or querying a database), the operation is offloaded to a background thread or handled by the operating system. Once the task is complete, a callback or promise is resolved, allowing the event loop to process the result.\n\n- Avoiding Blocking:  \n  With non-blocking I/O, the main thread is free to continue processing other tasks while waiting for the I/O operation to finish. This avoids performance bottlenecks that could occur if the application had to wait for each I/O operation sequentially.\n\n- Scalability:  \n  Non-blocking operations enable Node.JS applications to handle a large number of concurrent connections or operations efficiently, which is especially important for server-side applications.\n\nIn summary, non-blocking I/O in Node.JS allows your application to remain responsive and efficient by not getting stuck waiting for operations to complete. This design is one of the core reasons why Node.JS performs well in handling many concurrent operations.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [
            "asynchronous execution"
        ],
        "codeExample": " Practical Example\r\n\r\nConsider an example where you read a file:\r\n\r\n\r\nconst fs = require('fs');\r\n\r\nconsole.log('Before reading file');\r\n\r\nfs.readFile('example.txt', 'utf8', (err, data) => {\r\n  if (err) {\r\n    console.error('Error reading file:', err);\r\n    return;\r\n  }\r\n  console.log('File contents:', data);\r\n});\r\n\r\nconsole.log('After reading file');\r\n\r\n\r\nExplanation:\r\n\r\n- Synchronous Flow:  \r\n  The first and last console.log statements are executed immediately.\r\n  \r\n- Non-blocking I/O:  \r\n  The fs.readFile function starts reading the file in a non-blocking manner. Instead of waiting for the file read to complete, Node.JS continues to execute the next line of code.\r\n  \r\n- Callback Execution:  \r\n  Once the file has been read, the callback function is executed with the file content, logging it to the console.\r\n\r\n"
    },
    {
        "id": 41,
        "topic": "nodeJs",
        "question": "Can you access DOM in Node.JS?",
        "answer": "No, you cannot access the DOM in Node.JS.JSJS The DOM is a browser-specific API that allows for the manipulation of HTML and XML documents. Since Node.JS does not run in a browser, it does not have access to the DOM.",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 42,
        "topic": "nodeJs",
        "question": "What is the advantage of using Node.JS?",
        "answer": "Node.JS is fast and scalable. Node.JS is easy to learn and use. Node.JS is well-suited for real-time applications, such as chat applications, online games, and streaming services. This is because Node.JS can handle a large number of connections and can perform non-blocking I/O operations, which makes it ideal for real-time communication.",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 43,
        "topic": "nodeJs",
        "question": " What is the primary reason for using the event-based model in Node.JS?",
        "answer": "The main reason to use the event-based model in Node.JS is performance. The event-based model allows for non-blocking I/O operations, which means that Node.JS can handle a large number of connections without using a lot of resources.",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 44,
        "topic": "nodeJs",
        "question": "What are the asynchronous tasks that should occur in an event loop?",
        "answer": "Asynchronous tasks that should occur in an event loop in Node.JS include I/O operations, timers, and callback functions. By performing these tasks asynchronously, Node.JS can handle a large number of concurrent requests without blocking the event loop.",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 45,
        "topic": "nodeJs",
        "question": "What is the purpose of the module.exports?",
        "answer": "The module. exports object in Node.JS is used to export functions, objects, or values from a module and is returned as the value of the require() function when another module requires a module.",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 46,
        "topic": "nodeJs",
        "question": "How is Node.JS better than other frameworks?",
        "answer": "Node.JS is a server-side JavaScript runtime environment built on top of the V8 JavaScript engine, the same engine that powers Google Chrome. It makes Node.JS very fast and efficient, as well as highly scalable. ",
        "tags": [
            "conceptual"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 47,
        "topic": "nodeJs",
        "question": "What is body-parser in Node.JS?",
        "answer": "Body-parser is a middleware module for Node.JS, primarily used in Express applications, that parses incoming request bodies before your handlers receive them. It makes the data available under the req.body property. Originally, body-parser was a separate package, but its functionality has been incorporated into Express (from version 4.16 onward) via built-in middleware like express.on() and express.urlencoded().\r\n\r\n Key Points\r\n\r\n- Parsing Different Content Types:  \r\n  - JSON: Parses incoming JSON payloads.\r\n  - URL-encoded: Parses URL-encoded form data.\r\n  - Raw/Text: Can also handle raw binary data or plain text, if configured.\r\n\r\n- Usage:  \r\n  Helps in accessing the data sent in the HTTP request body, which is essential for handling POST, PUT, or PATCH requests.\r\n\r\n",
        "tags": [
            "body-parser"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Example Using Express (Pre-4.16)\r\n\r\nBefore Express 4.16, you would include body-parser like this:\r\n\r\n\r\nconst express = require('express');\r\nconst bodyParser = require('body-parser');\r\nconst app = express();\r\n\r\n// Parse JSON bodies\r\napp.use(bodyParser.on());\r\n// Parse URL-encoded bodies\r\napp.use(bodyParser.urlencoded({ extended: true }));\r\n\r\napp.post('/submit', (req, res) => {\r\n  console.log(req.body); // Parsed data from the request body\r\n  res.send('Data received');\r\n});\r\n\r\napp.listen(3000, () => {\r\n  console.log('Server running on port 3000');\r\n});\r\n\r\n\r\n Example Using Express (4.16+)\r\n\r\nFrom Express 4.16 onward, you can use built-in middleware:\r\n\r\n\r\nconst express = require('express');\r\nconst app = express();\r\n\r\n// Built-in middleware to parse JSON bodies\r\napp.use(express.on());\r\n// Built-in middleware to parse URL-encoded bodies\r\napp.use(express.urlencoded({ extended: true }));\r\n\r\napp.post('/submit', (req, res) => {\r\n  console.log(req.body); // Parsed data from the request body\r\n  res.send('Data received');\r\n});\r\n\r\napp.listen(3000, () => {\r\n  console.log('Server running on port 3000');\r\n});\r\n\r\n\r\n Explanation\r\n\r\n- Middleware:  \r\n  The middleware is added to the Express app using app.use(). This ensures that for every incoming request, the body is parsed, and the resulting object is assigned to req.body.\r\n  \r\n- Configuration Options:  \r\n  The extended option in express.urlencoded() or bodyParser.urlencoded() determines how URL-encoded data is parsed. When true, it allows for rich objects and arrays to be encoded into the URL-encoded format.\r\n\r\nBody-parser (or the built-in Express parsers) simplifies working with HTTP request data, making it a fundamental component in many Node.JS web applications."
    },
    {
        "id": 48,
        "topic": "nodeJs",
        "question": "How to manage sessions in Node.JS?",
        "answer": "Session management can be done in node. by using the express-session module. It helps in saving the data in the key-value form. In this module, the session data is not saved in the cookie itself, just the session ID.\n\nManaging sessions in Node.JS typically involves using middleware to handle the creation, storage, and management of session data for users. One of the most popular solutions for session management in Node.JS is the  \"express-session \" middleware, which is used with the Express framework.\n\n       Steps to Manage Sessions in Node.JS:\n\n1.   Install Required Packages  :\n   - Install  \"express \" and  \"express-session \" using npm:\n\n    bash\n    npm install express express-session\n    \n\n2.   Set Up the Express Application  :\n   - Create an Express application and configure it to use  \"express-session \" middleware.\n\n3.   Configure Session Middleware  :\n   - Set up the session middleware with options such as the secret key, resave option, saveUninitialized option, and session store.\n\n     \n       Session Stores:\n\nBy default,  \"express-session \" stores session data in memory, which is not suitable for production use due to limited scalability and potential data loss when the server restarts. For production, you should use a dedicated session store, such as Redis, MongoDB, or a database. You can integrate these stores using additional packages like  \"connect-redis \",  \"connect-mongo \", or  \"connect-session-knex \".\n\n     \n\n       📝Summary:\n\nManaging sessions in Node.JS involves using middleware such as  \"express-session \" to create, store, and manage session data. You configure session properties, handle session data in your routes, and optionally use a dedicated session store for production environments to ensure scalability and data persistence.",
        "tags": [
            "session-management"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "  Example Code:\n\n\nconst express = require('express');\nconst session = require('express-session');\n\nconst app = express();\nconst PORT = 3000;\n\n// Configure session middleware\napp.use(session({\n  secret: 'your-secret-key', // Secret key used to sign the session ID cookie\n  resave: false, // Prevents the session from being saved back to the store if it wasn't modified\n  saveUninitialized: false, // Prevents uninitialized sessions from being saved to the store\n  cookie: { secure: false } // In production, set secure: true if using HTTPS\n}));\n\n// Route to set session data\napp.get('/set-session', (req, res) => {\n  req.session.user = {\n    name: 'John Doe',\n    email: 'john.doe@example.com'\n  };\n  res.send('Session data set');\n});\n\n// Route to access session data\napp.get('/get-session', (req, res) => {\n  if (req.session.user) {\n    res.send( \"User: ${req.session.user.name}, Email: ${req.session.user.email} \");\n  } else {\n    res.send('No session data found');\n  }\n});\n\n// Route to destroy session\napp.get('/destroy-session', (req, res) => {\n  req.session.destroy(err => {\n    if (err) {\n      return res.send('Error destroying session');\n    }\n    res.send('Session destroyed');\n  });\n});\n\napp.listen(PORT, () => {\n  console.log( \"Server running on port ${PORT} \");\n});\n\n\n       Explanation:\n\n1.   Installation  : The  \"express \" and  \"express-session \" packages are installed using npm.\n\n2.   Configuration  :\n   -  \"secret \": This is a required option that is used to sign the session ID cookie. It should be a secret string that is not exposed.\n   -  \"resave \": When set to  \"false \", this prevents the session from being saved back to the session store if it wasn’t modified during the request.\n   -  \"saveUninitialized \": When set to  \"false \", this prevents uninitialized sessions (i.e., new sessions that are not modified) from being saved to the session store.\n   -  \"cookie \": This option allows you to set properties on the session cookie. The  \"secure \" option should be set to  \"true \" when using HTTPS in production to ensure the cookie is only sent over secure connections.\n\n3.   Session Routes  :\n   -   Set Session  : This route sets session data for the user.\n   -   Get Session  : This route retrieves and displays the session data if it exists.\n   -   Destroy Session  : This route destroys the session, removing all session data.\n  Example with Redis Store:\n\n\nconst RedisStore = require('connect-redis')(session);\nconst redis = require('redis');\n\nconst redisClient = redis.createClient();\n\napp.use(session({\n  store: new RedisStore({ client: redisClient }),\n  secret: 'your-secret-key',\n  resave: false,\n  saveUninitialized: false,\n  cookie: { secure: false }\n}));\n"
    },
    {
        "id": 49,
        "topic": "nodeJs",
        "question": "Explain the tls module in Node.JS?",
        "answer": "The TLS (Transport Layer Security) module in Node.JS provides an API for implementing secure network communication over encrypted channels. It allows you to create TLS/SSL clients and servers, ensuring that data transmitted between them is encrypted and secure from eavesdropping or tampering.\r\n\r\n Key Features\r\n\r\n- Encryption and Security:  \r\n  TLS encrypts data between the client and server, protecting sensitive information from unauthorized access.\r\n\r\n- Certificate-Based Authentication:  \r\n  You can use certificates to verify the identity of the server (and optionally the client) during the connection handshake, ensuring that the communication is established with a trusted party.\r\n\r\n- Secure Sockets:  \r\n  The module builds on Node.JS's net module, but adds an extra layer of security by wrapping sockets with encryption.\r\n\r\n- Flexible API:  \r\n  Provides both server-side and client-side functionality, giving you control over various aspects of the TLS handshake and configuration options such as cipher suites, protocols, and more.\r\n\r\nBy using the TLS module, you can build secure applications in Node.JS that require encrypted communication channels, whether for HTTPS servers, secure TCP connections, or other scenarios where data security is paramount.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\nBelow is a simple example demonstrating how to create a TLS server and a TLS client in Node.JS.JSJS\r\n\r\n TLS Server\r\n\r\n\r\nconst tls = require('tls');\r\nconst fs = require('fs');\r\n\r\n// TLS server options with a self-signed certificate and private key\r\nconst options = {\r\n  key: fs.readFileSync('server-key.pem'),\r\n  cert: fs.readFileSync('server-cert.pem')\r\n};\r\n\r\nconst server = tls.createServer(options, (socket) => {\r\n  console.log('TLS connection established.');\r\n  \r\n  // Handle incoming data\r\n  socket.on('data', (data) => {\r\n    console.log('Received:', data.toString());\r\n    // Echo back the data\r\n    socket.write(Server echo: ${data});\r\n  });\r\n  \r\n  socket.on('end', () => {\r\n    console.log('Connection ended.');\r\n  });\r\n});\r\n\r\n// Listen on port 8000 for secure connections\r\nserver.listen(8000, () => {\r\n  console.log('TLS server listening on port 8000');\r\n});\r\n\r\n\r\n TLS Client\r\n\r\n\r\nconst tls = require('tls');\r\nconst fs = require('fs');\r\n\r\n// TLS client options\r\nconst options = {\r\n  // In a real-world scenario, you might want to validate the server certificate\r\n  // For testing with self-signed certificates, you can use rejectUnauthorized: false\r\n  rejectUnauthorized: false\r\n};\r\n\r\nconst client = tls.connect(8000, options, () => {\r\n  console.log('Client connected to TLS server.');\r\n  // Send a message to the server\r\n  client.write('Hello from client!');\r\n});\r\n\r\nclient.on('data', (data) => {\r\n  console.log('Received from server:', data.toString());\r\n  // End the connection after receiving the response\r\n  client.end();\r\n});\r\n\r\nclient.on('end', () => {\r\n  console.log('Client disconnected.');\r\n});\r\n\r\n\r\n Explanation\r\n\r\n- Server Setup:  \r\n  - The TLS server is created using tls.createServer() with configuration options that include the path to a private key and a certificate.  \r\n  - When a client connects, a secure TLS connection is established, and data received from the client is echoed back.\r\n\r\n- Client Setup:  \r\n  - The TLS client connects to the server using tls.connect().  \r\n  - In this example, rejectUnauthorized: false is used to allow connections to a server with a self-signed certificate, which is common in testing environments. In production, you should verify the server's certificate to ensure security.\r\n\r\n- Secure Communication:  \r\n  Both the client and server communicate over an encrypted channel. The TLS handshake ensures that the connection is secure, and subsequent data exchanges are encrypted.\r\n\r\n"
    },
    {
        "id": 50,
        "topic": "nodeJs",
        "question": "How to read command line arguments in Node.JS?",
        "answer": "In Node.JS, you can read command-line arguments passed to your script using the  \"process.argv \" array. This array contains the command-line arguments provided when the Node.JS process was launched. The first two elements of the array are reserved for the Node.JS executable path and the path to the script being executed, respectively. The subsequent elements are the actual command-line arguments.\n\n       Steps to Read Command-Line Arguments:\n\n1.   Access  \"process.argv \" Array  :\n   -  \"process.argv \" is an array where the first element is the path to the Node.JS executable, the second element is the path to the script, and the rest are the command-line arguments.\n\n2.   Parse the Arguments  :\n   - You can parse the arguments manually by iterating over the  \"process.argv \" array or use a library to make the process easier.\n\n    \n\n       Using a Library for Parsing Arguments:\n\nFor more advanced parsing, you can use libraries like  \"minimist \" or  \"yargs \" which simplify handling command-line arguments, especially when dealing with options and flags.\n\n       \n       📝Summary:\n\n-    \"process.argv \"  : Use this built-in array to access command-line arguments directly.\n-   Libraries  : Use  \"minimist \" or  \"yargs \" for more advanced parsing, including handling options and flags easily.\n\nUsing these methods, you can effectively read and parse command-line arguments in your Node.JS applications.",
        "tags": [
            "misc"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "   Example of Accessing Command-Line Arguments:\n// Access the command-line arguments\nconst args = process.argv;\n\n// The first two elements are node executable path and script path\nconst nodePath = args[0];\nconst scriptPath = args[1];\n\n// The actual command-line arguments start from the third element\nconst actualArgs = args.slice(2);\n\nconsole.log('Node.JS Path:', nodePath);\nconsole.log('Script Path:', scriptPath);\nconsole.log('Command-Line Arguments:', actualArgs);\n\n\nIf you run the script with  \"node script. arg1 arg2 arg3 \", the output will be:\n\nplaintext\nNode Path: /usr/local/bin/node\nScript Path: /path/to/script.\nCommand-Line Arguments: [ 'arg1', 'arg2', 'arg3' ]\n\n  Using  \"minimist \":\n\n1.   Install  \"minimist \"  :\n   bash\n   npm install minimist\n   \n\n2.   Parse Arguments with  \"minimist \"  :\n\n   const minimist = require('minimist');\n\n   // Parse the command-line arguments\n   const args = minimist(process.argv.slice(2));\n\n   console.log('Parsed Arguments:', args);\n   \n\n   If you run the script with  \"node script. --name=John --age=30 \", the output will be:\n\n   plaintext\n   Parsed Arguments: { _: [], name: 'John', age: 30 }\n   \n\n         Using  \"yargs \":\n\n1.   Install  \"yargs \"  :\n   bash\n   npm install yargs\n   \n\n2.   Parse Arguments with  \"yargs \"  :\n  \n   const yargs = require('yargs/yargs');\n   const { hideBin } = require('yargs/helpers');\n\n   // Parse the command-line arguments\n   const argv = yargs(hideBin(process.argv)).argv;\n\n   console.log('Parsed Arguments:', argv);\n   \n\n   If you run the script with  \"node script. --name=John --age=30 \", the output will be:\n\n   plaintext\n   Parsed Arguments: { _: [], name: 'John', age: 30, '$0': 'script.' }\n   \n"
    },
    {
        "id": 51,
        "topic": "nodeJs",
        "question": " Explain the Node.JS redis module",
        "answer": "The Node.JS Redis module is a client library for interacting with a Redis database from a Node.JS application. Redis is an in-memory data store commonly used for caching, session management, real-time analytics, and as a message broker.\r\n\r\n Key Features\r\n\r\n- High Performance:  \r\n  Since Redis is an in-memory store, it provides extremely fast read and write operations.\r\n\r\n- Data Structures Support:  \r\n  Redis supports a variety of data types such as strings, hashes, lists, sets, and sorted sets, which you can manipulate using Node.JS Redis.\r\n\r\n- Pub/Sub Messaging:  \r\n  Redis includes publish/subscribe capabilities, making it useful for real-time messaging and notification systems.\r\n\r\n- Persistence Options:  \r\n  Although Redis is in-memory, it offers mechanisms like snapshots and append-only files (AOF) for data persistence.\r\n\r\n Advanced Features\r\n\r\nThe Node.JS Redis module supports a wide range of Redis commands, allowing you to:\r\n- Work with advanced data structures like lists, sets, and sorted sets.\r\n- Use transactions and Lua scripting.\r\n- Utilize the publish/subscribe (pub/sub) model for real-time messaging.\r\n\r\nBy leveraging the Node.JS Redis module, you can build scalable and high-performance applications that benefit from Redis’s speed and versatility, whether it’s for caching, session management, or building real-time features.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Installation\r\n\r\nYou can install the Node.JS Redis module via npm:\r\n\r\nbash\r\nnpm install redis\r\n\r\n\r\n Basic Usage Example\r\n\r\nBelow is a simple example demonstrating how to connect to a Redis server, set and retrieve a key-value pair:\r\n\r\n\r\nconst redis = require('redis');\r\n\r\n// Create a Redis client. By default, it connects to localhost:6379.\r\nconst client = redis.createClient();\r\n\r\n// Listen for error events\r\nclient.on('error', (err) => {\r\n  console.error('Redis error:', err);\r\n});\r\n\r\n// Connect to Redis server\r\nclient.connect().then(() => {\r\n  console.log('Connected to Redis');\r\n\r\n  // Set a key in Redis\r\n  client.set('greeting', 'Hello, Redis!')\r\n    .then(() => {\r\n      // Retrieve the key's value\r\n      return client.get('greeting');\r\n    })\r\n    .then((value) => {\r\n      console.log('Value:', value); // Outputs: Hello, Redis!\r\n      // Close the connection when done\r\n      return client.quit();\r\n    })\r\n    .catch((err) => {\r\n      console.error('Error:', err);\r\n      client.quit();\r\n    });\r\n});\r\n\r\n\r\n Explanation\r\n\r\n- Creating a Client:  \r\n  The client is created using redis.createClient(). By default, it will connect to a Redis instance running on localhost at port 6379. You can pass configuration options if needed.\r\n\r\n- Connecting:  \r\n  The client.connect() method returns a promise that resolves when the connection to the Redis server is successfully established.\r\n\r\n- Performing Operations:  \r\n  - Set Operation: client.set('greeting', 'Hello, Redis!') stores the key-value pair in Redis.\r\n  - Get Operation: client.get('greeting') retrieves the value associated with the key.\r\n\r\n- Error Handling:  \r\n  The client listens for error events to help troubleshoot any connection or operational issues.\r\n\r\n- Closing the Connection:  \r\n  When done, client.quit() gracefully closes the connection to the Redis server.\r\n\r\n"
    },
    {
        "id": 52,
        "topic": "nodeJs",
        "question": "What is web socket?",
        "answer": "WebSockets are a protocol that provides full-duplex (multiway) communication channels over a single TCP (Transmission Control Protocol) connection, enabling real-time data exchange between a client (such as a web browser) and a server. Unlike traditional HTTP, which follows a request-response model, WebSockets allow both the client and the server to send and receive messages independently once the connection is established.\n\nKey Features of WebSockets:\n1.Full-Duplex Communication: Both the client and server can send and receive messages simultaneously.\n2.Persistent Connection: The connection remains open, reducing the overhead of establishing a new connection for each message.\n3.Low Latency: Real-time communication with minimal delay, ideal for applications requiring instant updates.\n4.Reduced Overhead: Fewer HTTP headers and reduced need for polling, leading to more efficient data transfer.\nUse Cases for WebSockets:\n5.Real-Time Applications: Chat applications, online gaming, live sports updates.\n6.Collaborative Tools: Shared document editing, collaborative coding platforms.\n7.Live Streaming: Video or audio streaming services.\n8.Notifications: Real-time alerts and notifications systems.\nHow WebSockets Work:\nHandshake: The communication begins with an HTTP handshake. The client sends an HTTP request to the server with an Upgrade header indicating the desire to establish a WebSocket connection.\nConnection Upgrade: If the server supports WebSockets, it responds with an HTTP 101 status code, upgrading the connection from HTTP to WebSocket.\nData Exchange: Once the connection is established, the client and server can exchange messages independently of each other.\nClosing the Connection: Either party can close the connection by sending a close frame, which is acknowledged by the other party.",
        "tags": [
            "sockets"
        ],
        "keyFeatures": [],
        "actionWords": [
            "multiway communication channels over a single TCP connction"
        ],
        "codeExample": "\r\n\r\n Practical Example\r\n\r\nUsing the popular Socket.IO library, which builds on WebSockets and provides fallbacks for unsupported clients:\r\n\r\n\r\n// Server-side (Node.JS using Express and Socket.IO)\r\nconst express = require('express');\r\nconst http = require('http');\r\nconst socketIo = require('socket.io');\r\n\r\nconst app = express();\r\nconst server = http.createServer(app);\r\nconst io = socketIo(server);\r\n\r\nio.on('connection', (socket) => {\r\n  console.log('A client connected.');\r\n\r\n  // Listen for a message from the client\r\n  socket.on('message', (data) => {\r\n    console.log('Received message:', data);\r\n    // Broadcast the message back to all connected clients\r\n    io.emit('message', data);\r\n  });\r\n\r\n  socket.on('disconnect', () => {\r\n    console.log('A client disconnected.');\r\n  });\r\n});\r\n\r\nserver.listen(3000, () => {\r\n  console.log('Server listening on port 3000');\r\n});\r\n\r\n\r\nhtml\r\n<!-- Client-side (HTML and JavaScript) -->\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title>Socket.IO Example</title>\r\n</head>\r\n<body>\r\n  <h1>WebSocket Example</h1>\r\n  <input id=\"message\" placeholder=\"Type a message\">\r\n  <button onclick=\"sendMessage()\">Send</button>\r\n  <ul id=\"messages\"></ul>\r\n\r\n  <!-- Include Socket.IO client library -->\r\n  <script src=\"/socket.io/socket.io.\"></script>\r\n  <script>\r\n    const socket = io('http://localhost:3000');\r\n\r\n    socket.on('connect', () => {\r\n      console.log('Connected to the server.');\r\n    });\r\n\r\n    socket.on('message', (data) => {\r\n      const li = document.createElement('li');\r\n      li.textContent = data;\r\n      document.getElementById('messages').appendChild(li);\r\n    });\r\n\r\n    function sendMessage() {\r\n      const message = document.getElementById('message').value;\r\n      socket.emit('message', message);\r\n      document.getElementById('message').value = '';\r\n    }\r\n  </script>\r\n</body>\r\n</html>\r\n\r\n\r\n Explanation\r\n\r\n- Server-Side:  \r\n  The server creates an HTTP server and attaches Socket.IO to handle WebSocket connections. When a client connects, it listens for messages and broadcasts them back to all clients.\r\n\r\n- Client-Side:  \r\n  The client loads the Socket.IO library, establishes a connection with the server, and provides UI elements to send and display messages in real time.\r\n\r\nIn summary, WebSockets enable efficient real-time communication by maintaining a persistent, bidirectional connection, making them ideal for dynamic, interactive applications."
    },
    {
        "id": 53,
        "topic": "nodeJs",
        "question": "Explain the util module in Node.JS",
        "answer": "The  \"util \" module in Node.JS provides utility functions that are useful for developers. These functions help with debugging, formatting, and working with objects, among other tasks. It is part of Node.JS's core library, so you don't need to install anything extra to use it.\n\n       Key Functions and Features of the  \"util \" Module:\n\n1.    \"util.format() \"  :\n   - Similar to  \"printf \" in C or  \"sprintf \" in other languages, it returns a formatted string using the first argument as a printf-like format.\n   - Example:  \"util.format('%s:%s', 'foo', 'bar') \" returns  \"'foo:bar' \".\n\n2.    \"util.inspect() \"  :\n   - Converts any object to a string, primarily used for debugging.\n   - Provides options to customize the output, such as depth, colors, and more.\n   - Example:  \"util.inspect(obj, { showHidden: true, depth: null, colors: true }) \".\n\n3.    \"util.promisify() \"  :\n   - Converts a callback-based function to a Promise-based one, making it easier to work with async/await.\n   - Example:  \"const readFile = util.promisify(fs.readFile); \".\n\n4.    \"util.callbackify() \"  :\n   - Converts a function that returns a Promise into a callback-based function.\n   - Example:  \"const callbackFunction = util.callbackify(promiseFunction); \".\n\n5.    \"util.types \"  :\n   - Contains various type-checking functions that are more precise than  \"typeof \".\n   - Example:  \"util.types.isDate(new Date()) \" returns  \"true \".\n\n6.    \"util.inherits() \"  :\n   - Sets up prototype inheritance between two constructors.\n   - Example:  \"util.inherits(SubClass, SuperClass); \".\n\n     \n\n       📝Summary:\n\nThe  \"util \" module in Node.JS offers a variety of utility functions that can simplify and enhance your development workflow. Whether you need to format strings, inspect objects, handle Promises, or set up inheritance, the  \"util \" module provides the tools you need. Its functions are especially useful for debugging, working with callbacks and Promises, and performing type checks.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [
            "built in collection of utility functions"
        ],
        "codeExample": "The util module in Node.JS is a built-in collection of utility functions that simplify common tasks, such as string formatting, debugging, working with asynchronous code, and inheritance. It provides several helper methods that make it easier to write clean and maintainable code.\r\n\r\n Key Functions and Features\r\n\r\n- String Formatting:  \r\n  - util.format(): Similar to printf in C, it formats strings using placeholders.\r\n  \r\n  const util = require('util');\r\n  const formatted = util.format('Hello, %s! You have %d new messages.', 'Alice', 5);\r\n  console.log(formatted); // Output: Hello, Alice! You have 5 new messages.\r\n  \r\n\r\n- Promisification:  \r\n  - util.promisify(): Converts callback-based functions into functions that return Promises, allowing you to use async/await.\r\n  \r\n  const fs = require('fs');\r\n  const util = require('util');\r\n\r\n  // Convert fs.readFile to a promise-based function\r\n  const readFileAsync = util.promisify(fs.readFile);\r\n\r\n  async function readMyFile() {\r\n    try {\r\n      const data = await readFileAsync('example.txt', 'utf8');\r\n      console.log('File content:', data);\r\n    } catch (err) {\r\n      console.error('Error reading file:', err);\r\n    }\r\n  }\r\n\r\n  readMyFile();\r\n  \r\n\r\n- Debug Logging:  \r\n  - util.debuglog(): Provides a way to create conditional debug logging that can be enabled via environment variables.\r\n  \r\n  const util = require('util');\r\n  const debug = util.debuglog('myapp');\r\n\r\n  debug('This is a debug message from myapp');\r\n  // To see the output, run the app with: NODE_DEBUG=myapp node app.\r\n  \r\n\r\n- Deprecation Warnings:  \r\n  - util.deprecate(): Marks a function as deprecated and prints a warning message when the function is used.\r\n  \r\n  const util = require('util');\r\n\r\n  const oldFunction = util.deprecate(() => {\r\n    console.log('This function is deprecated');\r\n  }, 'oldFunction() is deprecated. Use newFunction() instead.');\r\n\r\n  oldFunction(); // Will log a warning message along with its execution.\r\n  \r\n\r\n- Inheritance Helpers:  \r\n  - util.inherits(): Provides a way to implement classical inheritance between JavaScript constructor functions.\r\n  \r\n  const util = require('util');\r\n\r\n  function Parent() {\r\n    this.name = 'Parent';\r\n  }\r\n\r\n  Parent.prototype.sayHello = function() {\r\n    console.log(Hello from ${this.name});\r\n  };\r\n\r\n  function Child() {\r\n    Parent.call(this);\r\n    this.name = 'Child';\r\n  }\r\n\r\n  // Inherit from Parent\r\n  util.inherits(Child, Parent);\r\n\r\n  const child = new Child();\r\n  child.sayHello(); // Output: Hello from Child\r\n  \r\n\r\n 📝Summary:\r\n\r\nThe util module in Node.JS is a versatile toolkit that helps you:\r\n- Format strings in a standardized way.\r\n- Convert callback-based APIs to Promise-based ones, simplifying asynchronous code.\r\n- Manage debug logging and deprecation warnings.\r\n- Implement inheritance patterns in a cleaner fashion.\r\n\r\nThese utilities are designed to streamline common programming tasks and enhance code readability and maintainability in Node.JS applications."
    },
    {
        "id": 54,
        "topic": "nodeJs",
        "question": "Explain DNS module in Node.JS",
        "answer": "The DNS (Domain Name System) module in Node.JS provides functions to perform DNS lookups and to resolve hostnames into IP addresses, and vice versa. It is used to interact with the DNS infrastructure of the internet, which is essential for networking applications.\r\n\r\n       Key Features of the DNS Module:\r\n\r\n1.   DNS Lookups  : Resolving domain names to IP addresses.\r\n2.   DNS Records  : Querying different types of DNS records (A, AAAA, MX, TXT, etc.).\r\n3.   Reverse Lookups  : Resolving IP addresses back to hostnames.\r\n\r\n       Functions in the DNS Module:\r\n\r\n1.    \"dns.lookup() \"  :\r\n   - Resolves a hostname (e.g.,  \"example.com \") into its corresponding IP address.\r\n   - Uses the operating system's DNS resolution facilities and is more like a  \"getaddrinfo(3) \".\r\n\r\n2.    \"dns.resolve() \"  :\r\n   - Resolves a hostname into an array of the resource records specified by the type (e.g., A, AAAA, MX).\r\n   - Bypasses the operating system's local resolver and uses an independent DNS query.\r\n\r\n3.    \"dns.reverse() \"  :\r\n   - Performs a reverse DNS query that resolves an IP address to an array of hostnames.\r\n\r\n4.    \"dnsPromises \"  :\r\n   - Provides promise-based versions of DNS functions, allowing the use of async/await.\r\n\r\n       ⭐Types of DNS Records:\r\n\r\n-   A Record  : Maps a domain name to an IPv4 address.\r\n-   AAAA Record  : Maps a domain name to an IPv6 address.\r\n-   MX Record  : Mail exchange records that map a domain name to a mail server.\r\n-   TXT Record  : Text records that can hold arbitrary text, often used for verification and configuration (e.g., SPF, DKIM).\r\n-   CNAME Record  : Canonical name record that maps a domain name to another domain name (alias).\r\n-   SRV Record  : Service record that defines the location of servers for specified services.\r\n-   PTR Record  : Pointer record used for reverse DNS lookups.\r\n\r\n       📝Summary:\r\n\r\nThe DNS module in Node.JS is a powerful tool for interacting with the DNS system, allowing you to perform domain name resolutions, query different types of DNS records, and conduct reverse lookups. The module provides both callback-based and promise-based (async/await) functions, making it flexible and easy to integrate into various applications. Whether you're developing a web server, a network utility, or any application that requires DNS operations, the Node.JS DNS module is essential for handling these tasks efficiently.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "       Examples:\r\n\r\n          \"dns.lookup() \" Example:\r\n\r\n\r\nconst dns = require('dns');\r\n\r\ndns.lookup('example.com', (err, address, family) => {\r\n  if (err) {\r\n    console.error('Error:', err);\r\n  } else {\r\n    console.log('Address:', address); // IP address of example.com\r\n    console.log('Address Family:', family); // IPv4 or IPv6\r\n  }\r\n});\r\n\r\n\r\n          \"dns.resolve() \" Example:\r\n\r\n\r\nconst dns = require('dns');\r\n\r\n// Resolve all IPv4 addresses (A records) for the hostname\r\ndns.resolve4('example.com', (err, addresses) => {\r\n  if (err) {\r\n    console.error('Error:', err);\r\n  } else {\r\n    console.log('IPv4 addresses:', addresses);\r\n  }\r\n});\r\n\r\n// Resolve all MX records for the domain\r\ndns.resolveMx('example.com', (err, addresses) => {\r\n  if (err) {\r\n    console.error('Error:', err);\r\n  } else {\r\n    console.log('MX records:', addresses);\r\n  }\r\n});\r\n\r\n\r\n          \"dns.reverse() \" Example:\r\n\r\n\r\nconst dns = require('dns');\r\n\r\ndns.reverse('93.184.216.34', (err, hostnames) => {\r\n  if (err) {\r\n    console.error('Error:', err);\r\n  } else {\r\n    console.log('Hostnames:', hostnames); // Hostnames corresponding to the IP address\r\n  }\r\n});\r\n\r\n\r\n          \"dnsPromises \" Example:\r\n\r\n\r\nconst dnsPromises = require('dns').promises;\r\n\r\nasync function resolveHostname() {\r\n  try {\r\n    const addresses = await dnsPromises.resolve4('example.com');\r\n    console.log('IPv4 addresses:', addresses);\r\n  } catch (err) {\r\n    console.error('Error:', err);\r\n  }\r\n}\r\n\r\nresolveHostname();\r\n\r\n\r"
    },
    {
        "id": 55,
        "topic": "nodeJs",
        "question": "Explain the concept of Punycode in Node.JS.JSJS",
        "answer": "Punycode is an encoding method used to convert Unicode strings—especially those containing non-ASCII characters—into a limited ASCII character set. This is particularly important for Internationalized Domain Names (IDNs), which need to be represented in a format that the Domain Name System (DNS) can understand.\r\n\r\n Key Points\r\n\r\n- Purpose:  \r\n  Punycode allows domain names with characters like “ü”, “ñ”, or “中文” to be encoded into a format that only uses ASCII characters. This encoding makes it possible to use a wide variety of characters in URLs while still being compatible with the DNS.\r\n\r\n- How It Works:  \r\n  The algorithm converts Unicode into an ASCII-compatible encoding (ACE) by adding a special prefix (typically xn--) to the encoded string. For example, the domain münchen becomes xn--mnchen-3ya.\r\n\r\n- Node.JS Support:  \r\n  Node.JS historically included a built-in punycode module to perform these conversions. Although it has been deprecated from the core in recent versions (Node.JS v7.0+), you can still install it via npm if needed:\r\n  bash\r\n  npm install punycode\r\n  \r\n  The module provides functions such as punycode.toASCII() to convert Unicode to Punycode and punycode.toUnicode() to convert back.\r\n\r\nIn summary, Punycode plays a crucial role in enabling internationalization on the web by ensuring that domain names with non-ASCII characters can be correctly handled by the DNS while remaining user-friendly.",
        "tags": [
            "Punycode "
        ],
        "keyFeatures": [],
        "actionWords": [
            "encoding method to convert unicode strings"
        ],
        "codeExample": " Practical Example\r\n\r\nHere's a simple example demonstrating how to use the Punycode module in Node.JS:\r\n\r\n\r\n// If using a Node.JS version where punycode is not built-in, install via npm: npm install punycode\r\nconst punycode = require('punycode/');\r\n\r\n// Convert a Unicode string to Punycode (ASCII)\r\nconst unicodeString = 'münchen';\r\nconst asciiEncoded = punycode.toASCII(unicodeString);\r\nconsole.log(Encoded: ${asciiEncoded}); // Outputs: xn--mnchen-3ya\r\n\r\n// Convert back from Punycode to Unicode\r\nconst decodedString = punycode.toUnicode(asciiEncoded);\r\nconsole.log(Decoded: ${decodedString}); // Outputs: münchen\r\n\r\n\r\n Explanation\r\n\r\n- Encoding (toASCII):  \r\n  The punycode.toASCII() function takes a Unicode string and returns its ASCII representation with the proper prefix (xn--). This is essential for ensuring that non-ASCII domain names work with systems that only support ASCII.\r\n\r\n- Decoding (toUnicode):  \r\n  Conversely, punycode.toUnicode() converts the ASCII Punycode back into the original Unicode string, making it human-readable again.\r\n\r"
    },
    {
        "id": 56,
        "topic": "nodeJs",
        "question": "Does Node.JS provide any Debugger?",
        "answer": "Yes, Node.JS provides a built-in debugger that allows developers to inspect and debug their Node.JS applications. The debugger provides features such as breakpoints, stepping through code, inspecting variables, and more, which are essential for troubleshooting issues and understanding the flow of execution in an application.\n\n       Key Features of the Node.JS Debugger:\n\n1.   Breakpoints  : Set breakpoints in the code to pause execution at specific lines or conditions.\n2.   Stepping  : Step through code execution line by line, including stepping into functions, stepping over statements, and stepping out of functions.\n3.   Variable Inspection  : Inspect the values of variables and expressions at runtime to understand their state.\n4.   Watch Expressions  : Monitor specific variables or expressions and see their values change as the program executes.\n5.   Call Stack  : View the call stack to understand the sequence of function calls leading up to the current point of execution.\n6.   Evaluate Expressions  : Evaluate expressions in the debugging context to understand their result.\n7.   Async and Event Loop Debugging  : Debug asynchronous code and events, including timers, callbacks, and event emitters.\n\n       Using the Node.JS Debugger:\n\nTo use the Node.JS debugger, you can start your Node.JS application with the  \"inspect \" or  \"inspect-brk \" flag followed by the filename of your script. This will start the debugger and allow you to connect to it using a debugging client, such as Chrome DevTools or Visual Studio Code.\n\n      \n\n1. Open your Node.JS project in Visual Studio Code.\n2. Set breakpoints in your code by clicking on the left margin next to the line numbers.\n3. Press  \"F5 \" or click the \"Run and Debug\" button to start debugging.\n4. VS Code will launch your application in debug mode, and execution will pause at the breakpoints you've set.\n5. Use the debug toolbar to step through code, inspect variables, and control the execution flow.\n\n       📝Summary:\n\nThe built-in debugger in Node.JS, along with tools like Visual Studio Code and Chrome DevTools, provides powerful capabilities for debugging Node.JS applications. With features like breakpoints, variable inspection, and async debugging, developers can effectively diagnose and resolve issues in their Node.JS code, leading to more robust and reliable applications.",
        "tags": [
            "misc"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 57,
        "topic": "nodeJs",
        "question": "What are the security implementations that are present in Node.JS?",
        "answer": "Node.JS includes several built-in modules and design patterns that help you build secure applications. While Node.JS doesn’t automatically secure your application for you, it provides tools and primitives to implement security best practices. Here are some key security implementations in Node.JS:\n\n\n\n 1. Secure Communication\n\n- TLS/SSL Support:  \n  Node.JS offers native support for encrypted connections using the TLS (Transport Layer Security) module and the HTTPS module. This lets you create secure servers and clients that encrypt data during transmission.\n\n\n\n 2. Cryptographic Functions\n\n- Crypto Module:  \n  The built-in crypto module provides cryptographic functionality, including hashing, encryption/decryption, digital signing, and key generation. These functions are crucial for tasks like password hashing, data integrity verification, and secure communications.\n\n\n\n 3. Sandboxing and Isolation\n\n- VM Module:  \n  The vm module allows you to execute code within a virtualized context (sandbox). Although not a foolproof sandbox for untrusted code, it helps isolate the execution of dynamically generated code from the main application context.\n\n- Process Isolation:  \n  Using modules like child_process, clusters, or worker threads, you can run tasks in separate processes or threads. This isolation helps contain errors or vulnerabilities in one part of your application without affecting the entire system.\n\n\n\n 4. Dependency and Configuration Management\n\n- npm Audit:  \n  Node.JS developers can use tools like npm audit to automatically check for known vulnerabilities in dependencies. Regularly updating dependencies and monitoring vulnerability reports is key to maintaining a secure application.\n\n- Environment Variables:  \n  Storing sensitive configuration (like API keys, database credentials, and secrets) in environment variables rather than hardcoding them in your source code enhances security and flexibility.\n\n\n\n 5. Security Middleware and Best Practices\n\n- Helmet:  \n  Although not built into Node.JS core, security-focused middleware such as Helmet for Express helps secure HTTP headers. Helmet can protect against common web vulnerabilities like cross-site scripting (XSS), clickjacking, and others.\n \n\n- Secure Coding Practices:  \n  Node.JS provides a secure runtime environment, but following secure coding practices—such as input validation, avoiding eval-like functions, and sanitizing user data—is essential for preventing vulnerabilities like injection attacks.\n\n\n\n 📝Summary:\n\n- Core Modules: TLS, HTTPS, and Crypto modules provide low-level primitives for secure communication and data protection.\n- Sandboxing/Isolation: The VM module and process isolation mechanisms help run code in confined environments.\n- Ecosystem Tools: Tools like npm audit and middleware such as Helmet complement the built-in features by addressing higher-level security concerns.\n- Best Practices: A secure Node.JS application relies on both the inherent capabilities of Node.JS and the developer's adherence to secure design and coding practices.\n\nTogether, these implementations and practices form the backbone of secure development in Node.JS, enabling you to build applications that are robust against various security threats.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "- Example:  \n  Creating an HTTPS server using TLS:\n  \n  const https = require('https');\n  const fs = require('fs');\n\n  const options = {\n    key: fs.readFileSync('server-key.pem'),\n    cert: fs.readFileSync('server-cert.pem')\n  };\n\n  https.createServer(options, (req, res) => {\n    res.writeHead(200);\n    res.end(\"Secure Connection Established!\");\n  }).listen(443, () => {\n    console.log('HTTPS server running on port 443');\n  });\n  \n\n\n- Example:  \n  Creating a SHA-256 hash:\n  \n  const crypto = require('crypto');\n  const hash = crypto.createHash('sha256')\n                     .update('sensitive data')\n                     .digest('hex');\n  console.log('Hash:', hash);\n  \n\n\n-Example using Helmet:\n \n  const express = require('express');\n  const helmet = require('helmet');\n  const app = express();\n\n  // Secure HTTP headers\n  app.use(helmet());\n\n  app.get('/', (req, res) => {\n    res.send('Helmet is securing your app!');\n  });\n\n  app.listen(3000, () => {\n    console.log('Server running on port 3000');\n  });\n  "
    },
    {
        "id": 58,
        "topic": "nodeJs",
        "question": "What are global objects in Node.JS?",
        "answer": "Global objects in Node.JS are objects that are available in every module without needing to import them explicitly. They form the core building blocks that you can use throughout your application and include built-in functions, classes, and variables provided by Node.JS.JSJS\r\n\r\n Common Global Objects\r\n\r\n- global:  \r\n  The top-level object in Node.JS.JSJS Any property attached to global is accessible everywhere in your application (similar to window in browsers, but used less frequently).\r\n\r\n- process:  \r\n  Provides information about and control over the current Node.JS process. It includes properties and methods for reading environment variables, handling signals, managing standard input/output, and exiting the process.\r\n\r\n- Buffer:  \r\n  A class used for handling raw binary data. It is particularly useful when dealing with streams or binary data from files and network operations.\r\n\r\n- console:  \r\n  Used for printing messages to the terminal. It offers methods like console.log(), console.error(), and console.warn().\r\n\r\n- Timers:  \r\n  Functions like setTimeout(), setInterval(), setImmediate(), and their corresponding clear methods (clearTimeout(), clearInterval(), clearImmediate()) are global. They allow you to schedule code execution after a delay or at regular intervals.\r\n\r\n- __dirname and __filename:  \r\n  These provide the directory name and file name of the current module, respectively. They are useful for constructing file paths dynamically.\r\n\r\n- require, module, and exports:  \r\n  These are used for module management. require is a function to import modules, module represents the current module, and exports is the object that the module exports.\r\n\r\nIn summary, Node.JS global objects provide essential functionality that is accessible throughout your application, helping you interact with the environment, manage modules, handle binary data, and more, without the need for explicit imports.",
        "tags": [
            "globa-objects"
        ],
        "keyFeatures": [],
        "actionWords": [
            "objects that are available in every modules without needing to import"
        ],
        "codeExample": " Example Usage\r\n\r\n\r\nconsole.log('This file is located at:', __filename);\r\nconsole.log('This file is in directory:', __dirname);\r\n\r\nconsole.log('Node.JS version:', process.version);\r\n\r\nconst buf = Buffer.from('Hello, World!');\r\nconsole.log('Buffer content:', buf.toString());\r\n\r\n\r\n Explanation\r\n\r\n- No Imports Required:  \r\n  These globals are available by default in any Node.JS module. You don't need to require or import them explicitly.\r\n\r\n- Scoped to the Module:  \r\n  Although global objects are accessible everywhere, each module in Node.JS has its own scope. For example, while __dirname and __filename are global within a module, they reflect the location of that module rather than a universal file path.\r\n\r\n- Central Role in Node.JS:  \r\n  These objects play a vital role in application development—whether you're handling asynchronous operations with timers, processing binary data with Buffers, or managing modules with require.\r\n\r"
    },
    {
        "id": 59,
        "topic": "nodeJs",
        "question": "Explain Node.JS exit codes.",
        "answer": "Node.JS exit codes are numerical values that indicate the status of a process when it terminates. They serve as a communication mechanism between your application and the operating system (or other processes) to signal whether the execution was successful or if an error occurred.\r\n\r\n 🌞Key Concepts\r\n\r\n- Success vs. Failure:\r\n  - 0: An exit code of 0 means the process completed successfully.\r\n  - Non-zero: Any non-zero exit code indicates an error or abnormal termination. For example, 1 is commonly used for general errors.\r\n\r\n- Setting Exit Codes:\r\n  - Immediate Exit:  \r\n    You can immediately terminate a Node.JS process with a specific exit code using process.exit(code). For example:\r\n    \r\n    process.exit(1); // Terminates the process with an exit code of 1 (error)\r\n    \r\n  - Deferred Exit:  \r\n    Alternatively, you can set process.exitCode to a non-zero value. This tells Node.JS to use that code when the event loop is empty and the process naturally exits:\r\n    \r\n    process.exitCode = 1;\r\n    // The process will exit with code 1 when all tasks are complete\r\n    \r\n\r\n- Automatic Exit Codes:\r\n  - Uncaught exceptions or unhandled promise rejections will cause Node.JS to exit with a non-zero code (usually 1).\r\n  - When a process is terminated due to an external signal (like SIGTERM), the exit code is often computed as 128 + signalNumber.\r\n\r\n 📝Summary:\r\n\r\n- 0 indicates success.  \r\n  The process has finished without any errors.\r\n  \r\n- Non-zero values indicate failure.  \r\n  They signal that some error or abnormal termination occurred.\r\n  \r\n- Use process.exit() or process.exitCode:  \r\n  These allow you to explicitly control the exit code based on the execution flow or error conditions.\r\n\r\nBy managing exit codes appropriately, you can make your Node.JS applications more robust and informative, particularly when integrating with other systems or automating tasks where the exit status is used to trigger further actions.",
        "tags": [
            "exit codes"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\n\r\n// Simulate an error condition:\r\nconst someCriticalError = true;\r\n\r\nif (someCriticalError) {\r\n  console.error('A critical error occurred.');\r\n  // Immediately exit with a non-zero code to indicate failure.\r\n  process.exit(1);\r\n} else {\r\n  console.log('Operation completed successfully.');\r\n  process.exit(0);\r\n}\r\n\r\n// Alternatively, setting the exitCode property:\r\nconst anotherErrorCondition = false;\r\nif (anotherErrorCondition) {\r\n  console.error('An error occurred, but we allow the process to complete.');\r\n  process.exitCode = 1;\r\n}\r\n// The process will exit with the code set in process.exitCode when done.\r\n\r\n\r\n"
    },
    {
        "id": 60,
        "topic": "nodeJs",
        "question": "Difference between setImmediate() and process.nextTick() methods",
        "answer": "Both process.nextTick() and setImmediate() schedule callbacks to be executed asynchronously, but they do so at different points in the Node.JS event loop:\r\n\r\n process.nextTick()\r\n\r\n- Execution Timing:  \r\n  Schedules the callback to run immediately after the current operation completes, before the event loop proceeds to the next phase. This means it runs before any I/O events, timers, or setImmediate() callbacks.\r\n\r\n- 💡Use Cases:  \r\n  - Useful when you need to defer execution of a function until the current call stack has cleared.\r\n  - Can be used for recursion or cleanup tasks that should happen before I/O.\r\n\r\n- Caution:  \r\n  Overusing process.nextTick() can cause the event loop to starve, delaying I/O operations and other callbacks.\r\n\r\n setImmediate()\r\n\r\n- Execution Timing:  \r\n  Schedules the callback to run on the next iteration of the event loop, specifically in the \"check\" phase. This means it executes after I/O events have been processed.\r\n\r\n- 💡Use Cases:  \r\n  - Suitable for deferring execution until after I/O events.\r\n  - Useful when you want to ensure that your callback runs in the next cycle, giving Node.JS a chance to process other events.\r\n\r\n 📝Summary:\r\n\r\n- process.nextTick(): Executes before the event loop continues to the next phase, ensuring that its callback runs as soon as possible.\r\n- setImmediate(): Executes on the next iteration of the event loop, after I/O events, making it a better choice for deferring work without blocking I/O.\r\n\r\nChoosing between the two depends on how urgently you need your callback to run relative to other events in your application.",
        "tags": [
            "setImmediate vs porcess.next"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\n\r\nconsole.log('Start');\r\n\r\nprocess.nextTick(() => {\r\n  console.log('process.nextTick callback');\r\n});\r\n\r\nsetImmediate(() => {\r\n  console.log('setImmediate callback');\r\n});\r\n\r\nconsole.log('End');\r\n\r\n\r\nExpected Output:\r\n\r\nStart\r\nEnd\r\nprocess.nextTick callback\r\nsetImmediate callback\r\n\r\n\r\n Explanation\r\n\r\n1. Synchronous Execution:  \r\n   The console.log('Start') and console.log('End') run immediately.\r\n\r\n2. process.nextTick:  \r\n   The callback passed to process.nextTick() is executed after the current stack clears, so it runs before moving to the next event loop phase.\r\n\r\n3. setImmediate:  \r\n   The callback passed to setImmediate() is queued to run in the \"check\" phase of the next event loop iteration, so it executes after process.nextTick() and any I/O events.\r\n\r"
    },
    {
        "id": 61,
        "topic": "nodeJs",
        "question": "What is REPL in Node.JS?",
        "answer": "REPL in Node.JS stands for Read, Evaluate, Print, and Loop. It is a computer environment similar to the shell which is useful for writing and debugging code as it executes the code in one go.",
        "tags": [
            "repl"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 62,
        "topic": "nodeJs",
        "question": "How to import a module in Node.JS?",
        "answer": "We use the require module to import the External libraries in Node.JS.JSJS The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 63,
        "topic": "nodeJs",
        "question": "What is the difference between Node.JS and AJAX?",
        "answer": "Node.JS and AJAX serve very different purposes in web development:\r\n\r\n\r\n\r\n Node.JS\r\n\r\n- What It Is:  \r\n  Node.JS is a JavaScript runtime built on Chrome’s V8 engine that allows you to execute JavaScript on the server side. It enables building scalable, high-performance network applications.\r\n\r\n- Primary 💡Use Cases:  \r\n  - Server-side development (e.g., building web servers, APIs, and real-time applications).\r\n  - Backend operations such as file system access, database interactions, and server logic.\r\n  - Running JavaScript outside the browser.\r\n\r\n- Characteristics:  \r\n  - Event-driven and Non-blocking I/O: Optimized for handling many simultaneous connections.\r\n  - Single-threaded but Highly Scalable: Uses an event loop and asynchronous programming.\r\n  - Built-in Modules: Provides tools for networking, file system operations, and more.\r\n\r\n\r\n\r\n AJAX\r\n\r\n- What It Is:  \r\n  AJAX (Asynchronous JavaScript and XML) is a set of techniques used in client-side web development to communicate with servers asynchronously. This allows a web page to send and receive data in the background without requiring a full page reload.\r\n\r\n- Primary 💡Use Cases:  \r\n  - Dynamically updating parts of a webpage.\r\n  - Making background HTTP requests (GET, POST, etc.) to fetch or send data.\r\n  - Enhancing user experience by enabling real-time data updates without reloading the entire page.\r\n\r\n- Characteristics:  \r\n  - Asynchronous Communication: Helps maintain a responsive user interface.\r\n  - Client-Side Technology: Operates within the browser.\r\n  - Formats: While “XML” is in the name, AJAX typically works with JSON nowadays.\r\n\r\n\r\n\r\n 📝Summary: of Differences\r\n\r\n- Environment:  \r\n  - Node.JS: Runs on the server; it’s a runtime environment for executing JavaScript outside the browser.\r\n  - AJAX: Runs in the browser; it’s a client-side technique for making asynchronous HTTP requests.\r\n\r\n- Purpose:  \r\n  - Node.JS: Used for building scalable server-side applications and handling backend operations.\r\n  - AJAX: Used to enhance user experience by updating web pages asynchronously without full page reloads.\r\n\r\n- Scope:  \r\n  - Node.JS: Provides a full server-side environment with access to the file system, network, and various system resources.\r\n  - AJAX: Focuses on communication between the browser and the server to fetch or send data asynchronously.\r\n\r\nIn short, Node.JS is a platform for server-side development, while AJAX is a technique used on the client side to interact with servers asynchronously.",
        "tags": [
            "node vs ajax"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 64,
        "topic": "nodeJs",
        "question": " How to write hello world using node.?",
        "answer": "",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log( \"Server running at http://${hostname}:${port}/ \");\n});\n"
    },
    {
        "id": 65,
        "topic": "nodeJs",
        "question": "Explain crypto module in Node.JS",
        "answer": "The crypto module in Node.JS is a built-in library that provides cryptographic functionality, including wrappers for OpenSSL’s hash, HMAC, cipher, decipher, sign, and verify functions. It enables developers to perform secure data operations directly within a Node.JS application.\r\n\r\n\r\n\r\n Key Features\r\n\r\n- Hashing:  \r\n  Generate hashes (e.g., SHA-256, MD5) for data integrity checks. Hash functions take an input (or \"message\") and return a fixed-size string of characters, which is typically a digest that uniquely represents the input.\r\n\r\n- HMAC (Hash-based Message Authentication Code):  \r\n  Create message authentication codes using a cryptographic hash function and a secret key to verify both the data integrity and the authenticity of a message.\r\n\r\n- Encryption and Decryption:  \r\n  Provides symmetric encryption and decryption methods using algorithms like AES. This is useful for securely storing or transmitting sensitive data.\r\n\r\n- Digital Signatures:  \r\n  Allows you to sign data (using private keys) and verify signatures (using public keys) to ensure that data has not been tampered with and to authenticate the sender.\r\n\r\n- Random Data Generation:  \r\n  Generate cryptographically strong pseudo-random data (for tokens, unique identifiers, or cryptographic keys) using functions like crypto.randomBytes().\r\n\r\n\r\n\r\n\r\n\r\n 📝Summary:\r\n\r\nThe crypto module in Node.JS is essential for implementing security features such as data integrity, authentication, and encryption. Whether you need to hash passwords, encrypt sensitive data, or generate secure tokens, the crypto module provides the tools to help you build secure applications.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example: Creating a SHA-256 Hash\r\n\r\nHere’s a simple example that demonstrates how to use the crypto module to create a SHA-256 hash of a string:\r\n\r\n\r\nconst crypto = require('crypto');\r\n\r\nconst data = 'Hello, secure world!';\r\nconst hash = crypto.createHash('sha256')\r\n                   .update(data)\r\n                   .digest('hex');\r\n\r\nconsole.log(SHA-256 Hash: ${hash});\r\n\r\n\r\nExplanation:\r\n\r\n1. Importing the Module:  \r\n   The crypto module is loaded using require('crypto').\r\n\r\n2. Creating a Hash Object:  \r\n   crypto.createHash('sha256') creates a hash object that will use the SHA-256 algorithm.\r\n\r\n3. Updating the Hash:  \r\n   The update() method feeds the data (in this case, the string) into the hash object.\r\n\r\n4. Finalizing the Hash:  \r\n   The digest('hex') method computes the final hash and outputs it in hexadecimal format.\r\n\r\n\r\n\r\n Additional Examples\r\n\r\n Symmetric Encryption Example\r\n\r\nEncrypting and decrypting data using AES-256:\r\n\r\n\r\nconst crypto = require('crypto');\r\n\r\nconst algorithm = 'aes-256-cbc';\r\nconst password = 'StrongPassword123!';\r\nconst key = crypto.scryptSync(password, 'salt', 32); // Generate a 256-bit key from the password\r\nconst iv = crypto.randomBytes(16); // Initialization vector\r\n\r\n// Encrypting the data\r\nfunction encrypt(text) {\r\n  const cipher = crypto.createCipheriv(algorithm, key, iv);\r\n  let encrypted = cipher.update(text, 'utf8', 'hex');\r\n  encrypted += cipher.final('hex');\r\n  return { iv: iv.toString('hex'), encryptedData: encrypted };\r\n}\r\n\r\n// Decrypting the data\r\nfunction decrypt(encrypted) {\r\n  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(encrypted.iv, 'hex'));\r\n  let decrypted = decipher.update(encrypted.encryptedData, 'hex', 'utf8');\r\n  decrypted += decipher.final('utf8');\r\n  return decrypted;\r\n}\r\n\r\nconst data = 'Sensitive information!';\r\nconst encrypted = encrypt(data);\r\nconsole.log('Encrypted:', encrypted);\r\n\r\nconst decrypted = decrypt(encrypted);\r\nconsole.log('Decrypted:', decrypted);\r\n\r\n\r\nExplanation:\r\n\r\n- Key Derivation:  \r\n  The crypto.scryptSync function derives a 32-byte key from a password and salt.\r\n- Initialization Vector (IV):  \r\n  A random IV is generated to ensure encryption randomness.\r\n- Encryption:  \r\n  crypto.createCipheriv() creates a cipher instance. The data is encrypted in chunks and finalized to produce the encrypted string.\r\n- Decryption:  \r\n  crypto.createDecipheriv() is used in reverse to decrypt the data back to its original form.\r\n\r\n"
    },
    {
        "id": 66,
        "topic": "nodeJs",
        "question": " Is cryptography supported in Node.JS?",
        "answer": "Yes, cryptography is supported in Node.JS through the built-in crypto module. This module provides various cryptographic functionalities, including encryption, decryption, hashing, and digital signature generation and verification. It allows developers to implement secure communication, data integrity, and authentication mechanisms in their Node.JS applications.",
        "tags": [
            "misc"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 67,
        "topic": "nodeJs",
        "question": "What is a passport in Node.JS?",
        "answer": "Passport (often referred to as Passport.) is a popular authentication middleware for Node.JS.JSJS It provides a simple, consistent interface for handling authentication in your applications and supports a wide range of authentication strategies.\n\n Key Points\n\n- Modular and Flexible:  \n  Passport is designed to be unobtrusive, meaning it can be easily integrated into any Express-based application without imposing a rigid structure. It allows you to choose from over 500 authentication strategies, including username and password (local), OAuth (for services like Facebook, Google, and Twitter), JWT, and many others.\n\n- Middleware-Based:  \n  Passport works as middleware for Express (or similar frameworks), which means it intercepts requests, processes authentication, and then passes control to the next middleware if authentication is successful.\n\n- Session Management:  \n  Passport can be configured to maintain user sessions, so once a user is authenticated, their session is maintained across multiple requests.\n\n\n 📝Summary:\n\nPassport in Node.JS is an authentication middleware that simplifies the process of implementing secure authentication. Its modular design allows you to plug in various authentication strategies, making it highly adaptable to different types of applications and authentication requirements.",
        "tags": [
            "library"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\n\nBelow is an example of how you might set up Passport for local authentication in an Express application:\n\n\nconst express = require('express');\nconst session = require('express-session');\nconst passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\nconst app = express();\n\n// Dummy user store for demonstration purposes\nconst users = [\n  { id: 1, username: 'user1', password: 'password123' } // In production, passwords should be hashed\n];\n\n// Configure Passport LocalStrategy\npassport.use(new LocalStrategy((username, password, done) => {\n  const user = users.find(u => u.username === username);\n  if (!user) {\n    return done(null, false, { message: 'Incorrect username.' });\n  }\n  if (user.password !== password) {\n    return done(null, false, { message: 'Incorrect password.' });\n  }\n  return done(null, user);\n}));\n\n// Serialize and deserialize user information for sessions\npassport.serializeUser((user, done) => {\n  done(null, user.id);\n});\n\npassport.deserializeUser((id, done) => {\n  const user = users.find(u => u.id === id);\n  done(null, user);\n});\n\n// Middleware Setup\napp.use(express.urlencoded({ extended: false }));\napp.use(session({\n  secret: 'secret-key',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(passport.initialize());\napp.use(passport.session());\n\n// Define login route\napp.post('/login',\n  passport.authenticate('local', { successRedirect: '/profile', failureRedirect: '/login' })\n);\n\n// Protected route\napp.get('/profile', (req, res) => {\n  if (req.isAuthenticated()) {\n    res.send(Hello, ${req.user.username}!);\n  } else {\n    res.redirect('/login');\n  }\n});\n\n// Simple login form for demonstration\napp.get('/login', (req, res) => {\n  res.send(\n    <h1>Login</h1>\n    <form method=\"post\" action=\"/login\">\n      <div>\n        <label>Username:</label>\n        <input type=\"text\" name=\"username\"/>\n      </div>\n      <div>\n        <label>Password:</label>\n        <input type=\"password\" name=\"password\"/>\n      </div>\n      <div>\n        <input type=\"submit\" value=\"Log In\"/>\n      </div>\n    </form>\n  );\n});\n\napp.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});\n\n\n Explanation\n\n- Local Strategy:  \n  We set up a local strategy using passport-local, which checks a username and password against a dummy user store.\n\n- Session Handling:  \n  Passport serializes the user ID into the session and deserializes it on subsequent requests to maintain the user session.\n\n- Routes:  \n  The /login route uses Passport’s authenticate method to process login requests. Upon successful authentication, the user is redirected to a protected route (/profile).\n"
    },
    {
        "id": 68,
        "topic": "nodeJs",
        "question": " Explain the use of passport module in Node.JS",
        "answer": "The passport module is used for adding authentication features to our website or web app. It implements authentication measure which helps to perform sign-in operations.",
        "tags": [
            "library"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 69,
        "topic": "nodeJs",
        "question": "How can we implement authentication and authorization in Node.JS?",
        "answer": "Authentication is the process of verifying a user’s identity while authorization is determining what actions can be performed. We use packages like Passport and JWT to implement authentication and authorization.",
        "tags": [
            "auth"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 70,
        "topic": "nodeJs",
        "question": "What is Multer ?",
        "answer": "Multer is a middleware for Node.JS that simplifies handling file uploads by parsing incoming multipart/form-data requests. It's commonly used with Express to process file uploads from HTML forms.\r\n\r\n Key Features\r\n\r\n- Multipart/Form-Data Parsing:  \r\n  Multer efficiently parses forms that include file uploads and makes uploaded files available on the req object.\r\n\r\n- Storage Options:  \r\n  You can configure Multer to store files either on disk (using disk storage) or in memory (using memory storage).  \r\n  - Disk Storage: Files are saved to a specified directory on your server.\r\n  - Memory Storage: Files are kept in memory as Buffer objects, which can be useful for temporary processing.\r\n\r\n- File Filtering and Limits:  \r\n  Multer allows you to specify file size limits, file type filters, and other restrictions to control what files can be uploaded.\r\n\r\n 📝Summary:\r\n\r\nMulter is a powerful tool for managing file uploads in Node.JS applications. It handles the complexity of parsing multipart/form-data, provides flexible storage options, and allows for file filtering and size limitations, making it an essential middleware for building robust upload features in web applications.",
        "tags": [
            "library"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example\r\n\r\nBelow is a basic example using Express and Multer to handle a single file upload:\r\n\r\n\r\nconst express = require('express');\r\nconst multer = require('multer');\r\n\r\n// Configure storage settings (files will be saved to the \"uploads\" directory)\r\nconst storage = multer.diskStorage({\r\n  destination: (req, file, cb) => {\r\n    cb(null, 'uploads/');\r\n  },\r\n  filename: (req, file, cb) => {\r\n    // Save the file with its original name\r\n    cb(null, file.originalname);\r\n  }\r\n});\r\n\r\n// Initialize Multer with the storage configuration\r\nconst upload = multer({ storage: storage });\r\n\r\nconst app = express();\r\n\r\n// Define a route to handle file uploads\r\napp.post('/upload', upload.single('file'), (req, res) => {\r\n  // Access file info via req.file\r\n  console.log(req.file);\r\n  res.send('File uploaded successfully.');\r\n});\r\n\r\napp.listen(3000, () => {\r\n  console.log('Server running on port 3000');\r\n});\r\n\r\n\r\n Explanation\r\n\r\n- Setting Up Storage:  \r\n  The diskStorage option lets you define the destination directory and filename for uploaded files.\r\n\r\n- Initializing Multer:  \r\n  The upload variable is a configured instance of Multer that is ready to handle file uploads.\r\n\r\n- Handling an Upload:  \r\n  The /upload route uses upload.single('file') middleware to process a single file upload. Once processed, the uploaded file’s information is available in req.file.\r\n\r\n- Response:  \r\n  After a successful upload, the server responds with a confirmation message.\r\n\r"
    },
    {
        "id": 71,
        "topic": "nodeJs",
        "question": "How to handle database connection in Node.JS?",
        "answer": "Handling database connections in Node.JS depends on the database and the library you choose, but some common patterns and best practices apply across different systems.\n\n Key Considerations\n\n1. Connection Pooling:  \n   Instead of creating a new connection for every query, use a connection pool. A pool manages a set of active connections and reuses them, reducing overhead and improving performance.\n\n2. Asynchronous Operations:  \n   Database operations are typically asynchronous. Use Promises, async/await, or callbacks to manage asynchronous operations, ensuring your application remains responsive.\n\n3. Error Handling and Reconnection:  \n   Always implement error handling to catch and log connection errors. Some libraries provide built-in mechanisms to automatically reconnect if the connection drops.\n\n4. Environment-Specific Configuration:  \n   Store connection details (host, port, username, password, etc.) in environment variables. This makes it easier to manage different environments (development, staging, production) without hardcoding sensitive data.\n\n\n Adapting to Other Databases\n\n- MySQL:  \n  Use the mysql2 package, which also supports connection pooling. The setup is very similar to the PostgreSQL example.\n  \n- MongoDB:  \n  Use the mongoose or the native MongoDB driver. With Mongoose, you connect once and Mongoose manages a pool of connections for you.\n\n- SQLite:  \n  For SQLite, use the sqlite3 package. Since SQLite is file-based, connection handling is simpler.\n\nBy following these practices, you can ensure that your Node.JS application handles database connections efficiently, remains scalable, and recovers gracefully from connection issues.",
        "tags": [
            "connection"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": " Practical Example: Using PostgreSQL with the pg Module\n\nBelow is an example of handling database connections using the pg module with connection pooling:\n\n1. Install the Package:\n\n   bash\n   npm install pg\n   \n\n2. Set Up a Connection Pool:\n\n   \n   // db.\n   const { Pool } = require('pg');\n\n   // Create a pool with configuration details\n   const pool = new Pool({\n     user: process.env.DB_USER || 'yourUsername',\n     host: process.env.DB_HOST || 'localhost',\n     database: process.env.DB_NAME || 'yourDatabase',\n     password: process.env.DB_PASSWORD || 'yourPassword',\n     port: process.env.DB_PORT || 5432,\n   });\n\n   // Export a query method for executing SQL commands\n   module.exports = {\n     query: (text, params) => pool.query(text, params),\n   };\n   \n\n3. Using the Connection Pool in Your Application:\n\n   \n   // app.\n   const express = require('express');\n   const db = require('./db');\n\n   const app = express();\n\n   app.get('/users', async (req, res) => {\n     try {\n       // Execute a query using the pool\n       const result = await db.query('SELECT  FROM users');\n       res.on(result.rows);\n     } catch (err) {\n       console.error('Database query error:', err);\n       res.status(500).on({ error: 'Internal Server Error' });\n     }\n   });\n\n   const PORT = process.env.PORT || 3000;\n   app.listen(PORT, () => {\n     console.log(Server is running on port ${PORT});\n   });\n   \n\n Explanation\n\n- Connection Pool:  \n  The Pool object from the pg module is used to manage connections. This pool automatically handles acquiring and releasing connections.\n\n- Asynchronous Querying:  \n  Using async/await in the route handler allows us to write clean, asynchronous code for querying the database.\n\n- Error Handling:  \n  Errors during database queries are caught and logged. The client is informed with a 500 status code if something goes wrong.\n\n- Environment Variables:  \n  Database configuration is read from environment variables. This helps keep sensitive data secure and allows for flexible configuration across different deployment environments."
    },
    {
        "id": 72,
        "topic": "nodeJs",
        "question": " How to handle environment variables in Node.JS?",
        "answer": "We use process.env to handle environment variables in Node.JS.JSJS We can specify environment configurations as well as keys in the .env file. To access the variable in the application, we use the “process.env.VARIABLE_NAME” syntax",
        "tags": [
            "misc"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 73,
        "topic": "nodeJs",
        "question": "How to measure the duration of async operations?",
        "answer": "The console.time and console.timeEnd methods allow you to measure the duration of a block of code. The console.time method is used to start the timer and the console.timeEnd method is used to stop the timer and log the duration to the console.\r\n\r\nThe performance.now method provides a more precise way to measure the duration of async operations. It returns the current timestamp in milliseconds, which can be used to calculate the duration of a task",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 74,
        "topic": "nodeJs",
        "question": "How to measure the performance of async operations?",
        "answer": "Measuring the duration of asynchronous operations in Node.JS can be done using several techniques. Here are a few common approaches:\n\n\n\n 1. Using console.time() and console.timeEnd()\n\nThese built-in methods provide a quick and easy way to measure elapsed time.\n\n\n\n\n\n 2. Using process.hrtime()\n\nFor more precise measurements, process.hrtime() offers high-resolution real time in [seconds, nanoseconds].\n\n\n\n\n\n 3. Using the perf_hooks Module\n\nIntroduced in Node.JS 8.5.0, the perf_hooks module provides a more standardized API for measuring performance, similar to the browser's Performance API.\n\n\n\n\n\n 📝Summary:\n\n- console.time() / console.timeEnd(): Simple and quick for basic measurements.\n- process.hrtime(): High-resolution timing, useful when you need more precision.\n- perf_hooks: Modern and standardized approach with an API similar to the browser's performance tools.\n\nEach method can be chosen based on your precision needs and preference for API style.",
        "tags": [
            "promise"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "\nconsole.time('asyncOperation');\n\nsetTimeout(() => {\n  // Simulate an asynchronous operation\n  console.timeEnd('asyncOperation'); // Logs the duration between the start and end calls\n}, 1000);\n\n\nIn this example, the timer labeled \"asyncOperation\" starts before the asynchronous task and stops when the task completes.\n\n\nconst start = process.hrtime();\n\nsetTimeout(() => {\n  const diff = process.hrtime(start);\n  const durationInMilliseconds = (diff[0]  1e9 + diff[1]) / 1e6;\n  console.log(Async operation took ${durationInMilliseconds.toFixed(3)} ms);\n}, 1000);\n\n\nHere, the difference between the start time and the time after the operation is calculated and converted to milliseconds.\n\n\nconst { performance, PerformanceObserver } = require('perf_hooks');\n\nconst start = performance.now();\n\nsetTimeout(() => {\n  const duration = performance.now() - start;\n  console.log(Async operation took ${duration.toFixed(3)} ms);\n}, 1000);\n\n\nThis example uses performance.now() to capture the time before and after the asynchronous operation, then calculates the elapsed time."
    },
    {
        "id": 75,
        "topic": "nodeJs",
        "question": "What is Libuv?",
        "answer": "Libuv is a multi-platform C library that provides an abstraction layer for asynchronous I/O operations. It powers the event loop in Node.JS, enabling non-blocking, high-performance applications across various operating systems.\r\n\r\n Key Features\r\n\r\n- Event Loop:  \r\n  Libuv implements an event loop that efficiently handles asynchronous tasks such as I/O operations, timers, and network events. This allows Node.JS to perform non-blocking operations, which is key to its scalability.\r\n\r\n- Cross-Platform Abstraction:  \r\n  Libuv abstracts away the differences between operating systems. It provides a consistent API for handling file system operations, network communication, and other I/O tasks on Unix-like systems (Linux, macOS) and Windows.\r\n\r\n- Thread Pool:  \r\n  For operations that cannot be performed asynchronously by the OS (like certain file system calls and DNS lookups), libuv uses a thread pool. This prevents blocking the main event loop while handling these tasks concurrently.\r\n\r\n- I/O Multiplexing:  \r\n  It uses various system-specific mechanisms (like epoll on Linux, kqueue on BSD, and IOCP on Windows) to efficiently monitor multiple I/O sources and process events as soon as they occur.\r\n\r\n Role in Node.JS\r\n\r\n- Foundation of Asynchronous Operations:  \r\n  Libuv is the backbone of Node’s non-blocking I/O model. It handles tasks such as network requests, file system access, and timers without blocking the main thread.\r\n\r\n- Performance and Scalability:  \r\n  By offloading blocking operations to its thread pool and managing asynchronous events through its event loop, libuv enables Node.JS to efficiently handle many concurrent connections with minimal resource overhead.\r\n\r\nIn summary, libuv is a critical component that provides Node.JS with its powerful asynchronous I/O capabilities, making it possible to build highly scalable and performant applications.",
        "tags": [
            "libuv"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 76,
        "topic": "nodeJs",
        "question": "What is the purpose of NODE_ENV?",
        "answer": "The NODE_ENV environment variable is used in Node.JS applications to define the environment in which the application is running. It is commonly used to differentiate between development, staging, and production environments. The primary purpose of NODE_ENV is to allow developers to configure their applications differently based on the environment, enabling them to manage configurations, optimizations, and behaviors specific to each environment.",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 77,
        "topic": "nodeJs",
        "question": " For Node.JS, why does Google use the V8 engine?",
        "answer": "The V8 engine, developed by Google, is open-source and written in C++. Google Chrome makes use of this engine. V8, unlike the other engines, is also utilized for the popular Node.JS runtime. V8 was initially intended to improve the speed of JavaScript execution within web browsers. Instead of employing an interpreter, V8 converts JavaScript code into more efficient machine code to increase performance. It turns JavaScript code into machine code during execution by utilizing a JIT (Just-In-Time) compiler, as do many current JavaScript engines such as SpiderMonkey or Rhino (Mozilla).",
        "tags": [],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 78,
        "topic": "nodeJs",
        "question": "What is the Difference between REST API VS GrapQL ",
        "answer": "Both REST API and GraphQL are approaches to building APIs, but they differ in design philosophy, flexibility, and data fetching patterns.\r\n\r\n\r\n\r\n REST API\r\n\r\n- Design Style:  \r\n  REST (Representational State Transfer) is an architectural style that uses stateless communication and standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.\r\n\r\n- Data Fetching:  \r\n  Clients typically request fixed data structures from predefined endpoints. Multiple endpoints may be needed to gather related data.\r\n\r\n- Versioning:  \r\n  Changes to the API structure often require versioning (e.g., v1, v2) to avoid breaking existing clients.\r\n\r\n- Over-fetching/Under-fetching:  \r\n  REST can lead to over-fetching (retrieving more data than needed) or under-fetching (requiring multiple requests to assemble all needed data) because endpoints return fixed responses.\r\n\r\n- Caching:  \r\n  REST APIs naturally support HTTP caching mechanisms.\r\n\r\n\r\n\r\n GraphQL\r\n\r\n- Design Style:  \r\n  GraphQL is a query language for APIs that allows clients to specify exactly what data they need. It uses a single endpoint and provides a flexible, strongly typed schema.\r\n\r\n- Data Fetching:  \r\n  Clients can request a precise shape and amount of data with a single query. The server responds with exactly what was asked for, minimizing over-fetching or under-fetching.\r\n\r\n- Versioning:  \r\n  GraphQL APIs are typically versionless. The schema evolves through deprecation and field-level changes rather than creating entirely new versions.\r\n\r\n- Client-Driven:  \r\n  Clients have more control over the data they retrieve, reducing the need for multiple endpoints or round trips.\r\n\r\n- Complexity:  \r\n  While GraphQL provides flexibility, it can add complexity to caching and require more sophisticated tooling on the server to handle query parsing and execution.\r\n\r\n\r\n\r\n 📝Summary:\r\n\r\n- REST API:  \r\n  - Uses multiple endpoints and standard HTTP methods.  \r\n  - Fixed responses may lead to over- or under-fetching.  \r\n  - Relies on versioning for changes.\r\n\r\n- GraphQL:  \r\n  - Uses a single endpoint with a flexible, client-driven query language.  \r\n  - Returns exactly what the client requests.  \r\n  - Often versionless, with the schema evolving over time.\r\n\r\nThe choice between REST and GraphQL depends on your application's specific needs regarding data flexibility, performance, and development complexity.",
        "tags": [
            "REST API VS GrapQL "
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "Below are two practical examples—one for a REST API and one for a GraphQL API—to illustrate the differences in how clients fetch data.\r\n\r\n\r\n\r\n REST API Example (Using Express)\r\n\r\nIn a REST API, each endpoint returns a fixed data structure. In this example, we have an endpoint /users that returns a list of users.\r\n\r\n\r\n// rest-api.\r\nconst express = require('express');\r\nconst app = express();\r\n\r\n// Dummy data\r\nconst users = [\r\n  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },\r\n  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' },\r\n  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'user' },\r\n];\r\n\r\n// REST endpoint for retrieving all users\r\napp.get('/users', (req, res) => {\r\n  res.on(users);\r\n});\r\n\r\n// REST endpoint for retrieving a single user by id\r\napp.get('/users/:id', (req, res) => {\r\n  const user = users.find(u => u.id === parseInt(req.params.id));\r\n  if (user) {\r\n    res.on(user);\r\n  } else {\r\n    res.status(404).on({ error: 'User not found' });\r\n  }\r\n});\r\n\r\napp.listen(3000, () => {\r\n  console.log('REST API running on http://localhost:3000');\r\n});\r\n\r\n\r\nHow it Works:  \r\n- The client makes a GET request to /users to receive all user information.  \r\n- If the client only needs a single user, they can query /users/:id, but the data structure is fixed.  \r\n- Over-fetching can occur if the client only needs the user's name but receives all user fields.\r\n\r\n\r\n\r\n GraphQL API Example (Using Express and Apollo Server)\r\n\r\nGraphQL lets clients specify exactly which fields they need. In this example, clients can ask for only the id and name fields from the User type.\r\n\r\n\r\n// graphql-api.\r\nconst { ApolloServer, gql } = require('apollo-server-express');\r\nconst express = require('express');\r\nconst app = express();\r\n\r\n// Dummy data\r\nconst users = [\r\n  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },\r\n  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' },\r\n  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'user' },\r\n];\r\n\r\n// GraphQL schema definition\r\nconst typeDefs = gql\r\n  type User {\r\n    id: Int!\r\n    name: String!\r\n    email: String\r\n    role: String\r\n  }\r\n\r\n  type Query {\r\n    users: [User]\r\n    user(id: Int!): User\r\n  }\r\n;\r\n\r\n// Resolvers define how to fetch the data for each schema field.\r\nconst resolvers = {\r\n  Query: {\r\n    users: () => users,\r\n    user: (_, args) => users.find(u => u.id === args.id),\r\n  },\r\n};\r\n\r\nconst server = new ApolloServer({ typeDefs, resolvers });\r\nserver.start().then(() => {\r\n  server.applyMiddleware({ app });\r\n  app.listen(4000, () => {\r\n    console.log(GraphQL API running at http://localhost:4000${server.graphqlPath});\r\n  });\r\n});\r\n\r\n\r\nHow it Works:  \r\n- The GraphQL server is set up with a single endpoint (e.g., /graphql).  \r\n- Clients send a query specifying the fields they need. For example, a client could send the following query:\r\n  graphql\r\n  {\r\n    users {\r\n      id\r\n      name\r\n    }\r\n  }\r\n  \r\n- The server responds with only the requested id and name fields for each user.  \r\n- This minimizes over-fetching because clients retrieve only the necessary data.\r\n\r\n\r\n\r\n 📝Summary: of Practical Differences\r\n\r\n- REST API:  \r\n  - Multiple endpoints for different resources.\r\n  - Returns a fixed data structure.\r\n  - May lead to over- or under-fetching if the client needs a subset of the data.\r\n\r\n- GraphQL API:  \r\n  - Single endpoint with flexible queries.\r\n  - Clients specify exactly what fields to return.\r\n  - Reduces unnecessary data transfer by returning only what is requested.\r\n\r\nThese examples demonstrate how REST and GraphQL differ in handling data retrieval. REST APIs typically serve a predefined structure, while GraphQL offers a more dynamic approach that gives the client control over the data they need."
    },
    {
        "id": 79,
        "topic": "nodeJs",
        "question": "Explain the different types of MIME , that we can use in Content-Type header",
        "answer": "In HTTP, the Content-Type header is used to indicate the media type (or MIME type) of the content being sent in a request or response. This helps the client and server understand how to process the data. Below are the commonly used content types categorized by their purposes:\n\nCommon Content Types\n1. Textual Data\ntext/plain: Plain text (e.g., logs, simple strings).\ntext/ : HTML documents.\ntext/ : Stylesheets.\ntext/ or application/: JavaScript files.\n2. JSON and XML\napplication/on: JSON format (e.g., API requests and responses).\napplication/xml: XML format.\ntext/xml: XML in text form (legacy use).\n3. Form Data\napplication/x-www-form-urlencoded: Default encoding for HTML form submissions.\nmultipart/form-data: Used for file uploads in forms.\n4. Binary Data\napplication/octet-stream: Generic binary data (e.g., file downloads, raw streams).\n5. Images\nimage/png: PNG images.\nimage/jpeg: JPEG images.\nimage/gif: GIF images.\nimage/svg+xml: SVG vector graphics.\n6. Audio\naudio/mpeg: MP3 audio.\naudio/wav: WAV audio.\naudio/ogg: Ogg audio.\n7. Video\nvideo/mp4: MP4 videos.\nvideo/ogg: Ogg videos.\nvideo/webm: WebM videos.\n8. Application-Specific\napplication/pdf: PDF documents.\napplication/zip: ZIP archives.\napplication/vnd.ms-excel: Microsoft Excel files.\napplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet: Modern Excel files (XLSX).\napplication/msword: Microsoft Word files.\n9. Special Types\napplication/soap+xml: SOAP messages in XML.\napplication/graphql: GraphQL queries.\napplication/vnd.api+on: JSON:API format for APIs.\nCustom or Vendor-Specific Types\nCustom types are often prefixed with x- or vnd. to indicate non-standard or vendor-specific usage:\n\napplication/x-custom: Custom application data.\napplication/vnd.myapp.resource+on: A custom resource using JSON.\n\nContent Negotiation\n\nThe Accept header is used to specify which content types the client can process. For example:\nAccept: application/on, text/ \n\nKey Notes\nThe Content-Type header is primarily used in:\nRequest bodies (e.g., POST, PUT).\nResponse bodies (e.g., data sent back to the client).\nOmitting or incorrectly setting Content-Type can lead to improper processing of data.",
        "tags": [
            "mime"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": 80,
        "topic": "nodeJs",
        "question": "Explain differences between OAuth, Auth, Authorization, and Authentication",
        "answer": "   Understanding OAuth, Auth, Authorization, and Authentication    \n\nThese terms are often confused, but they serve different purposes in security and access control. Let's break them down clearly:\n\n\n\n   1️⃣ Authentication (AuthN) → \"Who are you?\"  \n  Definition:    \nAuthentication verifies a user's identity. It ensures that the person or system is who they claim to be.  \n\n  Examples of Authentication:    \n-   Username + Password   (e.g., logging into Gmail)  \n-   Biometric Authentication   (e.g., fingerprint or face recognition)  \n-   Multi-Factor Authentication (MFA)   (e.g., entering an OTP sent via SMS)  \n\n🔹   Analogy:   It’s like showing your   ID card   at a club to prove you are the person on the list.  \n\n\n\n   2️⃣ Authorization (AuthZ) → \"What can you do?\"  \n  Definition:    \nAuthorization determines what actions or resources a user is allowed to access   after authentication  .  \n\n  Examples of Authorization:    \n-   Admin vs. User Roles   (Admins can delete users, while normal users cannot)  \n-   Read vs. Write Permissions   (A user can view a file but not edit it)  \n-   OAuth Scopes   (A third-party app can read your emails but not send them)  \n\n🔹   Analogy:   It’s like the   bouncer at a club   deciding whether you can enter the VIP section based on your pass.  \n\n\n\n   3️⃣ OAuth → \"Delegated Authorization\"  \n  Definition:    \nOAuth (Open Authorization) is a framework that allows third-party applications to access user data   without exposing passwords  . It is primarily used for authorization, not authentication.  \n\n  Examples of OAuth:    \n- Logging into a website using   \"Login with Google\"    \n- A fitness app requesting access to your   Google Fit data    \n- A third-party email client accessing your   Gmail inbox    \n\n🔹   Analogy:   It’s like   giving a valet your car keys   (limited access) instead of letting them drive your car home.  \n\n🔹   OAuth Flow:  \n1.   User clicks \"Login with Google.\"  \n2.   Google asks the user to approve access.  \n3.   Google issues an access token to the third-party app.  \n4.   The app can now request data from Google using the token.    \n\n\n\n   4️⃣ \"Auth\" → General Term for Authentication or Authorization  \n  Definition:    \n- \"Auth\" is a general term that could refer to   authentication (AuthN)   or   authorization (AuthZ)   depending on context.  \n\nFor example:  \n- \"Auth system\" → Can mean   both authentication and authorization.    \n- \"User Auth\" → Often refers to   authentication (logging in).    \n- \"Role-Based Auth\" → Refers to   authorization (what the user can do).    \n\n\n\n \n\n\n\n   🔹 When to Use What?  \n- Use   Authentication   to verify who a user is (e.g., logging into an app).  \n- Use   Authorization   to control what they can do (e.g., admin vs. regular user).  \n- Use   OAuth   when a third-party app needs limited access without passwords (e.g., Login with Google).  \n\nLet me know if you need a more detailed breakdown or a real-world example! 🚀",
        "tags": [
            "auth"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r0:01",
        "topic": "nodeJs",
        "question": "How can you optimize the performance of a Nodejs application?",
        "answer": "Optimizing a Nodejs application involves several strategies:  \n   - Use Asynchronous Operations: Leverage non-blocking I/O with async/await or Promises to prevent the event loop from stalling.  \n   - Clustering: Utilize the cluster module to distribute workload across multiple CPU cores.  \n   - Caching: Implement in-memory caching with tools like Redis to reduce database load.  \n   - Load Balancing: Use a load balancer (e.g., Nginx) to distribute incoming requests across multiple Nodejs instances.  \n   - Profiling: Use tools like clinic.js or --prof flag to identify bottlenecks and optimize slow code paths.  \n   - Minimize Blocking Code: Offload CPU-intensive tasks to worker threads or external services.  \n   - Optimize Dependencies: Audit and prune unnecessary npm packages to reduce startup time and memory usage.  \n   📝Summary: Performance optimization in Nodejs requires a combination of leveraging its event-driven nature, distributing workload, and profiling to address bottlenecks.",
        "tags": [
            "performance"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "1.\n const cluster = require('cluster');\n   const os = require('os');\n   if (cluster.isMaster) {\n     for (let i = 0; i < os.cpus().length; i++) {\n       cluster.fork();\n     }\n   } else {\n     require('./app'); // Your app logic\n   }\n"
    },
    {
        "id": ":r0:11",
        "topic": "nodejs",
        "question": "How do you handle uncaught exceptions in Nodejs?",
        "answer": "Uncaught exceptions in Nodejs can crash the application if not handled properly. The process.on('uncaughtException') event listener can catch these errors globally:  \r\n   - Global Handler: Attach a listener to log the error and gracefully terminate or recover.  \r\n   - Domains (Deprecated): Earlier, domains were used, but they’re now replaced by better practices like try/catch with async operations.  \r\n   - Best Practice: Use this sparingly as a last resort; prefer explicit error handling in your code. Restarting the app (e.g., with PM2) is often recommended after such an event.  \r\n   📝Summary: Handling uncaught exceptions ensures application stability, but it’s better to prevent them with robust error handling throughout your codebase.",
        "tags": [
            "ErrorHandling"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "CodeExample:  \r\n   javascript\r\n   process.on('uncaughtException', (err) => {\r\n     console.error('Uncaught Exception:', err);\r\n     process.exit(1); // Exit with failure code\r\n   });\r\n   throw new Error('This will be caught globally');\r\n     "
    },
    {
        "id": ":r0:21",
        "topic": "nodejs",
        "question": "How can you prevent SQL injection in a Nodejs application?",
        "answer": "SQL injection can be prevented in Nodejs by:\nParameterized Queries: Use prepared statements or parameterized queries with libraries like mysql2 or pg to sanitize inputs.\nORMs: Leverage ORMs like Sequelize or TypeORM that inherently escape inputs.\nInput Validation: Validate and sanitize user inputs using libraries like Joi or Validator.js.\nAvoid Raw Queries: Minimize direct string concatenation in SQL queries.\nSummary: Parameterized queries and input validation are key to preventing SQL injection, ensuring secure database interactions.",
        "tags": [
            "security"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const { Pool } = require('pg');\nconst pool = new Pool({ / config / });\nconst userInput = 'malicious; DROP TABLE users;';\npool.query('SELECT  FROM users WHERE name = $1', [userInput], (err, res) => {\n  console.log(res.rows);\n});"
    },
    {
        "id": ":r0:31",
        "topic": "nodejs",
        "question": "What is the difference between CommonJS and ES Modules in Nodejs?",
        "answer": "Nodejs supports two module systems:\nCommonJS: Default in Nodejs, uses require() and module.exports. Synchronous, well-suited for server-side due to its simplicity.\nES Modules: Introduced in ES6, uses import/export syntax. Asynchronous, aligns with browser standards, and supports tree-shaking. Enabled in Nodejs via \"type\": \"module\" in package.json or .mjs files.\nKey Differences: CommonJS is dynamic and runtime-loaded; ES Modules are static and resolved at parse time. ES Modules offer better interoperability with modern JavaScript ecosystems.\nSummary: CommonJS is traditional in Nodejs, while ES Modules bring modern JavaScript features and compatibility.",
        "tags": [
            "modules"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "// CommonJS\nconst fs = require('fs');\nmodule.exports = { foo: 'bar' };\n// ES Module\nimport fs from 'fs';\nexport const foo = 'bar';"
    },
    {
        "id": ":r0:41",
        "topic": "nodeJs",
        "question": "How do you handle CPU-intensive tasks in Nodejs?",
        "answer": "Since Nodejs is single-threaded, CPU-intensive tasks can block the event loop. Solutions include:\nWorker Threads: Use the worker_threads module to offload tasks to separate threads.\nChild Processes: Spawn external processes with child_process for heavy computations.\nExternal Services: Delegate tasks to a separate microservice or worker queue (e.g., RabbitMQ).\nSummary: Offloading CPU-intensive tasks prevents blocking the event loop, maintaining application responsiveness.",
        "tags": [
            "concurrency"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const { Worker } = require('worker_threads');\nconst worker = new Worker('worker.js', { workerData: 1000000 });\nworker.on('message', (result) => console.log(result));"
    },
    {
        "id": ":r0:51",
        "topic": "nodeJs",
        "question": "How do you write unit tests for a Nodejs application?",
        "answer": "Unit testing in Nodejs typically involves:\n-Frameworks: Use tools like Mocha, Jest, or Jasmine for test structure.\n-Assertions: Pair with assertion libraries like Chai or Node’s assert.\n-Mocking: Use Sinon.js for mocks, stubs, and spies to isolate dependencies.\n-Run Tests: Execute via npm test with a script in package.json.\nSummary: Unit tests ensure individual components work correctly, using frameworks and mocking for isolation.",
        "tags": [
            "test"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const assert = require('assert');\nconst add = (a, b) => a + b;\ndescribe('Addition', () => {\n  it('should add two numbers', () => {\n    assert.strictEqual(add(2, 3), 5);\n  });\n});"
    },
    {
        "id": ":r0:61",
        "topic": "nodejs",
        "question": "How do you detect and fix memory leaks in Nodejs?",
        "answer": "Memory leaks occur when objects persist in memory unintentionally. To detect and fix:\n-Heap Snapshots: Use Chrome DevTools or --inspect to take heap snapshots and identify retained objects.\n-Profiling Tools: Tools like node-memwatch or heapdump help monitor memory usage.\n-Fixing: Clear intervals, remove event listeners, and avoid global variables that grow unbounded.\nSummary: Proactive monitoring and cleanup prevent memory leaks from degrading performance.",
        "tags": [
            "memory"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "node --inspect app.js"
    },
    {
        "id": ":r0:71",
        "topic": "nodejs",
        "question": "How does Nodejs handle garbage collection?",
        "answer": "Nodejs relies on V8’s garbage collector:\n- Mark-and-Sweep: Identifies and frees unused memory.\n- Generational: Uses young (short-lived) and old (long-lived) generations for efficiency.\nTuning: Adjust with flags like --max-old-space-size.\nSummary: V8’s GC manages memory automatically, but tuning may be needed for high-load apps.",
        "tags": [
            "permormance"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": ""
    },
    {
        "id": ":r0:81",
        "topic": "nodejs",
        "question": "How do you create custom events in nodejs",
        "answer": "Use the EventEmitter class to create and emit custom events:\nExtend EventEmitter: Create a class that inherits from it.\nEmit and Listen: Use emit() to trigger events and on() to handle them.\nSummary: Custom events enable decoupled, event-driven architectures in Nodejs.",
        "tags": [
            "events"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const EventEmitter = require('events');\nclass MyEmitter extends EventEmitter {}\nconst emitter = new MyEmitter();\nemitter.on('customEvent', () => console.log('Event fired!'));\nemitter.emit('customEvent');"
    },
    {
        "id": ":r0:91",
        "topic": "nodejs",
        "question": "What is the purpose of the async_hooks module in Nodejs?",
        "answer": "The async_hooks module tracks asynchronous operations:\nTracing: Monitor the lifecycle of async resources (e.g., Promises, callbacks).\nDebugging: Useful for diagnosing issues in complex async flows.\nPerformance: Analyze async execution patterns.\nSummary: It provides low-level insight into Nodejs’s async behavior.",
        "tags": [
            "concurrency"
        ],
        "keyFeatures": [],
        "actionWords": [],
        "codeExample": "const async_hooks = require('async_hooks');\nconst hook = async_hooks.createHook({\n  init(asyncId, type) { console.log(Init: ${type} ${asyncId}); }\n});\nhook.enable();\nsetTimeout(() => {}, 1000);"
    }
]