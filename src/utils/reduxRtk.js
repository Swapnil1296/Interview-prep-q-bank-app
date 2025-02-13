export const reduxRtk = [
  {
    id: 1,
    topic: "Rtk",
    question: "What is Redux?\r",
    answer:
      "Redux is a predictable state container for JavaScript applications, primarily used with React. It helps manage global application state in a predictable way. Key benefits include:\n- Centralized state management\n- Predictable state updates\n- Easy debugging\n- State persistence\n- Better component communication\n- Time-travel debugging capabilities\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 2,
    topic: "Rtk",
    question: "What are the core principles of Redux?",
    answer:
      "Redux follows three fundamental principles:\n\n1.Single source of truth: The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.\n2.State is read-only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.\n3.Changes are made with pure functions: To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 3,
    topic: "Rtk",
    question: "What is the difference between React context and React Redux?",
    answer:
      "You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.\n\nWhereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 4,
    topic: "Rtk",
    question:
      "What is the difference between component and container in React Redux?",
    answer:
      "Component is a class or function component that describes the presentational part of your application.\r\n\r\nContainer is an informal term for a component that is connected to a Redux store. Containers subscribe to Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 5,
    topic: "Rtk",
    question: "What are the features of Redux DevTools?",
    answer:
      "Some of the main features of Redux DevTools are below,\r\n\r\nLets you inspect every state and action payload.\r\nLets you go back in time by cancelling actions.\r\nIf you change the reducer code, each staged action will be re-evaluated.\r\nIf the reducers throw, you will see during which action this happened, and what the error was.\r\nWith persistState() store enhancer, you can persist debug sessions across page reloads.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 6,
    topic: "Rtk",
    question: "What is an action in Redux?",
    answer:
      "Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 7,
    topic: "Rtk",
    question: "Explain store.subscribe method .",
    answer:
      'In Redux,  "store.subscribe " is a method that allows you to listen for changes in the Redux store\'s state. When you subscribe to the store, you provide a callback function that gets executed every time an action is dispatched and the state is updated. This can be useful for triggering side effects or updating parts of your application that aren\'t directly connected to the Redux store via React-Redux\'s hooks or  "connect " function.\n\n       How  "store.subscribe " Works:\n\n1.   Create the Redux Store  : You start by creating a Redux store using a reducer function.\n\n2.   Subscribe to the Store  : Use  "store.subscribe " to register a listener function that will be called whenever the state changes.\n\n3.   Dispatch Actions  : When actions are dispatched, the state changes, and the subscribed listener is triggered.\n\n4.   Unsubscribe  : The  "store.subscribe " method returns a function that you can call to unsubscribe the listener when it\'s no longer needed.\n\n\n\n       Practical Use Cases\n\n-   Logging State Changes  :  "store.subscribe " is often used for logging or debugging purposes to keep track of how the state changes over time.\n  \n-   Syncing with External Systems  : You might use  "store.subscribe " to sync the Redux store with an external system, such as saving the state to localStorage or updating a server when certain actions occur.\n\n-   Updating Non-React Parts of the Application  : In cases where part of your application is not using React (e.g., plain JavaScript or another framework), you can use  "store.subscribe " to keep those parts in sync with the Redux state.\n\nHowever, in a typical React-Redux application,  "store.subscribe " is rarely needed because React-Redux handles most of the interaction between the store and components through  "useSelector ",  "useDispatch ", or the  "connect " function.',
    keyFeatures: [],
    actionWords: [
      '       Example\r\n\r\n " " "\r\nimport { createStore } from \'redux\';\r\n\r\n// A simple reducer\r\nfunction counterReducer(state = { count: 0 }',
      " action) {\r\n  switch (action.type) {\r\n    case 'INCREMENT':\r\n      return { count: state.count + 1 };\r\n    case 'DECREMENT':\r\n      return { count: state.count - 1 };\r\n    default:\r\n      return state;\r\n  }\r\n}\r\n\r\n// Create a Redux store\r\nconst store = createStore(counterReducer);\r\n\r\n// Subscribe to the store\r\nconst unsubscribe = store.subscribe(() => {\r\n  console.log('State changed:'",
      ' store.getState());\r\n});\r\n\r\n// Dispatch some actions\r\nstore.dispatch({ type: \'INCREMENT\' }); // State changed: { count: 1 }\r\nstore.dispatch({ type: \'INCREMENT\' }); // State changed: { count: 2 }\r\nstore.dispatch({ type: \'DECREMENT\' }); // State changed: { count: 1 }\r\n\r\n// Unsubscribe when no longer needed\r\nunsubscribe();\r\n " " "\r\n\r\n       Explanation\r\n\r\n-   Reducer Function  :  "counterReducer " is a simple reducer that manages a  "count " property in the state.\r\n-    "createStore "  : Creates the Redux store',
      ' passing the  "counterReducer " to manage the state.\r\n-    "store.subscribe(listener) "  : The listener function is registered to be called whenever the state changes. In this example',
      ' it logs the new state to the console.\r\n-    "store.dispatch(action) "  : Dispatches actions to the store',
      ' triggering the reducer to update the state and subsequently triggering the subscribed listener.\r\n-    "unsubscribe() "  : Calls the function returned by  "store.subscribe " to remove the listener.',
    ],
    codeExample: "",
  },
  {
    id: 8,
    topic: "Rtk",
    question: "Explain Middleware in redux.",
    answer:
      'Imagine you have a factory that makes different kinds of toys. The factory has a production line where raw materials come in, and finished toys come out. Now, let\'s say you want to add some extra steps in the production process, like checking the quality of the toys, painting them in different colors, or even fixing issues before they become finished products. These extra steps are like "middleware" in the production process.\r\n\r\nIn the world of Redux (which helps manage the state of an application), "middleware" is like those extra steps on the production line. When an action (like "make a toy") is sent to the factory, middleware can:\r\n\r\n1.   Inspect the Action  : Check what kind of toy you\'re making and log it, like writing down "We\'re making a car toy."\r\n2.   Modify the Action  : Maybe change the action a bit, like deciding to make the toy blue instead of red.\r\n3.   Delay the Action  : Pause the action for a moment to get some extra parts or information before continuing.\r\n4.   Handle Special Actions  : Sometimes, you might send a special request, like asking someone else to pick up a part. Middleware can recognize these requests and handle them differently.\r\n\r\nOnce the action passes through all the middleware steps, it finally reaches the machine (called a reducer) that actually makes the toy (updates the state).\r\n\r\nSo, middleware in Redux is just a way to add extra steps or checks in between when you send an instruction (action) and when the instruction is carried out (state is updated).',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 9,
    topic: "Rtk",
    question: "How Redux works ? ",
    answer:
      'Redux is a predictable state management library that works on three core principles:\r\n\r\n1. Single Source of Truth: All application state is stored in a single object called the "store." This centralization makes state management easier and predictable.\r\n\r\n2. State is Read-Only: The only way to change the state is by dispatching actions, which are plain JavaScript objects describing what happened.\r\n\r\n3. Changes are Made with Pure Functions: To update the state, you use reducers, which are pure functions that take the current state and an action, returning a new state without directly mutating the original state.\r\n\r\n Workflow\r\n1. Store: Holds the state of the application.\r\n2. Actions: Describe what you want to do, like adding an item or updating a value.\r\n3. Reducers: Define how the state should change based on the action received.\r\n4. Dispatch: Sends actions to the store, triggering the reducers.\r\n5. Subscription: Components subscribe to the store to react to state changes.\r\n\r\nRedux ensures a unidirectional data flow, making state management predictable and debugging simpler.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 10,
    topic: "Rtk",
    question: "What is useSelector() hook ?",
    answer:
      "The useSelector hook in React-Redux is used to extract data (state) from the Redux store in functional components. It acts as a replacement for the connect function used in class components. \n\n Key Points:\n1. Access Redux Store State: It allows components to read values from the Redux store state.\n2. Selector Function: You provide a selector function to specify the part of the state you want to retrieve.\n3. Automatic Subscription: The component automatically subscribes to the Redux store and re-renders whenever the selected state changes.\n\n Syntax:\n\n    const value = useSelector(selectorFunction);\n\n\n- selectorFunction: A function that takes the store state as an argument and returns the desired value.\n\n Example:\nAssume you have a Redux store with a counter slice:\n\n   const counter = useSelector((state) => state.counter);\n\n\n Benefits:\n1. Simple and Readable: Removes the need for mapStateToProps.\n2. Fine-Grained Subscriptions: Only re-renders the component if the selected part of the state changes, improving performance.\n3. Encapsulation: Keeps the state access logic close to where it's used in the component.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 11,
    topic: "Rtk",
    question: "What are actions in Redux?",
    answer:
      "Actions are plain JavaScript objects that describe an intention to change the state. Each action must have a type property, which acts as a unique identifier.\n\nconst incrementAction = { type: 'INCREMENT' };",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 12,
    topic: "Rtk",
    question: "What is a reducer in Redux?",
    answer:
      "A reducer is a pure function that takes the current state and an action as arguments and returns a new state.\n\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 13,
    topic: "Rtk",
    question: "What is the Redux store?",
    answer:
      "The store is an object that holds the entire state tree of the application. It provides methods like:\n\n1.getState() to access the state.\n2.dispatch(action) to update the state.\n3.subscribe(listener) to register callbacks.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 14,
    topic: "Rtk",
    question: "What is middleware in Redux?",
    answer:
      "Middleware is used to extend Redux functionality by intercepting and handling actions before they reach the reducer. Common middleware includes redux-thunk and redux-saga.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 15,
    topic: "Rtk",
    question: "What is the purpose of the connect function?",
    answer:
      "The connect function links React components to the Redux store. It maps state and dispatch to the component's props.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 16,
    topic: "Rtk",
    question: "What are the advantages of Redux?",
    answer:
      "1.Predictable State Management: Centralized state makes debugging and testing easier.\n2.Time-Travel Debugging: Redux DevTools allow you to replay state changes.\n3.Middleware Support: Enhances functionality like handling asynchronous calls.\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 17,
    topic: "Rtk",
    question: " How does Redux handle asynchronous operations?",
    answer:
      "Redux itself is synchronous. To handle asynchronous operations, you use middleware like:\n\n1.redux-thunk: Allows action creators to return functions instead of actions.\n2.redux-saga: Uses generator functions to handle side effects.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 18,
    topic: "Rtk",
    question: "What is the purpose of the combineReducers function?",
    answer:
      "combineReducers is used to combine multiple reducers into a single reducer function, making the state management modular.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 19,
    topic: "Rtk",
    question:
      "What is the difference between mapStateToProps and mapDispatchToProps?",
    answer:
      "mapStateToProps: Maps the Redux store state to component props.\nmapDispatchToProps: Maps dispatch functions to component props to trigger actions.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 20,
    topic: "Rtk",
    question: " What are some common anti-patterns in Redux?",
    answer:
      "1.Mutating state directly in reducers.\n2.Storing non-serializable values like functions or DOM nodes in the state.\n3.Dispatching excessive actions for minor changes.\n4.Overusing Redux for local component state.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 21,
    topic: "Rtk",
    question: "What are selectors in Redux?",
    answer:
      "Selectors are functions used to encapsulate logic for accessing specific slices of the state, improving code reusability and readability.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 22,
    topic: "Rtk",
    question: "Can you explain the Redux data flow?",
    answer:
      "Action: A plain object describing what happened.\nReducer: A pure function that takes the current state and action, returning a new state.\nStore: Holds the entire state and updates it based on reducer output.\nView: React components re-render based on updated state.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 23,
    topic: "Rtk",
    question: "How would you optimize a Redux application?",
    answer:
      "Use memoization for selectors (reselect library).\nSplit reducers using combineReducers for modularity.\nAvoid overusing Redux for trivial state management.\nUse tools like React.memo and React's useMemo to avoid unnecessary re-renders.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 24,
    topic: "Rtk",
    question: "What happens if the reducer does not return a new state?",
    answer:
      "If a reducer does not return a new state or the default state, the Redux store will have undefined as the state, which will likely break the application.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 25,
    topic: "Rtk",
    question:
      "What is the difference between createStore and configureStore in Redux Toolkit?",
    answer:
      "createStore: Used in classic Redux to manually create the store.\nconfigureStore: A utility from Redux Toolkit that sets up the store with default middlewares like redux-thunk, simplifies setup, and supports modern Redux patterns.",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 26,
    topic: "Rtk",
    question: "Redux vs Redux toolkit ?",
    answer:
      'The   key differences between Redux and Redux Toolkit (RTK)   lie in their approach, features, and developer experience. Redux Toolkit is built on top of Redux and addresses many common challenges developers face when using Redux.\n\n---\n\n      1. Boilerplate Code  \n-   Redux  : Requires a lot of boilerplate code (e.g., manually writing actions, reducers, and action types).\n-   Redux Toolkit  : Reduces boilerplate by providing utilities like createSlice and createAction.\n\n---\n\n      2. Configuration  \n-   Redux  : Requires manual setup of the store, middleware, and DevTools.\n-   Redux Toolkit  : Provides configureStore, which automatically sets up the store with good defaults, like:\n  - Built-in middleware (redux-thunk).\n  - Integration with Redux DevTools.\n\n---\n\n      3. Mutability  \n-   Redux  : Enforces immutability manually, which can be error-prone.\n-   Redux Toolkit  : Uses Immer.js internally, allowing you to write "mutable-looking" code that’s immutable under the hood.\n\n---\n\n      4. Developer Experience  \n-   Redux  : Requires managing a lot of small files (e.g., separate files for actions, reducers, and constants).\n-   Redux Toolkit  : Centralizes logic in slices, combining actions and reducers in a single file.\n\n---\n\n      5. Middleware  \n-   Redux  : Middleware like redux-thunk must be added manually.\n-   Redux Toolkit  : Comes preconfigured with middleware like redux-thunk and allows easy customization.\n\n---\n\n      6. Async Logic  \n-   Redux  : Requires manual handling of async operations using middleware like redux-thunk or redux-saga.\n-   Redux Toolkit  : Provides createAsyncThunk, a streamlined way to handle async logic with built-in lifecycle actions (pending, fulfilled, rejected).\n\n---\n\n      7. Opinionated vs. Unopinionated  \n-   Redux  : Unopinionated, giving complete control but requiring developers to make many decisions.\n-   Redux Toolkit  : Opinionated, offering pre-configured best practices for efficient development.\n\n---\n\n      8. Built-in Best Practices  \n-   Redux  : Leaves best practices to the developer to implement manually.\n-   Redux Toolkit  : Enforces best practices like:\n  - Using Immer.js for immutability.\n  - Avoiding accidental state mutations.\n  - Combining slices for better organization.\n\n      Conclusion  \n- Use   Redux   if you need full control over your setup or want a more "manual" approach.\n- Use   Redux Toolkit   for faster development, reduced boilerplate, and built-in best practices. It’s the recommended way to use Redux in modern applications.',
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 27,
    topic: "Rtk",
    question: "What is Redux Toolkit (RTK) and why was it created?",
    answer:
      "Redux Toolkit is the official, opinionated toolset for efficient Redux development. It was created to:\r\n- Simplify store setup\r\n- Reduce boilerplate code\r\n- Include useful utilities out of the box\r\n- Provide good defaults for store setup\r\n- Handle common use cases like async actions\r\n- Follow Redux best practices automatically\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 28,
    topic: "Rtk",
    question: " What is the difference between Redux and Redux Toolkit?",
    answer:
      "Key differences include:\r\n- RTK reduces boilerplate code significantly\r\n- RTK includes utilities like createSlice and createAsyncThunk\r\n- RTK has built-in Immer for immutable updates\r\n- RTK configures Redux DevTools automatically\r\n- RTK includes Redux Thunk middleware by default\r\n- RTK handles action creators automatically\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 29,
    topic: "Rtk",
    question: "What is a Redux store?",
    answer:
      "A Redux store is a container that holds the application's state tree. It provides methods to:\n- Get the current state (getState())\n- Update the state (dispatch(action))\n- Listen for changes (subscribe(listener))\n- Register reducers (replaceReducer())\nExample:\n     \nimport { configureStore } from '@reduxjs/toolkit';\nimport rootReducer from './reducers';\n\nconst store = configureStore({\n  reducer: rootReducer\n});\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 30,
    topic: "Rtk",
    question: "What is an Action in Redux?\r",
    answer:
      "An Action is a plain JavaScript object that describes what happened in the application. It must have a 'type' property and optionally carries additional data. In RTK, actions are typically created automatically by createSlice.\n\nTraditional Redux:\n     \nconst incrementAction = {\n  type: 'counter/increment',\n  payload: 1\n};\n   \n\nRTK:\n     \nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {\n    increment: (state, action) => state + action.payload\n  }\n});\n// Action creator is generated automatically\nconst { increment } = counterSlice.actions;\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 31,
    topic: "Rtk",
    question: "What is a Reducer in Redux?",
    answer:
      " A Reducer is a pure function that takes the current state and an action as arguments and returns a new state. In RTK, reducers are defined within createSlice.\n\nTraditional Redux:\r\n     \r\nfunction counterReducer(state = 0, action) {\r\n  switch (action.type) {\r\n    case 'INCREMENT':\r\n      return state + 1;\r\n    default:\r\n      return state;\r\n  }\r\n}\r\n   \r\n\r\nRTK:\r\n     \r\nconst counterSlice = createSlice({\r\n  name: 'counter',\r\n  initialState: 0,\r\n  reducers: {\r\n    increment: state => state + 1\r\n  }\r\n});\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 32,
    topic: "Rtk",
    question: "What is createSlice in Redux Toolkit?\r",
    answer:
      " createSlice is a function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types based on the reducers:\r\n     \r\nconst todoSlice = createSlice({\r\n  name: 'todos',\r\n  initialState: [],\r\n  reducers: {\r\n    addTodo: (state, action) => {\r\n      state.push(action.payload);\r\n    },\r\n    removeTodo: (state, action) => {\r\n      return state.filter(todo => todo.id !== action.payload);\r\n    }\r\n  }\r\n});\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 33,
    topic: "Rtk",
    question: "What is createAsyncThunk in RTK?\r",
    answer:
      "createAsyncThunk is a function that generates thunk actions for handling async logic. It automatically creates pending, fulfilled, and rejected action types:\r\n     \r\nconst fetchUserById = createAsyncThunk(\r\n  'users/fetchById',\r\n  async (userId, thunkAPI) => {\r\n    const response = await fetch( /api/users/${userId} );\r\n    return response.json();\r\n  }\r\n);\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 34,
    topic: "Rtk",
    question: "How does RTK handle immutability?",
    answer:
      "RTK uses Immer internally to allow \"mutating\" logic in reducers while maintaining immutability:\r\n     \r\nconst todosSlice = createSlice({\r\n  name: 'todos',\r\n  initialState: [],\r\n  reducers: {\r\n    addTodo: (state, action) => {\r\n      // This looks like mutation but Immer makes it immutable\r\n      state.push(action.payload);\r\n    }\r\n  }\r\n});\r\n   \r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 35,
    topic: "Rtk",
    question: "What is the Redux DevTools Extension?",
    answer:
      "Redux DevTools is a browser extension that provides power-ups for Redux development:\r\n- Time-travel debugging\r\n- State inspection\r\n- Action replay\r\n- State persistence\r\nRTK configures it automatically when using configureStore.\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 36,
    topic: "Rtk",
    question: "What are selectors in Redux?",
    answer:
      "Selectors are functions that extract specific pieces of data from the store state. RTK Query includes createSelector for memoized selectors:\r\n     \r\nimport { createSelector } from '@reduxjs/toolkit';\r\n\r\nconst selectTodos = state => state.todos;\r\nconst selectActiveFilter = state => state.filters.active;\r\n\r\nconst selectFilteredTodos = createSelector(\r\n  [selectTodos, selectActiveFilter],\r\n  (todos, filter) => todos.filter(todo => todo.status === filter)\r\n);\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 37,
    topic: "Rtk",
    question: "What is Redux Thunk and how does RTK handle it?\r",
    answer:
      "Redux Thunk is middleware that allows action creators to return functions instead of plain actions. RTK includes it by default:\r\n     \r\nconst fetchUserById = createAsyncThunk(\r\n  'users/fetchById',\r\n  async (userId, thunkAPI) => {\r\n    const response = await fetch( /api/users/${userId} );\r\n    return response.json();\r\n  }\r\n);\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 38,
    topic: "Rtk",
    question: "How does RTK Query work?",
    answer:
      "RTK Query is a powerful data fetching and caching tool included with RTK:\r\n     \r\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\r\n\r\nexport const api = createApi({\r\n  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),\r\n  endpoints: (builder) => ({\r\n    getPosts: builder.query({\r\n      query: () => 'posts'\r\n    })\r\n  })\r\n});\r\n\r\nexport const { useGetPostsQuery } = api;\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 39,
    topic: "Rtk",
    question: " What is the difference between createAction and createSlice?\r",
    answer:
      "createAction creates a single action creator, while createSlice creates a set of actions and their corresponding reducer:\r\n     \r\n// createAction\r\nconst increment = createAction('counter/increment');\r\n\r\n// createSlice\r\nconst counterSlice = createSlice({\r\n  name: 'counter',\r\n  initialState: 0,\r\n  reducers: {\r\n    increment: state => state + 1\r\n  }\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 40,
    topic: "Rtk",
    question: "How do you combine reducers in RTK?\r",
    answer:
      "RTK's configureStore automatically combines reducers when you pass them in the reducer object:\r\n     \r\nconst store = configureStore({\r\n  reducer: {\r\n    posts: postsReducer,\r\n    comments: commentsReducer,\r\n    users: usersReducer\r\n  }\r\n});\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 41,
    topic: "Rtk",
    question: " What is the purpose of prepareCallback in createSlice?",
    answer:
      "prepareCallback allows you to customize the payload of an action creator:\r\n     \r\nconst todosSlice = createSlice({\r\n  name: 'todos',\r\n  initialState: [],\r\n  reducers: {\r\n    addTodo: {\r\n      reducer: (state, action) => {\r\n        state.push(action.payload);\r\n      },\r\n      prepare: (text) => ({\r\n        payload: {\r\n          id: nanoid(),\r\n          text,\r\n          completed: false\r\n        }\r\n      })\r\n    }\r\n  }\r\n});\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 42,
    topic: "Rtk",
    question: "How do you handle loading states with RTK?",
    answer:
      "You can handle loading states using createAsyncThunk and extraReducers:\r\n     \r\nconst fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {\r\n  const response = await fetch('/api/posts');\r\n  return response.json();\r\n});\r\n\r\nconst postsSlice = createSlice({\r\n  name: 'posts',\r\n  initialState: {\r\n    items: [],\r\n    loading: false,\r\n    error: null\r\n  },\r\n  extraReducers: (builder) => {\r\n    builder\r\n      .addCase(fetchPosts.pending, (state) => {\r\n        state.loading = true;\r\n      })\r\n      .addCase(fetchPosts.fulfilled, (state, action) => {\r\n        state.loading = false;\r\n        state.items = action.payload;\r\n      })\r\n      .addCase(fetchPosts.rejected, (state, action) => {\r\n        state.loading = false;\r\n        state.error = action.error.message;\r\n      });\r\n  }\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 43,
    topic: "Rtk",
    question: "What are action types in Redux and how does RTK handle them?\r",
    answer:
      "Action types are string identifiers for actions. RTK generates them automatically when using createSlice:\r\n     \r\nconst counterSlice = createSlice({\r\n  name: 'counter',\r\n  initialState: 0,\r\n  reducers: {\r\n    increment: state => state + 1\r\n  }\r\n});\r\n// Action type is automatically 'counter/increment'\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 44,
    topic: "Rtk",
    question: "How do you implement middleware in RTK?",
    answer:
      "Middleware can be added using the middleware option in configureStore:\r\n     \r\nconst logger = store => next => action => {\r\n  console.log('dispatching', action);\r\n  let result = next(action);\r\n  console.log('next state', store.getState());\r\n  return result;\r\n};\r\n\r\nconst store = configureStore({\r\n  reducer: rootReducer,\r\n  middleware: (getDefaultMiddleware) =>\r\n    getDefaultMiddleware().concat(logger)\r\n});\r\n   \r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 45,
    topic: "Rtk",
    question: "What is the difference between RTK Query and createAsyncThunk?",
    answer:
      "- RTK Query is for data fetching and caching with automatic loading and error states\r\n- createAsyncThunk is for general async operations\r\n     \r\n// RTK Query\r\nconst api = createApi({\r\n  endpoints: (builder) => ({\r\n    getPosts: builder.query({\r\n      query: () => 'posts'\r\n    })\r\n  })\r\n});\r\n\r\n// createAsyncThunk\r\nconst fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {\r\n  const response = await fetch('/api/posts');\r\n  return response.json();\r\n});\r\n",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 46,
    topic: "Rtk",
    question: " How do you test Redux reducers?",
    answer:
      "Reducers can be tested as pure functions:\r\n     \r\nimport { counterSlice } from './counterSlice';\r\n\r\ntest('should handle increment', () => {\r\n  const initialState = 0;\r\n  const action = counterSlice.actions.increment();\r\n  const nextState = counterSlice.reducer(initialState, action);\r\n  expect(nextState).toBe(1);\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 47,
    topic: "Rtk",
    question: "",
    answer: "## Specific Use Cases\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 48,
    topic: "Rtk",
    question: "How would you implement a shopping cart using Redux Toolkit?",
    answer:
      "// cartSlice.js\r\nimport { createSlice } from '@reduxjs/toolkit';\r\n\r\nconst cartSlice = createSlice({\r\n  name: 'cart',\r\n  initialState: {\r\n    items: [],\r\n    totalAmount: 0,\r\n    totalQuantity: 0\r\n  },\r\n  reducers: {\r\n    addToCart: (state, action) => {\r\n      const newItem = action.payload;\r\n      const existingItem = state.items.find(item => item.id === newItem.id);\r\n      \r\n      if (existingItem) {\r\n        existingItem.quantity++;\r\n        existingItem.totalPrice = existingItem.quantity * existingItem.price;\r\n      } else {\r\n        state.items.push({\r\n          ...newItem,\r\n          quantity: 1,\r\n          totalPrice: newItem.price\r\n        });\r\n      }\r\n      \r\n      state.totalQuantity++;\r\n      state.totalAmount = state.items.reduce(\r\n        (total, item) => total + item.price * item.quantity,\r\n        0\r\n      );\r\n    },\r\n    removeFromCart: (state, action) => {\r\n      const id = action.payload;\r\n      const existingItem = state.items.find(item => item.id === id);\r\n      \r\n      if (existingItem.quantity === 1) {\r\n        state.items = state.items.filter(item => item.id !== id);\r\n      } else {\r\n        existingItem.quantity--;\r\n        existingItem.totalPrice = existingItem.quantity * existingItem.price;\r\n      }\r\n      \r\n      state.totalQuantity--;\r\n      state.totalAmount = state.items.reduce(\r\n        (total, item) => total + item.price * item.quantity,\r\n        0\r\n      );\r\n    }\r\n  }\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 49,
    topic: "Rtk",
    question:
      "How would you implement authentication state management with RTK?",
    answer:
      "// authSlice.js\r\nimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\r\n\r\nexport const loginUser = createAsyncThunk(\r\n  'auth/login',\r\n  async ({ email, password }, thunkAPI) => {\r\n    try {\r\n      const response = await fetch('/api/login', {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify({ email, password })\r\n      });\r\n      \r\n      if (!response.ok) throw new Error('Login failed');\r\n      \r\n      const data = await response.json();\r\n      localStorage.setItem('token', data.token);\r\n      return data.user;\r\n    } catch (error) {\r\n      return thunkAPI.rejectWithValue(error.message);\r\n    }\r\n  }\r\n);\r\n\r\nconst authSlice = createSlice({\r\n  name: 'auth',\r\n  initialState: {\r\n    user: null,\r\n    token: localStorage.getItem('token'),\r\n    isAuthenticated: false,\r\n    loading: false,\r\n    error: null\r\n  },\r\n  reducers: {\r\n    logout: (state) => {\r\n      state.user = null;\r\n      state.token = null;\r\n      state.isAuthenticated = false;\r\n      localStorage.removeItem('token');\r\n    },\r\n    clearError: (state) => {\r\n      state.error = null;\r\n    }\r\n  },\r\n  extraReducers: (builder) => {\r\n    builder\r\n      .addCase(loginUser.pending, (state) => {\r\n        state.loading = true;\r\n        state.error = null;\r\n      })\r\n      .addCase(loginUser.fulfilled, (state, action) => {\r\n        state.loading = false;\r\n        state.user = action.payload;\r\n        state.isAuthenticated = true;\r\n      })\r\n      .addCase(loginUser.rejected, (state, action) => {\r\n        state.loading = false;\r\n        state.error = action.payload;\r\n      });\r\n  }\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 50,
    topic: "Rtk",
    question: "How would you implement infinite scrolling with RTK Query?",
    answer:
      "// api.js\r\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\r\n\r\nexport const api = createApi({\r\n  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),\r\n  endpoints: (builder) => ({\r\n    getPosts: builder.query({\r\n      query: (page = 1) =>   posts?page=${page}&limit=10  ,\r\n      serializeQueryArgs: ({ endpointName }) => {\r\n        return endpointName;\r\n      },\r\n      merge: (currentCache, newItems) => {\r\n        currentCache.posts.push(...newItems.posts);\r\n        currentCache.hasMore = newItems.hasMore;\r\n      },\r\n      forceRefetch({ currentArg, previousArg }) {\r\n        return currentArg !== previousArg;\r\n      }\r\n    })\r\n  })\r\n});\r\n\r\n// Component.jsx\r\nfunction PostList() {\r\n  const [page, setPage] = useState(1);\r\n  const { data, isFetching } = useGetPostsQuery(page);\r\n  \r\n  const handleScroll = useCallback((e) => {\r\n    const { scrollTop, clientHeight, scrollHeight } = e.target;\r\n    if (\r\n      scrollHeight - scrollTop === clientHeight &&\r\n      data?.hasMore &&\r\n      !isFetching\r\n    ) {\r\n      setPage(prev => prev + 1);\r\n    }\r\n  }, [data?.hasMore, isFetching]);\r\n\r\n  return (\r\n    <div onScroll={handleScroll} style={{ height: '400px', overflow: 'auto' }}>\r\n      {data?.posts.map(post => (\r\n        <PostItem key={post.id} post={post} />\r\n      ))}\r\n      {isFetching && <Spinner />}\r\n    </div>\r\n  );\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 51,
    topic: "Rtk",
    question:
      "How would you implement a real-time notification system with Redux?\r",
    answer:
      "// notificationSlice.js\r\nimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\r\n\r\nexport const connectWebSocket = createAsyncThunk(\r\n  'notifications/connect',\r\n  async (_, { dispatch }) => {\r\n    const ws = new WebSocket('ws://your-api/notifications');\r\n    \r\n    ws.onmessage = (event) => {\r\n      const notification = JSON.parse(event.data);\r\n      dispatch(addNotification(notification));\r\n    };\r\n    \r\n    return ws;\r\n  }\r\n);\r\n\r\nconst notificationSlice = createSlice({\r\n  name: 'notifications',\r\n  initialState: {\r\n    items: [],\r\n    unreadCount: 0,\r\n    connected: false\r\n  },\r\n  reducers: {\r\n    addNotification: (state, action) => {\r\n      state.items.unshift(action.payload);\r\n      state.unreadCount++;\r\n    },\r\n    markAsRead: (state, action) => {\r\n      const notification = state.items.find(\r\n        item => item.id === action.payload\r\n      );\r\n      if (notification && !notification.read) {\r\n        notification.read = true;\r\n        state.unreadCount--;\r\n      }\r\n    },\r\n    markAllAsRead: (state) => {\r\n      state.items.forEach(item => {\r\n        item.read = true;\r\n      });\r\n      state.unreadCount = 0;\r\n    }\r\n  },\r\n  extraReducers: (builder) => {\r\n    builder\r\n      .addCase(connectWebSocket.fulfilled, (state) => {\r\n        state.connected = true;\r\n      })\r\n      .addCase(connectWebSocket.rejected, (state) => {\r\n        state.connected = false;\r\n      });\r\n  }\r\n});\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 52,
    topic: "Rtk",
    question:
      " How would you implement form state management with Redux Toolkit?\r",
    answer:
      "// formSlice.js\r\nimport { createSlice } from '@reduxjs/toolkit';\r\n\r\nconst formSlice = createSlice({\r\n  name: 'form',\r\n  initialState: {\r\n    values: {},\r\n    errors: {},\r\n    touched: {},\r\n    isSubmitting: false\r\n  },\r\n  reducers: {\r\n    setField: (state, action) => {\r\n      const { field, value } = action.payload;\r\n      state.values[field] = value;\r\n      state.touched[field] = true;\r\n      \r\n      // Clear field error when value changes\r\n      if (state.errors[field]) {\r\n        delete state.errors[field];\r\n      }\r\n    },\r\n    setError: (state, action) => {\r\n      const { field, error } = action.payload;\r\n      state.errors[field] = error;\r\n    },\r\n    setTouched: (state, action) => {\r\n      const { field, isTouched } = action.payload;\r\n      state.touched[field] = isTouched;\r\n    },\r\n    resetForm: (state) => {\r\n      state.values = {};\r\n      state.errors = {};\r\n      state.touched = {};\r\n      state.isSubmitting = false;\r\n    },\r\n    startSubmitting: (state) => {\r\n      state.isSubmitting = true;\r\n    },\r\n    endSubmitting: (state) => {\r\n      state.isSubmitting = false;\r\n    }\r\n  }\r\n});\r\n\r\n// Usage in component\r\nfunction RegistrationForm() {\r\n  const dispatch = useDispatch();\r\n  const { values, errors, touched, isSubmitting } = useSelector(\r\n    state => state.form\r\n  );\r\n\r\n  const handleChange = (e) => {\r\n    const { name, value } = e.target;\r\n    dispatch(setField({ field: name, value }));\r\n  };\r\n\r\n  const handleBlur = (e) => {\r\n    const { name } = e.target;\r\n    dispatch(setTouched({ field: name, isTouched: true }));\r\n  };\r\n\r\n  const handleSubmit = async (e) => {\r\n    e.preventDefault();\r\n    dispatch(startSubmitting());\r\n    try {\r\n      await submitForm(values);\r\n      dispatch(resetForm());\r\n    } catch (error) {\r\n      dispatch(setError({ field: 'submit', error: error.message }));\r\n    } finally {\r\n      dispatch(endSubmitting());\r\n    }\r\n  };\r\n\r\n  return (\r\n    <form onSubmit={handleSubmit}>\r\n      {/* Form fields */}\r\n    </form>\r\n  );\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
  {
    id: 53,
    topic: "Rtk",
    question: "How would you implement a multi-step wizard with Redux Toolkit?",
    answer:
      "// wizardSlice.js\r\nimport { createSlice } from '@reduxjs/toolkit';\r\n\r\nconst wizardSlice = createSlice({\r\n  name: 'wizard',\r\n  initialState: {\r\n    currentStep: 1,\r\n    totalSteps: 4,\r\n    stepsData: {\r\n      step1: {},\r\n      step2: {},\r\n      step3: {},\r\n      step4: {}\r\n    },\r\n    completedSteps: new Set(),\r\n    isSubmitting: false\r\n  },\r\n  reducers: {\r\n    nextStep: (state) => {\r\n      if (state.currentStep < state.totalSteps) {\r\n        state.currentStep += 1;\r\n      }\r\n    },\r\n    previousStep: (state) => {\r\n      if (state.currentStep > 1) {\r\n        state.currentStep -= 1;\r\n      }\r\n    },\r\n    setStepData: (state, action) => {\r\n      const { step, data } = action.payload;\r\n      state.stepsData[  step${step}  ] = {\r\n        ...state.stepsData[  step${step}  ],\r\n        ...data\r\n      };\r\n      state.completedSteps.add(step);\r\n    },\r\n    resetWizard: (state) => {\r\n      state.currentStep = 1;\r\n      state.stepsData = {\r\n        step1: {},\r\n        step2: {},\r\n        step3: {},\r\n        step4: {}\r\n      };\r\n      state.completedSteps = new Set();\r\n      state.isSubmitting = false;\r\n    }\r\n  }\r\n});\r\n\r\n// Component usage\r\nfunction WizardForm() {\r\n  const dispatch = useDispatch();\r\n  const { currentStep, stepsData, completedSteps } = useSelector(\r\n    state => state.wizard\r\n  );\r\n\r\n  const handleStepSubmit = (stepData) => {\r\n    dispatch(setStepData({ step: currentStep, data: stepData }));\r\n    dispatch(nextStep());\r\n  };\r\n\r\n  const renderStep = () => {\r\n    switch (currentStep) {\r\n      case 1:\r\n        return <PersonalInfo onSubmit={handleStepSubmit} data={stepsData.step1} />;\r\n      case 2:\r\n        return <AddressInfo onSubmit={handleStepSubmit} data={stepsData.step2} />;\r\n      case 3:\r\n        return <PaymentInfo onSubmit={handleStepSubmit} data={stepsData.step3} />;\r\n      case 4:\r\n        return <ReviewInfo onSubmit={handleStepSubmit} data={stepsData.step4} />;\r\n      default:\r\n        return null;\r\n    }\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <WizardProgress \r\n        currentStep={currentStep} \r\n        completedSteps={completedSteps} \r\n      />\r\n      {renderStep()}\r\n      <WizardNavigation \r\n        currentStep={currentStep}\r\n        onBack={() => dispatch(previousStep())}\r\n      />\r\n    </div>\r\n  );\r\n}\r",
    keyFeatures: [],
    actionWords: [],
    codeExample: "",
  },
];
