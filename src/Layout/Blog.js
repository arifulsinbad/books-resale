import React from 'react';

const Blog = () => {
 return (
  <div className='w-10/12 mx-auto bg-black rounded-lg p-6'>
   <div>
    <h1 className='text-4xl text-info text-center font-bold'>Question Blog</h1>
   </div>
   <h1 className='text-xl text-info font-bold mt-9'>1. What are the different ways to manage a state in a React application?</h1>
   <p className='font-bold text-accent'>Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
   <h1 className='text-xl text-info font-bold mt-9'>2. How does prototypical inheritance work?</h1>
   <p className='font-bold text-accent'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
   <h1 className='text-xl text-info font-bold mt-9'>3. What is a unit test? Why should we write unit tests?</h1>
   <p className='font-bold text-accent'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
   <h1 className='text-xl text-info font-bold mt-9'>4. React vs. Angular vs. Vue?</h1>
   <p className='font-bold text-accent'>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
  </div>
 );
};

export default Blog;