import React from "react";

const Blogs = () => {
  return (
    <div className="p-4 grid md:grid-cols-3 gap-3">
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-left">
            In React apps, there are at least seven ways to handle the state.
            Let us briefly explore a few of them in this part.
            <br />
            <ol className="text-left">
              <li>We can use URL to store some data</li>
              <li>
                The second option is to store the state in the browser via web
                storage
              </li>
              <li>The third option is to use store state locally</li>
              <li>
                The Fourth option is to define the state in the parent component
              </li>
              <li>
                The fifth option is to compute the new state based on the
                available state
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            The purpose is to validate that each unit of the software code
            performs as expected.They enable you to catch bugs early in the
            development process. Automated unit tests help a great deal with
            regression testing. They detect code smells in your codebase. For
            example, if you're having a hard time writing unit tests for a piece
            of code, it might be a sign that your function is too complex
          </p>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> React vs Angular vs Vue?</h2>
          <p>
            Angular is the most mature of the frameworks, has good backing in
            terms of contributors and is a complete package. However, the
            learning curve is steep and concepts of development in Angular may
            put off new developers. Angular is a good choice for companies with
            large teams and developers who already use TypeScript.
            <br></br>
            React is just old enough to be mature and has a huge number of
            contributions from the community. It has gained widespread
            acceptance. The job market for React is really good, and the future
            for this framework looks bright. React looks like a good choice for
            someone getting started with front-end JavaScript frameworks,
            startups, and developers who like some flexibility. The ability to
            integrate with other frameworks seamlessly gives it a great
            advantage for those who would like some flexibility in their code.
            <br></br>
            Vue is newest to the arena, without the backing of a major company.
            However, it has done really well in the last few years to come out
            as a strong competitor for Angular and React, and especially so with
            the release of Vue 3.0. This is perhaps playing a role with a lot of
            Chinese giants like Alibaba and Baidu picking Vue as their primary
            front-end JavaScript framework. Vue should be your choice if you
            prefer simplicity, but also like flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
