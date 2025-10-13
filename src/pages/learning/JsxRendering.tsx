import { ListGroup, ListGroupItem } from "flowbite-react";

export default function JsxRendering() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        {/* <h1 className="text-5xl font-bold"></h1> */}
        <h1 className="text-5xl font-bold">JSX Rendering</h1>
        <p className="mt-4 text-lg text-gray-600">
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It is commonly used in React to describe the UI structure and layout of components.
        </p>
      </section>

      <b className="pb-4 inline-block">list of the 7 JSX/TSX rules</b>
      <ListGroup className="max-w-md py-3 mb-3">
        <ListGroupItem>
          <b className="font-medium">1. JSX Must Have One Parent Element</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">2. Use CamelCase for HTML Attributes</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">3. JavaScript Expressions in Curly Braces</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">4. Self-Closing Tags</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">5. Use ClassName Instead of Class</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">6. Comments in JSX</b>
        </ListGroupItem>
        <ListGroupItem>
          <b className="font-medium">7. JSX is Not HTML</b>
        </ListGroupItem>
      </ListGroup>


    <h2 className="py-4 text-2xl font-bold"> Common Expressions You Can Use Inside JSX</h2>
    <b className="pb-4 inline-block">Here are common types of expressions you can use inside JSX:</b>
     <ListGroup className="max-w-full mt-5">
      <ListGroupItem>
        <b className="font-bold">1. Variables / Constants</b>: 
        Use defined variables to display dynamic values.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">2. String Concatenation</b>: 
        Combine strings using <code>+</code> inside JSX.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">3. Template Literals</b>: 
        Use backticks and <code>${}</code> for cleaner string formatting.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">4. Mathematical Operations</b>: 
        Perform arithmetic inside JSX like <code>{`{price * qty}`}</code>.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">5. Conditional (Ternary) Operator</b>: 
        Render content conditionally using <code>condition ? A : B</code>.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">6. Logical AND (&&)</b>: 
        Short-circuit rendering when a condition is true.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">7. Function Calls</b>: 
        Call a function and render its return value.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">8. Array <code>.map()</code> for Lists</b>: 
        Use <code>map()</code> to loop over arrays and render multiple elements.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">9. Boolean Expressions</b>: 
        Dynamically show or hide elements based on true/false values.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">10. Null or Undefined</b>: 
        Returning these values from expressions will render nothing in JSX.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">11. Objects via <code>JSON.stringify()</code></b>: 
        Convert objects into strings before rendering, since JSX can't render raw objects.
      </ListGroupItem>
      <ListGroupItem>
        <b className="font-bold">12. IIFE (Immediately Invoked Function Expression)</b>: 
        Use inline functions for complex logic and immediately execute them.
      </ListGroupItem>
    </ListGroup>

      <div className="text-2xl text-blue-600 py-4"> **Also practice Conditional Rendaring and Fragments **</div>



    </>
  );
}

