This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## TEST QUESTIONS

###1. ReactJS</br>


   ```
   - How does React handle state management? Compare and contrast the use of
   setState and Redux for managing state in React applications.
   ```

- React handles state management with "state," which is an object that represents the parts of a component that is
  changeable. The state allows React components to manage and update their data, leading to UI updates when the state
  changes. React provides a method called setState to update the state and trigger a re-render of the component.

- To compare: Redux is better for larger apps when you need a global state but surely more complex with a lot of
  boilerplate code. setState is for managing local component state while Redux provides a global store.
  

   ```
   - Explain the concept of reconciliation in React and how it affects performance.
   ```
- It's for updating the DOM more efficiently. React creates a virtual DOM and compares it with the 'real' DOM and
  updates only the changed UI, which effects performance in a good way because it avoids unnecessary DOM updates.
  

  ```
  - How can you implement code splitting and lazy loading in React to improve the
  initial load time of an application?
  ```
- We can use React.lazy() with Suspense component so we can load the component when it's needed, with Suspense component
  we can provide a smooth loading experience. This is more useful for larger apps where loading the entire code upfront
  might result in slower initial page loads.
  

   ```
   - Describe different ways of handling forms in React and discuss the pros and cons
   of each approach.
   ```
- There are two different ways to handle forms; Controlled and Uncontrolled Controlled forms store each input’s value in
  React state, and then set the value of each input on each re-render from that state. On the other hand, uncontrolled
  forms do not save the input values in React state. Instead, uncontrolled forms use the built-in `<form>`
  functionalities of vanilla HTML and JavaScript to manage data.

###2.TypeScript

   ```
  - Explain the concept of generics in TypeScript and provide an example of how you
   would use them in a React application.
   ```

- Generics store the type (for example number, string, boolean) as a value. They allow us to write functions or
  components that work with a variety of data types while maintaining type safety.

   ```
   function printData(data: number | string | boolean) {
   console.log("data: ", data);
   }
   ```

- In the example above, there's always a chance that the 'data' argument can be of another type in the future. In that
  case the types will increase and it will become harder to maintain all those different types. So instead of naming all
  the types or using 'any' we use generics.

   ```
    function printData<T>(data: T) {
    console.log("data: ", data);
    }
   ```
- With generics we can still ensure type safety. Making our code more adaptable to different data types without
  sacrificing type checking.


   ```
 - How can you create reusable components and maintain type safety with
TypeScript?
   ```

- TypeScript enables us to define interfaces for props, ensuring type safety for components. Reusable components can be
  created with generics, allowing them to adapt to different data structures while maintaining type safety.


   ```
- Discuss the advantages and potential challenges of migrating an existing
JavaScript codebase to TypeScript.
   ```

- Advantages:
    - Catching potential errors at compile-time and improving code robustness.
    - Explicit type annotations serve as documentation, making code more readable and maintainable.
    - Easier to refactor the code
- Challenges:
    - Some third-party libraries may lack TypeScript support
    - Depending on the size of the project it can require a lot of effort.
    - Configuring the TypeScript build settings, integrating with existing tools, and ensuring a smooth build process
      can be challenging.

###3.NextJS

   ```
- How does Next.js handle routing for both client-side and server-side rendering?
Explain the differences between the Link component and router object.
   ```

- To handle routing for server-side rendering, we can use getServerSideProps() function. getServerSideProps provides a '
  context' parameter that has properties of the page’s route, including the query. For client-side rendering we can use
  Link component and router object.

- The Link component is the declarative way of navigating to a different page in Next.js while the router object is the
  imperative way. Navigating imperatively means we tell Next.js how it should transit to the next page. Router object
  doesn't generate an `<a>` tag, it is similar to window.location while Link component generates an `<a>` tag.


   ```
- Discuss the different caching strategies available in Next.js and when you would
use each one.
   ```

- Client-side Caching
    - Client-side caching involves storing the data on the client’s device after the initial request. This method
      reduces network traffic because subsequent requests for the same data can be met without additional network calls.
    - Ideal for scenarios where we have limited data that can be cached and we want to reduce server load while
      providing a faster user experience. It works well for static assets, small datasets, and situations where data
      updates are infrequent.
- Server-side Caching
    - In server-side caching, data is stored on the server after the initial request, reducing the load on our database
      or other data sources because subsequent requests can be satisfied directly from the cache.
    - Suitable for applications that serve the same data to multiple clients, especially when the data changes
      infrequently or on a predictable schedule. It’s commonly used for content-heavy websites, APIs, and
      database-driven applications.
- Stale-While-Revalidate Caching
    - The Stale-While-Revalidate (SWR) strategy is a cache invalidation strategy popularized by HTTP Cache-Control. The
      idea is that we can use the stale data while we send a request to validate if there’s any updated data.
    - A great choice for applications where immediate response is crucial, and occasional stale data is acceptable. This
      strategy works well for frequently accessed data, like news articles or social media posts.


   ```
- How can you handle authentication and authorization in a Next.js application?
   ```

- Authentication and authorization in Next.js can be handled using middleware, serverless functions, or third-party
  libraries such as NextAuth.js, Clerk and AuthO. We may also use cookies or JSON Web Tokens (JWT) for authentication
  and implement role-based access control for authorization.

###4.MobX

   ```
- Compare MobX with other popular state management libraries like Redux and
Recoil. When would you choose one over the others?
   ```

- Redux: Redux store is immutable, which means that the data in the store is Read-Only. Actions are the only way to make
  changes to the store data by the pure reducers functions. On the other hand, MobX is mutable, it means that we can
  update the state with new values with no problem. Compared to Redux it requires less boilerplate code.
- Recoil: Recoil lets us handle data flexibly without forcing a specific way to organize it. It's good for projects that
  need different ways of managing information. On the other hand, MobX is great for simpler projects because it keeps
  things easy and automatically updates things when data changes.
- MobX is better when we want things to be straightforward, especially for smaller projects. It's good for a reactive
  approach that automatically updates parts of your app when things change. Redux is better when our project is big and
  needs a clear, single source of truth for state. Recoil is great for managing state without a big central store.
  Recoil is handy in projects with lots of calculated values, and it keeps things simple using atoms and selectors.


   ```
- How can you handle asynchronous actions and side effects with MobX? Discuss
the recommended patterns.
   ```

- Using async Functions in MobX Actions:
  MobX actions can be asynchronous by using async functions. This allows the handling of asynchronous operations within
  the context of MobX actions, ensuring proper reactivity.

- MobX Reactions:
  MobX provides the reaction function, which allows us to react to changes in observables. Reactions can be employed to
  trigger side effects when specific observables are modified.
  
- Using MobX flow for Generator Functions:
  MobX flow is a function that enables the use of generator functions with yield for managing asynchronous operations.
  This is especially useful for handling more complex asynchronous workflows in MobX actions.

- Leveraging MobX when for Conditional Reactions:
  The when function in MobX allows developers to set up reactions that respond to changes meeting specific conditions.
  This can be beneficial for triggering actions when certain criteria are satisfied.


   ```
- Explain how MobX observes changes to state and updates the React components
automatically.
   ```

- MobX observes changes to state and facilitates automatic updates to React components through the concept of
  observables and reactions. Observables are special objects or values marked with MobX decorators (@observable) that
  MobX watches for changes. When a change occurs, MobX triggers reactions, which are functions that depend on the
  observed state. React components can be marked as observers using the observer higher-order component provided by
  MobX. When an observable used in a component changes, MobX automatically re-renders the component by invoking the
  relevant reaction associated with that observable. 