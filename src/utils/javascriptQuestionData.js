export const javascriptQuestionData = [
  {
    id: 1,
    topic: "javascript",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, dynamic, and interpreted programming language that is widely used for building interactive and dynamic web applications. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. ",
    keyFeatures: [],
    actionWords: [],
    codeExample: "<div>heel</div>",
  },
  {
    id: 2,
    topic: "javascript",
    question: "Explain the meaning of An 'interpreted programming language'",
    answer:
      "An interpreted programming language is a type of programming language in which most of its implementations execute instructions directly, without the need for prior compilation into machine-language instructions. Instead of being translated into machine code at the start (like compiled languages), the source code is read and executed line by line or statement by statement by an interpreter.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 3,
    topic: "javascript",
    question: "List some key disadvantages of JavaScript ?",
    answer:
      "JavaScript, despite its widespread use and versatility, has several key disadvantages that developers need to be aware of:\n\n1.   Security Issues  :\n   -   Cross-Site Scripting (XSS)  : JavaScript can be exploited to inject malicious scripts into web pages, leading to security vulnerabilities.\n   -   Cross-Site Request Forgery (CSRF)  : Attackers can trick users into executing unwanted actions on a different website where the user is authenticated.\n   -   Code Injection  : Because JavaScript is executed on the client side, it can be manipulated by users, potentially leading to security breaches.\n\n2.   Browser Compatibility  :\n   -   Inconsistent Behavior  : Different browsers may interpret JavaScript code differently, leading to inconsistencies in how a script functions across various platforms.\n   -   Versioning Issues  : Not all users update their browsers regularly, which can result in JavaScript features not being supported by older browser versions.\n\n3.   Performance Issues  :\n   -   Single-Threaded Nature  : JavaScript is single-threaded, which means it can only execute one task at a time. This can lead to performance bottlenecks, especially with complex computations.\n   -   Blocking Behavior  : Heavy computations or blocking scripts can cause the UI to become unresponsive.\n\n4.   Lack of Debugging Facilities  :\n   -   Console-Based Debugging  : While browser developer tools have improved, debugging JavaScript can still be challenging compared to other languages that offer more advanced integrated debugging environments.\n   -   Error Handling  : JavaScript's error handling mechanisms can sometimes be less robust, making it harder to track down and fix issues.\n\n5.   Dynamic Typing  :\n   -   Type-Related Errors  : The flexibility of dynamic typing can lead to unexpected behavior and bugs that are difficult to track down, especially in large codebases.\n   -   Runtime Errors  : Many errors in JavaScript occur at runtime rather than compile time, making it harder to catch and fix issues early in the development process.\n\n6.   Global Variable Usage  :\n   -   Pollution of Global Namespace  : In JavaScript, it's easy to accidentally create global variables, which can lead to conflicts and bugs that are difficult to debug.\n   -   Encapsulation Issues  : Lack of proper encapsulation can lead to code that is harder to maintain and understand.\n\n7.   Asynchronous Programming Challenges  :\n   -   Callback Hell  : Managing asynchronous operations using callbacks can lead to deeply nested code that is difficult to read and maintain.\n   -   Complexity with Promises and async/await  : While promises and async/await simplify asynchronous programming, they still add a layer of complexity compared to synchronous code.\n\n8.   Limited Standard Library  :\n   -   Feature Gaps  : JavaScript's standard library is less comprehensive compared to some other languages, requiring developers to rely on external libraries and frameworks for additional functionality.\n\n9.   Interpreted Language Overheads  :\n   -   Performance Penalties  : As an interpreted language, JavaScript can be slower than compiled languages like C++ or Java, especially for CPU-intensive tasks.\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 4,
    topic: "javascript",
    question: "Mention some of the key feature of Jasvascript",
    answer:
      "Key Features of JavaScript:\n\n1.Client-Side Scripting: JavaScript is commonly used on the client-side (in the browser) to manipulate web page content and handle user interactions without requiring a page reload.\n\n2.Dynamic Typing: Variables in JavaScript are not bound to a specific data type, which allows for more flexible and dynamic code.\n\n3.Prototype-Based: JavaScript uses prototype-based inheritance, meaning objects can inherit properties and methods from other objects.\n\n4.Event-Driven Programming: JavaScript is designed to respond to events such as user clicks, form submissions, and mouse movements, enabling interactive web experiences.\n\n5.First-Class Functions: Functions in JavaScript are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.\n\n6.Asynchronous Programming: JavaScript supports asynchronous programming using callbacks, promises, and async/await syntax, which is essential for handling tasks like fetching data from servers.\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 5,
    topic: "javascript",
    question:
      "Difference between Loosely typed vs strongly typed vs dynamically typed language ?",
    answer:
      'The terms "loosely typed," "strongly typed," and "dynamically typed" describe different aspects of how programming languages handle types. Here\'s a breakdown of each concept and how they differ from one another:\n\n       Loosely Typed vs. Strongly Typed:\n\nThese terms describe the level of strictness a language imposes on type conversions and type checking.\n\n         Loosely Typed (Weakly Typed):\n\n-   Definition  : In a loosely typed language, the language allows more flexibility in how types are handled and converted. Implicit type conversions (also known as coercions) are common, and the language may automatically convert types to perform operations.\n-   Examples  : JavaScript, PHP, Perl\n-   Characteristics  :\n  - Implicit type coercion: The language automatically converts types as needed.\n  - Fewer type-related errors at compile-time, but potentially more at runtime.\n  - More flexibility, but can lead to unexpected behavior and bugs.\n\n   " " "\n  let x = "5";\n  let y = x  2; // y becomes 10 (string "5" is implicitly converted to number 5)\n   " " "\n\n         Strongly Typed:\n\n-   Definition  : In a strongly typed language, the language enforces strict rules on how types can be used and converted. Implicit conversions are either limited or not allowed, and type errors are caught at compile-time or runtime.\n-   Examples  : Java, Python, Haskell\n-   Characteristics  :\n  - Explicit type conversions: Types must be explicitly converted by the programmer.\n  - More type-related errors are caught at compile-time or runtime, improving reliability.\n  - Less flexibility, but more predictable behavior and fewer type-related bugs.\n\n   " " "python\n  x = "5"\n  y = int(x)  2     y becomes 10 (explicit conversion from string to int)\n   " " "\n\n       Dynamically Typed vs. Statically Typed:\n\nThese terms describe when type checking is performed.\n\n         Dynamically Typed:\n\n-   Definition  : In a dynamically typed language, types are checked at runtime. Variables can change type during execution, and the type of a variable is determined by the value it holds at any given time.\n-   Examples  : Python, JavaScript, Ruby\n-   Characteristics  :\n  - Type flexibility: Variables can change type dynamically.\n  - Easier to write and more flexible code, but potential for runtime type errors.\n  - No need to declare variable types explicitly.\n\n   " " "python\n  x = 10         x is an integer\n  x = "hello"    x is now a string\n   " " "\n\n         Statically Typed:\n\n-   Definition  : In a statically typed language, types are checked at compile-time. The type of a variable must be declared and cannot change, leading to more type safety and catching type errors before the program runs.\n-   Examples  : Java, C++, Go\n-   Characteristics  :\n  - Type consistency: Variable types are fixed after declaration.\n  - Type errors are caught early during compilation, reducing runtime errors.\n  - Requires more upfront type declarations, which can be verbose.\n\n   " " "java\n  int x = 10;     // x is declared as an integer\n  x = "hello";    // Compile-time error: incompatible types\n   " " "\n\n       Summary:\n\n-   Loosely Typed  : Languages allow implicit type conversions, offering flexibility but potentially leading to unexpected behaviors (e.g., JavaScript).\n-   Strongly Typed  : Languages enforce strict type rules, requiring explicit type conversions, leading to more reliable and predictable code (e.g., Java, Python).\n-   Dynamically Typed  : Type checking occurs at runtime, allowing variables to change types during execution (e.g., Python, JavaScript).\n-   Statically Typed  : Type checking occurs at compile-time, with variable types fixed after declaration, catching type errors early (e.g., Java, C++).\n\nUnderstanding these distinctions helps in choosing the right language for a given task and writing code that leverages the strengths of each type system.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 6,
    topic: "javascript",
    question: "What are the JavaScript Data Types?",
    answer:
      'In JavaScript, there are several data types, which can be broadly classified into two categories:   Primitive Data Types   and   Reference Data Types (Objects)  . \n\n       Primitive Data Types\n\n1.   Number  : Represents both integer and floating-point numbers.\n2.   String  : Represents a sequence of characters used to form text.\n3.   Boolean  : Represents a logical entity and can have two values:  "true " or  "false ".\n \n4.   Null  : Represents the intentional absence of any object value. It is a special keyword and only has one value:  "null ".\n  \n5.   Undefined  : Indicates that a variable has been declared but not yet assigned a value.\n   \n6.   Symbol  : Represents a unique identifier. Every symbol value returned from  "Symbol() " is unique.\n \n7.   BigInt  : Provides a way to represent whole numbers larger than the  "Number " type can handle.\n   \n       Reference Data Types (Objects)\n\n1.   Object  : Represents a collection of key-value pairs. It is the base for many other data types.\n  \n2.   Array  : A special type of object used for storing ordered collections.\n  \n3.   Function  : A callable object that can be invoked to perform a task or calculate a value.\n  \n\n4.   Date  : Used for representing dates and times.\n \n5.   RegExp  : Used for matching text with a pattern.\n  \n6.   Map  : A collection of keyed data items, similar to an object but with more features.\n\n7.   Set  : A collection of values where each value must be unique.\n ',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 7,
    topic: "javascript",
    question: "Difference between primitive vs non - primitive data types ?",
    answer:
      "\r\nThe key differences between primitive and non-primitive data types in JavaScript lie in their nature, how they are stored and accessed, and how they are handled in memory. \n\r\n       Primitive Data Types\r\n\r\n1.   Nature  :\r\n   - Primitive data types are basic and immutable, meaning their values cannot be altered after creation.\r\n\r\n2.   Storage and Access  :\r\n   - They are stored directly in the memory location associated with the variable.\r\n\r\n3.   Memory Handling  :\r\n   - Stored on the stack, making access faster.\r\n   - Each variable directly holds the value.\r\n\r\n4.   Behavior  :\r\n   - Comparison is done by value.\r\n\r\n       Non-Primitive Data Types (Reference Data Types)\r\n\r\n1.   Nature  :\r\n   - Non-primitive data types are complex and mutable, meaning their values can be changed.\r\n\r\n2.   Storage and Access  :\r\n   - They are stored as references to memory locations, not the actual data itself.\r\n\r\n3.   Memory Handling  :\r\n   - Stored on the heap, allowing for dynamic memory allocation.\r\n   - Variables hold a reference to the data, not the data itself.\r\n\r\n4.   Behavior  :\r\n   - Comparison is done by reference.\r\n\r\n       Summary\r\n\r\n-   Primitive Data Types  :\r\n  - Simple, immutable, stored directly in the variable.\r\n  - Compared by value.\r\n\r\n-   Non-Primitive Data Types  :\r\n  - Complex, mutable, stored as references.\r\n  - Compared by reference.\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 8,
    topic: "javascript",
    question: "What are undeclared and undefined variables?",
    answer:
      'Undeclared and undefined variables are both related to variable usage in JavaScript but represent different states:\r\n\r\n       Undeclared Variables:\r\n\r\nAn undeclared variable is a variable that has been used in code without being formally declared (i.e., using the  "var ",  "let ", or  "const " keywords) anywhere within the scope. Using an undeclared variable leads to a runtime error in strict mode, while in non-strict mode, JavaScript creates a global variable with that name.\r\n\r\n       Undefined Variables:\r\n\r\nAn undefined variable is a variable that has been declared but not assigned a value. When you try to access the value of an undefined variable, JavaScript returns the special value  "undefined ".\r\n\r\nIn summary:\r\n\r\n-   Undeclared variables   are those that have not been formally declared anywhere in the scope.\r\n-   Undefined variables   are those that have been declared but not yet assigned a value, resulting in the variable having the value  "undefined ".',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 9,
    topic: "javascript",
    question:
      "What do you mean by global variables? Define the Declaration and Problem with Global Variable?",
    answer:
      'Global variables in JavaScript are variables that are declared outside of any function, hence they are accessible from anywhere within the code, including other functions and scripts.\n\n       Declaration of Global Variables:\n\nGlobal variables can be declared using the  "var ",  "let ", or  "const " keywords outside of any function scope.\n\n       Problems with Global Variables:\n\nWhile global variables offer accessibility across the entire codebase, they can introduce various issues:\n\n1.   Name Conflicts  : Since global variables are accessible everywhere, there\'s a risk of unintentionally overriding their values due to name conflicts. This can happen when different parts of a large codebase use the same variable names.\n\n2.   Accidental Modification  : Any part of the code can potentially modify the value of a global variable, leading to unintended consequences and bugs. This makes it harder to track down the source of issues.\n\n3.   Scope Pollution  : As the codebase grows, the number of global variables can increase, leading to "scope pollution." This makes it harder to maintain and understand the code because it\'s not clear where and how these variables are being used.\n\n4.   Dependency on Context  : Global variables create dependencies on the global context, making the code less modular and harder to test. It becomes challenging to isolate and test individual components since they rely on global state.\n\n5.   Performance Impact  : Accessing global variables can be slower compared to accessing local variables due to the need to traverse the scope chain.\n\n       Best Practice:\n\nIt\'s generally recommended to minimize the use of global variables and instead encapsulate data within functions or modules where possible. This approach helps to reduce the risk of naming conflicts, accidental modifications, and scope pollution, leading to cleaner, more maintainable code. When variables need to be shared across multiple parts of the code, consider using techniques like dependency injection or module patterns to manage dependencies more effectively.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 10,
    topic: "javascript",
    question: "What do you mean by the ‘this’ keyword in JavaScript?",
    answer:
      'In JavaScript, the  "this " keyword refers to the context within which a function is executed. Its value is determined by how a function is called and where it is called from. The value of  "this " can change dynamically based on the invocation context.\n\nHere are the common rules that determine the value of  "this ":\n\n1.   Global Context  : When used in the global scope (outside of any function),  "this " refers to the global object ( "window " in browsers,  "global " in Node.js).\n\n2.   Function Context  : Inside a function, the value of  "this " depends on how the function is called:\n   -   Function Invocation  : If a function is called as a standalone function (not as a method of an object),  "this " refers to the global object (in non-strict mode) or  "undefined " (in strict mode).\n   -   Method Invocation  : If a function is called as a method of an object,  "this " refers to the object that owns the method.\n   -   Constructor Invocation  : If a function is called with the  "new " keyword,  "this " refers to the newly created instance of the object.\n\n3.   Arrow Functions  : Arrow functions do not have their own  "this " context. Instead, they inherit the  "this " value from the surrounding lexical context.\n\n4.   Event Handlers  : In event handler functions,  "this " typically refers to the element that triggered the event.\n\nUnderstanding how  "this " behaves in different contexts is crucial for writing effective JavaScript code, especially when working with object-oriented programming paradigms or event-driven programming. Incorrect usage of  "this " can lead to unexpected behavior and bugs.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 11,
    topic: "javascript",
    question: "What do you mean by the “===” operator?",
    answer:
      'The  "=== " operator, also known as the "strict equality operator" or "identity operator," is a comparison operator in JavaScript. It compares two values for equality without performing type conversion. Here\'s what it means:\n\n       Strict Equality Operator (===):\n\n1.   Comparison  :\n   - The  "=== " operator checks whether the two operands are equal in value and of the same data type.\n   - It returns  "true " if the operands are equal without any type conversion, and  "false " otherwise.\n\n2.   Type Check  :\n   - In strict equality ( "=== "), both the value and the data type of the operands are compared.\n   - If the data types of the operands are different, they are considered unequal, even if their values are similar.\n\n\n4.   Advantages  :\n   - Using the  "=== " operator ensures that the comparison is strict and prevents unexpected behavior due to type coercion.\n   - It leads to more predictable and reliable code, especially in scenarios where type conversion could introduce bugs.\n\n       Summary:\n\n- The  "=== " operator in JavaScript checks for strict equality, comparing both value and data type.\n- It returns  "true " if both operands are equal without any type conversion, and  "false " otherwise.\n- Using  "=== " is preferred over  "== " for most comparisons, as it avoids the pitfalls of implicit type conversion and leads to more robust code.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 12,
    topic: "javascript",
    question: "What is Type Coercion in javascript ?",
    answer:
      "Type coercion in JavaScript refers to the automatic or implicit conversion of one data type to another. This typically happens when operators or expressions are used with operands of different types, and JavaScript tries to convert one or both of the operands to a compatible type to perform the operation.\n\nThere are two types of type coercion:\n1. Implicit Coercion: JavaScript automatically converts the types when necessary.\n2. Explicit Coercion: The developer manually converts the types using functions or methods.\n\n Example of Implicit Coercion:\n\nWhen performing operations with mixed data types, JavaScript might automatically convert one type to another:\n\n\nlet result = '5' + 1;\nconsole.log(result); // Output: \"51\"\n\nHere, JavaScript implicitly converts the number 1 to a string and concatenates it with '5'.\n\nAnother example:\n\n\nlet result = '5' - 1;\nconsole.log(result); // Output: 4\n\nIn this case, JavaScript converts the string '5' to a number and then subtracts 1.\n\n Example of Explicit Coercion:\n\nExplicit coercion happens when you manually convert one type to another:\n\n\nlet num = '123';\nlet convertedNum = Number(num);\nconsole.log(convertedNum); // Output: 123 (Number)\n\n\nIn this case, the string '123' is explicitly converted to a number using the Number() function.\n\n Coercion with Equality Operators:\nJavaScript also performs coercion with equality operators (==, ===):\n\n\nconsole.log(5 == '5');  // true (implicit coercion, string '5' is converted to number)\nconsole.log(5 === '5'); // false (strict equality, no coercion)\n\n\n Key Points:\n- Loose equality (==) performs type coercion and tries to compare values after converting them to a common type.\n- Strict equality (===) does not perform type coercion; both the value and the type must be the same.\n  \nType coercion can sometimes lead to unexpected results, so understanding how it works is important for debugging and writing reliable code.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 13,
    topic: "javascript",
    question:
      "Does JavaScript support automatic type conversion (AutoConversion)?",
    answer:
      'Yes, JavaScript does support automatic type conversion, often referred to as "type coercion" or "type conversion." This means that JavaScript can automatically convert values from one data type to another in certain situations, such as when performing operations or comparisons involving different data types.\r\n\r\nHere are some common scenarios where automatic type conversion occurs:\r\n\r\n1.   Numeric/String Conversion  :\r\n   - When a value of one type is used in a context that expects another type, JavaScript will attempt to convert it to the expected type.\r\n   - For example, concatenating a string with a number will convert the number to a string:\r\n\r\n     \r\n     let num = 10;\r\n     let str = "The number is: " + num; // "The number is: 10"\r\n     \r\n\r\n2.   Comparison Operations  :\r\n   - When comparing values of different types using comparison operators like  "== ", JavaScript will attempt to convert one or both operands to a common type before making the comparison.\r\n   - For example, when comparing a string to a number using  "== ", JavaScript will convert the string to a number if possible before making the comparison:\r\n\r\n     \r\n     "10" == 10; // true (string "10" is converted to the number 10)\r\n   \r\n\r\n3.   Boolean Conversion  :\r\n   - Values can be automatically converted to boolean values ( "true " or  "false ") in contexts that expect boolean values, such as in  "if " statements or boolean operations ( "&& ",  "|| ",  "! ").\r\n   - JavaScript treats certain values as "falsy" (e.g.,  "0 ",   ",  "null ",  "undefined ",  "NaN "), and all other values are treated as "truthy".\r\n\r\n4.   Implicit Type Coercion  :\r\n   - JavaScript will implicitly coerce values to the expected type in certain situations, which can lead to unexpected behavior if not understood properly.\r\n   - For example, adding a number to a string using the  "+ " operator will implicitly convert the number to a string and perform string concatenation:\r\n\r\n     \r\n     5 + "10"; // "510"\r\n   \r\n\r\nWhile automatic type conversion can be convenient in some cases, it\'s important to understand how it works to avoid unexpected results and bugs in your code. In situations where clarity and predictability are important, explicit type conversion using functions like  "parseInt() ",  "parseFloat() ", or  "String() " is recommended.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 14,
    topic: "javascript",
    question: "What are all the loops available in JavaScript?",
    answer:
      'JavaScript provides several types of loops for iterating over data or executing code repeatedly. Here are the main types of loops available:\n\n1.   for Loop  :\n   - Executes a block of code multiple times, with a different value each time.\n   - Syntax:\n  \n     for (initialization; condition; iteration) {\n         // code to be executed\n     }\n    \n\n2.   while Loop  :\n   - Executes a block of code as long as a specified condition is true.\n   - Syntax:\n     \n     while (condition) {\n         // code to be executed\n     }\n     \n\n3.   do...while Loop  :\n   - Similar to the  "while " loop, but the condition is evaluated after executing the block of code, so the block is guaranteed to execute at least once.\n   - Syntax:\n   \n     do {\n         // code to be executed\n     } while (condition);\n  \n\n4.   for...in Loop  :\n   - Iterates over the enumerable properties of an object.\n   - Syntax:\n   \n     for (variable in object) {\n         // code to be executed\n     }\n  \n\n5.   for...of Loop  :\n   - Iterates over iterable objects (e.g., arrays, strings, maps, sets) and provides the ability to access each item\'s value directly.\n   - Syntax:\n  \n     for (variable of iterable) {\n         // code to be executed\n     }\n    \n\n6.   forEach() Method  :\n   - Iterates over the elements of an array and executes a provided function once for each array element.\n   - Syntax:\n  \n     array.forEach(function(currentValue, index, array) {\n         // code to be executed\n     });\n    \n\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 15,
    topic: "javascript",
    question: "What is  Variable typing in JavaScript?",
    answer:
      'In JavaScript, variable typing refers to the fact that variables can hold values of different data types, and the data type of a variable can change dynamically during the execution of a program. JavaScript is a dynamically typed language, meaning that variables are not bound to a specific data type at compile time but instead, the data type of a variable is determined at runtime based on the type of value it holds.\n\nThis dynamic typing allows for flexibility and simplifies coding in many cases, but it also requires careful attention to data types to avoid unexpected behavior or errors. Here are some key points about variable typing in JavaScript:\n\n1.   Dynamic Typing  : Variables in JavaScript can hold values of any data type, and the data type of a variable can change over time as different values are assigned to it.\n\n2.   Implicit Type Conversion  : JavaScript performs implicit type conversion (also known as type coercion) when necessary, automatically converting values from one type to another in certain operations or comparisons.\n\n3.   Data Types  : JavaScript supports various data types, including numbers, strings, booleans, objects, arrays, functions, symbols, and undefined/null values.\n\n4.   Type Checking  : Although JavaScript is dynamically typed, you can still perform type checking using operators such as  "typeof ", which returns the data type of a variable or value.\n\n5.   Type Stability  : While JavaScript allows for dynamic typing, it\'s generally a good practice to maintain type stability in your code to improve clarity and reduce the likelihood of errors.\n\nOverall, variable typing in JavaScript provides flexibility and convenience but also requires developers to be mindful of data types and potential type conversions to ensure code correctness and reliability.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 16,
    topic: "javascript",
    question: "Explain the difference between the “==” and “===” operator?",
    answer:
      'The  "== " and  "=== " operators in JavaScript are used for comparison, but they behave differently in terms of strictness and type coercion.\n\n       Loose Equality Operator ( "== "):\n\n1.   Comparison  :\n   - The  "== " operator compares two values for equality, allowing type coercion if the operands are of different types.\n   - It attempts to convert the operands to a common type before making the comparison.\n\n2.   Type Coercion  :\n   - If the operands are of different types, JavaScript will attempt to convert one or both of them to a common type before comparing.\n   - This can lead to unexpected results, especially when comparing values of different types.\n\n3.   Examples  :\n    " " "\n   5 == "5" // true (number 5 is coerced to string "5" before comparison)\n   null == undefined // true (both are considered equal in loose equality)\n   0 == false // true (number 0 is coerced to boolean false)\n    " " "\n\n       Strict Equality Operator ( "=== "):\n\n1.   Comparison  :\n   - The  "=== " operator, also known as the strict equality operator, compares two values for equality without performing type coercion.\n   - It returns  "true " only if the operands are of the same type and have the same value.\n\n2.   Type Check  :\n   - In strict equality ( "=== "), both the value and the data type of the operands are compared.\n   - If the data types of the operands are different, they are considered unequal, even if their values are similar.\n\n3.   Examples  :\n    " " "\n   5 === "5" // false (number 5 is not equal to string "5" in strict equality)\n   null === undefined // false (null and undefined are of different types)\n   0 === false // false (number 0 and boolean false are of different types)\n    " " "\n\n       Summary:\n\n-   Loose Equality ( "== ")  :\n  - Allows type coercion, converting values to a common type before comparison.\n  - Can lead to unexpected results due to type conversion.\n  - Use with caution, as it may not always produce intuitive results.\n\n-   Strict Equality ( "=== ")  :\n  - Does not perform type coercion, comparing both value and data type.\n  - Ensures more predictable and reliable comparisons.\n  - Generally recommended for most comparisons to avoid unexpected behavior.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 17,
    topic: "javascript",
    question: "What is a continue statement in JS ?",
    answer:
      "In JavaScript, the continue statement is used inside loops to skip the current iteration and proceed to the next iteration of the loop. When the continue statement is encountered, the remaining code inside the loop for the current iteration is skipped, and the loop proceeds with the next iteration.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 18,
    topic: "javascript",
    question: "List the differences between .call() and .apply() and bind() ?",
    answer:
      ' ".call() ",  ".apply() ", and  ".bind() " are all methods used to manipulate the context of a function in JavaScript, but they have different behaviors and purposes. Here are the main differences between them:\n\n       .call():\n\n1.   Syntax  :\n   -  "function.call(thisArg, arg1, arg2, ...) "\n\n2.   Arguments  :\n   - Accepts the function context ( "thisArg ") as the first argument, followed by comma-separated arguments.\n   - Arguments are passed individually.\n\n3.   Usage  :\n   - Used to invoke a function with a specific context ( "this " value) and pass arguments to the function.\n\n4.   Example  :\n    " " "\n   function greet(name) {\n       console.log("Hello, " + name);\n   }\n\n   greet.call(null, "Alice"); // Invokes greet function with null context\n    " " "\n\n       .apply():\n\n1.   Syntax  :\n   -  "function.apply(thisArg, [argsArray]) "\n\n2.   Arguments  :\n   - Accepts the function context ( "thisArg ") as the first argument and an array or array-like object containing arguments as the second argument.\n\n3.   Usage  :\n   - Used to invoke a function with a specific context ( "this " value) and pass arguments to the function.\n   - Especially useful when the number of arguments is not known beforehand or when the arguments are already in an array.\n\n4.   Example  :\n    " " "\n   function greet(name, age) {\n       console.log("Hello, " + name + ". You are " + age + " years old.");\n   }\n\n   greet.apply(null, ["Alice", 30]); // Invokes greet function with null context and array of arguments\n    " " "\n\n       .bind():\n\n1.   Syntax  :\n   -  "function.bind(thisArg, arg1, arg2, ...) "\n\n2.   Arguments  :\n   - Accepts the function context ( "thisArg ") as the first argument, followed by comma-separated arguments.\n   - Returns a new function with the specified context and, optionally, predefined arguments.\n\n3.   Usage  :\n   - Returns a new function with the specified context ( "this " value) and, optionally, predefined arguments, without invoking the original function.\n   - Useful for creating function wrappers or for binding methods to objects.\n\n4.   Example  :\n    " " "\n   function greet(name) {\n       console.log("Hello, " + name);\n   }\n\n   const greetAlice = greet.bind(null, "Alice"); // Returns a new function with null context and predefined argument\n   greetAlice(); // Invokes the new function\n    " " "\n\n       Summary:\n\n-  ".call() " and  ".apply() " are used to invoke a function with a specific context ( "this " value) and pass arguments.\n-  ".call() " accepts arguments individually, while  ".apply() " accepts arguments as an array.\n-  ".bind() " returns a new function with the specified context and, optionally, predefined arguments, without invoking the original function.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 19,
    topic: "javascript",
    question: "What do you understand by event bubbling?",
    answer:
      'Event bubbling is a concept in JavaScript where events triggered on an element are propagated or "bubbled" up through its parent elements in the DOM tree. When an event occurs on a nested element (e.g., a button inside a div), the event is first captured and handled by the innermost element, then propagated up through its ancestor elements, triggering their respective event handlers along the way.\n\nHere\'s how event bubbling works:\n\n1.   Event Capture Phase  : When an event is triggered on an element, the browser first captures the event during the capture phase. During this phase, the event propagates down from the root of the DOM tree to the target element.\n\n2.   Target Element  : Once the event reaches the target element, it triggers the event handler bound to that element, allowing for specific actions to be performed in response to the event.\n\n3.   Event Bubbling Phase  : After the event has been handled by the target element, it then begins to bubble up through the ancestor elements in the DOM tree. This means that the same event is triggered on each ancestor element, allowing their event handlers to be executed in sequence.\n\nEvent bubbling allows for event delegation, which means you can attach a single event handler to a parent element and handle events for multiple child elements. This can lead to more efficient and manageable code, especially in cases where there are many dynamically created elements.\n\nHowever, event bubbling can also lead to unexpected behavior if not handled properly, as events triggered on child elements may inadvertently trigger event handlers on parent elements as well. In such cases, event.stopPropagation() can be used to stop the propagation of the event to parent elements.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 20,
    topic: "javascript",
    question: "Is JavaScript case-sensitive?",
    answer:
      "Yes, JavaScript is case-sensitive, meaning that it distinguishes between uppercase and lowercase letters in identifiers such as variable names, function names, object keys, and so on. This means that myVariable, MyVariable, and myvariable would all be considered as distinct identifiers in ",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 21,
    topic: "javascript",
    question:
      "What is Deferred Script & Describe the role of deferred scripts in .",
    answer:
      'In HTML, the  "defer " attribute is used with the  "<script> " element to specify that the execution of the script should be deferred until after the document has been parsed. When a script is marked as deferred, it will be executed after the HTML document has been fully loaded and parsed, but before the  "DOMContentLoaded " event is fired.\n\n       Role of Deferred Scripts:\n\n1.   Asynchronous Loading  : Deferred scripts are loaded asynchronously, meaning that they do not block the parsing of the HTML document. Instead, they are downloaded in parallel with other resources, such as CSS stylesheets and images.\n\n2.   Execution Timing  : Deferred scripts are executed in the order they appear in the HTML document, after the HTML document has been fully parsed. This ensures that the script has access to all elements in the document\'s DOM tree.\n\n3.   DOMContentLoaded Event  : Deferred scripts are executed before the  "DOMContentLoaded " event is fired, which indicates that the HTML document has been fully loaded and parsed. This allows scripts to manipulate the DOM or perform other actions as soon as the document is ready.\n\n4.   Improved Performance  : By deferring the execution of scripts until after the document has been parsed, deferred scripts can improve the performance of web pages by reducing the time it takes for the initial content to be displayed to the user.\n\n5.   Script Dependencies  : Deferred scripts are useful when you have scripts that depend on other resources or scripts that need to be executed in a specific order. By deferring the execution of scripts, you can ensure that dependent scripts are loaded and executed at the appropriate time.\n\nOverall, deferred scripts are a useful tool for optimizing the loading and execution of scripts in web pages, particularly for scripts that are not critical for rendering the initial content of the page but still need to be executed as part of the page\'s functionality.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 22,
    topic: "javascript",
    question: "What do you mean by screen objects? Explain.",
    answer:
      "In JavaScript, the screen object represents the user's screen or display device. It provides information about the user's screen such as its dimensions, color depth, pixel density, and more. The screen object is a property of the global window object in web browsers, meaning you can access its properties directly without needing to explicitly reference window.screen.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 23,
    topic: "javascript",
    question: "What do you mean by NULL in JavaScript?",
    answer:
      "In JavaScript, null is a special value that represents the absence of any object value. It is a primitive data type, and it is often used to explicitly indicate that a variable does not currently have a value assigned to it.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 24,
    topic: "javascript",
    question: "What is 'Strict’ mode in JavaScript ?",
    answer:
      "Strict mode in JavaScript is a feature introduced in ECMAScript 5 (ES5) that allows developers to opt in to a restricted version of JavaScript that enforces stricter rules and better error handling. When strict mode is enabled, certain actions that would otherwise be silently ignored or fail silently will instead throw errors, making it easier to write secure and more reliable code.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 25,
    topic: "javascript",
    question: "What is closures in JavaScript? When are they used?",
    answer:
      'In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of any variables, objects, or functions that were in scope at the time the closure was created. The closure retains access to these variables even after the outer function has finished executing.\n\nHere are some key points about closures:\n\n1.   Function and Lexical Environment  : When a function is defined within another function (nested function), it forms a closure. The inner function has access to the variables and parameters of the outer function, as well as its own local variables.\n\n2.   Access to Outer Scope  : Closures allow inner functions to access and manipulate variables from the outer function, even after the outer function has returned. This behavior is known as "closing over" or "capturing" the variables.\n\n3.   Private Variables  : Closures are often used to create private variables and encapsulate functionality within a function scope. By defining variables within the outer function that are only accessible to the inner function, you can create a level of data hiding and encapsulation.\n\n4.   Maintaining State  : Closures can be used to maintain state across multiple function calls. Since variables in the outer scope are retained by the closure, their values can be modified and accessed across different invocations of the inner function.\n\n5.   Callbacks and Event Handlers  : Closures are commonly used in asynchronous programming, such as event handling and callbacks. They allow you to pass functions as arguments to other functions and maintain access to the surrounding context in which they were defined.\n\n6.   Memory Management  : Closures can also have implications for memory management, as they may retain references to variables and objects even after they are no longer needed. This can lead to memory leaks if closures are not used carefully, especially in long-running applications.\n\n       Example:\n\n " " "\nfunction outerFunction() {\n    var outerVariable = \'I am outer\';\n\n    function innerFunction() {\n        console.log(outerVariable); // Accessing outerVariable from the outer scope\n    }\n\n    return innerFunction;\n}\n\nvar closure = outerFunction(); // The inner function is returned from outerFunction\nclosure(); // Prints: "I am outer"\n " " "\n\nIn this example,  "innerFunction " forms a closure that retains access to the  "outerVariable " even after  "outerFunction " has finished executing. When  "closure " is called, it can still access and log the value of  "outerVariable " from the outer scope.\n\nClosures are a powerful and fundamental concept in JavaScript, and they are widely used in many programming patterns and techniques, including functional programming, asynchronous programming, and module patterns. Understanding closures is essential for writing expressive and efficient JavaScript code.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 26,
    topic: "javascript",
    question: "Explain passed by value and passed by reference.",
    answer:
      'In JavaScript, "passed by value" and "passed by reference" refer to how data is handled when it is passed to a function. The difference is crucial in understanding how variables behave when they are passed to functions.\n\n 1. Passed by Value:\nWhen a primitive value (like a number, string, boolean, undefined, null, symbol, or bigint) is passed to a function, it is passed by value. This means that a copy of the original value is passed to the function. Any changes made to the variable inside the function do not affect the original variable outside the function.\n\n Example (Passed by Value):\n\n\nfunction modifyValue(num) {\n  num = 10;\n}\n\nlet a = 5;\nmodifyValue(a);\n\nconsole.log(a); // Output: 5 (Original value of \'a\' remains unchanged)\n\n\n- Explanation: When a is passed to the function, the value of a is copied into the num parameter. Changing num inside the function does not affect a because only the copy of the value was passed.\n\n 2. Passed by Reference:\nWhen a non-primitive value (like an object, array, or function) is passed to a function, it is passed by reference. This means that the function receives a reference (or address) to the original value, not a copy. Any changes made to the object or array inside the function will affect the original object or array outside the function because both the original and the copy point to the same memory location.\n\n Example (Passed by Reference):\n\n\nfunction modifyObject(obj) {\n  obj.name = "John";\n}\n\nlet person = { name: "Alice" };\nmodifyObject(person);\n\nconsole.log(person.name); // Output: "John" (Original object is modified)\n\n\n- Explanation: In this case, when person is passed to the modifyObject function, the reference (memory address) to the person object is passed. Changing the name property of obj inside the function also changes the person object because both refer to the same memory location.\n\n Key Differences:\n- Primitive types (e.g., numbers, strings, booleans) are passed by value.\n- Objects, arrays, and functions are passed by reference.\n\n Summary:\n- Passed by Value: The function gets a copy of the value. Changes inside the function do not affect the original variable.\n- Passed by Reference: The function gets a reference to the original object. Changes inside the function will affect the original object.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 27,
    topic: "javascript",
    question: "What is an Immediately Invoked Function in JavaScript?",
    answer:
      "An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that is defined and then immediately executed. It is a function expression that is called right after it is created. This pattern is used to create a local scope to avoid polluting the global namespace, often for encapsulating variables or logic.\n(function() {\n    // Code inside the function\n})();",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 28,
    topic: "javascript",
    question: "Explain Higher-Order Functions in JavaScript",
    answer:
      "In JavaScript, a higher-order function is a function that can take another function as an argument or return a function as a result. This concept is fundamental in functional programming and enables powerful and flexible programming paradigms.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 29,
    topic: "javascript",
    question: "What is Currying in JavaScript?",
    answer:
      "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. The curried function returns a new function with each argument partially applied until all arguments have been provided, at which point the original function is invoked and the result is returned.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 30,
    topic: "javascript",
    question: "Explain Scope and Scope Chain in JavaScript.",
    answer:
      'Scope in JavaScript refers to the context in which variables, functions, and objects are accessible. It defines the visibility and accessibility of identifiers within a program. \n\n       Scope:\n\n1.   Global Scope  :\n   - Variables declared outside of any function or block have global scope. They are accessible from anywhere in the code, including within functions and blocks.\n   - Global variables are accessible to all functions and blocks defined within the script.\n\n2.   Local Scope  :\n   - Variables declared within a function or block have local scope. They are accessible only within the function or block in which they are defined.\n   - Local variables are not accessible outside of the function or block in which they are declared.\n\n       Scope Chain:\n\n1.   Nested Scope  :\n   - JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the code. Inner functions and blocks have access to variables declared in their outer functions and blocks.\n   - When a variable is referenced, JavaScript first looks for it within the current scope. If it is not found, it continues to search in the next outer scope, forming a chain of nested scopes.\n\n2.   Lexical Scoping  :\n   - The scope chain in JavaScript is established at compile time based on the lexical structure of the code, rather than at runtime.\n   - Each function or block defines a new scope, and the scope chain is determined by the nesting of these scopes within each other.\n\nIn this example,  "globalVariable " has global scope and is accessible from anywhere in the code.  "outerVariable " is declared in the scope of  "outerFunction " and is accessible within  "outerFunction " and any nested functions, such as  "innerFunction ".  "innerVariable " is declared in the scope of  "innerFunction " and is accessible only within  "innerFunction ". The scope chain allows  "innerFunction " to access variables from its outer scopes, such as  "outerVariable " and  "globalVariable ". However, variables declared in inner scopes are not accessible from outer scopes.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 31,
    topic: "javascript",
    question: "What are object prototypes?",
    answer:
      "In JavaScript, object prototypes are a fundamental part of the language's inheritance mechanism. Every object in JavaScript has an associated prototype object from which it inherits properties and methods. Prototypes allow objects to inherit behavior from other objects, enabling code reuse and creating a hierarchical structure of objects.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 32,
    topic: "javascript",
    question: " What are callbacks? ",
    answer:
      "Callbacks are functions that are passed as arguments to other functions and are invoked later by those functions. In JavaScript, functions are first-class citizens, meaning they can be treated as values and passed around like any other data type. Callbacks are a common pattern used in asynchronous programming to manage operations that take some time to complete, such as fetching data from a server or handling user input.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 33,
    topic: "javascript",
    question: "What is memoization?",
    answer:
      "Memoization is an optimization technique used in computer science and programming to improve the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This avoids redundant computations and reduces the overall execution time of the program.\r\n\r\nHere are some key points about memoization:\r\n\r\n1.   Caching Results  :\r\n   - Memoization involves storing the results of function calls in a cache (such as an object or a map) based on the function's inputs (arguments). If the function is called again with the same inputs, the cached result is returned instead of recalculating the result.\r\n\r\n2.   Avoiding Redundant Computations  :\r\n   - By caching the results of function calls, memoization prevents redundant computations for the same inputs, especially for functions with expensive or time-consuming computations.\r\n\r\n3.   Improving Performance  :\r\n   - Memoization can significantly improve the performance of functions, especially in situations where the function is called repeatedly with the same inputs.\r\n\r\n4.   Pure Functions  :\r\n   - Memoization is most effective with pure functions, which produce the same output for the same inputs and have no side effects. Pure functions are deterministic and can safely be memoized.\r\n\r\n5.   Implementation  :\r\n   - Memoization can be implemented manually by storing the results of function calls in a cache object. Alternatively, it can be achieved using higher-order functions or libraries that provide memoization utilities.\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 34,
    topic: "javascript",
    question: "What is the use of a constructor function in JavaScript?",
    answer:
      "Constructor functions in JavaScript are used to create objects with a specific structure and behavior. They serve as blueprints for creating multiple instances of similar objects, allowing for code reuse and the creation of object-oriented designs.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 35,
    topic: "javascript",
    question: "What are arrow functions?",
    answer:
      "Arrow functions, introduced in ECMAScript 6 (ES6), are a concise syntax for writing anonymous function expressions in JavaScript. They provide a more concise and readable way to define functions compared to traditional function expressions.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 36,
    topic: "javascript",
    question: "What are the rest parameter and spread operators?",
    answer:
      'The rest parameter and spread operators are two related features introduced in ECMAScript 6 (ES6) that provide flexible ways to handle function arguments and arrays in JavaScript.\r\n\r\n       Rest Parameter ( "... "):\r\n\r\nThe rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by an ellipsis ( "... ") followed by the parameter name and is useful when the number of arguments passed to a function is not known in advance.\r\n\r\n       Spread Operator ( "... "):\r\n\r\nThe spread operator allows an iterable (e.g., an array or a string) to be expanded or spread into individual elements. It is denoted by an ellipsis ( "... ") placed before the iterable and is useful for combining arrays, passing multiple arguments to a function, and creating shallow copies of arrays or objects.\r\n\r\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 37,
    topic: "javascript",
    question: " What is the use of promises in JavaScript?",
    answer:
      'A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a way to handle asynchronous tasks in a more readable and structured way compared to traditional callback-based approaches.\nPromises in JavaScript are used to handle asynchronous operations such as fetching data from a server, reading files, or executing code that takes some time to complete. They provide a cleaner and more flexible way to manage asynchronous code compared to traditional callback-based approaches.\n\nHere are some key points about promises and their uses:\n\n1.   Asynchronous Operations  :\n   - Promises are primarily used to handle asynchronous operations, where the result of the operation is not immediately available and may take some time to complete.\n\n2.   Cleaner Code  :\n   - Promises allow asynchronous code to be written in a more sequential and readable manner, avoiding deeply nested callback functions (known as "callback hell") and improving code maintainability.\n\n3.   State Management  :\n   - Promises have three states: pending, fulfilled, and rejected. They represent the eventual completion (or failure) of an asynchronous operation.\n   - When a promise is pending, the operation is still in progress. When it is fulfilled, the operation has completed successfully, and the promise resolves with a value. When it is rejected, an error has occurred, and the promise rejects with an error object.\n\n4.   Chaining  :\n   - Promises support method chaining, allowing multiple asynchronous operations to be chained together in a sequential manner.\n   - Each promise in the chain returns a new promise, which allows for the propagation of success or failure through the chain.\n\n5.   Error Handling  :\n   - Promises provide built-in error handling mechanisms through the use of the  "catch " method, allowing errors to be caught and handled in a centralized manner.\n\n6.   Composition  :\n   - Promises can be composed together using methods like  "Promise.all " and  "Promise.race ".  "Promise.all " waits for all promises to be fulfilled, while  "Promise.race " waits for the first promise to be settled (either fulfilled or rejected).\n\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 38,
    topic: "javascript",
    question: "What are classes in JavaScript?",
    answer:
      "Classes in JavaScript are a syntactical sugar over the existing prototype-based inheritance model. Introduced in ECMAScript 6 (ES6), they provide a more familiar and structured way to define objects and implement inheritance in JavaScript, similar to other object-oriented programming languages like Java and C++.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 39,
    topic: "javascript",
    question: "What are generator functions?",
    answer:
      'Generator functions in JavaScript are special types of functions that enable the creation of iterators, allowing iterative control flow using the  "yield " keyword. Unlike regular functions that execute to completion and return a single value, generator functions can pause and resume their execution, yielding multiple values one at a time.\r\n\r\nHere are key points about generator functions:\r\n\r\n1.   Syntax  :\r\n   - Generator functions are defined using the  "function  " syntax or the  "function  " keyword followed by the function name.\r\n   - Within a generator function, the  "yield " keyword is used to pause the function\'s execution and produce a value.\r\n\r\n2.   Iterator Protocol  :\r\n   - Generator functions automatically implement the iterator protocol, making them iterable. They return an iterator object that can be used to iterate over the values produced by the generator.\r\n\r\n3.   Stateful  :\r\n   - Generator functions maintain their internal state between successive calls, allowing them to resume execution from where they were last paused.\r\n   - The  "yield " keyword not only produces a value but also suspends the generator\'s execution, allowing it to be resumed later.\r\n\r\n4.   Iterable  :\r\n   - Generator functions produce iterable sequences of values, making them useful for generating sequences of data or handling asynchronous operations in a sequential manner.\r\n\r\n5.    "next() " Method  :\r\n   - The iterator object returned by a generator function has a  "next() " method that can be used to resume the execution of the generator and retrieve the next yielded value.\r\n   - Each call to  "next() " returns an object with two properties:  "value ", which contains the yielded value, and  "done ", which indicates whether the generator has finished producing values.\r\n\r\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 40,
    topic: "javascript",
    question: "What is Object Destructuring?",
    answer:
      "Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise and convenient way. It provides a syntax for breaking down the structure of objects and extracting only the values that you need.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 41,
    topic: "javascript",
    question: "What is a Temporal Dead Zone?",
    answer:
      "The Temporal Dead Zone (TDZ) refers to the period within a lexical scope (such as a block, function, or module) where a variable exists but cannot be accessed before it is declared. In JavaScript, variables declared with let and const are hoisted to the top of their lexical scope during the compilation phase, but unlike variables declared with var, they are not initialized with a default value (undefined). Instead, they enter a temporal dead zone until their declaration is reached during runtime.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 42,
    topic: "javascript",
    question: "What it the difference between var, let & const ? ",
    answer:
      'The  "var ",  "let ", and  "const " keywords are used for variable declaration in JavaScript, but they have some key differences in terms of scope, hoisting, and mutability. Here\'s a comparison:\n\n1.    "var ":  \n   - Function-scoped: Variables declared with  "var " are function-scoped, meaning they are accessible throughout the entire function in which they are declared.\n   - Hoisting: Variables declared with  "var " are hoisted to the top of their function scope during the compilation phase, which means they can be accessed before their declaration, but they are initialized with the value  "undefined ".\n   - Re-declaration: Variables declared with  "var " can be re-declared within the same scope without throwing an error.\n   - Example:\n      " " "\n     function example() {\n         var x = 10;\n         if (true) {\n             var x = 20;\n             console.log(x); // Output: 20\n         }\n         console.log(x); // Output: 20\n     }\n      " " "\n\n2.    "let ":  \n   - Block-scoped: Variables declared with  "let " are block-scoped, meaning they are accessible only within the block (e.g., if statement, loop, or function) in which they are declared.\n   - Hoisting: Variables declared with  "let " are hoisted to the top of their block scope during the compilation phase, but they remain uninitialized in the Temporal Dead Zone until their declaration is reached.\n   - Re-declaration: Variables declared with  "let " cannot be re-declared within the same scope. Attempting to do so will result in a SyntaxError.\n   - Example:\n      " " "\n     function example() {\n         let x = 10;\n         if (true) {\n             let x = 20;\n             console.log(x); // Output: 20\n         }\n         console.log(x); // Output: 10\n     }\n      " " "\n\n3.    "const ":  \n   - Block-scoped: Variables declared with  "const " are also block-scoped, similar to  "let ".\n   - Hoisting: Like  "let ", variables declared with  "const " are hoisted to the top of their block scope during the compilation phase, but they remain uninitialized in the Temporal Dead Zone until their declaration is reached.\n   - Constant value: Variables declared with  "const " must be initialized with a value at the time of declaration, and their value cannot be changed or reassigned once initialized.\n   - Re-declaration: Variables declared with  "const " cannot be re-declared or re-assigned to a different value within the same scope.\n   - Example:\n      " " "\n     function example() {\n         const x = 10;\n         // x = 20; // Error: Assignment to constant variable.\n     }\n      " " "\n\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 43,
    topic: "javascript",
    question:
      "What are differences between Named functions , Anonymous function & Arrow function : -",
    answer:
      'Named functions, anonymous functions, and arrow functions are different ways to define functions in JavaScript, each with its own syntax and behavior. Here\'s a comparison of these types of functions:\r\n\r\n1.   Named Function:  \n\r\n   - A named function is a function that has a name identifier, which can be used to reference the function within its scope and from outside.\r\n   - Named functions are typically defined using the  "function " keyword followed by the function name and the function body.\r\n   - They are useful when the function needs to be referenced by name, such as for recursion or event handling.\r\n   - Example:\r\n    \r\n     function add(x, y) {\r\n         return x + y;\r\n     }\r\n\r\n2.   Anonymous Function:  \n\r\n   - An anonymous function is a function that does not have a name identifier and is typically defined inline without a name.\r\n   - Anonymous functions are often used as function expressions, where they are assigned to a variable or passed as an argument to another function.\r\n   - They are useful for one-time use or when a function does not need to be referenced by name.\r\n   - Example:\r\n  \r\n     const add = function(x, y) {\r\n         return x + y;\r\n     };\r\n    \r\n\r\n3.   Arrow Function:  \n\r\n   - An arrow function is a concise syntax for defining functions introduced in ECMAScript 6 (ES6).\r\n   - Arrow functions are always anonymous, meaning they do not have a name identifier by default.\r\n   - They are defined using the arrow ( "=> ") syntax, which can have either a concise or a block body.\r\n   - Arrow functions have lexical scoping of  "this ", meaning they inherit  "this " from the surrounding code.\r\n   - They are commonly used for short, one-liner functions or for preserving the value of  "this ".\r\n   - Example:\r\n     \r\n     const add = (x, y) => x + y;\r\n   ',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 44,
    topic: "javascript",
    question:
      "Explain the Hoisting in Named functions , Anonymous function & Arrow function ",
    answer:
      'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, there are some differences in how named functions, anonymous functions, and arrow functions are hoisted:\r\n\r\n1.   Named Function:  \n\r\n   - Named functions are hoisted completely. This means both the function name and its implementation are hoisted to the top of their containing scope.\r\n   - This allows you to call a named function before its actual declaration in the code, as the function declaration is processed first during hoisting.\r\n   - Example:\r\n \r\n     // Function call before declaration\r\n     console.log(add(2, 3)); // Output: 5\r\n\r\n     // Function declaration\r\n     function add(x, y) {\r\n         return x + y;\r\n     }\r\n     \r\n   - During hoisting, the entire  "add " function, including its name and implementation, is hoisted to the top of the scope.\r\n\r\n2.   Anonymous Function (Function Expression):  \n\r\n   - Function expressions, including anonymous functions, are hoisted differently compared to named functions.\r\n   - Only the variable declaration (if using  "var ",  "let ", or  "const ") is hoisted to the top of the scope, not the function implementation.\r\n   - This means that if you try to call an anonymous function before its declaration, you will encounter a  "TypeError " indicating that the variable is not a function.\r\n   - Example:\r\n    \r\n     // Function call before declaration\r\n     // console.log(add(2, 3)); // Error: add is not a function\r\n\r\n     // Function declaration (as a function expression)\r\n     const add = function(x, y) {\r\n         return x + y;\r\n     };\r\n \r\n   - During hoisting, only the  "add " variable declaration is hoisted to the top of the scope, but the function implementation remains in place.\r\n\r\n3.   Arrow Function:  \n\r\n   - Arrow functions, like anonymous functions, are also hoisted differently compared to named functions.\r\n   - Similar to anonymous functions, only the variable declaration (if using  "var ",  "let ", or  "const ") is hoisted to the top of the scope, not the function implementation.\r\n   - This means that if you try to call an arrow function before its declaration, you will encounter a  "ReferenceError ".\r\n   - Example:\r\n     \r\n     // Function call before declaration\r\n     // console.log(add(2, 3)); // Error: Cannot access \'add\' before initialization\r\n\r\n     // Function declaration (as an arrow function)\r\n     const add = (x, y) => x + y;\r\n     \r\n   - During hoisting, only the  "add " variable declaration is hoisted to the top of the scope, but the arrow function implementation remains in place.\r\n\r\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 45,
    topic: "javascript",
    question: "What is BOM ?\n",
    answer:
      "The Browser Object Model (BOM) is a collection of objects provided by the web browser that allows JavaScript to interact with the browser itself. The BOM enables scripts to interact with the browser window and control various browser aspects, such as manipulating the URL, handling browser history, and dealing with browser events.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 46,
    topic: "javascript",
    question: "What is a polyfill",
    answer:
      'A polyfill is a piece of code (usually JavaScript) that implements functionality that is not natively supported by certain web browsers. It allows developers to use modern web features while maintaining compatibility with older browsers that do not support these features. Polyfills essentially "fill in" the gaps in a browser\'s functionality to provide a consistent experience across different environments.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 47,
    topic: "javascript",
    question: "Can I use reserved words as identifiers",
    answer:
      "In JavaScript, reserved words (also known as keywords) have special meanings and purposes within the language. Using these reserved words as identifiers for variables, functions, or other entities is not allowed and will result in syntax errors. Identifiers are names you assign to variables, functions, and properties.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 48,
    topic: "javascript",
    question: "What is a freeze method in JavaScript ?",
    answer:
      "The Object.freeze() method in JavaScript is used to freeze an object, preventing new properties from being added to it, existing properties from being removed, and existing properties (except for properties with values that are objects) from being changed. This makes the object immutable, meaning its structure and data cannot be altered after it has been frozen.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 49,
    topic: "javascript",
    question: "What are the bitwise operators available in  ?",
    answer:
      "JavaScript uses 32-bit Bitwise operands. A number is stored as a 64-bit floating-point number but the bit-wise operation is performed on a 32-bit binary number i.e. to perform a bit-operation JavaScript converts the number into a 32-bit binary number (signed) and performs the operation and converts back the result to a 64-bit number.\n1.Bitwise AND(&)        a & b        Returns true if both operands are true\n2.Bitwise OR(|)        a | b        Returns true even if one operand is true\n3.Biwise XOR(^)        a ^ b        Returns true if both operands are different\n4.Bitwise NOT(~)        a ~ b        Flips the value of the operand\n5.Bitwise Left Shift(<<)        a << b        Shifts the bit toward the left\n6.Bitwise Right Shift(>>)        a >> b        Shifts the bit towards the right\n7.Zero Fill Right Shift(>>>)        a >>> b        Shifts the bit towards the right but adds 0 from left",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 50,
    topic: "javascript",
    question: "What is a proxy object ?",
    answer:
      "In JavaScript, a Proxy object allows you to create a custom handler for fundamental operations on an object, such as property lookup, assignment, enumeration, function invocation, and more. This can be useful for various purposes like logging, validation, formatting, or enforcing access controls.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 51,
    topic: "javascript",
    question: "What is the purpose of seal method ?",
    answer:
      "The Object.seal() method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 52,
    topic: "javascript",
    question: "What are the differences between freeze and seal methods",
    answer:
      "f an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 53,
    topic: "javascript",
    question: "What is call stack",
    answer:
      "Call Stack is a data structure for  interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,\r\n\r\nWhenever you call a function for its execution, you are pushing it to the stack.\r\nWhenever the execution is completed, the function is popped out of the stack.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 54,
    topic: "javascript",
    question: "What is an empty statement and purpose of it",
    answer:
      "An empty statement in JavaScript is a statement that consists of a single semicolon (;). It does nothing and is used to provide no operation where a statement is syntactically required.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 55,
    topic: "javascript",
    question: "What Is Obfuscation in ",
    answer:
      "Obfuscation in JavaScript is the process of transforming the code into a version that is difficult for humans to understand, while still maintaining its functionality. The primary goal of obfuscation is to protect the source code from being easily read or reverse-engineered by others.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 56,
    topic: "javascript",
    question: "Why do you need Obfuscation ?",
    answer:
      "Below are the few reasons for Obfuscation,\r\n\r\n1.The Code size will be reduced. So data transfers between server and client will be fast.\r\n2.It hides the business logic from outside world and protects the code from others\r\n3.Reverse engineering is highly difficult\r\n4.The download time will be reduced",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 57,
    topic: "javascript",
    question: "What is Minification ?",
    answer:
      "Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 58,
    topic: "javascript",
    question: "What are the advantages of minification",
    answer:
      "Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,\r\n\r\n1.Decreases loading times of a web page\r\n2.Saves bandwidth usages",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 59,
    topic: "javascript",
    question: "What are scalar arrays in JavaScript ?",
    answer:
      "A scalar array typically refers to an array that contains only scalar values (primitive values), such as numbers, strings, booleans, etc. In this context, it is simply an array where each element is a primitive data type, without nested arrays or objects.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 60,
    topic: "javascript",
    question: "List down some of the features of ES6",
    answer:
      "Below are the list of some new features of ES6,\n\n1.Support for constants or immutable variables\n2.Block-scope support for variables, constants and functions\n3.Arrow functions\n4.Default parameters\n5.Rest and Spread Parameters\n6.Template Literals\n7.Multi-line Strings\n8.Destructuring Assignment\n9.Enhanced Object Literals\n10.Promises\n11.Classes\n12.Modules",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 61,
    topic: "javascript",
    question: "Difference between ternary operator and if-else statements?",
    answer:
      'The ternary operator and if-else statements both handle conditional logic but differ in use:\n\nSyntax: Ternary is concise (condition ? trueValue : falseValue), while if-else uses a block structure.\nReadability: Ternary is ideal for simple, single-line conditions; if-else is better for complex logic.\nReturn Value: Ternary evaluates to a value directly(can be stored in a variable), useful for assignments. If-else handles multiple operations but doesn’t return a value directly.\nUse Case: Use the ternary for short conditions, like const message = isLoggedIn ? "Welcome" : "Please log in";, and if-else for multi-step logic.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 62,
    topic: "javascript",
    question: "Difference between Statement & Expression ?",
    answer:
      'In simple terms:\r\n\r\n- An   expression   is like a calculator. It does something and gives you a result or value. For example:  \r\n  - 2 + 3  gives 5 .  \r\n  - "Hello" + " World"  gives "Hello World" .  \r\n\r\n- A   statement   is like a command. It tells the computer to do something but doesn’t always give you a value. For example:  \r\n  - if (x > y) { console.log("x is bigger"); }  is a statement that tells the computer to check something and do an action if it\'s true.  \r\n\r\n    Key Difference:\r\n-   Expression  : Think of it as "What is the result?"  \r\n-   Statement  : Think of it as "What action should be done?"',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 63,
    topic: "javascript",
    question: "What is sliece() & splice() ?",
    answer:
      "Both slice() and splice() are JavaScript array methods, but they have different purposes and behaviors. Here's a clear explanation:\r\n\r\n---\r\n\r\n 1. slice()\r\n\r\n Purpose:\r\n- Extracts a portion of an array and returns a new array.\r\n- Does not modify the original array.\r\n\r\n Syntax:\r\n\r\narray.slice(start, end)\r\n\r\n\r\n Parameters:\r\n- start: The index where the extraction begins (inclusive).\r\n- end (optional): The index where the extraction ends (exclusive). If omitted, it slices until the end of the array.\r\n\r\n Example:\r\n\r\nconst arr = [1, 2, 3, 4, 5];\r\n\r\n// Extract elements from index 1 to 3 (3 is excluded)\r\nconst slicedArr = arr.slice(1, 3);\r\nconsole.log(slicedArr); // [2, 3]\r\nconsole.log(arr); // [1, 2, 3, 4, 5] (original array is unchanged)\r\n\r\n\r\n---\r\n\r\n 2. splice()\r\n\r\n Purpose:\r\n- Modifies the original array by adding, removing, or replacing elements.\r\n\r\n Syntax:\r\n\r\narray.splice(start, deleteCount, item1, item2, ...)\r\n\r\n\r\n Parameters:\r\n- start: The index where changes will begin.\r\n- deleteCount: The number of elements to remove. If 0, no elements are removed.\r\n- item1, item2, ... (optional): Elements to add to the array at the start position.\r\n\r\n Example 1: Remove elements\r\n\r\nconst arr = [1, 2, 3, 4, 5];\r\n\r\n// Remove 2 elements starting from index 1\r\nconst removed = arr.splice(1, 2);\r\nconsole.log(removed); // [2, 3]\r\nconsole.log(arr); // [1, 4, 5] (original array is modified)\r\n\r\n\r\n Example 2: Add elements\r\n\r\nconst arr = [1, 4, 5];\r\n\r\n// Add 2 and 3 at index 1\r\narr.splice(1, 0, 2, 3);\r\nconsole.log(arr); // [1, 2, 3, 4, 5]\r\n\r\n\r\n Example 3: Replace elements\r\n\r\nconst arr = [1, 2, 3, 4, 5];\r\n\r\n// Replace 2 elements at index 1 with 8 and 9\r\narr.splice(1, 2, 8, 9);\r\nconsole.log(arr); // [1, 8, 9, 4, 5]\r\n\r\n\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 64,
    topic: "javascript",
    question: "What is strict mode in  ?",
    answer:
      'Strict mode in JavaScript is a way to enforce stricter parsing and error handling in your code. It is activated by including the string "use strict"; at the top of a script or function. It helps catch common coding mistakes, makes the code more secure, and often improves performance.\n\nBenefits of Strict Mode:\n1.Prevents accidental globals and enforces proper scoping.\n2.Allows JavaScript engines to optimize code more effectively.\n3.Forces developers to write cleaner, more modern JavaScript.\nLimitations:\n1.It can only be applied to entire scripts or individual functions. You cannot selectively enable strict mode for specific blocks of code.\n2.It might break older, poorly written code, so it\'s best used in modern projects.\n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 65,
    topic: "javascript",
    question: "What is Shallow copy & Deep copy ?",
    answer:
      " Shallow Copy vs. Deep Copy (Simplified)\n\n---\n\n Shallow Copy\nA shallow copy makes a copy of an object or array, but it only copies the top-level values. If the object has nested objects (objects inside objects), it doesn't create a new copy of those nested objects. Instead, it shares the nested objects between the original and the copied object.\n\n Example:\nImagine copying a book. The title and cover are copied, but if the book has notes inside, the copy will just point to the same notes as the original.\n\n Code Example:\n\nconst original = { a: 1, b: { c: 2 } };\n\n// Shallow copy\nconst shallowCopy = { ...original };\n\n// Changing the nested object in the copy\nshallowCopy.b.c = 42;\n\nconsole.log(original.b.c); // Output: 42 (both share the same nested object)\n\n\n---\n\n Deep Copy\nA deep copy makes a full, independent copy of an object or array. It duplicates everything, including nested objects or arrays. If you change something in the copied object, it won’t affect the original object.\n\n Example:\nImagine copying a book and also copying all the notes inside the book. Now the copy has its own notes, and changes in one book don’t affect the other.\n\n Code Example:\n\nconst original = { a: 1, b: { c: 2 } };\n\n// Deep copy\nconst deepCopy = JSON.parse(JSON.stringify(original));\n\n// Changing the nested object in the copy\ndeepCopy.b.c = 42;\n\nconsole.log(original.b.c); // Output: 2 (the original is not affected)\n\n When to Use Them?\n- Use shallow copy when you don’t plan to modify nested data.\n- Use deep copy when the copied data must be completely separate from the original.\n\n---\n\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 66,
    topic: "javascript",
    question: "What is difference between forEach() & map() ?",
    answer:
      "\n\n forEach() vs map()\n\n---\n\n forEach()\n- What it does: Loops through an array and runs a function for each item.\n- Return value: It doesn't return anything (it returns undefined).\n- Main use: It's used when you just want to do something with each item (like logging or modifying something outside the array).\n\n Example:\n\nconst numbers = [1, 2, 3];\nnumbers.forEach(num => console.log(num  2));  // Output: 2, 4, 6 (but nothing is returned)\n\n\nHere, it prints each number doubled but doesn't give you back a new array.\n\n---\n\n map()\n- What it does: Loops through an array and creates a new array based on the result of a function for each item.\n- Return value: It returns a new array.\n- Main use: It's used when you want to transform the items in the array (e.g., changing them into something else).\n\n Example:\n\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num  2);  // Output: [2, 4, 6]\nconsole.log(doubled);  // [2, 4, 6]\n\n\nHere, it gives you a new array with the numbers doubled.\n\n\n\n When to Use:\n- Use forEach() when you don't care about returning anything and just want to do something with each item (e.g., log it or modify something outside).\n- Use map() when you need to transform the array and get a new array.\n\n---\n\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 67,
    topic: "javascript",
    question: "Explain how async await works",
    answer:
      '\n\n 1. What Is async/await?\n- async makes a function return a promise.\n- await makes JavaScript wait for a promise to resolve before continuing the code.\n\n How Does It Work?\n- Normally, JavaScript runs synchronously, meaning it executes one line of code at a time.\n- With async/await, we can make JavaScript wait for something to finish before moving on to the next line of code, without freezing the whole program.\n\n---\n\n async Function:\n- An async function always returns a promise.\n- Even if you return a regular value from an async function, JavaScript automatically wraps it in a promise.\n\n Example:\n\nasync function greet() {\n  return "Hello!";\n}\n\ngreet().then(console.log);  // Output: "Hello!"\n\n\n---\n\n await Keyword:\n- await is used inside an async function to pause the code until a promise resolves.\n- It can only be used inside functions marked with async.\n\n Example with await:\n\nasync function fetchData() {\n  let data = await fetch("https://jsonplaceholder.typicode.com/posts"); // Wait for the data\n  let jsonData = await data.json(); // Wait for the JSON to load\n  console.log(jsonData);  // Now we can use the data\n}\n\nfetchData();\n\n\n- In this case, JavaScript waits for fetch() and data.json() to finish before moving to the next line.\n\n---\n\n Why Use async/await?\n- Makes your code look synchronous, which is easier to read and understand.\n- Avoids callback hell (nested callbacks) and chains of .then().\n\n---\n\n Summary:\n- async turns a function into a promise-returning function.\n- await makes the function wait for a promise to resolve before continuing.\n\nIn simpler terms, async/await lets us handle promises more like normal code, making it easier to work with asynchronous operations like fetching data from a server. \n',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 68,
    topic: "javascript",
    question:
      "What is the difference between   sort()  and  arr.sort((a, b) => a - b) ?",
    answer:
      "The difference between  sort()  and  arr.sort((a, b) => a - b)  lies in how they handle sorting and what type of sorting they perform:\n\n    1.  sort()  (without a comparator):\n- Default Behavior: The  sort()  method, when called without a comparator, converts each element of the array to a string and sorts them lexicographically (alphabetically). This means the elements are compared as strings, and not as numbers, so their order may not be what you expect for numbers.\n  \n- Example:\n\n     \n  const arr = [10, 1, 21, 2];\n  arr.sort();\n  console.log(arr); // Output: [1, 10, 2, 21]\n     \n\n  In this case, the array is sorted alphabetically based on the string values, not numerically. So,  '10'  comes before  '2'  because  '1'  is lexicographically less than  '2' .\n\n    2.  arr.sort((a, b) => a - b)  (with a comparator):\n- Behavior: When you provide a comparator function like  (a, b) => a - b  to the  sort()  method, it sorts the elements numerically (or based on any custom logic you define in the comparator). The comparator function receives two arguments ( a  and  b ) and returns:\n  - A negative number if  a  should come before  b .\n  - A positive number if  a  should come after  b .\n  -  0  if  a  and  b  are considered equal.\n\n- Example:\n\n  const arr = [10, 1, 21, 2];\n  arr.sort((a, b) => a - b);\n  console.log(arr); // Output: [1, 2, 10, 21]\n     \n\n  Here, the array is sorted in ascending numerical order because of the comparator function  (a, b) => a - b .\n\n    Summary of Differences:\n-  sort()  (without a comparator): Sorts elements as strings, which might not work as expected for numbers.\n-  arr.sort((a, b) => a - b) : Sorts elements numerically (or according to the logic you define in the comparator). This is the correct approach for sorting numbers in ascending order.\n\n    When to Use:\n- Use  sort()  without a comparator for sorting strings or when the default lexicographical sort is fine.\n- Use  arr.sort((a, b) => a - b)  for sorting numbers or when you need specific sorting logic.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 69,
    topic: "javascript",
    question: "What is lambda function in js ?",
    answer:
      'In JavaScript, a lambda function is another term for an anonymous function or arrow function. These functions are typically concise, unnamed, and often used in situations where a function is needed temporarily or as a callback. The term "lambda" originates from lambda calculus, a mathematical formalism often associated with functional programming.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 70,
    topic: "javascript",
    question: "what is Factory functions in js ? ",
    answer:
      "A factory function in JavaScript is a function that creates and returns an object. Unlike classes or constructors, factory functions allow you to define and customize object creation without using the new keyword. They are particularly useful for creating multiple similar objects, especially when you want more control over the object creation process.\n\nfunction createPerson(name, age) {\n    return {\n        name,\n        age,\n        greet() {\n            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);\n        }\n    };\n}\n\nconst person1 = createPerson(\"Alice\", 25);\nconst person2 = createPerson(\"Bob\", 30);\n\nperson1.greet(); // Hi, I'm Alice and I'm 25 years old.\nperson2.greet(); // Hi, I'm Bob and I'm 30 years old.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 71,
    topic: "javascript",
    question: "What is REST API ? ",
    answer:
      "A REST API (Representational State Transfer Application Programming Interface) is a way for different software systems to communicate over the internet using the principles of REST architecture. It's commonly used for building web services that are lightweight, scalable, and maintainable.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 72,
    topic: "javascript",
    question: "What is a wrapper component?",
    answer:
      "A wrapper in React is a component that wraps or surrounds another component or group of components. It can be used for a variety of purposes such as adding additional functionality, styling, or layout to the wrapped components.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 73,
    topic: "javascript",
    question: "What are controlled components?",
    answer:
      "Controlled components in React are form elements whose values are controlled by React state. \nInstead of relying on the browser to manage the state of form elements, the values of controlled components are controlled by React and updated via state and event handlers.\n\n Key Points about Controlled Components:\n\n1. Stateful Value : The value of a controlled component is stored in React state. This means that changes to the component's value are reflected in the component's state, and vice versa.\n\n2. Event Handlers : Controlled components use event handlers (e.g., onChange) to update the state when the value of the component changes. These event handlers are provided by React and are attached to the form elements.\n\n3. Single Source of Truth : By controlling the value of form elements with React state, controlled components maintain a single source of truth for the component's value. This makes it easier to manage and synchronize the state of form elements across multiple components.\n\n4. Immutable State : React state should be treated as immutable. Instead of directly modifying the state, controlled components update the state by calling the setState method provided by React.\n\n5. Benefits : Controlled components provide finer-grained control over form elements and enable more complex interactions, such as validation, conditional rendering, and synchronization with other components.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 74,
    topic: "javascript",
    question: "What are uncontrolled components?",
    answer:
      "Uncontrolled components in React are form elements whose state is managed by the browser rather than by React. Unlike controlled components, which have their values controlled by React state, uncontrolled components rely on the browser's default behavior to manage their state.\n\n  Key Points about Uncontrolled Components:\n\n1. Native State Management : Uncontrolled components rely on the browser's native form handling behavior to manage their state. This means that the value of an uncontrolled component is stored internally by the browser, and changes to the component's value are managed by the browser.\n\n2. Ref-Based Approach : Instead of using React state to control the value of form elements, uncontrolled components can be accessed and manipulated directly using the ref API provided by React. This allows you to interact with the underlying DOM elements of the form elements.\n\n3. No Single Source of Truth : Unlike controlled components, which maintain a single source of truth for the component's value in React state, uncontrolled components do not have a single source of truth. The value of an uncontrolled component is managed internally by the browser and may not be synchronized with React state.\n\n4. Less Control : Uncontrolled components provide less control and flexibility compared to controlled components. While they may be simpler to use for basic form interactions, they can be more challenging to work with for complex interactions or when synchronization with React state is required.\n\n5. Usage Scenarios : Uncontrolled components are commonly used in situations where you need to integrate with existing form libraries or when you want to delegate form handling entirely to the browser. They may also be used in performance-critical scenarios where minimizing the overhead of managing form state in React is important.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 75,
    topic: "javascript",
    question: "What is a switching component?",
    answer:
      'In React, a switching component is used to conditionally render different components or elements based on certain criteria, such as the current route or application state. This pattern is commonly used in routing, where different pages or views are rendered depending on the URL path.\n\n Key Points about Switching Components:\n\n1. Conditional Rendering : Switching components enable conditional rendering of components based on specific conditions or criteria.\n \n2. Routing : They are often used in routing libraries like "react-router " to switch between different route components depending on the current URL.\n\n3. Maintainability : Using a switching component helps keep your codebase organized and maintainable by clearly defining which components should be rendered under specific conditions.\n\n  Benefits of Using Switching Components:\n\n- Clear Structure : Clearly defines which components should be rendered based on the application\'s state or URL.\n- Enhanced Maintainability : Makes it easier to manage and update routes or conditional logic in a centralized location.\n- Improved Readability : Provides a more readable and intuitive way to manage complex conditional rendering scenarios.\n\nSwitching components, especially in the context of routing, are essential for building organized, maintainable, and user-friendly single-page applications in React.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 76,
    topic: "javascript",
    question: "Why should component names start with capital letter?",
    answer:
      "If you are rendering your component using jsx , the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 77,
    topic: "javascript",
    question: "What are stateless components?",
    answer:
      'Stateless components in React, also known as functional components, are components that do not manage their own state. They are primarily concerned with rendering UI and receiving data through props. Stateless components are simple functions that take props as an argument and return .\n\n Key Points about Stateless Components:\n\n1. Functional Components : Stateless components are typically written as JavaScript functions. They do not have lifecycle methods or state management capabilities unless enhanced by hooks (e.g., "useState ", "useEffect ").\n\n2. Props-Driven : These components receive data and callbacks through props. They rely entirely on the props passed to them for rendering and behavior, making them predictable and easy to test.\n\n3. Simplicity : Stateless components are simpler and more concise than class components. They focus solely on rendering UI based on the provided props, without managing state or lifecycle events.\n\n4. Performance : Functional components generally perform better than class components because they have less overhead. Since they don\'t manage state or lifecycle methods, they are easier for React to optimize.\n\n5. Hooks : With the introduction of hooks in React 16.8, functional components can now manage state and side effects, allowing them to have capabilities previously limited to class components. However, when not using hooks, functional components remain stateless.\n\n  Benefits of Stateless Components:\n\n- Readability and Maintainability : They are easy to read and maintain due to their simplicity and lack of internal state.\n- Reusability : Stateless components are highly reusable as they are not tied to any specific state or lifecycle.\n- Testability : They are straightforward to test because they produce the same output for the same props without side effects.\n\n  When to Use Stateless Components:\n\n- Pure Presentation : Use stateless components for purely presentational purposes, where the component\'s role is to render UI based on props.\n- Component Composition : Use them to build small, reusable components that can be composed together to create more complex UIs.\n- Performance Optimization : Use them to take advantage of React\'s optimizations for functional components, especially in performance-critical applications.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 78,
    topic: "javascript",
    question: "What are stateful components?",
    answer:
      'Stateful components in React are components that manage their own state. Unlike stateless components, stateful components can store and manage data that can change over time, which affects how the component renders and behaves.\n\n Key Points about Stateful Components:\n\n1. State Management : Stateful components maintain an internal state. The state is an object that holds data or information about the component. This state can change based on user interactions, events, or other factors.\n\n2. Class Components and Hooks : Traditionally, stateful components were implemented as class components. However, with the introduction of hooks in React 16.8, functional components can also be stateful by using the "useState " hook and other related hooks.\n\n3. Lifecycle Methods : In class components, lifecycle methods are used to manage component behavior at different stages of its existence (e.g., mounting, updating, unmounting). Functional components use hooks like "useEffect " to achieve similar behavior.\n\n4. Complex Logic : Stateful components are often used when a component needs to handle complex logic, manage user input, perform side effects, or interact with external systems (e.g., APIs).\n\n  Benefits of Stateful Components:\n\n- Dynamic Behavior : They allow components to have dynamic behavior based on internal state changes.\n- Complex Interactions : Useful for managing complex interactions and user input.\n- Lifecycle Management : Class components provide lifecycle methods to hook into different phases of the component\'s lifecycle.\n\n  When to Use Stateful Components:\n\n- User Input Handling : When you need to handle and manage user input.\n- Component-specific Data : When a component needs to manage its own data independently of other components.\n- Complex UI Logic : When implementing components that require complex logic, state management, and side effects.\n\nStateful components are essential for creating interactive and dynamic React applications, enabling components to respond to user actions and changes in data over time.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 79,
    topic: "javascript",
    question: "Do Hooks replace render props and higher order components?",
    answer:
      "Hooks in React provide a more flexible and concise way to share stateful logic and behavior between components compared to render props and higher-order components (HOCs). While hooks can replace some use cases of render props and HOCs, they do not entirely replace them, as each approach has its own strengths and use cases.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 80,
    topic: "javascript",
    question: "Explain styled components in React?",
    answer:
      "Styled-component is a Module which allows us to write CSS within JavaScript in a very modular and reusable way in React. Instead of having one global CSS file for a React project, we can use styled-component for enhancing the developer experience. It also removes the mapping between components and styles – using components as a low-level styling construct",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 81,
    topic: "javascript",
    question: "What are loadable components?",
    answer:
      "Loadable components are a pattern and a set of libraries that enable dynamic code splitting and lazy loading of components in React applications. This technique allows you to split your application into smaller chunks and load them asynchronously only when they are needed, improving performance by reducing the initial bundle size.\nWith Loadable Components, you can load React components asynchronously, meaning the component code won't be loaded until it's actually needed. This is particularly useful for large React apps where you don't need all the components immediately when the app starts.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 82,
    topic: "javascript",
    question: "What is suspense component?",
    answer:
      "In React, the Suspense component is a built-in feature designed to handle asynchronous rendering and enable components to \"wait\" for something (like data or code) before rendering. It's typically used in conjunction with code splitting or data fetching to make sure the user sees a fallback (like a loading spinner) until the required resources are loaded.\n\n Key Points:\n- Suspense allows you to delay the rendering of a component until some asynchronous operation (like data fetching or dynamic imports) completes.\n- You can specify a fallback UI (usually a loading spinner, loading message, or skeleton screen) that is shown until the content is ready.\n- Suspense is particularly useful for handling lazy-loaded components or data fetching that needs to be completed before rendering the UI.\n\n Syntax:\n\n\n<Suspense fallback={<div>Loading...</div>}>\n {/ Child components that might take time to load /}\n</Suspense>\n\n\n Example 1: Using Suspense for Lazy Loading a Component\n\n\nimport React, { Suspense, lazy } from 'react';\n\n// Dynamically import the component\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nconst App = () => {\n return (\n <div>\n <h1>React Suspense Example</h1>\n <Suspense fallback={<div>Loading the component...</div>}>\n <LazyComponent />\n </Suspense>\n </div>\n );\n};\n\nexport default App;\n\n\n- Here, the LazyComponent is loaded only when needed, and until it's loaded, the fallback UI (Loading the component...) is displayed.\n\n Key Features:\n1. Lazy Loading: Suspense enables components to be loaded only when required, helping reduce the initial bundle size.\n2. Asynchronous Rendering: It improves the user experience by showing a fallback UI while waiting for an asynchronous operation (like data fetching or code loading).\n3. Declarative: It's a declarative way to handle asynchronous behavior in the component tree.\n\n  When to Use Suspense:\n- Lazy loading components with React.lazy().\n- Handling asynchronous data fetching in a declarative way (though data fetching support in Suspense is still experimental in React).\n- Code splitting: Allowing parts of your application to load only when needed.\n\n Summary:\nSuspense is a powerful React feature that makes handling asynchronous tasks like dynamic imports and data fetching more seamless. By wrapping components with Suspense, you can show fallback content while waiting for resources to load, improving the performance and user experience of your React application.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 83,
    topic: "javascript",
    question: "What are React Server components?",
    answer:
      "React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 84,
    topic: "javascript",
    question: "What is Lifting State Up in React?",
    answer:
      "Lifting state up in React is a pattern used to manage shared state between multiple components by moving the state to a common ancestor component. Instead of storing the state separately in each component that needs access to it, you lift the state up to a higher-level component and pass it down to the components that need it as props.\n\n Key Points about Lifting State Up:\n\n1. Single Source of Truth : Lifting state up ensures that there is a single source of truth for the shared state. By moving the state to a common ancestor component, you avoid duplicating the state across multiple components and maintain consistency.\n\n2. Prop Drilling : When lifting state up, you pass the state down to the child components as props. This can lead to prop drilling, where intermediate components have to pass props down to deeper components, even if they don't directly use the props themselves.\n\n3. Data Flow : Lifting state up promotes a top-down data flow in React, where changes to the state in the parent component propagate down to the child components through props. This makes it easier to understand how data flows through the component tree.\n\n4. Composition : Lifting state up encourages component composition, where smaller, reusable components are composed together to create more complex UIs. Each component is responsible for a specific part of the UI and receives the necessary state and behavior as props.\n\n5. Separation of Concerns : Lifting state up helps separate concerns by moving the management of state out of presentational components and into container components. Presentational components focus on rendering UI based on props, while container components manage state and behavior.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 85,
    topic: "javascript",
    question: "What is children prop?",
    answer:
      "In React, the children prop is a special prop that can be used to pass components or elements as children to another component. It allows you to nest components within each other, creating a hierarchical structure in your React application.\nThe children prop in React allows components to accept and render nested elements or components dynamically. It facilitates component composition, customization, and the creation of flexible and reusable UI structures in React applications. Understanding how to effectively use and manipulate children is essential for building scalable and maintainable React components.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 86,
    topic: "javascript",
    question: "What are default props?",
    answer:
      "Default props in React are values that you assign to a component's props when no value is provided by the parent component. They help ensure that a component has a fallback value for its props in case the parent component doesn't pass any value for a specific prop.\n\nIn simpler terms, default props are like a \"backup\" for your component's props, ensuring it has a meaningful value even if nothing is provided.\n\nimport React, { Component } from 'react';\n\nclass Greeting extends Component {\n render() {\n return (\n <div>\n <h1>Hello, {this.props.name}!</h1>\n </div>\n );\n }\n}\n\n// Setting default prop\nGreeting.defaultProps = {\n name: 'Guest', // Default value if no 'name' is passed\n};\n\nexport default Greeting;",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 87,
    topic: "javascript",
    question: "What is React lazy function?",
    answer:
      "The React.lazy function is a utility in React that allows you to dynamically import components, enabling code-splitting in your application. Code-splitting helps to improve the performance of your React app by loading components only when they are needed, rather than loading all components upfront.\nBenefits:\n1.Performance Improvement:\nBy loading components only when they are needed, you reduce the initial load time of your application, which can improve the performance, especially for large applications with many components.\n2.Reduced Bundle Size:\nCode-splitting with React.lazy helps to keep the initial bundle size small, as only the necessary code for the initial render is loaded.\n3.Enhanced User Experience:\nUsers will experience faster load times and smoother interactions, as components are loaded on-demand.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 88,
    topic: "javascript",
    question: "What is code-splitting?",
    answer:
      "Code-splitting is a performance optimization technique in web development where the application's code is split into smaller, manageable chunks that are loaded on demand rather than loading the entire application code at once. This approach can significantly reduce the initial load time and improve the performance of your web application, especially for large applications with many features",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 89,
    topic: "javascript",
    question: "What is route based code splitting?",
    answer:
      "Route-based code splitting is a technique used in React applications to dynamically load JavaScript code specific to each route or page of the application. Instead of loading all JavaScript code upfront when the application is initially loaded, route-based code splitting allows you to split the code into smaller bundles and load them asynchronously only when navigating to a particular route.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 90,
    topic: "javascript",
    question: "What are the differences between Throttling & Debouncing ?",
    answer:
      "Throttling and debouncing are techniques used in JavaScript to control the rate at which a function is executed. They are especially useful in scenarios where frequent execution of a function can lead to performance issues, such as handling events like scroll, resize, or keystrokes.\n\n Throttling\n\n Purpose :\n- Throttling limits the maximum number of times a function can be called over a specified period. It ensures that the function is not executed more than once within that period.\n\n Behavior :\n- When an event triggers a throttled function, it will execute at most once per specified interval, even if the triggering event happens multiple times during that interval.\n\n Example :\n- Imagine a scenario where a user is scrolling a webpage. You might use throttling to limit the number of times a scroll event handler is executed to improve performance.\n\n  Debouncing\n\n Purpose :\n- Debouncing ensures that a function will not be executed until after a certain amount of time has passed since the last time the function was invoked. It delays invoking the function until after a pause in the event triggering.\n\n Behavior :\n- If an event triggers a debounced function multiple times within the specified delay period, the function will only execute once, after the delay period has passed since the last invocation.\n\n Example :\n- Consider a search input field where you want to fetch search results from a server as the user types. Debouncing can be used to delay the execution of the search function until the user has stopped typing for a specified time, reducing the number of server requests.\n\n Differences\n\n1. Execution Control :\n - Throttling : Limits the rate of execution of a function to a specified interval, allowing the function to execute at most once per interval.\n - Debouncing : Delays the execution of a function until after a specified time period has passed since the last invocation, ensuring that the function is not executed repeatedly in a short time span.\n\n2. Use Cases :\n - Throttling : Useful for scenarios where you want to limit the frequency of execution of a function, such as handling rapid events like mouse move or scroll.\n - Debouncing : Useful when you want to ensure that a function is only executed after a pause in the triggering event, such as handling input events like typing or resizing a window.\n\n3. Behavior with Multiple Events :\n - Throttling : Guarantees that the function will execute at a regular interval, even if the event continues to trigger during that interval.\n - Debouncing : Ensures that the function will only execute once, after a pause in the event triggering, regardless of how many times the event is triggered within the delay period.\n\nIn summary, while both throttling and debouncing are techniques used to manage how frequently a function is executed, they differ in how they control the timing of function execution in response to repeated events. Throttling ensures a function is executed at a regular interval, while debouncing delays function execution until a pause in event triggering occurs.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 91,
    topic: "javascript",
    question: "Explain the use of render() method in React?",
    answer:
      "In React, the render() method is used to define what should be rendered to the DOM. It is a core method in class components, responsible for returning the JSX (or React elements) that will be displayed on the screen. The render() method must return a single React element, which can be a JSX element, a component, or null.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 92,
    topic: "javascript",
    question: "What is Concurrent Rendering?",
    answer:
      "Concurrent Rendering is a feature in React that allows React to work on multiple tasks simultaneously, without blocking the main thread, to improve performance and responsiveness. It’s particularly helpful for large, complex applications where updates might take a long time to process, or when you have many components that need to be re-rendered at once.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 93,
    topic: "javascript",
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering in React is a technique for rendering different components or elements based on certain conditions. \nThis allows developers to dynamically control the output of the component based on the application's state or props.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 94,
    topic: "javascript",
    question: "What is flux architecture in redux?",
    answer:
      "Flux is a design pattern for managing state in web applications, and Redux is a popular library that implements the Flux architecture. Flux is characterized by its unidirectional data flow, which helps manage complex state in large-scale applications by enforcing a strict structure for how data flows through the application.\n\n Key Concepts of Flux Architecture:\n\n1. Unidirectional Data Flow : Data flows in one direction through the application, from the action creators to the stores and then to the views. This ensures predictable and consistent state management.\n\n2. Action : Actions are plain JavaScript objects that represent events or user interactions that occur in the application. They are dispatched to the store to trigger state updates.\n\n3. Dispatcher : The dispatcher is a central hub that receives actions from the application and dispatches them to the appropriate stores. It ensures that actions are processed in the correct order and avoids race conditions.\n\n4. Store : Stores are containers for application state and logic. They receive actions from the dispatcher, update their state accordingly, and notify subscribers (usually React components) of changes.\n\n5. View : Views are components that display the application's state to the user. They subscribe to changes in the store and re-render when the state changes.\n\n  How Redux Implements Flux:\n\nRedux is a library that provides a predictable state container for JavaScript applications. It implements the Flux architecture with the following components:\n\n1. Actions : Actions in Redux are plain JavaScript objects that represent events or user interactions. They must have a \"type \" property that describes the action and can optionally contain additional data.\n\n2. Reducers : Reducers are pure functions that take the current state and an action as arguments and return the new state based on the action. They are responsible for updating the state in response to actions.\n\n3. Store : The store in Redux is a single source of truth for the application state. It holds the current state, provides methods for dispatching actions, and allows components to subscribe to changes in the state.\n\n4. Middleware : Middleware provides a way to extend Redux's capabilities by intercepting and handling actions before they reach the reducers. It is commonly used for tasks like logging, asynchronous actions, or routing.\n\n5. Selectors : Selectors are functions that compute derived data from the Redux state. They provide a convenient way to access specific pieces of state or compute derived state values.\n\nBy implementing the Flux architecture, Redux helps manage complex state in JavaScript applications by enforcing a strict unidirectional data flow and providing a predictable way to manage state changes. This architecture promotes maintainability, scalability, and testability of applications.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 95,
    topic: "javascript",
    question: "Does the lazy function support named exports?",
    answer:
      "No, currently React.lazy function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 96,
    topic: "javascript",
    question: "What is React hydration?",
    answer:
      "React hydration is the process by which React attaches event handlers and updates the DOM created on the server side with the client-side JavaScript. It's a crucial step in server-side rendering (SSR) with React, where the initial HTML content is generated on the server and sent to the client, and then React takes over client-side rendering and interaction.\n\n Key Points about React Hydration:\n\n1. Server-Side Rendering (SSR) :\n - In SSR, the initial HTML content of the React components is generated on the server and sent to the client as static HTML markup.\n \n2. Client-Side Rehydration :\n - After the static HTML content is loaded on the client side, React takes over the rendering process and \"hydrates\" the HTML by attaching event listeners and restoring the component tree's state using client-side JavaScript.\n \n3. Matching Server and Client Markup :\n - React ensures that the server-rendered HTML and the client-side React components match. It reconciles the server-generated HTML with the client-side component tree to ensure consistency between the initial static markup and the interactive, dynamic UI rendered by React.\n\n4. Event Delegation :\n - During hydration, React attaches event listeners to the existing DOM elements to handle user interactions, such as clicks, changes, or submissions. This allows React to take over the interactivity of the UI seamlessly.\n\n5. Performance Optimization :\n - Hydration helps improve the performance of client-side rendering by reusing the server-generated HTML content instead of re-rendering the entire UI from scratch. This reduces the time required for the initial render and improves the perceived loading speed of the application.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 97,
    topic: "javascript",
    question: "Why React uses className over class attribute?",
    answer:
      "This is because class is a reserved keyword in JavaScript, used to define classes in object-oriented programming. Since React components are written in JavaScript, using class as an attribute name would conflict with the JavaScript keyword.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 98,
    topic: "javascript",
    question: "What are portals in React?",
    answer:
      "Portals in React provide a way to render children into a DOM node that exists outside of the parent component's DOM hierarchy. This allows you to render content at a different location in the DOM tree, such as outside of a modal, tooltip, or any other overlay.\n\n Key Points about Portals:\n\n1. Render Content Outside Parent DOM : Portals enable you to render child components into a DOM node that is outside of the parent component's DOM hierarchy. This allows you to render content in a different part of the DOM tree, such as at the top level or within a specific container.\n\n2. Use Cases : Portals are commonly used for rendering overlays, modals, tooltips, popovers, or any other content that needs to be positioned or styled independently of the parent component's layout.\n\n3. Separation of Concerns : Portals help maintain separation of concerns by allowing you to keep modal or overlay logic separate from the components that trigger them. This improves code organization and makes it easier to manage complex UI interactions.\n\n4. Event Bubbling : Events emitted by portal-rendered components still bubble up through the React component tree as if they were rendered within the parent component. This means that event handlers defined in parent components can still capture and handle events from portal-rendered components.\n\n5. Accessibility : When using portals, it's essential to consider accessibility requirements, such as ensuring that portal-rendered content is keyboard navigable and screen reader friendly.\n\n Example:\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst Modal = ({ children }) => {\n return ReactDOM.createPortal(\n children,\n document.getElementById('modal-root')\n );\n};\n\nconst App = () => {\n return (\n <div>\n <h1>Main Content</h1>\n <Modal>\n <div>\n <h2>Modal Content</h2>\n <p>This content is rendered using a portal.</p>\n </div>\n </Modal>\n </div>\n );\n};\n\nReactDOM.render(<App />, document.getElementById('root'));\n\n\nIn this example, the \"Modal \" component renders its children using \"ReactDOM.createPortal \". The children are rendered into a DOM node with the id \"modal-root \", which exists outside the main content's DOM hierarchy. This allows the modal content to be rendered independently of the main content, providing flexibility and separation of concerns.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 99,
    topic: "javascript",
    question: "What are the recommended ways for static type checking?",
    answer:
      "Normally we use PropTypes library (React.PropTypes moved to a prop-types package since React v15.5) for type checking in the React applications. For large code bases, it is recommended to use static type checkers such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 100,
    topic: "javascript",
    question: "What is the use of react-dom package?",
    answer:
      "The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 101,
    topic: "javascript",
    question: "How to use innerHTML in React?",
    answer:
      'The dangerouslySetInnerHTML attribute is React\'s replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __ object as key and HTML text as value.\n\nfunction createMarkup() {\n return { __ : "First &middot; Second" };\n}\n\nfunction MyComponent() {\n return <div dangerouslySetInnerHTML={createMarkup()} />;\n}',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 102,
    topic: "javascript",
    question: "How events are different in React?",
    answer:
      "Handling events in React elements has some syntactic differences:\n\n1.React event handlers are named using camelCase, rather than lowercase.\n2.With JSX you pass a function as the event handler, rather than a string.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 103,
    topic: "javascript",
    question: "Why we need to be careful when spreading props on DOM elements?",
    answer:
      "When spreading props on DOM elements in React, it's essential to be cautious because not all props are valid HTML attributes, and passing unrecognized props to DOM elements can result in unexpected behavior or errors. Additionally, spreading props indiscriminately can potentially expose your application to security vulnerabilities.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 104,
    topic: "javascript",
    question: "What is the difference between React and ReactDOM?",
    answer:
      "The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 105,
    topic: "javascript",
    question: "What is ReactDom ?",
    answer:
      "ReactDOM is a package in React that provides methods to interact with the DOM (Document Object Model) in a web application. It serves as the glue between React components and the actual DOM elements on the page.\n\nHere are the key functions provided by ReactDOM:\n\n1. \"ReactDOM.render() \" : This method is used to render a React component into a specific DOM element. For example, if you want to render a component inside a \"div \" with an ID of \"root \", you'd use \"ReactDOM.render() \" to do that.\n\n \n import React from 'react';\n import ReactDOM from 'react-dom';\n import App from './App';\n\n ReactDOM.render(<App />, document.getElementById('root'));\n \n\n2. \"ReactDOM.createPortal() \" : This method allows you to render a component outside the main DOM hierarchy, which is useful for things like modals or tooltips that need to break out of the usual parent-child relationship.\n\n \n import React from 'react';\n import ReactDOM from 'react-dom';\n\n function Modal({ children }) {\n return ReactDOM.createPortal(\n <div className=\"modal\">{children}</div>,\n document.getElementById('modal-root')\n );\n }\n\n\n3. \"ReactDOM.hydrate() \" : This method is used in server-side rendering (SSR) to hydrate the server-rendered HTML into a React application. It attaches event listeners to the existing markup.\n\n\n import React from 'react';\n import ReactDOM from 'react-dom';\n import App from './App';\n\n ReactDOM.hydrate(<App />, document.getElementById('root'));\n \n\n4. \"ReactDOM.unmountComponentAtNode() \" : This method removes a mounted React component from the DOM and cleans up any associated resources.\n\n \n import ReactDOM from 'react-dom';\n\n const rootElement = document.getElementById('root');\n ReactDOM.unmountComponentAtNode(rootElement);\n \" \" \"\n\nIn React 18, some of these functionalities have been updated or replaced by \"ReactDOM.createRoot() \" for improved concurrent rendering, but the basic idea remains the same. ReactDOM is essential for rendering React components into the actual browser DOM.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 106,
    topic: "javascript",
    question: "How to re-render the view when the browser is resized?",
    answer:
      "You can use the useState hook to manage the width and height state variables, and the useEffect hook to add and remove the resize event listener. The [] dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 107,
    topic: "javascript",
    question: "Why you can't update props in React?",
    answer:
      "The React philosophy is that props should be immutable(read only) and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 108,
    topic: "javascript",
    question: "How to prevent unnecessary updates using setState?",
    answer:
      "You can compare the current value of the state with an existing state value and decide whether to rerender the page or not. If the values are the same then you need to return null to stop re-rendering otherwise return the latest state value.\ngetUserProfile = (user) => {\n const latestAddress = user.address;\n this.setState((state) => {\n if (state.address === latestAddress) {\n return null;\n } else {\n return { title: latestAddress };\n }\n });\n};",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 109,
    topic: "javascript",
    question: "How to prevent a function from being called multiple times?",
    answer:
      "If you use an event handler such as onClick or onScroll and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,\n\n1.Throttling: Changes based on a time based frequency. For example, it can be used using _.throttle lodash function\n2.Debouncing: Publish changes after a period of inactivity. For example, it can be used using _.debounce lodash function\n3.RequestAnimationFrame throttling: Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 110,
    topic: "javascript",
    question: "What is strict mode in React?",
    answer:
      "Strict Mode in React is a tool for highlighting potential problems in an application. It helps developers identify issues with their code by enabling additional checks and warnings during development. Strict Mode does not affect the production build of the application; it only works in development mode to ensure better code quality and maintainability.\n\n Key Features of React Strict Mode:\n\n1. Identifies Unsafe Lifecycles:\n - React checks if your components use any lifecycle methods that are considered unsafe for future versions (e.g., componentWillMount, componentWillReceiveProps, and componentWillUpdate). These lifecycle methods will eventually be removed, so React warns when they are used.\n\n2. Warns About Legacy String Refs:\n - Strict Mode helps identify components that use the older string ref API, which is less reliable and is being phased out in favor of the newer callback or React.createRef() API.\n\n3. Detects Unexpected Side Effects:\n - Strict Mode helps detect side effects that occur in the render method, which may lead to issues like unnecessary re-renders, inconsistent UI behavior, and memory leaks.\n\n4. Helps Detect Potentially Broken Code:\n - React’s Strict Mode checks for certain patterns that can cause bugs or unexpected behavior, like improper use of React hooks, usage of deprecated APIs, or improper key usage in lists.\n\n5. Enables Double Rendering:\n - In Strict Mode, React intentionally double-renders components to detect side effects and ensure that the component is idempotent (i.e., producing the same result every time it renders). This helps surface hidden bugs that could affect performance or stability.\n\n6. Legacy Context API:\n - Strict Mode helps identify components that are still using the old context API, which has since been replaced with a new, more efficient version.\n\n Example of Using Strict Mode:\n\nYou can enable Strict Mode by wrapping your entire component tree (or part of it) with <React.StrictMode>.\n\nfunction App() {\n return <h1>Hello, World!</h1>;\n}\n\nReactDOM.render(\n <React.StrictMode>\n <App />\n </React.StrictMode>,\n document.getElementById('root')\n);\n\n\n What Happens with Strict Mode?\n\n- Warnings and Errors: It will output additional warnings in the browser’s developer console about possible issues in your code.\n- Improved Development Process: By detecting issues early, it ensures your components behave as expected and align with best practices, reducing the chances of bugs in production.\n\n What Strict Mode Does NOT Do:\n- It does not affect the production build: It only runs in development mode to help during the development process. It won’t affect the behavior of your app when it’s deployed to production.\n- It doesn't enforce code changes: Strict Mode doesn't change your code, it simply provides more feedback on potential issues.\n\n Summary:\nStrict Mode in React is a development tool designed to help you identify problems early in the development process. It helps highlight unsafe lifecycle methods, deprecated APIs, potential side effects, and other issues that could lead to bugs or performance problems. It's a valuable tool for ensuring your code is robust, maintainable, and ready for future React versions.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 111,
    topic: "javascript",
    question: "Why does strict mode render twice in React?",
    answer:
      "React's Strict Mode intentionally renders components twice in development mode to help identify potential problems with side effects and other issues in your code. This double rendering is done in order to make sure that your components are pure and idempotent (producing the same result each time they're rendered) and do not cause unexpected behavior during re-renders.\n\n Why does React Strict Mode render twice?\n\n1. Detecting Side Effects in Render:\n React wants to make sure that your components do not have any side effects in their render method. Side effects could lead to unpredictable behavior, like unnecessary state changes, re-renders, or incorrect UI updates.\n \n To ensure that components render correctly, React will intentionally run a component twice in development mode. If your component relies on any side effects during render (e.g., changing state or triggering side effects), it will cause React to issue a warning, as these behaviors are considered problematic in the render cycle.\n\n2. Helping with \"Pure\" Components:\n Components should ideally be pure, meaning that the output of the component should always be predictable based on its inputs (props, state). React ensures this by rendering the component twice. If the component behaves differently on the second render, it might indicate that it's relying on some external state or causing side effects, which is a red flag.\n\n3. Lifecycle Methods and Hooks:\n In React class components, unsafe lifecycle methods (such as componentWillMount, componentWillReceiveProps, and componentWillUpdate) could cause issues with re-renders and lead to side effects. In function components, this can be seen with the use of React Hooks that might cause unexpected behavior if not properly implemented.\n \n Strict Mode runs lifecycle methods and hooks twice to ensure that any issues related to these methods are caught early. This also helps check if your components are resilient to multiple renders and do not cause issues like memory leaks or improper updates.\n\n4. Detecting Legacy Context API Usage:\n React used to have an older, more error-prone Context API. Strict Mode helps identify if your app is using the legacy Context API, and to do so, it renders the components twice to ensure that it catches any inconsistencies.\n\n What Happens During the Second Render?\n\n- During the second render, React checks if the component's behavior changes, which might indicate an issue.\n- If the component produces different outputs or triggers unexpected behavior (such as updating state or causing a side effect), React will warn you in the console, so you can address the issue before it makes it to production.\n \n Example of What Could Trigger a Warning:\n\nIf you are using a useEffect hook that updates state without the appropriate dependencies, it could cause unintended side effects during the second render.\n\njsx\nimport React, { useState, useEffect } from \"react\";\n\nconst MyComponent = () => {\n const [count, setCount] = useState(0);\n\n // This will cause a problem in Strict Mode because it causes a side effect in the render\n useEffect(() => {\n setCount(count + 1); // This is problematic: causes re-render in render\n });\n\n return <div>{count}</div>;\n};\n\n\nHere, React will render the component twice, and during the second render, it will catch that the state update in the useEffect is causing an issue (since state should not be updated during render).\n\n Key Takeaways:\n\n- Double rendering in Strict Mode helps ensure your components are pure and free of side effects.\n- It helps identify issues like using unsafe lifecycle methods, improper React Hooks usage, or side effects that could cause problems in production.\n- The double render only happens in development mode and does not affect production behavior, so it's a tool for improving the quality of your code before deployment.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 112,
    topic: "javascript",
    question: "What is windowing technique?",
    answer:
      "Windowing technique, also known as virtual scrolling or windowed rendering, is a performance optimization technique used in web applications, particularly in scenarios where large lists or grids of items need to be displayed. Instead of rendering all items in the list/grid at once, which can lead to performance issues due to excessive DOM elements, windowing techniques only render a subset of the items that are currently visible within the viewport.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 113,
    topic: "javascript",
    question: "What are capture phase events?",
    answer:
      'Capture phase events are a part of the event propagation model in the Document Object Model (DOM) of web browsers. In this model, when an event occurs on an element, such as a click or a keypress, it doesn\'t just affect that element; it also affects its parent elements in the DOM hierarchy. Event propagation allows events to "bubble" up from the target element to its ancestors in the DOM tree or "capture" down from the top of the tree to the target element.\nThe onClickCapture React event is helpful to catch all the events of child elements irrespective of event propagation logic or even if the events propagation stopped. This is useful if you need to log every click events for analytics purpose.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 114,
    topic: "javascript",
    question: "How does React batch updates multiple state ?",
    answer:
      'React batches multiple state updates using a mechanism called "batching" or "batched updates." Batching allows React to group multiple consecutive state updates into a single update, reducing the number of renders and improving performance. This batching behavior applies to both class components with "setState " and functional components with "useState ".\n\n Key Points about React\'s State Batching:\n\n1. Asynchronous State Updates :\n - By default, React processes state updates asynchronously. When you call "setState " (for class components) or update state using the function returned by "useState " (for functional components), React doesn\'t immediately apply the update. Instead, it schedules the update to be processed later.\n\n2. Batching Mechanism :\n - React batches consecutive state updates that occur within the same event loop iteration. When multiple state updates are triggered within the same event handler, lifecycle method, or useEffect callback during the same event cycle, React combines them into a single update.\n\n3. Optimized Rendering :\n - Batching reduces unnecessary re-renders by ensuring that React only updates the component once with the latest state values, even if multiple state updates occur in quick succession. This optimization helps improve performance and avoid unnecessary rendering overhead.\n\n4. Updates Outside React Events :\n - React\'s batching mechanism applies primarily to updates triggered within React event handlers, lifecycle methods, and effects. Updates triggered outside of these contexts, such as asynchronous callbacks (e.g., setTimeout, fetch), are not batched by default and may trigger separate render cycles.\n\n5. Force Update and Synchronous Updates :\n - React provides the "forceUpdate " method in class components to force a synchronous update bypassing batching. Additionally, React\'s Concurrent Mode introduces a way to explicitly opt into synchronous updates using the "unstable_batchedUpdates " function, although it\'s considered unstable and subject to change.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 115,
    topic: "javascript",
    question: "Is it possible to prevent automatic batching?",
    answer:
      "Yes, it is possible to prevent automatic batching default behavior. There might be cases where you need to re-render your component after each state update or updating one state depends on another state variable. Considering this situation, React introduced flushSync method from react-dom API for the usecases where you need to flush state updates to DOM immediately.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 116,
    topic: "javascript",
    question:
      "How do you make sure that user remains authenticated on page refresh while using Context API State Management?",
    answer:
      "When a user logs in and reload, to persist the state generally we add the load user action in the useEffect hooks in the main App.js. While using Redux, loadUser action can be easily accessed.\nBut while using Context API, to access context in App.js, wrap the AuthState in index.js so that App.js can access the auth context. Now whenever the page reloads, no matter what route you are on, the user will be authenticated as loadUser action will be triggered on each re-render.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 117,
    topic: "javascript",
    question: "How state updates in React Function component ?",
    answer:
      'In React functional components, state updates are handled using the "useState " hook. Here\'s how it works:\n\n1. Declare State with "useState " :\n The "useState " hook is used to declare state variables. It takes an initial state as an argument and returns an array with two elements:\n - The current state value.\n - A function to update the state.\n\n Example:\n \n const [count, setCount] = useState(0);\n \n\n2. Update State with the State Setter Function :\n To update the state, you call the setter function ( "setCount " in this example) with the new state value. React will then re-render the component with the updated state.\n\n Example:\n \n setCount(count + 1);\n \n\n3. State Updates are Asynchronous :\n State updates in React are asynchronous. React batches multiple state updates and applies them in the most efficient way possible.\n\n4. Functional Updates :\n If the new state depends on the previous state, it’s recommended to use a function inside the setter function. This function receives the previous state and returns the new state.\n\n Example:\n \n setCount(prevCount => prevCount + 1);\n \n\n5. Re-renders on State Change :\n When the state changes, React re-renders the component to reflect the updated state in the UI. Only components that depend on the updated state will re-render.\n\n6. Multiple State Variables :\n You can declare multiple state variables in a single component.\n\n Example:\n \n const [name, setName] = useState(\'\');\n const [age, setAge] = useState(0);\n \n\n7. Initial State :\n The initial state can also be computed lazily, meaning you can pass a function to "useState " to calculate the initial state only once during the component\'s first render.\n\n Example:\n \n const [expensiveValue, setExpensiveValue] = useState(() => computeExpensiveValue());\n \n\nEach time you call the state setter function, React schedules a re-render with the new state. This is how state is updated in functional components.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 118,
    topic: "javascript",
    question:
      'In JS variable declared with "const" cannot be updated , then how the state is updating with const declaration ?',
    answer:
      'In JavaScript, when a variable is declared with "const ", it cannot be re-assigned . However, it can be mutated if it\'s an object or array. \n\nNow, in the context of React and the "useState " hook, the confusion arises because "const " is used to declare state variables like this:\n\n\nconst [count, setCount] = useState(0);\n \n\nHere’s what’s really happening:\n\n1. "const " doesn’t mean the value is immutable :\n In this case, "count " is the current state value at a specific point in time. When you call "setCount() ", you’re not modifying the "count " variable itself, but rather requesting React to update the state . React then re-renders the component, and during the re-render, a new value of "count " is provided by React, replacing the old value.\n\n Since "count " is re-declared each time the component re-renders, it gets updated with the latest value.\n\n2. "useState " is a hook that gives access to state :\n The "useState " hook returns an array where:\n - The first element ( "count ") is a snapshot of the current state.\n - The second element ( "setCount ") is a function that informs React to update the state and trigger a re-render.\n\n3. State persists across renders :\n Even though you are using "const ", React internally manages the state across renders. Every time "setCount " is called, React stores the new state value and provides that value the next time the component renders.\n\n So, when the component re-renders, the "const " declaration doesn’t violate JavaScript rules because it’s being re-declared with a new value during each render.\n\n Example:\n \nfunction Counter() {\n const [count, setCount] = useState(0);\n\n const increment = () => {\n setCount(count + 1);\n };\n\n return (\n <div>\n <p>Current count: {count}</p>\n <button onClick={increment}>Increment</button>\n </div>\n );\n}\n\n\n- When "setCount " is called, React re-renders the component.\n- On the next render, "count " is updated to the new value (e.g., 1 if incremented).\n- The "const [count, setCount] " declaration runs again, but with the updated value of "count ".\n\nSo, in summary, "const " is re-declaring the "count " variable on every re-render, and React ensures that it always holds the current state value. It’s not violating the rule of "const ", because the variable itself is being re-assigned during each new render, not mutated.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 119,
    topic: "javascript",
    question:
      "Since count is re-declared each time the component re-renders, it gets updated with the latest value. if so , then why react works with previous snapshot until unless functional state update is done",
    answer:
      'The key difference lies in how React batches and schedules state updates. Let’s break it down step-by-step to clarify how React works with previous snapshots and why using a functional state update can help avoid issues in certain scenarios.\n\n 1. Why React Uses the Previous Snapshot of State :\n When you update state in React, the component is re-rendered, and React passes the current state to the component. However, React does not update the state immediately but schedules an update. This is why, within the same render cycle, you may still have access to the previous snapshot of the state before the state update happens.\n\n For example:\n \n const [count, setCount] = useState(0);\n\n const increment = () => {\n setCount(count + 1); // This will use the current "count " value\n setCount(count + 1); // This will also use the current "count " value\n };\n \n\n In this code:\n - Both "setCount(count + 1) " statements are referring to the same value of "count " because React has not yet re-rendered the component or updated "count ".\n - React batches these updates, so both updates see "count " as "0 " in the same render cycle, which is why "count " is only incremented by "1 " instead of "2 ".\n\n 2. Functional Updates to Avoid Working with Stale State :\n To avoid this issue of working with stale or previous state values in the same render cycle, React allows you to use functional state updates . When you pass a function to "setState ", React will make sure that the function receives the most up-to-date state (i.e., the state after all previous updates have been processed).\n\n Example with functional updates:\n \n const [count, setCount] = useState(0);\n\n const increment = () => {\n setCount(prevCount => prevCount + 1); // "prevCount " is guaranteed to be the latest value\n setCount(prevCount => prevCount + 1); // Works correctly; "prevCount " will reflect the updated state\n };\n \n\n Here’s what’s happening:\n - When you use "setCount(prevCount => prevCount + 1) ", React ensures that "prevCount " reflects the latest state value.\n - Even if you call "setCount " multiple times in a row, each call will see the most up-to-date version of the state, so the state will correctly increment by "2 " as expected.\n\n 3. Why This Matters :\n In scenarios where you update the state based on its current value , you risk using an outdated snapshot of the state. This typically happens when the state update happens synchronously in the same render cycle , but React hasn’t yet re-rendered the component. That’s why the functional state update form ( "setState(prevState => ...) ") is crucial, especially when the new state depends on the previous one.\n\n Key Points:\n- Normal state updates : \n When you update state with a direct value (e.g., "setCount(count + 1) "), React schedules the update, but any subsequent updates in the same render cycle may still refer to the old state, leading to unexpected results.\n\n- Functional state updates : \n This ensures that you’re always working with the latest state, even if multiple state updates happen in a single render cycle. It avoids issues with stale or outdated state snapshots.\n\nSummary:\nReact uses the previous snapshot of state within the same render cycle unless you explicitly use a functional state update . This is because React batches updates and doesn’t immediately re-render the component after each "setState " call. The functional state update is a way to make sure you’re working with the most up-to-date state.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 120,
    topic: "javascript",
    question: 'Explain the working of "useEffect" hook in detail.',
    answer:
      'The "useEffect" hook in React is a powerful tool for managing side effects in functional components. It allows you to perform operations like data fetching, subscriptions, or directly interacting with the DOM, which are typically considered side effects in React. Let’s explore it in detail:\n\n  What is "useEffect"? \n"useEffect" is a React hook that lets you perform side effects in function components. A side effect is any operation that affects something outside of the component, such as:\n- Fetching data from an API.\n- Interacting with browser APIs (like "localStorage" or "document").\n- Setting up and cleaning up event listeners.\n- Performing DOM manipulations.\n\n  How does "useEffect" work? \n\n"useEffect" takes two arguments:\n1. A callback function (effect function) that contains the code you want to run.\n2. An optional dependency array that controls when the effect should run.\n\n \nuseEffect(() => {\n // Code to run when the component renders or updates\n}, [dependencies]);\n\n\n- Callback function : This is the side effect logic you want to perform. It can return a cleanup function, which will be executed before the component is re-rendered or unmounted.\n- Dependency array : This tells React when to run the effect. React will re-run the effect whenever any of the dependencies change. If you omit this array, the effect will run on every render .\n\n  Why "useEffect" is needed? \nReact components should remain pure functions of props and state, meaning they should render UI based solely on the inputs (props/state) without side effects. However, many real-world apps require side effects like:\n- Fetching data after a component mounts.\n- Updating the DOM manually or interacting with APIs.\n- Managing timers or subscriptions.\n\nIn class components, side effects were managed in lifecycle methods like "componentDidMount", "componentDidUpdate", and "componentWillUnmount". In functional components, "useEffect" consolidates these into a single hook, giving you more control and simplicity.\n\n  When to use "useEffect"? \nUse "useEffect" when you need to:\n- Run code on component mount (like fetching data when the component loads).\n- Run code on updates (like updating the document title based on a changing state or prop).\n- Set up and clean up resources (like setting up event listeners or timers).\n\n Types of "useEffect" usage :\n\n 1. Component Mounting (like "componentDidMount") :\nTo run an effect only once when the component mounts (e.g., fetching data from an API), you can pass an empty dependency array .\n\n \nuseEffect(() => {\n console.log(\'Component mounted\');\n\n // API call or other side effects here\n}, []);\n\n- The callback runs after the initial render and never again unless unmounted.\n\n 2. Component Updates (like "componentDidUpdate") :\nIf you want to run an effect whenever some state or props change , you can provide them as dependencies in the array.\n\n \nuseEffect(() => {\n console.log(\'Effect runs when "count" changes\');\n}, [count]);\n\n- This will only run when the "count" variable changes. It will not run on every render.\n\n 3. Cleanup (like "componentWillUnmount") :\nIf your effect involves resources that need to be cleaned up (e.g., subscriptions, event listeners, timers), you return a cleanup function from your effect. This function runs before the component is removed from the DOM or before the effect is re-executed due to dependency changes.\n\n \nuseEffect(() => {\n const timer = setInterval(() => {\n console.log(\'Interval running\');\n }, 1000);\n\n // Cleanup function to clear the interval when component unmounts\n return () => {\n clearInterval(timer);\n console.log(\'Interval cleared\');\n };\n}, []);\n\n\n 4. Effect with Dependencies :\nYou can specify one or more dependencies in the array, and the effect will only run when any of these dependencies change. This is helpful for optimizing performance and avoiding unnecessary re-renders.\n\n \nuseEffect(() => {\n console.log(\'Effect runs when either "count" or "data" changes\');\n}, [count, data]);\n\n\n How "useEffect" works in depth  :\n\n- After Rendering : The callback function inside "useEffect" is called after the DOM has been painted . This means your effect does not block rendering and happens asynchronously after the browser updates the UI.\n\n- Clean-up Phase : If your effect has a cleanup function (e.g., to cancel subscriptions or timers), React will call it before the component is removed from the DOM or before running the effect again in response to dependency changes.\n\n Common Usage Patterns :\n\n1. Fetching Data from APIs :\n \n useEffect(() => {\n async function fetchData() {\n const response = await fetch(\'https://api.example.com/data\');\n const data = await response.json();\n console.log(data);\n }\n fetchData();\n }, []); // Empty array means this effect runs once when the component mounts\n \n\n2. Subscribing and Unsubscribing :\n \n useEffect(() => {\n const handleResize = () => {\n console.log(\'Window resized\');\n };\n window.addEventListener(\'resize\', handleResize);\n\n return () => {\n window.removeEventListener(\'resize\', handleResize);\n };\n }, []); // Effect runs once on mount, cleanup on unmount\n \n\n3. Updating the Document Title :\n \n useEffect(() => {\n document.title = "Count: ${count}";\n }, [count]); // Runs every time the "count" variable changes\n \n\n  When to Avoid "useEffect" :\n- Avoid using "useEffect" for things that could be handled synchronously inside the render (like formatting data or deriving values from props or state).\n- Don’t overuse "useEffect" for every state change — use it only when an actual side effect is needed, such as updating external systems, APIs, or the DOM.\n\n Conclusion :\n"useEffect" is essential for managing side effects in React functional components. It consolidates the behavior of class lifecycle methods ("componentDidMount", "componentDidUpdate", and "componentWillUnmount") and makes it easier to handle effects declaratively.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 121,
    topic: "javascript",
    question: "What is abortController in react ?",
    answer:
      "The AbortController is a built-in JavaScript API that allows you to cancel fetch requests or any other asynchronous tasks. In a React application, it is commonly used to cancel API requests when a component unmounts or a new request is triggered, preventing potential memory leaks or race conditions.\n\nWhy Use AbortController in React?\nPrevent Memory Leaks: Ensure fetch requests don’t continue after a component unmounts.\nCancel Previous Requests: In scenarios like search input, where new requests override old ones, you can cancel the old requests.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 122,
    topic: "javascript",
    question: "New Features of Introduced in React 19 ?",
    answer:
      "Summary of React 19\n\nReact 19 marks a significant upgrade from React 18, focusing on reducing complexity for developers while enhancing performance. This new version introduces features like a compiler that streamlines code optimization, simplifies ref handling, and replaces multiple hooks with the versatile use() hook. Overall, React 19 aims to make coding faster and more intuitive for developers.\n\n Key Points\n2. New Features :\n - React Compiler : \n - Optimizes React code into plain JavaScript.\n - Eliminates the need for manual performance optimizations.\n - Removal of Memoization Hooks :\n - No longer need for useMemo , useCallback , and memo .\n - Optimizations are handled automatically by the compiler.\n - Simplified Ref Handling :\n - No need for forwardRef ; refs can be passed as standard props.\n - New use() Hook :\n - Replaces useEffect , useContext , and useState for data fetching and handling state.\n - Allows for smoother and cleaner component code.\n\n3. Data Fetching :\n - The use() hook enables efficient data fetching and eliminates the boilerplate associated with useEffect .\n\n4.  Form Management Enhancements :\n - Actions : Connect form submissions to either server or client side, simplifying form handling.\n - useFormStatus() : Manage the state of form submissions easily, such as disabling buttons during submission.\n - useOptimistic() : Enables optimistic UI updates for a more dynamic user experience.\n\n5.  Directives :\n - Introduces use client and use server directives for component configuration, making it easier to define component behavior.\n\n6. Error and Loading Management :\n - Global error and loading state management is simplified, allowing developers to focus more on application logic rather than state management.\n\n7.  Performance Improvements :\n - Automatic handling of memoization and component optimizations leads to cleaner, more efficient code without sacrificing performance.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 123,
    topic: "javascript",
    question: "How to scale large application in react ?",
    answer:
      "Scaling a large React application means making sure it remains fast , organized , and easy to maintain as it grows. Here's how you can scale your React app in simpler terms:\n\n 1. Component Structure & Reusability \n - Break your UI into smaller, reusable components . Each component should do one thing well .\n - Instead of writing huge files, create smaller, manageable components that are easy to understand and maintain.\n - For example, instead of having one large App.js file, split it into smaller files like Header.js , Sidebar.js , Footer.js , etc.\n\n 2. State Management \n - State management becomes crucial as your app grows. Instead of passing state around through many layers of components, use a state management solution like Redux , Context API , or Recoil to store global data.\n - For example, instead of passing a user object down through every component, you can store it in Redux and access it directly from anywhere in the app.\n\n 3. Code Splitting \n - As your app grows, the bundle size (the size of the app that gets loaded into the browser) also increases. To speed up loading times , use code splitting .\n - This means that not all code is loaded at once. React's built-in feature, React.lazy() , can help load parts of your app only when they're needed.\n\n Example:\n javascript\n const SomeComponent = React.lazy(() => import('./SomeComponent'));\n \n\n This way, React only loads SomeComponent when it’s needed, not on the initial load.\n\n 4. Performance Optimization \n - Use memoization to prevent unnecessary re-renders. This helps in improving performance.\n - Use React.memo for functional components and PureComponent for class components to prevent re-rendering when the props haven’t changed.\n\n Example:\n javascript\n const MyComponent = React.memo(function MyComponent(props) {\n // Only re-renders if props change\n return <div>{props.name}</div>;\n });\n \n\n 5. Lazy Loading Images and Other Resources \n - Lazy loading means loading images or other resources only when they're needed. For example, images should only load when they’re visible on the screen (i.e., when they scroll into view).\n - This reduces the load time and improves performance.\n\n 6. Error Boundaries \n - As your app grows, there will be more chances for errors. Use Error Boundaries to catch JavaScript errors in parts of the UI and show a fallback instead of crashing the whole app.\n \n \n\n\n 7. Server-Side Rendering (SSR) \n - If you have a large app with many pages, consider Server-Side Rendering (SSR) with Next.js . This pre-renders pages on the server, so the browser gets fully rendered HTML instead of a blank page, improving SEO and performance .\n\n 8. Routing \n - Use React Router for handling different pages and views. For large apps, it helps manage navigation without full page reloads, which keeps the app fast.\n - For even larger apps, consider using nested routing to break down complex pages into simpler components.\n\n 9. Testing \n - Test your components using tools like Jest and React Testing Library . This ensures your app remains bug-free as it grows.\n - Unit tests and integration tests help in identifying problems before they affect users.\n\n 10. Monitoring & Analytics \n - Use tools like Google Analytics , Sentry , or LogRocket to monitor your app's performance and catch issues in production.\n - This helps you keep track of errors and slow parts of your app.\n\n---\n\n Summary: \nTo scale a large React app:\n- Break your UI into smaller components .\n- Use state management (like Redux or Context API).\n- Use code splitting to load parts of the app as needed.\n- Optimize performance with React.memo , lazy loading , and error boundaries .\n- Consider SSR for better performance and SEO.\n- Implement testing and monitoring to ensure quality.\n\nThis way, your app can handle more complexity without becoming slow or hard to maintain. Let me know if you'd like more details on any part!",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 124,
    topic: "javascript",
    question: "what is difference between react.memo() & useMemo() ?",
    answer:
      "1. React.memo() :\n React.memo() is used to optimize functional components by preventing unnecessary re-renders .\n\n- How it works : It wraps a functional component and memoizes it. This means React will skip re-rendering the component if its props haven't changed since the last render.\n- When to use : Use React.memo() when you have a child component that receives props and doesn’t need to re-render unless its props change.\n\n Example :\n\nimport React from 'react';\n\nconst Greeting = React.memo(({ name }) => {\n console.log('Rendering Greeting...');\n return <h1>Hello, {name}!</h1>;\n});\n\nexport default Greeting;\n \n\n- If the name prop hasn’t changed, React will not re-render Greeting even if the parent component re-renders.\n\n 2. useMemo() :\n useMemo() is used to memoize values and optimize expensive calculations inside a component.\n\n- How it works : It returns a memoized value . You pass a function that performs a calculation, and useMemo() will only recompute the value when the dependencies change (e.g., props or state).\n- When to use : Use useMemo() when you have expensive calculations inside a component and you want to avoid repeating those calculations unless the input values change.\n\n Example :\n\n \nimport React, { useMemo, useState } from 'react';\n\nfunction ExpensiveCalculation({ num }) {\n const [counter, setCounter] = useState(0);\n\n // Memoize the expensive calculation\n const result = useMemo(() => {\n console.log('Calculating...');\n return num 1000; // An expensive calculation\n }, [num]); // Recompute only when 'num' changes\n\n return (\n <div>\n <h2>Result: {result}</h2>\n <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>\n </div>\n );\n}\n\nexport default ExpensiveCalculation;\n \n\n- In this example, the result is only recomputed if the num prop changes. If the counter changes, the expensive calculation does not need to be recalculated .\n\n Key Differences:\n- React.memo() :\n - Used on components .\n - Prevents unnecessary re-renders of a component if its props haven't changed.\n - Works for whole components .\n\n- useMemo() :\n - Used inside components .\n - Optimizes expensive calculations or operations inside a component.\n - Works for memoizing values like calculations or objects.\n\n---\n\n Summary :\n- React.memo() is for preventing unnecessary re-renders of components based on props.\n- useMemo() is for memoizing values to avoid redoing expensive operations inside components.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 125,
    topic: "javascript",
    question: "How you plan design architecture in frontend?",
    answer:
      'Designing an architecture for the frontend involves structuring the application to be scalable, maintainable, and efficient. \n 1. Understand Application Requirements \n - Size of the Application: Small, medium, or enterprise-level.\n - Features: Authentication, real-time updates, APIs, complex state management, etc.\n - Tech Stack: React, Angular, Vue.js, or others.\n - Team Size: Larger teams may need stricter conventions and modular structures.\n\n---\n\n 2. Choose an Architecture Pattern \nCommon frontend architectural patterns:\n1. Component-Based Architecture :\n - Focuses on reusable components.\n - Best for frameworks like React, Angular, and Vue.\n2. Layered Architecture :\n - Layers like presentation, logic, and data are separated.\n3. Micro-Frontend Architecture :\n - Breaks the app into independent micro-frontends for scalability.\n\n---\n\n 3. Directory Structure \nA well-structured directory makes your application organized and scalable. Example for a React-based project:\n\n plaintext\nsrc/\n├── assets/ Images, fonts, static files\n├── components/ Reusable UI components\n│ ├── Button/\n│ │ ├── Button.js\n│ │ └── Button.css\n│ ├── Header/\n│ └── Footer/\n├── contexts/ React Context for global state\n├── hooks/ Custom hooks (e.g., useFetch, useAuth)\n├── pages/ Pages or views (e.g., Home, About)\n│ ├── Home.js\n│ ├── About.js\n│ └── styles.css\n├── services/ API calls, service functions\n│ ├── api.js\n│ ├── auth.js\n│ └── products.js\n├── store/ State management (Redux, Zustand, etc.)\n│ ├── slices/ Redux slices or context logic\n│ └── store.js\n├── utils/ Utility functions\n│ ├── validation.js\n│ └── helpers.js\n├── App.js Root component\n├── index.js Entry point\n└── styles/ Global styles, CSS variables\n \n\n---\n\n 4. State Management \n - Local State: Manage small, isolated states using hooks like useState or useReducer .\n - Global State: Use Context API, Redux, Zustand, or Recoil for shared state.\n - Server State: Manage API responses using libraries like React Query, SWR, or Apollo Client.\n\n---\n\n 5. Component Design \n - Follow Atomic Design Principles :\n 1. Atoms: Small, basic elements (e.g., buttons, inputs).\n 2. Molecules: Groups of atoms (e.g., form fields).\n 3. Organisms: Sections of the UI (e.g., a navbar with links).\n 4. Templates/Pages: Entire views or screens.\n\n---\n\n 6. Styling Approach \n - CSS-in-JS: Libraries like styled-components or Emotion.\n - CSS Modules: Scoped CSS for components.\n - Frameworks: Tailwind CSS, Bootstrap, or Material-UI for faster development.\n\n---\n\n 7. API Communication \n - Use axios or fetch to communicate with APIs.\n - Centralize API logic in the services/ directory.\n - Handle errors and loading states consistently.\n\nExample API service:\n \n// services/api.js\nimport axios from "axios";\n\nconst api = axios.create({\n baseURL: "https://api.example.com",\n timeout: 5000,\n});\n\nexport const getUsers = () => api.get("/users");\nexport const login = (credentials) => api.post("/login", credentials);\n\nexport default api;\n \n\n---\n\n 8. Routing \n - Use react-router-dom or your framework\'s router for navigation.\n - Define routes and lazy-load components for better performance.\n javascript\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\nimport Home from "./pages/Home";\nimport About from "./pages/About";\n\nfunction App() {\n return (\n <Router>\n <Routes>\n <Route path="/" element={<Home />} />\n <Route path="/about" element={<About />} />\n </Routes>\n </Router>\n );\n}\n \n\n---\n\n 9. Testing \n - Write tests to ensure code quality.\n - Unit Tests: Test individual functions or components.\n - Integration Tests: Test combined functionality.\n - End-to-End (E2E) Tests: Simulate user interactions.\n - Tools:\n - Jest for unit testing.\n - React Testing Library for component testing.\n - Cypress for E2E testing.\n\n---\n\n 10. Performance Optimization \n - Lazy Loading: Load components or images only when needed.\n - Code Splitting: Use dynamic imports to split bundles.\n - Memoization: Optimize re-renders using React.memo , useMemo , or useCallback .\n - Static Assets: Use a CDN to serve images and other static files.\n - Web Vitals: Monitor performance metrics using tools like Lighthouse.\n\n---\n\n 11. Continuous Integration/Deployment (CI/CD) \n - Automate builds and deployments using CI/CD tools like GitHub Actions, Jenkins, or CircleCI.\n - Use Netlify, Vercel, or AWS for hosting.\n\n---\n\n 12. Documentation \n - Use tools like Storybook for documenting components.\n - Maintain a README for onboarding new developers.\n\n---\n\n Example Scenarios:\n1. Small Applications: Simple component-based architecture with Context API.\n2. Enterprise Applications: Micro-frontend architecture with Redux and React Query for state and API management.\n\nThis approach ensures the frontend is clean, maintainable, and scalable over time.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 126,
    topic: "javascript",
    question: "What is useId hook in react ?",
    answer:
      "The useId hook in React is used to generate a unique, stable ID that can be used for elements that require a unique identifier, such as form controls, accessibility features, or linking labels to form inputs. It is particularly useful for handling accessibility concerns, like associating form input labels with their corresponding inputs.\n\n Key Features:\n- Unique IDs: It ensures that IDs generated within a component are unique, avoiding collisions even if the component is used multiple times.\n- Server-side rendering (SSR) compatibility: React's useId hook helps prevent mismatches between client-side and server-side rendering by generating unique IDs consistently across renders.\n\n\n\n When to use useId:\n- When you need to generate a unique identifier for form elements like <input>, <select>, etc.\n- When creating reusable components that need to ensure unique IDs for accessibility or styling purposes.\n \nThis hook is particularly beneficial in large applications where many form elements or components might be dynamically rendered. It ensures uniqueness without needing to manually handle the creation of IDs.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 127,
    topic: "javascript",
    question: "What is useDefferedValue hook ?",
    answer:
      'The useDeferredValue hook in React is used to defer the computation or rendering of a value to improve performance in situations where immediate updates are not necessary. It delays updating the value until the UI has finished rendering other higher-priority tasks, helping to keep the UI responsive.\n\n Key Features:\n1. Defer Non-Urgent Updates: useDeferredValue delays the update of the provided value to a lower priority, allowing urgent UI updates (like user interactions) to happen first.\n2. Improves Performance: Particularly useful when rendering large or complex components that don\'t need immediate updates.\n\n How It Works:\n- useDeferredValue takes a value and returns a deferred version of it.\n- If the value changes, the deferred value will lag behind the original value until the browser has time to process it.\n\n---\n\n Example Usage:\n\n\nimport React, { useState, useDeferredValue } from "react";\n\nfunction App() {\n const [search, setSearch] = useState("");\n const deferredSearch = useDeferredValue(search);\n\n const handleInputChange = (e) => {\n setSearch(e.target.value);\n };\n\n return (\n <div>\n <input\n type="text"\n placeholder="Search"\n value={search}\n onChange={handleInputChange}\n />\n <p>Immediate Search Value: {search}</p>\n <p>Deferred Search Value: {deferredSearch}</p>\n </div>\n );\n}\n\nexport default App;\n\n\n---\n\n Explanation:\n1. Immediate Updates:\n - The search state is updated immediately as the user types in the input box.\n2. Deferred Updates:\n - The deferredSearch value will update with a slight delay, giving the browser time to render higher-priority tasks first.\n\n---\n\n When to Use useDeferredValue:\n- Heavy Computations: When rendering or updating involves expensive computations (e.g., filtering a large list).\n- Search Results: To delay updating search results as the user types, reducing unnecessary renders.\n- Animations or Transitions: When animations or transitions should not be interrupted by expensive rendering updates.\n\n---\n\n Practical Example with Expensive Computations:\n\nimport React, { useState, useDeferredValue, useMemo } from "react";\n\nfunction ExpensiveList({ search }) {\n // Simulate expensive computation\n const list = useMemo(() => {\n return Array(10000)\n .fill(0)\n .map((_, index) => Item ${index} ${search});\n }, [search]);\n\n return (\n <ul>\n {list.map((item, index) => (\n <li key={index}>{item}</li>\n ))}\n </ul>\n );\n}\n\nfunction App() {\n const [search, setSearch] = useState("");\n const deferredSearch = useDeferredValue(search);\n\n return (\n <div>\n <input\n type="text"\n placeholder="Search"\n value={search}\n onChange={(e) => setSearch(e.target.value)}\n />\n <ExpensiveList search={deferredSearch} />\n </div>\n );\n}\n\nexport default App;\n\n\n Key Takeaway:\nuseDeferredValue helps optimize rendering by deferring non-urgent updates, ensuring smoother user experiences without compromising on performance.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 128,
    topic: "javascript",
    question: "what is useTransition hook in React ?",
    answer:
      "The useTransition hook in React helps manage UI updates that can take some time to complete. It makes these updates feel smoother by showing a loading state or letting the user continue interacting with the app while the update happens in the background.\n\n---\n\n Imagine This Scenario:\nYou're switching tabs in an app:\n- If the tab takes time to load, the app might freeze, making it feel slow.\n- With useTransition, React can prioritize keeping the app responsive while the new tab's content loads in the background.\n\n---\n\n Key Features of useTransition:\n1. Delays non-urgent updates: Lets React prioritize more critical tasks, like user interactions.\n2. Shows a pending state: Helps you show a loading spinner or some visual feedback during the transition.\n\n---\n\n Example of useTransition in Action:\n\n\nimport React, { useState, useTransition } from \"react\";\n\nfunction App() {\n const [isPending, startTransition] = useTransition();\n const [list, setList] = useState([]);\n\n const handleClick = () => {\n // Start a transition for a slow update\n startTransition(() => {\n const newList = Array(20000)\n .fill(0)\n .map((_, i) => Item ${i + 1});\n setList(newList);\n });\n };\n\n return (\n <div>\n <button onClick={handleClick}>Load Large List</button>\n {isPending && <p>Loading...</p>} {/ Shows a loading state /}\n <ul>\n {list.map((item, index) => (\n <li key={index}>{item}</li>\n ))}\n </ul>\n </div>\n );\n}\n\nexport default App;\n\n\n---\n\n How It Works:\n1. startTransition: Wraps updates that aren't urgent (e.g., updating a huge list).\n2. isPending: Lets you show a loading indicator while the update happens.\n\n---\n\n Why Use It:\n- Improves Performance: Keeps the app responsive during complex or slow updates.\n- Better User Experience: The app doesn't freeze; instead, users see a loading state.\n\n---\n\n When to Use:\n- For heavy operations like rendering large lists or switching views.\n- When you want to prioritize responsiveness and let background tasks complete without blocking the UI.\n\n---\n\nIn simple terms: \nuseTransition helps React handle slow tasks in the background while keeping the app smooth and interactive. It ensures users don’t feel like the app is stuck.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 129,
    topic: "javascript",
    question: "What is useSyncExternalStore hook in React ?",
    answer:
      'The useSyncExternalStore hook in React is designed to subscribe to external data sources (stores) and ensure the React UI stays in sync with those external changes. It was introduced in React 18 to handle concurrent rendering better and provide a reliable way to subscribe to data updates.\n\n---\n\n Why Use useSyncExternalStore?\nReact\'s state management (useState, useReducer) works well for local component state, but external state (like state in Redux, Zustand, or other libraries) might change outside React\'s control. This hook ensures React always reads the latest value and updates the UI accurately, especially in concurrent rendering scenarios.\n\n---\n\n Syntax:\n\nconst value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);\n\n\n Parameters:\n1. subscribe: A function to subscribe to the store or external data source. It takes a callback that gets called whenever the store updates.\n2. getSnapshot: A function to get the current value from the store.\n3. getServerSnapshot (optional): Used in server-side rendering to provide the snapshot during rendering.\n\n---\n\n Example: Using useSyncExternalStore with a Simple Store\n\n Create a Store:\njavascript\nconst store = {\n value: 0,\n listeners: new Set(),\n\n // Method to get the current value\n getSnapshot() {\n return this.value;\n },\n\n // Method to update the value\n setValue(newValue) {\n this.value = newValue;\n this.listeners.forEach((listener) => listener());\n },\n\n // Method to subscribe to updates\n subscribe(listener) {\n this.listeners.add(listener);\n return () => this.listeners.delete(listener); // Unsubscribe\n }\n};\n\n\n Use the Hook:\n\nimport React from "react";\nimport { useSyncExternalStore } from "react";\n\nfunction Counter() {\n // Subscribe to the store and get the current value\n const count = useSyncExternalStore(\n store.subscribe, // Subscribes to changes\n store.getSnapshot // Gets the latest value\n );\n\n return (\n <div>\n <h1>Count: {count}</h1>\n <button onClick={() => store.setValue(count + 1)}>Increment</button>\n </div>\n );\n}\n\nexport default Counter;\n\n\n---\n\n How It Works:\n1. store.subscribe: React is notified whenever the store value changes.\n2. store.getSnapshot: React fetches the latest value from the store.\n3. UI Updates: React ensures the component is re-rendered with the new value, even during concurrent rendering.\n\n---\n\n Benefits:\n1. Concurrency-Safe: Works seamlessly with React\'s concurrent rendering features.\n2. Syncs with External Stores: Handles scenarios where state changes happen outside React (e.g., Redux, Zustand).\n3. Server-Side Rendering Support: Provides consistent snapshots for SSR.\n\n---\n\n Use Cases:\n- Synchronizing React components with external state managers (e.g., Redux, Zustand, or custom stores).\n- Managing data that changes frequently and needs to stay in sync across the app.\n\n---\n\nIn simple terms: \nuseSyncExternalStore lets React safely and efficiently listen to changes in external data sources, ensuring your UI always stays up-to-date.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 130,
    topic: "javascript",
    question: "How react functional component handles shouldComponentUpdate ?",
    answer:
      "In React function components, shouldComponentUpdate is not used directly because it is a lifecycle method specifically designed for class components . However, React function components can achieve similar behavior using React.memo and useMemo .\n\n Here's how each works:\n\n 1. React.memo :\n- React.memo is a higher-order component (HOC) that can be used to optimize function components by preventing unnecessary re-renders.\n- It works by shallowly comparing the previous and next props of a function component. If the props haven’t changed, React will skip rendering the component.\n \n How it works :\n - By default, React will re-render a function component whenever its parent re-renders. React.memo allows you to prevent this re-rendering if the props haven’t changed.\n - It’s similar to shouldComponentUpdate in class components but for function components.\n\n Example :\n \n const MyComponent = React.memo((props) => {\n return <div>{props.value}</div>;\n });\n \n In this example, MyComponent will only re-render if props.value changes. If the value remains the same, React will skip the re-render.\n\n Custom Comparison :\n You can also provide a custom comparison function to React.memo for more fine-grained control over when the component should re-render.\n\n\n const MyComponent = React.memo(\n (props) => {\n return <div>{props.value}</div>;\n },\n (prevProps, nextProps) => {\n // Custom comparison logic\n return prevProps.value === nextProps.value;\n }\n );\n \n\n 2. useMemo :\n- useMemo is a hook that helps to memoize expensive calculations or values to prevent recalculating them unnecessarily on every render.\n- While not exactly the same as shouldComponentUpdate, useMemo can be used to memoize values that depend on certain props or state, thus preventing unnecessary recalculations of those values.\n\n Example :\n \n const MyComponent = ({ value }) => {\n const computedValue = useMemo(() => {\n return value 2; // Expensive calculation\n }, [value]);\n\n return <div>{computedValue}</div>;\n };\n\n In this example, computedValue will only be recalculated if value changes.\n\n Key Points:\n- React.memo is the closest thing to shouldComponentUpdate in function components. It allows you to prevent unnecessary re-renders based on shallow comparison of props.\n- useMemo is useful for memoizing values or computations that depend on specific props or state to avoid redundant calculations.\n\nSo, while function components don’t have shouldComponentUpdate, React.memo and useMemo provide similar functionality and help optimize performance by preventing unnecessary re-renders and recalculations.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 131,
    topic: "javascript",
    question: "Give some example of HOC in React ?",
    answer:
      "In React, built-in Higher-Order Components (HOCs) are provided by the React library or external libraries to enhance the functionality of components. Some of the commonly used built-in HOCs are:\n\n 1. React.memo \n - Purpose : React.memo is a built-in HOC that helps optimize performance by memoizing functional components. It prevents unnecessary re-rendering of a component when its props have not changed.\n - Usage : It wraps a component and ensures that it only re-renders when its props change.\n\n Example :\n \n const MyComponent = React.memo(({ name }) => {\n console.log(\"Rendering MyComponent\");\n return <div>{name}</div>;\n });\n\n export default MyComponent;\n \n\n - Explanation : In this example, MyComponent will only re-render if the name prop changes. If the prop remains the same, React will skip the re-render.\n\n 2. withRouter (from react-router-dom) \n - Purpose : The withRouter HOC injects router-related props (like history, location, and match) into a component, even if the component is deeply nested in the component tree.\n - Usage : It is mainly used for components that need access to the router without having to be directly rendered inside a Route.\n\n Example :\n \n import { withRouter } from 'react-router-dom';\n\n const MyComponent = ({ history, location, match }) => {\n return <div>Current path: {location.pathname}</div>;\n };\n\n export default withRouter(MyComponent);\n \n\n 3. forwardRef \n  - Purpose : forwardRef is a built-in HOC that allows you to forward refs to child components. This is useful when you need to pass a ref from a parent component to a child component.\n - Usage : It wraps a functional component and allows it to receive a ref from its parent.\n\n Example :\n \n const MyComponent = React.forwardRef((props, ref) => {\n return <input ref={ref} />;\n });\n\n export default MyComponent;\n \n\n - Explanation : In this example, the MyComponent component can now accept a ref from its parent and forward it to the <input> element.\n\n 4. useContext (not exactly a HOC, but used for context consumption) \n - Purpose : useContext is a hook that allows you to consume context values directly in function components. While not an HOC itself, it's commonly used for managing and passing down state and logic across the component tree without the need for prop drilling.\n - Usage : It’s often used with React's context API.\n\n Example :\n \n const ThemeContext = React.createContext();\n\n const ThemedComponent = () => {\n const theme = useContext(ThemeContext);\n return <div style={{ background: theme.background }}>Hello</div>;\n };\n\n const App = () => {\n return (\n <ThemeContext.Provider value={{ background: 'lightblue' }}>\n <ThemedComponent />\n </ThemeContext.Provider>\n );\n };\n \n\n 5.  Suspense and ErrorBoundary (Built-in error handling and async rendering) \n - Purpose : Although Suspense and ErrorBoundary are not technically HOCs, they are commonly used patterns in React for handling asynchronous operations and error boundaries. Suspense is used for lazy-loading components, while ErrorBoundary is used for catching JavaScript errors anywhere in a component tree.\n \n Example :\n \n const MyComponent = React.lazy(() => import('./MyComponent'));\n\n const App = () => (\n <React.Suspense fallback={<div>Loading...</div>}>\n <MyComponent />\n </React.Suspense>\n );\n \n\n - Explanation : React.Suspense is used to show a loading state while waiting for the MyComponent to be loaded asynchronously.\n\n Conclusion:\n- React provides several built-in HOCs like React.memo, withRouter, forwardRef, and others to enhance functionality without modifying the component's core logic.\n- These HOCs help in optimizing performance, managing routing, handling refs, and consuming context, making it easier to write maintainable and efficient React code.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
];
