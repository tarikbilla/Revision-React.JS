import { useState } from "react";
import { Card } from "flowbite-react";



export default function Components() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactFromSubmitted, setContactFromSubmitted] = useState(false);

  function contactFrom(formData: any) {
    const fname = formData.get("Name");
    const femail = formData.get("Email");
    const fmessage = formData.get("Message");
    setName(fname);
    setEmail(femail);
    setMessage(fmessage);
    console.log({ fname, femail, fmessage });

  }



  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Learn Components</h1>
        <p className="mt-4 text-lg text-gray-600">
          Components are reusable pieces of UI that can be nested, managed, and handled independently. They help in building complex UIs from small, isolated pieces of code.
        </p>
      </section>

      <h2 className="py-4 text-2xl font-bold">The Two Types of Components</h2>
      <p className="mt-4 text-lg">
        There are two ways to write components in React: Functional Components and Class Components.
      </p>
      <ol className="list-decimal list-inside text-left">
        <li>Functional Components (The Modern Standard)</li>
        <li>Class Components (The "Older" Way)</li>
      </ol>

      <h2 className="py-4 text-2xl font-bold">Built-in components </h2>
      <p className="mt-4 text-lg">
        React provides several built-in components that you can use to build your application. Some of the most commonly used built-in components include:
      </p>
      <ol className="list-decimal list-inside text-left">
        <li><b>&lt;Fragment&gt;</b>, alternatively written as &lt;&gt;...&lt;/&gt;, lets you group multiple JSX nodes together.</li>
        <li><b>&lt;Profiler&gt;</b> lets you measure rendering performance of a React tree programmatically.</li>
        <li><b>&lt;Suspense&gt;</b> lets you display a fallback while the child components are loading.</li>
        <li><b>&lt;StrictMode&gt;</b> enables extra development-only checks that help you find bugs early.</li>
      </ol >tarikbillah@gmail.com

      <h2 className="py-4 text-2xl font-bold">Creating Your Own Components</h2>
      <p className="mt-4 text-lg">
        You can create your own components by defining a function or a class that returns JSX. Here's an example of a simple functional component:
      </p>
      <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto text-left">
        <code>
          {`function MyComponent() {
  return (
    <div>
      <h1>Hello,  World!</h1>
    </div>
  );
}`}
        </code>
      </pre>

      <h2 className="py-4 text-2xl font-bold">Props: Passing Data to Components</h2>
      <p className="mt-4 text-lg">
        Props (short for properties) are a way to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.
      </p>
      <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto text-left">
        <code>
          {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Mr. Jon" />`}
        </code>
      </pre>

      <hr />

      <h2 className="py-6 text-2xl font-bold">React Form Components</h2>
      <p className="mt-4 text-lg">
        Forms in React are usedto collect user input. You can create forms using standard HTML form elements, and manage their state using React's state management features.
      </p>
      {/* comtact form */}
      <form action={contactFrom} className="mt-4 text-left">
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <textarea
          placeholder="Enter your message"
          name="Message"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        ></textarea>
        <button
          type="submit"
          name="contactFormSubmit"
          onClick={() => setContactFromSubmitted(true)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

      </form>

     { contactFromSubmitted && <Card className="mt-10">
        <h3 className="text-xl font-bold mb-2">Form data</h3>
        <p className="text-gray-600">Name: { name ?? name}</p>
        <p className="text-gray-600">Email: {email ?? email}</p>
        <p className="text-gray-600">Message: {message ?? message}</p>
      </Card>}






    </>
  );
}

